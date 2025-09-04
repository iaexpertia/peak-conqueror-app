import * as React from "react"
import { Navigation } from "@/components/navigation"
import { StatCard } from "@/components/ui/stat-card"
import { MountainCard } from "@/components/mountain-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge-custom"
import { 
  Mountain, 
  Trophy, 
  TrendingUp, 
  MapPin,
  Calendar,
  Target,
  Award,
  Clock
} from "lucide-react"

// Import mountain images
import heroMountain from "@/assets/hero-mountain.jpg"
import colTourmalet from "@/assets/col-tourmalet.jpg"
import alpeDhuez from "@/assets/alpe-dhuez.jpg"
import stelvioPass from "@/assets/stelvio-pass.jpg"

const Index = () => {
  // Mock data for featured mountains
  const featuredMountains = [
    {
      name: "Col du Tourmalet",
      location: "Pirineos, Francia",
      elevation: 2115,
      distance: 17.1,
      averageGradient: 7.4,
      maxGradient: 12,
      image: colTourmalet,
      difficulty: "hc" as const,
      conquered: true,
      lastConquest: "15 Jul 2024",
      famousWinner: {
        name: "Tadej Pogačar",
        year: 2023,
        race: "Tour de France"
      }
    },
    {
      name: "Alpe d'Huez",
      location: "Alpes Franceses",
      elevation: 1850,
      distance: 13.8,
      averageGradient: 8.1,
      maxGradient: 13,
      image: alpeDhuez,
      difficulty: "hc" as const,
      conquered: false,
      famousWinner: {
        name: "Jonas Vingegaard",
        year: 2023,
        race: "Tour de France"
      }
    },
    {
      name: "Passo dello Stelvio",
      location: "Alpes Italianos",
      elevation: 2757,
      distance: 24.3,
      averageGradient: 7.4,
      maxGradient: 14,
      image: stelvioPass,
      difficulty: "hc" as const,
      conquered: false,
      famousWinner: {
        name: "Egan Bernal",
        year: 2021,
        race: "Giro d'Italia"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMountain} 
            alt="Mountain cycling hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="hc" className="mb-4">
              ¡Bienvenido a CyclePeaks!
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Conquista los 
              <span className="text-gradient-sunrise block mt-2">
                Puertos Legendarios
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Descubre, planea y registra tus ascensos a los puertos de montaña más épicos del mundo ciclista
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="animate-glow">
                <Target className="w-5 h-5 mr-2" />
                Explorar Puertos
              </Button>
              <Button variant="secondary" size="lg" className="glass">
                <Trophy className="w-5 h-5 mr-2" />
                Ver Logros
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Stats Overview */}
        <section className="animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Tu Progreso</h2>
            <Badge variant="primera">Temporada 2024</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              title="Puertos Conquistados"
              value="12"
              subtitle="de 150 totales"
              icon={<Mountain className="w-6 h-6" />}
              trend="up"
            />
            
            <StatCard
              title="Elevación Total"
              value="28,450m"
              subtitle="este año"
              icon={<TrendingUp className="w-6 h-6" />}
              trend="up"
            />
            
            <StatCard
              title="Logros Desbloqueados"
              value="8"
              subtitle="nuevos este mes"
              icon={<Award className="w-6 h-6" />}
              trend="up"
            />
            
            <StatCard
              title="Tiempo en Puertos"
              value="142h"
              subtitle="total escalando"
              icon={<Clock className="w-6 h-6" />}
              trend="neutral"
            />
          </div>
        </section>
        
        {/* Featured Mountains */}
        <section className="animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Puertos Legendarios</h2>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Ver Todos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMountains.map((mountain, index) => (
              <MountainCard
                key={mountain.name}
                {...mountain}
                className={`animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </section>
        
        {/* Recent Activity */}
        <section className="animate-slide-up">
          <h2 className="text-2xl font-bold mb-6">Actividad Reciente</h2>
          
          <div className="glass rounded-xl p-6 border border-border">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">¡Conquistaste Col du Tourmalet!</p>
                    <p className="text-sm text-muted-foreground">Hace 3 días</p>
                  </div>
                </div>
                <Badge variant="conquest">+500 puntos</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Target className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Nuevo objetivo: Alpe d'Huez</p>
                    <p className="text-sm text-muted-foreground">Hace 1 semana</p>
                  </div>
                </div>
                <Badge variant="pending">Planificado</Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
