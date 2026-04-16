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
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AnimateOnScroll animation="fade-up">
        <Categories />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-right" delay={100}>
        <Fleet />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-left" delay={100}>
        <Safety />
      </AnimateOnScroll>
      <AnimateOnScroll animation="zoom-in" delay={100}>
        <Coverage />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={200}>
        <Team />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={300}>
        <Stats />
      </AnimateOnScroll>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
