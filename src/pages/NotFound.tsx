import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Phone, Search } from "lucide-react";

const quickLinks = [
  { label: "Equipos", href: "/equipos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
  { label: "PQRS", href: "/pqrs" },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: Ruta no encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-16">
        <div className="max-w-2xl w-full text-center">

          {/* Número 404 animado */}
          <div className="relative mb-6 select-none">
            <span className="text-[10rem] md:text-[14rem] font-black leading-none text-primary/10 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/10 rounded-full p-6">
                <Search className="h-16 w-16 md:h-20 md:w-20 text-primary" />
              </div>
            </div>
          </div>

          {/* Mensaje */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            ¡Página no encontrada!
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-2">
            La página <span className="font-mono text-primary bg-primary/10 px-2 py-0.5 rounded text-sm">{location.pathname}</span> no existe.
          </p>
          <p className="text-muted-foreground mb-8">
            Puede que el enlace esté roto o la página haya sido movida.
          </p>

          {/* Botones principales */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              variant="outline"
              className="gap-2 h-12"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver atrás
            </Button>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="gap-2 h-12"
            >
              <Home className="h-5 w-5" />
              Ir al inicio
            </Button>
          </div>

          {/* Links rápidos */}
          <div className="bg-card border rounded-xl p-6">
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              ¿Qué estabas buscando?
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contacto */}
            <div className="border-t pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <span>¿Necesitas ayuda?</span>
              <a
                href="tel:+573127617297"
                className="text-primary font-semibold hover:underline"
              >
                312 761 7297
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
