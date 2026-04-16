import { Trophy, Users, Wrench, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    number: "3.4k",
    label: "Proyectos apoyados",
    description: "Con GYTC, nuestros clientes maximizan el uso de sus equipos",
  },
  {
    icon: Users,
    number: "1.2k",
    label: "Clientes satisfechos",
    description: "Empresas que confían en nuestros servicios",
  },
  {
    icon: Wrench,
    number: "150+",
    label: "Equipos disponibles",
    description: "Maquinaria de última generación",
  },
  {
    icon: ThumbsUp,
    number: "98%",
    label: "Satisfacción",
    description: "Índice de recomendación de clientes",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 group-hover:scale-125 group-hover:shadow-glow transition-smooth">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">
                {stat.number}
              </h3>
              <p className="text-xl font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-secondary-foreground/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
