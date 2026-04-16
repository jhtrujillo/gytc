import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": Deno.env.get("ALLOWED_ORIGIN") || "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: In-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // 5 requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

interface PqrRequest {
  documentType: string;
  documentId: string;
  fullName: string;
  phone: string;
  email: string;
  requestType: string;
  reason: string;
  details: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Por favor, intente más tarde." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const body: PqrRequest = await req.json();
    const { documentType, documentId, fullName, phone, email, requestType, reason, details } = body;

    console.log("Processing PQR request from IP:", ip);

    // Validar campos requeridos
    if (!documentType || !documentId || !fullName || !phone || !email || !requestType || !reason || !details) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validar formato de email
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Formato de email inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape user input to prevent XSS
    const safeDocType = escapeHtml(documentType);
    const safeDocId = escapeHtml(documentId);
    const safeName = escapeHtml(fullName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeReqType = escapeHtml(requestType);
    const safeReason = escapeHtml(reason);
    const safeDetails = escapeHtml(details);

    const emailSubject = `[GYTC - ${safeReqType.toUpperCase()}] Nueva radicación - ${safeName} - ${new Date().toLocaleDateString()}`;
    
    const emailHtml = `
      <h2>Nueva solicitud de PQRS radicada</h2>
      <p><strong>Tipo de solicitud:</strong> ${safeReqType}</p>
      <p><strong>Motivo:</strong> ${safeReason}</p>
      <hr>
      <h3>Datos del solicitante</h3>
      <p><strong>Nombre / Razón social:</strong> ${safeName}</p>
      <p><strong>${safeDocType}:</strong> ${safeDocId}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Teléfono:</strong> ${safePhone}</p>
      <hr>
      <h3>Detalles de la solicitud</h3>
      <p>${safeDetails}</p>
      <hr>
      <p><small>Este correo fue generado desde el portal de Radicación de PQRS web.</small></p>
      <p><small>Fecha de radicación: ${new Date().toLocaleString()}</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "GYTC <onboarding@resend.dev>",
      to: [
        "comercial@gytc.com.co", 
        "jhtrujillom@gmail.com", 
        "sstgruasytransportesc@gmail.com"
      ],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-pqr function:", error.message);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud. Por favor, intente más tarde." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
