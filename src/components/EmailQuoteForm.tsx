import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

interface EmailQuoteFormProps {
  categoryName: string;
  categoryDescription: string;
}

// Validation schema for email quote form
const emailQuoteSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.string()
    .trim()
    .email("Formato de correo inválido")
    .max(255, "El correo no puede exceder 255 caracteres"),
  phone: z.string()
    .trim()
    .min(1, "El teléfono es requerido")
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .regex(/^[0-9\s+()-]+$/, "El teléfono solo puede contener números y caracteres válidos"),
  message: z.string()
    .trim()
    .max(2000, "El mensaje no puede exceder 2000 caracteres")
    .optional()
    .or(z.literal("")),
});

const EmailQuoteForm = ({ categoryName, categoryDescription }: EmailQuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data using zod schema
    try {
      emailQuoteSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Error de validación",
          description: firstError.message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-quote', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          equipmentName: categoryName,
        },
      });

      if (error) throw error;

      toast({
        title: "Cotización enviada",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Error sending quote:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu cotización. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg border">
      <h3 className="text-2xl font-bold mb-2">Solicitar Cotización</h3>
      <p className="text-muted-foreground mb-4">{categoryDescription}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            id="name"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Tu nombre"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            id="email"
            type="email"
            required
            maxLength={255}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="tu@correo.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono de contacto *</Label>
          <Input
            id="phone"
            type="tel"
            required
            maxLength={20}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="3XX XXX XXXX"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            maxLength={2000}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Detalles adicionales sobre tu solicitud"
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          <Mail className="mr-2 h-4 w-4" />
          {isSubmitting ? "Enviando..." : "Enviar Cotización"}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          También puedes llamarnos: <br />
          <a href="tel:+573127617297" className="text-primary hover:underline">
            <Phone className="inline h-3 w-3" /> 312 761 7297
          </a>
        </p>
      </form>
    </div>
  );
};

export default EmailQuoteForm;
