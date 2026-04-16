import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Politicas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Políticas de la Empresa</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Términos y Condiciones</h2>
            <p className="text-muted-foreground whitespace-pre-wrap">
              [Espacio reservado para los Términos y Condiciones oficiales de GYTC]
              
              El acceso y uso de los servicios proporcionados por Grúas y Transportes de Colombia (GYTC) están sujetos a estos términos y condiciones. Al utilizar nuestros equipos y servicios, usted acepta apegarse a todas nuestras pautas operativas y comerciales establecidas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Política de Tratamiento de Datos Personales</h2>
            <p className="text-muted-foreground whitespace-pre-wrap">
              [Espacio reservado para la Política de Privacidad de Datos]

              En cumplimiento de la normativa vigente aplicable a la protección de datos personales, GYTC garantiza la total confidencialidad, seguridad y protección de los datos suministrados por nuestros clientes, proveedores y colaboradores. Su información será utilizada estrictamente para fines comerciales, operativos y de servicio al cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. Políticas de Alquiler de Equipos</h2>
            <p className="text-muted-foreground whitespace-pre-wrap">
              [Espacio reservado para las directrices operativas de alquiler]

              Todo equipo de GYTC se entregará en óptimas condiciones de funcionamiento. El cliente asume la responsabilidad del uso correcto del equipo hasta su devolución. Las tarifas, tiempos mínimos de alquiler y políticas de daños serán detalladas en cada cotización formal por parte del área comercial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. Políticas de Seguridad y Salud en el Trabajo (SST)</h2>
            <p className="text-muted-foreground whitespace-pre-wrap">
              [Espacio reservado para compromisos SST]

              El bienestar de nuestro equipo y de nuestros clientes es fundamental. GYTC cumple estrictamente con los estándares nacionales de seguridad y Salud en el Trabajo, asegurando que cada operación de izaje, carga y transporte cuente con el personal capacitado, dotación completa y planes de contingencia regulados.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Politicas;
