import * as React from "react"
import { Navigation } from "@/components/navigation"
import { MountainCard } from "@/components/mountain-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge-custom"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin } from "lucide-react"

// Import mountain images
import colTourmalet from "@/assets/col-tourmalet.jpg"
import alpeDhuez from "@/assets/alpe-dhuez.jpg"
import stelvioPass from "@/assets/stelvio-pass.jpg"

const Puertos = () => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [difficultyFilter, setDifficultyFilter] = React.useState("all")
  const [countryFilter, setCountryFilter] = React.useState("all")

  const handleConquestToggle = (mountainName: string, isConquered: boolean) => {
    console.log(`${mountainName} ${isConquered ? 'conquistado' : 'desconquistado'}`)
  }

  // Mock data for all mountains
  const allMountains = [
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

  const filteredMountains = allMountains.filter(mountain => {
    const matchesSearch = mountain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mountain.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = difficultyFilter === "all" || mountain.difficulty === difficultyFilter
    const matchesCountry = countryFilter === "all" || mountain.location.includes(countryFilter)
    
    return matchesSearch && matchesDifficulty && matchesCountry
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Explorar <span className="text-gradient-sunrise">Puertos</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre todos los puertos de montaña disponibles y planifica tus próximas conquistas
            </p>
          </div>

          {/* Filters */}
          <div className="glass rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-medium">Filtros</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar puertos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Dificultad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las dificultades</SelectItem>
                  <SelectItem value="hc">Hors Catégorie</SelectItem>
                  <SelectItem value="1">1ª Categoría</SelectItem>
                  <SelectItem value="2">2ª Categoría</SelectItem>
                  <SelectItem value="3">3ª Categoría</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={countryFilter} onValueChange={setCountryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="País" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los países</SelectItem>
                  <SelectItem value="Francia">Francia</SelectItem>
                  <SelectItem value="Italia">Italia</SelectItem>
                  <SelectItem value="España">España</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {filteredMountains.length} puertos encontrados
                </span>
              </div>
              <Badge variant="outline">
                {allMountains.filter(m => m.conquered).length} conquistados
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMountains.map((mountain, index) => (
                <MountainCard
                  key={mountain.name}
                  {...mountain}
                  onConquestToggle={handleConquestToggle}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                />
              ))}
            </div>
            
            {filteredMountains.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No se encontraron puertos</h3>
                <p className="text-muted-foreground">
                  Intenta ajustar los filtros para encontrar más resultados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Puertos