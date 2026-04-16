import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoGytc from "@/assets/logo-gytc.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-medium">Lunes - Sábado 8:00 am - 6:00 pm | 312 761 7297</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>@gruasytransportesdecolombia</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoGytc} 
              alt="Grúas y Transportes de Colombia - GYTC" 
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="font-medium hover:text-primary transition-smooth">
              INICIO
            </a>
            <a href="/equipos" className="font-medium hover:text-primary transition-smooth">
              EQUIPOS
            </a>
            <a href="/servicios" className="font-medium hover:text-primary transition-smooth">
              SERVICIOS
            </a>
            <a href="/quienes-somos" className="font-medium hover:text-primary transition-smooth">
              QUIENES SOMOS
            </a>
            <a href="/pqrs" className="font-medium hover:text-primary transition-smooth text-primary">
              PQRS
            </a>
            <a href="/contacto" className="font-medium hover:text-primary transition-smooth">
              CONTACTO
            </a>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Cotiza tu proyecto
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <a href="/" className="font-medium hover:text-primary transition-smooth">
                INICIO
              </a>
              <a href="/equipos" className="font-medium hover:text-primary transition-smooth">
                EQUIPOS
              </a>
              <a href="/servicios" className="font-medium hover:text-primary transition-smooth">
                SERVICIOS
              </a>
              <a href="/quienes-somos" className="font-medium hover:text-primary transition-smooth">
                QUIENES SOMOS
              </a>
              <a href="/pqrs" className="font-medium hover:text-primary transition-smooth text-primary">
                PQRS
              </a>
              <a href="/contacto" className="font-medium hover:text-primary transition-smooth">
                CONTACTO
              </a>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Soporte</p>
                <p className="font-bold text-lg">312 761 7297</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
