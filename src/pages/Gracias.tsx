import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gracias = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/573127617297?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20gr%C3%BAas%20y%20transporte",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            ¡Solicitud Recibida!
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo muy pronto para atender tu solicitud de cotización.
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <p className="font-medium text-foreground">¿Necesitas una respuesta inmediata?</p>
            <Button 
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
            >
              <Phone className="h-4 w-4" />
              Contactar por WhatsApp
            </Button>
          </div>
          
          <Link to="/">
            <Button variant="outline" className="gap-2 mt-4">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gracias;
