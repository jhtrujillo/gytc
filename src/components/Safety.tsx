import { Shield, FileCheck, Award } from "lucide-react";

const safety = [
  {
    icon: Shield,
    title: "Certificación ONAC",
    description: "Todos nuestros equipos cuentan con certificaciones vigentes",
  },
  {
    icon: FileCheck,
    title: "Pólizas de Todo Riesgo",
    description: "Cobertura completa para cada operación",
  },
  {
    icon: Award,
    title: "Protocolos Certificados",
    description: "Cumplimiento de normas de seguridad industrial",
  },
];

const Safety = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compromiso con la Seguridad</h2>
          <p className="text-secondary-foreground/80 max-w-3xl mx-auto text-lg">
            Todos nuestros equipos cuentan con certificaciones vigentes, mantenimiento preventivo continuo 
            y pólizas de todo riesgo, garantizando seguridad y confianza en cada operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safety.map((item, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4 group-hover:scale-110 group-hover:shadow-glow transition-smooth">
                <item.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-secondary-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Safety;
