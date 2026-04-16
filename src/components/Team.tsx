import { Users, HardHat, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import teamCraneOperation from "@/assets/team-crane-operation.webp";
import teamTraining from "@/assets/team-training.webp";
import teamCoordination from "@/assets/team-coordination.webp";
import teamInspection from "@/assets/team-inspection.webp";
import teamPlanning from "@/assets/team-planning.webp";
import teamCommunication from "@/assets/team-communication.webp";
import teamMaintenance from "@/assets/team-maintenance.webp";

const Team = () => {
  const teamImages = [
    { src: teamCraneOperation, alt: "Equipo operando grúa" },
    { src: teamTraining, alt: "Capacitación del personal" },
    { src: teamCoordination, alt: "Coordinación de operaciones" },
    { src: teamInspection, alt: "Inspección de equipos" },
    { src: teamPlanning, alt: "Planificación de proyectos" },
    { src: teamCommunication, alt: "Comunicación en operaciones" },
    { src: teamMaintenance, alt: "Mantenimiento y control de calidad" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {teamImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover-scale transition-smooth"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Equipo Humano</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nuestro equipo humano está conformado por personal altamente capacitado y calificado, 
              comprometido con la excelencia operativa y la seguridad en cada maniobra.
            </p>
            <div className="space-y-4">
              <div 
                className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-smooth"
                style={{ animationDelay: '0.2s' }}
              >
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth" />
                <div>
                  <h3 className="font-bold mb-1">Operarios Certificados</h3>
                  <p className="text-muted-foreground">
                    Personal con certificaciones vigentes y entrenamiento continuo
                  </p>
                </div>
              </div>
              <div 
                className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-smooth"
                style={{ animationDelay: '0.4s' }}
              >
                <HardHat className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth" />
                <div>
                  <h3 className="font-bold mb-1">Seguridad Industrial</h3>
                  <p className="text-muted-foreground">
                    Equipamiento de seguridad completo y protocolos estrictos
                  </p>
                </div>
              </div>
              <div 
                className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-smooth"
                style={{ animationDelay: '0.6s' }}
              >
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth" />
                <div>
                  <h3 className="font-bold mb-1">Trabajo en Equipo</h3>
                  <p className="text-muted-foreground">
                    Coordinación perfecta para operaciones complejas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
