import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Equipos from "./pages/Equipos";
import Servicios from "./pages/Servicios";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Gracias from "./pages/Gracias";
import Instalar from "./pages/Instalar";
import NotFound from "./pages/NotFound";
import Pqrs from "./pages/Pqrs";
import Politicas from "./pages/Politicas";
import FloatingPqrButton from "./components/FloatingPqrButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/instalar" element={<Instalar />} />
          <Route path="/pqrs" element={<Pqrs />} />
          <Route path="/politicas" element={<Politicas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingPqrButton />
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
