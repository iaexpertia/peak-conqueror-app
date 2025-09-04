import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge-custom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation as NavigationIcon, Compass } from "lucide-react"

const Mapa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Mapa de <span className="text-gradient-sunrise">Puertos</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora la ubicación de todos los puertos de montaña en un mapa interactivo
            </p>
          </div>

          {/* Map Placeholder */}
          <Card className="glass">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Mapa Interactivo
                </CardTitle>
                <Badge variant="hc">Próximamente</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Compass className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Mapa en Desarrollo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estamos trabajando en un mapa interactivo que mostrará todos los puertos
                      de montaña con su ubicación exacta y rutas recomendadas.
                    </p>
                    <Button variant="outline" size="sm">
                      <NavigationIcon className="w-4 h-4 mr-2" />
                      Notificarme cuando esté listo
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Coming Soon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Ubicaciones Precisas</h3>
                  <p className="text-sm text-muted-foreground">
                    Coordenadas exactas de cada puerto con puntos de inicio
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <NavigationIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Rutas Optimizadas</h3>
                  <p className="text-sm text-muted-foreground">
                    Mejores rutas para llegar a cada puerto desde tu ubicación
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Compass className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Filtros Avanzados</h3>
                  <p className="text-sm text-muted-foreground">
                    Filtra por dificultad, distancia y estado de conquista
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mapa