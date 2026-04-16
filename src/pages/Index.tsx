import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Fleet from "@/components/Fleet";
import Safety from "@/components/Safety";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Fleet />
      <Safety />
      <Coverage />
      <Testimonials />
      <Team />
      <Stats />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
