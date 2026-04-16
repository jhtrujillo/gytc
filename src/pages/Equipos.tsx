import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import craneIndustrial from "@/assets/crane-industrial.webp";
import craneTower from "@/assets/crane-tower.webp";
import craneStructure from "@/assets/crane-structure.webp";
import craneConstruction from "@/assets/crane-construction.webp";
import craneTransformer from "@/assets/crane-transformer.webp";
import truckCrane1 from "@/assets/truck-crane-1.webp";
import truckCraneWarehouse from "@/assets/truck-crane-warehouse.webp";
import truckCrane2 from "@/assets/truck-crane-2.webp";
import craneGroveContainer from "@/assets/crane-grove-container.webp";
import truckCraneStructure from "@/assets/truck-crane-structure.webp";
import craneUrban from "@/assets/crane-urban.webp";
import truckFotonIndustrial from "@/assets/truck-foton-industrial.webp";
import truckExcavatorConstruction from "@/assets/truck-excavator-construction.webp";
import craneResidential from "@/assets/crane-residential.webp";
import craneGrovePlant from "@/assets/crane-grove-plant.webp";
import truckFotonResidential from "@/assets/truck-foton-residential.webp";
import truckCraneUrban from "@/assets/truck-crane-urban.webp";
import craneMetalStructure from "@/assets/crane-metal-structure.webp";
import craneIndustrialTank from "@/assets/crane-industrial-tank.webp";
import craneGytcIndustrial from "@/assets/crane-gytc-industrial.webp";
import craneXcmgCommercial from "@/assets/crane-xcmg-commercial.webp";
import craneTelescopicPlant from "@/assets/crane-telescopic-plant.webp";
import categoryForklift from "@/assets/category-forklift.webp";
import craneNew1 from "@/assets/crane-new-1.webp";
import craneNew2 from "@/assets/crane-new-2.webp";
import craneNew3 from "@/assets/crane-new-3.webp";
import craneNew4 from "@/assets/crane-new-4.webp";
import craneNew5 from "@/assets/crane-new-5.webp";
import craneNew6 from "@/assets/crane-new-6.webp";
import craneRedPlant from "@/assets/crane-red-plant.webp";
import craneRedRoad from "@/assets/crane-red-road.webp";
import craneRedTank from "@/assets/crane-red-tank.webp";
import craneXcmgPlant from "@/assets/crane-xcmg-plant.webp";
import craneStadium from "@/assets/crane-stadium.webp";
import craneYellowTank from "@/assets/crane-yellow-tank.webp";
import craneXcmgDuo from "@/assets/crane-xcmg-duo.webp";
import truckCranePaystar from "@/assets/truck-crane-paystar.webp";
import craneTerexStructure from "@/assets/crane-terex-structure.webp";
import craneGroveYellow from "@/assets/crane-grove-yellow.webp";
import craneGroveTank1 from "@/assets/crane-grove-tank1.webp";
import craneGroveTank2 from "@/assets/crane-grove-tank2.webp";
import craneGroveContainer2 from "@/assets/crane-grove-container2.webp";
import craneGroveTank3 from "@/assets/crane-grove-tank3.webp";
import craneGroveTank4 from "@/assets/crane-grove-tank4.webp";
import craneGrovePlant2 from "@/assets/crane-grove-plant2.webp";
import craneGroveBoiler from "@/assets/crane-grove-boiler.webp";
import craneGroveConstruction2 from "@/assets/crane-grove-construction2.webp";
import craneGrovePlant3 from "@/assets/crane-grove-plant3.webp";
import craneGroveBoiler2 from "@/assets/crane-grove-boiler2.webp";
import craneGroveBoiler3 from "@/assets/crane-grove-boiler3.webp";
import craneXcmgRoof from "@/assets/crane-xcmg-roof.webp";
import craneGroveBeam from "@/assets/crane-grove-beam.webp";
import craneTerexLift from "@/assets/crane-terex-lift.webp";
import craneGroveContainer3 from "@/assets/crane-grove-container3.webp";
import craneGroveContainer4 from "@/assets/crane-grove-container4.webp";
import craneTerexLift2 from "@/assets/crane-terex-lift2.webp";
import QuoteForm from "@/components/QuoteForm";
import EmailQuoteForm from "@/components/EmailQuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ImageGallery } from "@/components/ImageGallery";

const categoryData = [
  {
    id: 1,
    name: "Grúas",
    displayName: "Grúas (20 – 200 Toneladas)",
    description: "Disponemos de grúas telescópicas y articuladas con capacidades desde 20 hasta 200 toneladas, diseñadas para izajes de alta complejidad y precisión.",
    shortDescription: "Grúas telescópicas y articuladas de alta precisión.",
    rangeDescription: "Capacidades de 20 a 200 Toneladas",
    image: craneGroveContainer,
    images: [
      craneGroveContainer,
      craneGrovePlant,
      craneTower,
      craneStructure,
      craneResidential,
      craneUrban,
      craneMetalStructure,
      craneIndustrialTank,
      craneGytcIndustrial,
      craneXcmgCommercial,
      craneTelescopicPlant,
      craneIndustrial,
      craneConstruction,
      craneTransformer,
      craneNew1,
      craneNew2,
      craneNew3,
      craneNew4,
      craneNew5,
      craneNew6,
      craneRedPlant,
      craneRedRoad,
      craneRedTank,
      craneXcmgPlant,
      craneStadium,
      craneYellowTank,
      craneXcmgDuo,
      craneTerexStructure,
      craneGroveYellow,
      craneGroveTank1,
      craneGroveTank2,
      craneGroveContainer2,
      craneGroveTank3,
      craneGroveTank4,
      craneGrovePlant2,
      craneGroveBoiler,
      craneGroveConstruction2,
      craneGrovePlant3,
      craneGroveBoiler2,
      craneGroveBoiler3,
      craneXcmgRoof,
      craneGroveBeam,
      craneTerexLift,
      craneGroveContainer3,
      craneGroveContainer4,
      craneTerexLift2,
    ],
    video: "/videos/crane-operation.mp4",
  },
  {
    id: 2,
    name: "Camión Grúa",
    displayName: "Camión Grúa",
    description: "Camiones grúa y tractocamiones con brazo articulado de 35 toneladas, ideales para montajes y operaciones en espacios reducidos.",
    shortDescription: "Camiones grúa con brazo articulado.",
    rangeDescription: "Capacidad 35 Toneladas",
    image: truckCraneStructure,
    images: [
      truckCraneStructure,
      craneIndustrial,
      truckCraneUrban,
      truckCrane1,
      truckCraneWarehouse,
      truckCrane2,
      truckFotonIndustrial,
      truckFotonResidential,
      truckExcavatorConstruction,
      truckCranePaystar,
    ],
  },
  {
    id: 3,
    name: "Montacargas",
    displayName: "Montacargas",
    description: "Montacargas con diversas capacidades para manejo eficiente de materiales en operaciones logísticas e industriales.",
    shortDescription: "Manejo eficiente de materiales.",
    rangeDescription: "Diversas capacidades para manejo de materiales",
    image: categoryForklift,
    images: [categoryForklift],
  },
];

const categories = ["Todos", "Grúas", "Camión Grúa", "Montacargas"];

const Equipos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const selectedCategoryData = categoryData.find(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Equipos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Maquinaria de alto rendimiento para tus proyectos más exigentes
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedCategory === "Todos" ? (
            // Vista general: mostrar tarjetas de categorías
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.map((category) => (
                <Card key={category.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.displayName}
                      className="w-full h-full object-cover hover:scale-110 transition-smooth"
                      loading="lazy"
                      decoding="async"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      Disponible
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.displayName}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {category.shortDescription}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Solicitar Cotización
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Solicitar Cotización</DialogTitle>
                          <DialogDescription>
                            {category.displayName}
                          </DialogDescription>
                        </DialogHeader>
                        <QuoteForm equipmentName={category.displayName} />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Vista individual: formulario a la izquierda, galería a la derecha
            selectedCategoryData && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulario de cotización */}
                <div className="order-2 lg:order-1">
                  <EmailQuoteForm 
                    categoryName={selectedCategoryData.displayName}
                    categoryDescription={selectedCategoryData.rangeDescription}
                  />
                </div>

                {/* Galería de imágenes */}
                <div className="order-1 lg:order-2">
                  <div className="sticky top-8">
                    <h3 className="text-2xl font-bold mb-4">{selectedCategoryData.displayName}</h3>
                    <p className="text-muted-foreground mb-6">{selectedCategoryData.description}</p>
                    <ImageGallery 
                      images={selectedCategoryData.images}
                      title={selectedCategoryData.displayName}
                      video={(selectedCategoryData as any).video}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Equipos;
