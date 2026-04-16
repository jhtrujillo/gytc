import { MapPin } from "lucide-react";

const Coverage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cobertura Nacional</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Prestamos servicios en todo el territorio colombiano, con capacidad operativa 
              multisectorial y tiempos de respuesta eficientes.
            </p>
            <div className="space-y-4">
              <div 
                className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-smooth"
                style={{ animationDelay: '0.2s' }}
              >
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth" />
                <div>
                  <h3 className="font-bold mb-1">Alcance Nacional</h3>
                  <p className="text-muted-foreground">
                    Operamos en todas las regiones de Colombia
                  </p>
                </div>
              </div>
              <div 
                className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-smooth"
                style={{ animationDelay: '0.4s' }}
              >
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth" />
                <div>
                  <h3 className="font-bold mb-1">Respuesta Rápida</h3>
                  <p className="text-muted-foreground">
                    Tiempos de respuesta eficientes para sus proyectos
                  </p>
                </div>
              </div>
              <div 
                className="flex items-start gap-3 animate-fade-in group hover:translate-x-2 transition-smooth"
                style={{ animationDelay: '0.6s' }}
              >
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-smooth" />
                <div>
                  <h3 className="font-bold mb-1">Capacidad Multisectorial</h3>
                  <p className="text-muted-foreground">
                    Experiencia en diversos sectores industriales
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden animate-scale-in shadow-card" style={{ animationDelay: '0.3s' }}>
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
        </div>
      </div>
    </section>
  );
};

export default Coverage;
