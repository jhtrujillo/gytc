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
import { Mail, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const EMAILJS_SERVICE_ID = "service_4rt2z17";
const EMAILJS_TEMPLATE_ID = "template_9s3668z";
const EMAILJS_PUBLIC_KEY = "M_SDE_z4kSlqIwwsB";
const MAX_DETAILS = 1000;

const step1Schema = z.object({
  documentType: z.string().min(1, "Seleccione el tipo de documento"),
  documentId: z.string().min(1, "El número de documento es requerido"),
  fullName: z.string().min(2, "El nombre es requerido"),
  phone: z.string().min(7, "El teléfono es requerido"),
  email: z.string().email("Formato de correo inválido"),
});

const step2Schema = z.object({
  requestType: z.string().min(1, "Seleccione el tipo de solicitud"),
  reason: z.string().min(1, "Seleccione el motivo"),
  details: z.string().min(10, "Describa su solicitud (mínimo 10 caracteres)"),
});

type FieldErrors = Record<string, string>;

const Pqrs = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

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

  const setField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = (): boolean => {
    try {
      step1Schema.parse(formData);
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const errs: FieldErrors = {};
        e.errors.forEach((err) => {
          if (err.path[0]) errs[err.path[0] as string] = err.message;
        });
        setErrors(errs);
      }
      return false;
    }
  };

  const validateStep2 = (): boolean => {
    try {
      step2Schema.parse(formData);
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const errs: FieldErrors = {};
        e.errors.forEach((err) => {
          if (err.path[0]) errs[err.path[0] as string] = err.message;
        });
        setErrors(errs);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          document_type: formData.documentType,
          document_id: formData.documentId,
          email: formData.email,
          phone: formData.phone,
          request_type: formData.requestType,
          reason: formData.reason,
          details: formData.details,
          date: new Date().toLocaleString("es-CO"),
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Por favor intente de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ documentType: "", documentId: "", fullName: "", phone: "", email: "", requestType: "", reason: "", details: "" });
    setStep(1);
    setErrors({});
    setSubmitted(false);
  };

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
    ) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Radicar PQRS</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
            Peticiones, Quejas, Reclamos y Sugerencias. Su opinión es muy valiosa para nosotros.
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-2xl">

        {/* Éxito */}
        {submitted ? (
          <div className="text-center py-16 px-4">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-3">¡Solicitud radicada con éxito!</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Hemos recibido su {formData.requestType || "solicitud"}. Un asesor se comunicará con usted a la brevedad posible a través del correo o teléfono indicado.
            </p>
            <div className="bg-muted rounded-lg p-4 text-sm text-left mb-8 max-w-sm mx-auto space-y-1">
              <p><span className="font-medium">Nombre:</span> {formData.fullName}</p>
              <p><span className="font-medium">Tipo:</span> {formData.requestType}</p>
              <p><span className="font-medium">Motivo:</span> {formData.reason}</p>
              <p><span className="font-medium">Fecha:</span> {new Date().toLocaleDateString("es-CO")}</p>
            </div>
            <Button onClick={handleReset} className="w-full max-w-xs">
              Radicar otra solicitud
            </Button>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <div className="flex items-center justify-center mb-8 gap-0">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-full font-bold text-sm transition-colors
                    ${step >= s ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                    {s}
                  </div>
                  <span className={`ml-2 text-sm font-medium hidden sm:inline
                    ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                    {s === 1 ? "Datos personales" : "Tipo de solicitud"}
                  </span>
                  {s < 2 && (
                    <div className={`w-12 h-0.5 mx-3 ${step > s ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl border shadow-sm p-5 md:p-8">
              <form onSubmit={handleSubmit} noValidate>

                {/* Paso 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                      <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                      Datos del solicitante
                    </h2>

                    {/* Tipo y número de documento */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="documentType">Tipo de documento <span className="text-red-500">*</span></Label>
                        <Select value={formData.documentType} onValueChange={(v) => setField("documentType", v)}>
                          <SelectTrigger id="documentType" className={`h-12 ${errors.documentType ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="Seleccione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CC">Cédula de ciudadanía (CC)</SelectItem>
                            <SelectItem value="NIT">NIT</SelectItem>
                            <SelectItem value="CE">Cédula de extranjería (CE)</SelectItem>
                            <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError field="documentType" />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="documentId">Número de documento <span className="text-red-500">*</span></Label>
                        <Input
                          id="documentId"
                          className={`h-12 ${errors.documentId ? "border-red-500" : ""}`}
                          value={formData.documentId}
                          onChange={(e) => setField("documentId", e.target.value)}
                          placeholder="Ej. 123456789"
                          inputMode="numeric"
                        />
                        <FieldError field="documentId" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="fullName">Nombre completo / Razón social <span className="text-red-500">*</span></Label>
                      <Input
                        id="fullName"
                        className={`h-12 ${errors.fullName ? "border-red-500" : ""}`}
                        value={formData.fullName}
                        onChange={(e) => setField("fullName", e.target.value)}
                        placeholder="Ej. Juan Pérez o Empresa S.A.S."
                        autoComplete="name"
                      />
                      <FieldError field="fullName" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="phone">Teléfono de contacto <span className="text-red-500">*</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          className={`h-12 ${errors.phone ? "border-red-500" : ""}`}
                          value={formData.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          placeholder="Ej. 300 000 0000"
                          inputMode="tel"
                          autoComplete="tel"
                        />
                        <FieldError field="phone" />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="email">Correo electrónico <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          type="email"
                          className={`h-12 ${errors.email ? "border-red-500" : ""}`}
                          value={formData.email}
                          onChange={(e) => setField("email", e.target.value)}
                          placeholder="tu@correo.com"
                          inputMode="email"
                          autoComplete="email"
                        />
                        <FieldError field="email" />
                      </div>
                    </div>

                    <Button type="button" onClick={handleNext} className="w-full h-12 text-base mt-2">
                      Continuar
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}

                {/* Paso 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h2 className="text-lg font-bold flex items-center gap-2 border-b pb-2">
                      <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                      Información de la solicitud
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="requestType">Tipo de solicitud <span className="text-red-500">*</span></Label>
                        <Select value={formData.requestType} onValueChange={(v) => setField("requestType", v)}>
                          <SelectTrigger id="requestType" className={`h-12 ${errors.requestType ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="Seleccione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Petición">Petición</SelectItem>
                            <SelectItem value="Queja">Queja</SelectItem>
                            <SelectItem value="Reclamo">Reclamo</SelectItem>
                            <SelectItem value="Sugerencia">Sugerencia</SelectItem>
                            <SelectItem value="Felicitación">Felicitación</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError field="requestType" />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="reason">Motivo de la solicitud <span className="text-red-500">*</span></Label>
                        <Select value={formData.reason} onValueChange={(v) => setField("reason", v)}>
                          <SelectTrigger id="reason" className={`h-12 ${errors.reason ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="Seleccione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Demora en el servicio">Demora en el servicio</SelectItem>
                            <SelectItem value="Incumplimiento">Incumplimiento</SelectItem>
                            <SelectItem value="Facturación">Facturación</SelectItem>
                            <SelectItem value="Atención al cliente">Atención al cliente</SelectItem>
                            <SelectItem value="Daños o inconvenientes">Daños o inconvenientes</SelectItem>
                            <SelectItem value="Otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError field="reason" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="details">Detalle de la solicitud <span className="text-red-500">*</span></Label>
                        <span className={`text-xs ${formData.details.length > MAX_DETAILS * 0.9 ? "text-orange-500" : "text-muted-foreground"}`}>
                          {formData.details.length}/{MAX_DETAILS}
                        </span>
                      </div>
                      <Textarea
                        id="details"
                        className={`min-h-[140px] text-base ${errors.details ? "border-red-500" : ""}`}
                        value={formData.details}
                        onChange={(e) => {
                          if (e.target.value.length <= MAX_DETAILS) setField("details", e.target.value);
                        }}
                        placeholder="Describa su solicitud con el mayor detalle posible..."
                      />
                      <FieldError field="details" />
                    </div>

                    <div className="flex gap-3 pt-1">
                      <Button type="button" variant="outline" onClick={handleBack} className="h-12 px-5">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Volver
                      </Button>
                      <Button type="submit" className="flex-1 h-12 text-base" disabled={isSubmitting}>
                        <Mail className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Enviando..." : "Radicar PQRS"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Sus datos serán tratados según nuestras{" "}
              <a href="/politicas" className="text-primary hover:underline">Políticas de Privacidad</a>.
            </p>
          </>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pqrs;
