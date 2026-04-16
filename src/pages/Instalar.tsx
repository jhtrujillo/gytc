import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { usePWA } from "@/hooks/usePWA";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Download, Bell, Wifi, Smartphone, CheckCircle, Share, MoreVertical, PlusSquare } from "lucide-react";

const Instalar = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const { isSupported, permission, requestPermission } = usePushNotifications();

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <Smartphone className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Instala la App de GYTC
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Accede rápidamente a nuestros servicios desde tu pantalla de inicio, 
            sin necesidad de descargar desde tiendas de aplicaciones.
          </p>
        </div>
      </section>

      {/* Status & Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Installation Card */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Download className="h-6 w-6 text-primary" />
                  Instalar Aplicación
                </CardTitle>
                <CardDescription>
                  Agrega GYTC a tu pantalla de inicio para acceso rápido
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isInstalled ? (
                  <div className="flex items-center gap-3 text-green-600 bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-medium">¡La aplicación ya está instalada!</span>
                  </div>
                ) : isInstallable ? (
                  <Button onClick={installApp} size="lg" className="w-full sm:w-auto">
                    <Download className="mr-2 h-5 w-5" />
                    Instalar Ahora
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Para instalar la aplicación manualmente, sigue estos pasos:
                    </p>
                    
                    {isIOS ? (
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <h4 className="font-semibold">En iPhone/iPad (Safari):</h4>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            Toca el botón <Share className="inline h-4 w-4" /> Compartir
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            Desplázate y selecciona <PlusSquare className="inline h-4 w-4" /> "Agregar a inicio"
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            Confirma tocando "Agregar"
                          </li>
                        </ol>
                      </div>
                    ) : isAndroid ? (
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <h4 className="font-semibold">En Android (Chrome):</h4>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            Toca el menú <MoreVertical className="inline h-4 w-4" /> (tres puntos)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            Selecciona "Instalar aplicación" o "Agregar a pantalla de inicio"
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            Confirma la instalación
                          </li>
                        </ol>
                      </div>
                    ) : (
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <h4 className="font-semibold">En tu navegador:</h4>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            Busca el icono de instalación en la barra de direcciones
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            Haz clic en "Instalar" cuando aparezca el aviso
                          </li>
                        </ol>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notifications Card */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-primary" />
                  Notificaciones Push
                </CardTitle>
                <CardDescription>
                  Recibe alertas sobre el estado de tus servicios y promociones
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isSupported ? (
                  <p className="text-muted-foreground">
                    Tu navegador no soporta notificaciones push.
                  </p>
                ) : permission === 'granted' ? (
                  <div className="flex items-center gap-3 text-green-600 bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-medium">¡Notificaciones activadas!</span>
                  </div>
                ) : permission === 'denied' ? (
                  <p className="text-destructive">
                    Las notificaciones han sido bloqueadas. Por favor, habilítalas en la configuración de tu navegador.
                  </p>
                ) : (
                  <Button onClick={requestPermission} variant="outline" size="lg" className="w-full sm:w-auto">
                    <Bell className="mr-2 h-5 w-5" />
                    Activar Notificaciones
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Acceso Rápido</h3>
                  <p className="text-sm text-muted-foreground">
                    Abre la app directamente desde tu pantalla de inicio
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <Wifi className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Modo Offline</h3>
                  <p className="text-sm text-muted-foreground">
                    Accede a información básica sin conexión a internet
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Notificaciones</h3>
                  <p className="text-sm text-muted-foreground">
                    Recibe actualizaciones importantes al instante
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Instalar;
