import { Card, CardContent } from "@/components/ui/card";
import { Truck, Construction, Forklift } from "lucide-react";
import craneGrove from "@/assets/crane-grove.webp";
import truckCrane from "@/assets/truck-crane-1.webp";
import categoryForklift from "@/assets/category-forklift.webp";

const categories = [
  {
    icon: Construction,
    title: "Grúas Telescópicas",
    description: "De diversas capacidades; ideales para izajes de alta complejidad en proyectos industriales y de construcción.",
    image: craneGrove,
  },
  {
    icon: Truck,
    title: "Camión Grúa",
    description: "Equipo combinado para izaje y transporte eficiente, incluye tractocamión con brazo articulado de 35 toneladas.",
    image: truckCrane,
  },
  {
    icon: Forklift,
    title: "Montacargas",
    description: "Manejo ágil y seguro de materiales en diferentes entornos industriales y de construcción.",
    image: categoryForklift,
  },
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Categorías de Equipos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Maquinaria especializada para cada necesidad de su proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-smooth bg-background"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <category.icon className="h-10 w-10 mb-2" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{category.description}</p>
                <a
                  href="/equipos"
                  className="inline-block mt-4 text-primary font-semibold hover:underline transition-smooth"
                >
                  Ver equipos →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
