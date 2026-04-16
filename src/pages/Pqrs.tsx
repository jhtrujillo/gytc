import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const formSchema = z.object({
  documentType: z.string().min(1, "Seleccione el tipo de documento"),
  documentId: z.string().min(1, "El número de documento es requerido"),
  fullName: z.string().min(1, "El nombre completo / Razón social es requerido"),
  phone: z.string().min(1, "El teléfono de contacto es requerido"),
  email: z.string().email("Formato de correo inválido"),
  requestType: z.string().min(1, "Seleccione el tipo de solicitud"),
  reason: z.string().min(1, "Seleccione el motivo de la solicitud"),
  details: z.string().min(10, "Por favor brinde más detalles de su solicitud (mínimo 10 caracteres)"),
});

const Pqrs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    documentType: "",
    documentId: "",
    fullName: "",
    phone: "",
    email: "",
    requestType: "",
    reason: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error de validación",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-pqr', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Petición radicada con éxito",
        description: "Hemos recibido su solicitud y la atenderemos pronto. Un asesor se comunicará con usted.",
      });

      setFormData({
        documentType: "",
        documentId: "",
        fullName: "",
        phone: "",
        email: "",
        requestType: "",
        reason: "",
        details: "",
      });
    } catch (error: any) {
      console.error('Error sending PQR:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al radicar su solicitud. Por favor intente de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-primary">Radicar PQRS</h1>
          <p className="text-muted-foreground">
            Formulario de Peticiones, Quejas, Reclamos y Sugerencias. Su opinión y retroalimentación es muy valiosa para nosotros.
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-lg border shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sección 1: Datos del Solicitante */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">1</span>
                Datos del solicitante
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="documentType">Tipo de documento *</Label>
                  <Select 
                    value={formData.documentType} 
                    onValueChange={(value) => setFormData({ ...formData, documentType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CC">Cédula de ciudadanía (CC)</SelectItem>
                      <SelectItem value="NIT">NIT</SelectItem>
                      <SelectItem value="CE">Cédula de extranjería (CE)</SelectItem>
                      <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="documentId">Número de documento *</Label>
                  <Input
                    id="documentId"
                    value={formData.documentId}
                    onChange={(e) => setFormData({ ...formData, documentId: e.target.value })}
                    placeholder="Ej. 123456789"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="fullName">Nombre completo / Razón social *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Escriba su nombre completo o razón social"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono de contacto *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. 300 000 0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>
            </section>

            {/* Sección 2: Información de la solicitud */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">2</span>
                Información de la solicitud
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="requestType">Tipo de solicitud (PQRS) *</Label>
                  <Select 
                    value={formData.requestType} 
                    onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione solicitud" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Peticion">Petición</SelectItem>
                      <SelectItem value="Queja">Queja</SelectItem>
                      <SelectItem value="Reclamo">Reclamo</SelectItem>
                      <SelectItem value="Sugerencia">Sugerencia</SelectItem>
                      <SelectItem value="Felicitacion">Felicitación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Motivo de la solicitud *</Label>
                  <Select 
                    value={formData.reason} 
                    onValueChange={(value) => setFormData({ ...formData, reason: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione motivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Demora_Servicio">Demora en el servicio</SelectItem>
                      <SelectItem value="Incumplimiento">Incumplimiento</SelectItem>
                      <SelectItem value="Facturacion">Facturación</SelectItem>
                      <SelectItem value="Atencion_Cliente">Atención al cliente</SelectItem>
                      <SelectItem value="Danos_Inconvenientes">Daños o inconvenientes</SelectItem>
                      <SelectItem value="Otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="details">Detalle del motivo de la solicitud *</Label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describa a detalle su solicitud..."
                    rows={5}
                  />
                </div>
              </div>
            </section>

            <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
              <Mail className="mr-2 h-5 w-5" />
              {isSubmitting ? "Radicando solicitud..." : "Radicar PQRS"}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Sus datos serán tratados según nuestras <a href="/politicas" className="text-primary hover:underline">Políticas de Privacidad</a>.
            </p>
          </form>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pqrs;
