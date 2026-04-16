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

// Validate phone format (Colombian format)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[\d\s()-]{7,20}$/;
  return phoneRegex.test(phone);
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

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  equipmentName?: string;
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

    const { name, email, phone, message, equipmentName }: QuoteRequest = await req.json();

    console.log("Processing quote request from IP:", ip);

    // Validar campos requeridos
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validar longitud de campos
    if (name.length > 100 || email.length > 255 || phone.length > 20 || 
        (message && message.length > 2000) || (equipmentName && equipmentName.length > 100)) {
      return new Response(
        JSON.stringify({ error: "Uno o más campos exceden la longitud máxima permitida" }),
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

    // Validar formato de teléfono
    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Formato de teléfono inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape user input to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = message ? escapeHtml(message) : 'Sin mensaje adicional';
    const safeEquipmentName = equipmentName ? escapeHtml(equipmentName) : '';

    const emailSubject = `[GYTC] Nueva solicitud de cotización - ${safeName} - ${new Date().toLocaleDateString()}`;
    
    const emailHtml = `
      <h2>Nueva solicitud de cotización</h2>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Teléfono:</strong> ${safePhone}</p>
      ${safeEquipmentName ? `<p><strong>Equipo solicitado:</strong> ${safeEquipmentName}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage}</p>
      <hr>
      <p><small>Página de origen: Solicitud de cotización</small></p>
      <p><small>Fecha: ${new Date().toLocaleString()}</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "GYTC <onboarding@resend.dev>",
      to: ["operaciones@gytc.com.co", "comercial@gytc.com.co", "gerencia@gytc.com.co", "jhtrujillom@gmail.com"],
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
    console.error("Error in send-quote function:", error.message);
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
