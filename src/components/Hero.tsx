import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/components/QuoteForm";
import heroImage1 from "@/assets/crane-grove.webp";
import heroImage2 from "@/assets/crane-tower.webp";
import heroImage3 from "@/assets/crane-concrete.webp";
import VideoSEO from "./VideoSEO";

type Slide = { type: "image"; src: string } | { type: "video"; src: string; poster: string };

const slides: Slide[] = [
  { type: "image", src: heroImage1 },
  { type: "video", src: "/videos/crane-operation.mp4", poster: heroImage1 },
  { type: "image", src: heroImage2 },
  { type: "image", src: heroImage3 },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  useEffect(() => {
    // Don't auto-advance if current slide is video
    if (slides[currentSlide].type === "video") return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/573127617297?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20gr%C3%BAas%20y%20transporte", '_blank');
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={`Grúas y Transportes de Colombia - ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ) : (
            <video
              src={index === currentSlide ? slide.src : undefined}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onEnded={nextImage}
            />
          )}
          {slide.type === "video" && (
            <VideoSEO
              name="Operación de Grúa - GYTC Colombia"
              description="Video demostrativo de operación de grúas y servicios de izaje de cargas extrapesadas por Grúas y Transportes de Colombia."
              thumbnailUrl={window.location.origin + slide.poster}
              uploadDate="2024-01-01"
              contentUrl={window.location.origin + slide.src}
            />
          )}
          <div className="absolute inset-0 gradient-hero" />
        </div>
      ))}
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Su Aliado en Izajes y Transporte Especializado
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Experiencia, seguridad y precisión en cada maniobra
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={() => setIsQuoteDialogOpen(true)}
              >
                Solicitar Cotización
              </Button>
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-smooth"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-smooth"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-smooth ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Solicitar Cotización</DialogTitle>
            <DialogDescription>
              Complete el formulario y nos pondremos en contacto con usted lo antes posible.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm onClose={() => setIsQuoteDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
