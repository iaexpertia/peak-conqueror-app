import * as React from "react"
import { Badge } from "@/components/ui/badge-custom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Mountain, MapPin, TrendingUp, Trophy, Calendar } from "lucide-react"

interface MountainCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  location: string
  elevation: number
  distance: number
  averageGradient: number
  maxGradient: number
  image: string
  difficulty: "hc" | "primera" | "segunda" | "tercera"
  conquered?: boolean
  lastConquest?: string
  famousWinner?: {
    name: string
    year: number
    race: string
  }
}

const difficultyConfig = {
  hc: { color: "hc", label: "HC" },
  primera: { color: "primera", label: "1ª Cat." },
  segunda: { color: "segunda", label: "2ª Cat." },
  tercera: { color: "tercera", label: "3ª Cat." }
}

export function MountainCard({
  name,
  location,
  elevation,
  distance,
  averageGradient,
  maxGradient,
  image,
  difficulty,
  conquered = false,
  lastConquest,
  famousWinner,
  className,
  ...props
}: MountainCardProps) {
  const difficultyStyle = difficultyConfig[difficulty]

  return (
    <div 
      className={cn(
        "card-premium rounded-xl bg-card overflow-hidden border border-border group animate-fade-in",
        className
      )}
      {...props}
    >
      {/* Hero Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Conquest Status */}
        <div className="absolute top-4 right-4">
          <Badge variant={conquered ? "conquest" : "pending"}>
            {conquered ? "Conquistado" : "Pendiente"}
          </Badge>
        </div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant={difficultyStyle.color as any}>
            {difficultyStyle.label}
          </Badge>
        </div>
        
        {/* Mountain Stats Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <div className="flex items-center text-sm opacity-90">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center text-sm text-muted-foreground">
              <Mountain className="w-4 h-4 mr-1" />
              Elevación
            </div>
            <p className="text-lg font-semibold">{elevation.toLocaleString()}m</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 mr-1" />
              Distancia
            </div>
            <p className="text-lg font-semibold">{distance}km</p>
          </div>
        </div>
        
        {/* Gradient Info */}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Pendiente promedio:</span>
          <span className="font-medium">{averageGradient}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Pendiente máxima:</span>
          <span className="font-medium">{maxGradient}%</span>
        </div>
        
        {/* Famous Winner */}
        {famousWinner && (
          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <div className="flex items-center text-sm text-muted-foreground mb-1">
              <Trophy className="w-4 h-4 mr-1" />
              Último ganador profesional
            </div>
            <p className="font-medium">{famousWinner.name}</p>
            <p className="text-xs text-muted-foreground">
              {famousWinner.race} {famousWinner.year}
            </p>
          </div>
        )}
        
        {/* Last Conquest */}
        {conquered && lastConquest && (
          <div className="flex items-center text-sm text-success">
            <Calendar className="w-4 h-4 mr-1" />
            Conquistado el {lastConquest}
          </div>
        )}
        
        {/* Action Button */}
        <Button 
          className="w-full" 
          variant={conquered ? "secondary" : "default"}
        >
          {conquered ? "Ver Conquista" : "Planear Ascenso"}
        </Button>
      </div>
    </div>
  )
}