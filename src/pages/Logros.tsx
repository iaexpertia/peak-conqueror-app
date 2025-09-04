import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge-custom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Award, Target, Star, Lock, CheckCircle } from "lucide-react"

const Logros = () => {
  const achievements = [
    {
      id: 1,
      title: "Primer Ascenso",
      description: "Completa tu primer puerto de montaña",
      icon: Trophy,
      completed: true,
      progress: 100,
      points: 100,
      category: "Iniciación"
    },
    {
      id: 2,
      title: "Conquistador de Hors Catégorie",
      description: "Completa 5 puertos HC",
      icon: Award,
      completed: false,
      progress: 20,
      points: 500,
      category: "Élite"
    },
    {
      id: 3,
      title: "Tour de Francia",
      description: "Completa 10 puertos del Tour de Francia",
      icon: Star,
      completed: false,
      progress: 30,
      points: 1000,
      category: "Épico"
    },
    {
      id: 4,
      title: "Alpinista",
      description: "Acumula 50,000m de desnivel",
      icon: Target,
      completed: false,
      progress: 56,
      points: 750,
      category: "Resistencia"
    },
    {
      id: 5,
      title: "Leyenda",
      description: "Completa los 21 puertos más legendarios",
      icon: Trophy,
      completed: false,
      progress: 5,
      points: 2000,
      category: "Leyenda"
    }
  ]

  const categories = [
    { name: "Iniciación", count: 1, total: 3, color: "3" },
    { name: "Élite", count: 0, total: 5, color: "2" },
    { name: "Épico", count: 0, total: 4, color: "1" },
    { name: "Resistencia", count: 0, total: 6, color: "hc" },
    { name: "Leyenda", count: 0, total: 2, color: "especial" }
  ]

  const totalPoints = achievements.reduce((sum, achievement) => {
    return sum + (achievement.completed ? achievement.points : 0)
  }, 0)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Tus <span className="text-gradient-sunrise">Logros</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desbloquea logros completando puertos y alcanzando objetivos épicos
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-gradient-sunrise">{totalPoints}</div>
                  <p className="text-sm text-muted-foreground">Puntos Totales</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold">
                    {achievements.filter(a => a.completed).length}
                  </div>
                  <p className="text-sm text-muted-foreground">Logros Desbloqueados</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold">
                    {Math.round(achievements.reduce((sum, a) => sum + a.progress, 0) / achievements.length)}%
                  </div>
                  <p className="text-sm text-muted-foreground">Progreso Promedio</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-sm text-muted-foreground">Nivel Actual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl font-bold mb-4">Categorías de Logros</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Card key={category.name} className="glass">
                  <CardContent className="pt-4">
                    <div className="text-center space-y-2">
                      <Badge variant={category.color as any} className="mb-2">
                        {category.name}
                      </Badge>
                      <div className="text-lg font-semibold">
                        {category.count}/{category.total}
                      </div>
                      <Progress 
                        value={(category.count / category.total) * 100} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xl font-bold mb-4">Todos los Logros</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon
                return (
                  <Card key={achievement.id} className={`glass ${achievement.completed ? 'border-success' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            achievement.completed 
                              ? 'bg-success text-success-foreground' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {achievement.completed ? (
                              <CheckCircle className="w-6 h-6" />
                            ) : achievement.progress > 0 ? (
                              <IconComponent className="w-6 h-6" />
                            ) : (
                              <Lock className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={achievement.completed ? "conquest" : "outline"}>
                            +{achievement.points} pts
                          </Badge>
                          <Badge variant="outline" className="ml-2">
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    {!achievement.completed && (
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progreso</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logros