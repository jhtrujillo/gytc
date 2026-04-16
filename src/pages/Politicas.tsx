import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const policies = [
  {
    id: "sgi",
    icon: "🎯",
    title: "Política de Sistema de Gestión Integral",
    content: `GYTC – Grúas y Transportes de Colombia consolida su compromiso empresarial mediante un Sistema de Gestión Integral que abarca la Calidad de sus servicios, la protección del Medio Ambiente y la Seguridad y Salud en el Trabajo:

• Brindar servicios de alquiler de grúas, montacargas y transporte especializado cumpliendo las expectativas de clientes con altos estándares de calidad.
• Prevenir accidentes de trabajo y enfermedades laborales mediante la identificación, evaluación y control continuo de los riesgos que puedan afectar a empleados, contratistas y visitantes.
• Proteger el medio ambiente, controlando los impactos ambientales, optimizando recursos y garantizando la adecuada disposición de residuos de nuestras operaciones.
• Cumplir estrictamente con la legislación y normativa colombiana vigente aplicable en materia de calidad, medio ambiente y riesgos laborales.
• Promover la mejora continua del Sistema de Gestión Integral (HSEQ) disponiendo de equipos en óptimas condiciones, capacitación permanente y personal calificado.`,
  },
  {
    id: "datos",
    icon: "🔒",
    title: "Política de Tratamiento de Datos Personales",
    content: `En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, GYTC informa:

• Recolectamos datos personales únicamente con autorización previa del titular.
• Los datos son utilizados exclusivamente para la prestación de nuestros servicios, facturación y comunicaciones comerciales.
• Implementamos medidas de seguridad técnicas y administrativas para proteger la información.
• Los titulares tienen derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos.
• No compartimos datos personales con terceros sin autorización, salvo obligación legal.
• Para ejercer sus derechos, los titulares pueden comunicarse a: gerencia@gytc.com.co

Responsable del tratamiento: GYTC – Grúas y Transportes de Colombia
Dirección: Calle 15 #32A249, Acopi - Yumbo
Correo: gerencia@gytc.com.co`,
  },
  {
    id: "pqrs",
    icon: "📋",
    title: "Política de PQRS",
    content: `GYTC garantiza el derecho de petición de todos sus grupos de interés:

• Las peticiones serán resueltas en un plazo máximo de 15 días hábiles conforme a la Ley 1755 de 2015.
• Las quejas y reclamos serán atendidos en un plazo máximo de 15 días hábiles.
• Las sugerencias serán evaluadas por el comité de mejora continua.
• Se emitirá respuesta formal por escrito al solicitante.
• Puedes radicar tu PQRS a través de nuestro formulario web, correo electrónico o de manera presencial.
• Canales de atención: formulario PQRS en nuestra web, gerencia@gytc.com.co o en nuestras oficinas.`,
  },
  {
    id: "anticorrupcion",
    icon: "⚖️",
    title: "Política Anticorrupción y Ética Empresarial",
    content: `GYTC promueve una cultura de transparencia y ética en todas sus operaciones:

• Tolerancia cero con actos de corrupción, soborno o fraude.
• Relaciones comerciales basadas en la transparencia y la legalidad.
• Cumplimiento de la Ley 1474 de 2011 (Estatuto Anticorrupción).
• Canal de denuncias confidencial para reportar conductas irregulares.
• Capacitación periódica al personal en temas de ética y cumplimiento normativo.`,
  },
  {
    id: "contratistas",
    icon: "🤝",
    title: "Política de Contratistas y Proveedores",
    content: `GYTC establece lineamientos claros para la gestión de contratistas y proveedores:

• Verificación de cumplimiento en seguridad social y parafiscales.
• Exigencia de certificaciones y competencias técnicas según el servicio.
• Evaluación periódica del desempeño de contratistas y proveedores.
• Cumplimiento de normas de seguridad y medio ambiente en nuestras instalaciones y proyectos.
• Prohibición de subcontratación sin autorización previa.`,
  },
];

const Politicas = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Políticas Empresariales
            </h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Conoce las políticas que rigen nuestras operaciones y garantizan la calidad, seguridad y transparencia en todos nuestros servicios.
            </p>
          </div>
        </section>

        {/* Policy Cards Grid - Quick Navigation */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {policies.map((policy) => (
                <button
                  key={policy.id}
                  onClick={() => {
                    setActiveId(policy.id);
                    setTimeout(() => {
                      document.getElementById(policy.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                  className="bg-card border rounded-lg p-4 text-center hover:shadow-md hover:border-primary transition-all duration-200 group"
                >
                  <span className="text-3xl mb-2 block">{policy.icon}</span>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    {policy.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Policies Detail */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-4">
            {policies.map((policy) => (
              <div
                key={policy.id}
                id={policy.id}
                className="border rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => togglePolicy(policy.id)}
                  className="w-full flex items-center justify-between p-6 bg-card hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{policy.icon}</span>
                    <h2 className="text-lg font-semibold text-foreground">
                      {policy.title}
                    </h2>
                  </div>
                  <span className="text-primary text-xl font-bold ml-4 flex-shrink-0">
                    {activeId === policy.id ? "−" : "+"}
                  </span>
                </button>

                {activeId === policy.id && (
                  <div className="px-6 pb-6 bg-card border-t">
                    <div className="pt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                      {policy.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA PQRS */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tienes alguna inquietud?</h2>
            <p className="mb-6 opacity-90">
              Puedes radicar una Petición, Queja, Reclamo o Sugerencia a través de nuestro formulario de atención al cliente.
            </p>
            <a
              href="/pqrs"
              className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Radicar PQRS
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Politicas;
