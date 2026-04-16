import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, MapPin, Award, Building2 } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Izaje de Cargas Extrapesadas y Sobredimensionadas",
    description: "Servicio especializado en el manejo de cargas complejas con cobertura en todo el territorio nacional.",
    features: [
      "Cobertura nacional",
      "Cargas hasta 150 toneladas",
      "Estudios de ingeniería",
      "Operadores certificados",
    ],
  },
  {
    icon: MapPin,
    title: "Transporte de Equipos y Materiales",
    description: "Transporte especializado de equipos industriales y materiales en todo el territorio colombiano.",
    features: [
      "Transporte especializado",
      "Rutas optimizadas",
      "Seguimiento en tiempo real",
      "Seguro de carga incluido",
    ],
  },
  {
    icon: Building2,
    title: "Servicios Combinados de Izaje y Transporte",
    description: "Soluciones integrales que combinan izaje y transporte con camión grúa y tractocamión articulado.",
    features: [
      "Camión grúa especializado",
      "Tractocamión brazo articulado 35 TON",
      "Maniobras en espacios reducidos",
      "Servicio todo en uno",
    ],
  },
  {
    icon: Shield,
    title: "Operaciones Certificadas y Seguras",
    description: "Todos nuestros servicios cuentan con certificaciones ONAC, pólizas de todo riesgo y mantenimiento preventivo.",
    features: [
      "Certificaciones ONAC vigentes",
      "Pólizas de todo riesgo",
      "Mantenimiento preventivo",
      "Protocolos de seguridad",
    ],
  },
  {
    icon: Award,
    title: "Cobertura Multisectorial",
    description: "Experiencia en múltiples sectores industriales: construcción, infraestructura, energía y manufactura.",
    features: [
      "Sector construcción",
      "Proyectos de infraestructura",
      "Industria energética",
      "Manufactura e industria",
    ],
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Soluciones integrales de izaje y transporte especializado para proyectos industriales y de construcción
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Personal Altamente Capacitado
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro equipo está comprometido con la seguridad y la excelencia en cada maniobra. 
              Contamos con personal certificado y con amplia experiencia en operaciones de izaje y 
              transporte especializado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Operadores certificados</div>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Proyectos completados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos y nuestro equipo te ayudará a encontrar la solución perfecta para tu proyecto
          </p>
          <a 
            href="/contacto"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-smooth shadow-glow"
          >
            Contáctanos ahora
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;