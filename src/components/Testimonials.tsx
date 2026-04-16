import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "Constructora Andina S.A.",
    text: "Excelente servicio de izaje para nuestro proyecto industrial. Profesionalismo y seguridad en cada etapa.",
  },
  {
    name: "María Fernández",
    company: "Ingeniería y Montajes Ltda.",
    text: "El equipo de GYTC superó nuestras expectativas. Equipos certificados y personal altamente capacitado.",
  },
  {
    name: "Jorge Méndez",
    company: "Petroquímica del Norte",
    text: "Confiables y puntuales. Han sido nuestro aliado en múltiples proyectos de transporte especializado.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground">Testimonios de empresas que confían en nosotros</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Card className="shadow-card animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-4 animate-fade-in" />
              <p className="text-lg md:text-xl mb-6 italic animate-fade-in" style={{ animationDelay: '0.1s' }}>
                "{testimonials[current].text}"
              </p>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="font-bold text-lg">{testimonials[current].name}</p>
                <p className="text-muted-foreground">{testimonials[current].company}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
