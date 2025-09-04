import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge-custom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Calendar, 
  MapPin, 
  Trophy, 
  TrendingUp, 
  Settings,
  Edit,
  Mountain,
  Clock,
  Target
} from "lucide-react"

const Perfil = () => {
  const userStats = [
    { label: "Puertos Conquistados", value: "12", icon: Mountain },
    { label: "Elevación Total", value: "28,450m", icon: TrendingUp },
    { label: "Tiempo Total", value: "142h", icon: Clock },
    { label: "Logros", value: "8", icon: Trophy }
  ]

  const recentConquests = [
    { name: "Col du Tourmalet", date: "15 Jul 2024", difficulty: "hc" },
    { name: "Alto de l'Angliru", date: "8 Jul 2024", difficulty: "hc" },
    { name: "Col de la Madeleine", date: "1 Jul 2024", difficulty: "1" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Tu <span className="text-gradient-sunrise">Perfil</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="glass">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl font-bold gradient-hero text-primary-foreground">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">Juan Ciclista</CardTitle>
                  <p className="text-muted-foreground">Alpinista Aficionado</p>
                  <Badge variant="hc" className="mt-2">Nivel 5</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Miembro desde Enero 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Barcelona, España</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span>Objetivo: 20 puertos en 2024</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar Perfil
                    </Button>
                    <Button className="w-full" variant="ghost">
                      <Settings className="w-4 h-4 mr-2" />
                      Configuración
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats and Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {userStats.map((stat) => {
                  const IconComponent = stat.icon
                  return (
                    <Card key={stat.label} className="glass">
                      <CardContent className="pt-6">
                        <div className="text-center space-y-2">
                          <IconComponent className="w-6 h-6 text-primary mx-auto" />
                          <div className="text-xl font-bold">{stat.value}</div>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Recent Conquests */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Conquistas Recientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentConquests.map((conquest, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                            <Mountain className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{conquest.name}</p>
                            <p className="text-sm text-muted-foreground">{conquest.date}</p>
                          </div>
                        </div>
                        <Badge variant={conquest.difficulty as any}>
                          {conquest.difficulty.toUpperCase()}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Progress Card */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Progreso del Año
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Objetivo Anual (20 puertos)</span>
                        <span>12/20 (60%)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-primary-foreground h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-success">8</div>
                        <p className="text-xs text-muted-foreground">Por delante</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">5</div>
                        <p className="text-xs text-muted-foreground">Este mes</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">142</div>
                        <p className="text-xs text-muted-foreground">Días activo</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil