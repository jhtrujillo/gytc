import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["Gustavo Gómez: 312 761 7297", "Jorge Gómez: 323 292 0289", "Fabián Lozano: 318 510 7669", "Kevin Andrés Angarita: 316 4462613"],
    link: "tel:+573127617297",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["gerencia@gytc.com.co", "operaciones@gytc.com.co", "comercial@gytc.com.co", "Comercial2@gytc.com.co"],
    link: "mailto:gerencia@gytc.com.co",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Calle 15 #32A249", "Acopi - Yumbo, Valle del Cauca"],
    link: "https://maps.google.com/?q=3.5447,-76.48915",
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes - Viernes", "7:00 AM - 5:00 PM"],
    link: "#",
  },
];

const Contacto = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos listos para ayudarte con tus proyectos
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth">
                <CardContent className="pt-6">
                  <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <info.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <QuoteForm />
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5748339936684!2d-76.48915!3d3.5447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzInNDEuMyJOIDc2wrAyOScyMC45Ilc!5e0!3m2!1ses!2sco!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación GYTC - Calle 15 #32A249, Acopi - Yumbo"
                    ></iframe>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Calle 15 #32A249, Acopi - Yumbo, Valle del Cauca, Colombia
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>¿Necesitas asesoría?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Nuestro equipo de expertos está disponible para ayudarte a elegir el equipo 
                    perfecto para tu proyecto.
                  </p>
                  <a 
                    href="tel:3127617297"
                    className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-smooth"
                  >
                    Llamar ahora: 312 761 7297
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;
