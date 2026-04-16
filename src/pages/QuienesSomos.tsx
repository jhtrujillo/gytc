import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Compromiso",
    description: "Nos comprometemos con la excelencia en cada proyecto y con la satisfacción de nuestros clientes.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Operamos con honestidad y claridad en todas nuestras relaciones comerciales.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Mantenemos los más altos estándares en equipos, servicios y atención al cliente.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboramos estrechamente con nuestros clientes para alcanzar objetivos comunes.",
  },
];

const QuienesSomos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Líderes en alquiler de equipos industriales y soluciones para construcción
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                GYTC es una empresa colombiana especializada en el alquiler de equipos industriales y maquinaria pesada. 
                Con más de 15 años de experiencia en el mercado, nos hemos consolidado como uno de los proveedores más 
                confiables del sector de la construcción e industria.
              </p>
              <p>
                Iniciamos nuestras operaciones con un pequeño parque de equipos y la visión de brindar soluciones 
                integrales a las empresas constructoras y proyectos industriales en todo el país. Hoy contamos con 
                más de 150 equipos de última generación y un equipo humano altamente capacitado.
              </p>
              <p>
                Nuestra flota incluye grúas móviles y telescópicas, montacargas, tractocamiones, y una amplia 
                variedad de maquinaria especializada. Todos nuestros equipos reciben mantenimiento preventivo 
                continuo y cuentan con las certificaciones de seguridad requeridas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Proporcionar soluciones de alquiler de equipos industriales de la más alta calidad, 
                contribuyendo al éxito de los proyectos de nuestros clientes mediante servicios 
                confiables, eficientes y seguros.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser la empresa líder en alquiler de equipos industriales en Colombia, reconocida por 
                nuestra innovación, calidad de servicio y compromiso con el desarrollo sostenible del 
                sector construcción e industrial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</h3>
              <p className="text-lg">Años de experiencia</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">3.4k</h3>
              <p className="text-lg">Proyectos completados</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</h3>
              <p className="text-lg">Equipos disponibles</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</h3>
              <p className="text-lg">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienesSomos;
