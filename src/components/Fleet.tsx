import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Truck, Construction, Forklift } from "lucide-react";
import QuoteForm from "./QuoteForm";

const fleet = [
  {
    name: "Grúas Telescópicas",
    description: "Diversas capacidades (60 a 150 TON) ideales para izajes de alta complejidad en proyectos industriales y de construcción.",
    icon: Construction,
    capacity: "60 - 150 ton",
    certification: "Certificación ONAC vigente",
  },
  {
    name: "Camión Grúa",
    description: "Equipo combinado para izaje y transporte eficiente. Incluye tractocamión con brazo articulado de 35 toneladas para maniobras en espacios reducidos.",
    icon: Truck,
    capacity: "20 - 40 ton",
    certification: "Mantenimiento preventivo continuo",
  },
  {
    name: "Montacargas",
    description: "Manejo ágil y seguro de materiales en diferentes entornos industriales y de construcción.",
    icon: Forklift,
    capacity: "3 - 5 ton",
    certification: "Operadores certificados",
  },
];

const Fleet = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Flota y Equipos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Equipos certificados y mantenidos bajo los más altos estándares de seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className="cursor-pointer hover:shadow-card transition-smooth hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 hover:bg-primary/20 hover:scale-110 transition-smooth">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.name}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                    <Badge variant="secondary" className="mb-2">{item.capacity}</Badge>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-primary" />
                    {item.name}
                  </DialogTitle>
                  <DialogDescription className="space-y-4 pt-4">
                    <p>{item.description}</p>
                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <p className="font-semibold">Capacidad: {item.capacity}</p>
                      <p className="text-sm">{item.certification}</p>
                    </div>
                    <QuoteForm equipmentName={item.name} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
