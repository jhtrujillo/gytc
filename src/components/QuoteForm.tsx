import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface QuoteFormProps {
  equipmentName?: string;
  onClose?: () => void;
}

// Validation schema for form inputs
const quoteFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.string()
    .trim()
    .email("Formato de correo inválido")
    .max(255, "El correo no puede exceder 255 caracteres")
    .optional()
    .or(z.literal("")),
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

const QuoteForm = ({ equipmentName, onClose }: QuoteFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: equipmentName ? `Solicito cotización para: ${equipmentName}` : "",
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data using zod schema
    try {
      const validatedData = quoteFormSchema.parse(formData);
      
      // Construir el mensaje para WhatsApp con datos validados
      let message = `Hola, mi nombre es ${validatedData.name}.\n`;
      message += `Teléfono: ${validatedData.phone}\n`;
      if (validatedData.email) {
        message += `Email: ${validatedData.email}\n`;
      }
      if (equipmentName) {
        message += `\nSolicito cotización para: ${equipmentName}\n`;
      }
      if (validatedData.message) {
        message += `\n${validatedData.message}`;
      }

      const whatsappUrl = `https://wa.me/573127617297?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
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
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Abriendo WhatsApp",
      description: "Se abrirá WhatsApp con tu información.",
    });

    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: equipmentName ? `Solicito cotización para: ${equipmentName}` : "",
    });

    // Cerrar el diálogo si existe la función onClose
    if (onClose) {
      setTimeout(onClose, 1000);
    }
  };

  return (
    <form onSubmit={handleWhatsApp} className="space-y-4">
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
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
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

      <div className="flex flex-col gap-3 pt-4">
        <Button type="submit" className="w-full">
          <MessageCircle className="mr-2 h-4 w-4" />
          Enviar por WhatsApp
        </Button>

        {onClose && (
          <Button 
            type="button" 
            variant="ghost" 
            className="w-full"
            onClick={onClose}
          >
            Cancelar
          </Button>
        )}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        También puedes llamarnos: <br />
        <a href="tel:+573127617297" className="text-primary hover:underline">
          <Phone className="inline h-3 w-3" /> 312 761 7297
        </a>
      </p>
    </form>
  );
};

export default QuoteForm;
