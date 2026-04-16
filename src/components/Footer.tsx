import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logoGytc from "@/assets/logo-gytc.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground" id="contacto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logoGytc} 
              alt="Grúas y Transportes de Colombia - GYTC" 
              className="h-20 w-auto object-contain mb-4 bg-white/10 p-2 rounded"
            />
            <p className="text-sm mb-4">
              Tu solución integral en alquiler de equipos industriales de alto rendimiento.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-smooth p-2 rounded"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-smooth p-2 rounded"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-smooth p-2 rounded"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary transition-smooth">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/equipos" className="hover:text-primary transition-smooth">
                  Equipos
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-primary transition-smooth">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/quienes-somos" className="hover:text-primary transition-smooth">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="/pqrs" className="hover:text-primary transition-smooth text-primary font-medium">
                  Atención al Cliente (PQRS)
                </a>
              </li>
              <li>
                <a href="/politicas" className="hover:text-primary transition-smooth">
                  Políticas de la Empresa
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>Alquiler de Grúas</li>
              <li>Alquiler de Montacargas</li>
              <li>Transporte Pesado</li>
              <li>Mantenimiento</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Calle 15 #32A249, Acopi - Yumbo</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>gerencia@gytc.com.co</p>
                  <p>operaciones@gytc.com.co</p>
                  <p>comercial@gytc.com.co</p>
                  <p>Comercial2@gytc.com.co</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Gustavo Gómez: 312 761 7297</p>
                  <p>Jorge Gómez: 323 292 0289</p>
                  <p>Fabián Lozano: 318 510 7669</p>
                  <p>Kevin Andrés Angarita: 316 4462613</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 GYTC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
