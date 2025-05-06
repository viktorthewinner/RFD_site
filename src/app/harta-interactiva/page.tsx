import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Building, AlertTriangle, Trash2, Restroom, School, Briefcase, MapPin, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";

export default function HartaInteractivaPage() {
  const layers = [
    { name: "Instituții", icon: Building, color: "text-blue-500" },
    { name: "Clădiri Principale", icon: MapPin, color: "text-purple-500" },
    { name: "Alerte", icon: AlertTriangle, color: "text-red-500" },
    { name: "Puncte Colectare", icon: Trash2, color: "text-green-500" },
    { name: "Toalete Publice", icon: Restroom, color: "text-yellow-500" },
    { name: "Educație", icon: School, color: "text-indigo-500" },
    { name: "Servicii", icon: Briefcase, color: "text-pink-500" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center text-primary">Hartă Interactivă a Cartierului</h1>
      <p className="text-center text-muted-foreground mb-8">Explorează în detaliu punctele de interes, alertele și serviciile din zona ta.</p>
      
      <div className="lg:flex lg:gap-6">
        <Card className="lg:w-1/4 mb-6 lg:mb-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-6 h-6 text-primary" />
              Straturi Hartă
            </CardTitle>
            <CardDescription>Selectează ce dorești să vizualizezi pe hartă.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {layers.map((layer) => (
              <Button key={layer.name} variant="outline" className={`w-full justify-start gap-2 ${layer.color}`}>
                <layer.icon className={`w-5 h-5`} />
                {layer.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:flex-grow shadow-lg">
          <CardHeader>
            <CardTitle>Vizualizare Hartă</CardTitle>
             <div className="flex justify-end space-x-2">
              <Button variant="outline" size="icon" aria-label="Zoom In">
                <ZoomIn className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Zoom Out">
                <ZoomOut className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for interactive map. Actual map implementation will require a library like Leaflet or Mapbox GL JS. */}
              <Image 
                src="https://picsum.photos/1200/750" 
                alt="Hartă Interactivă Detaliată" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="detailed city map"
              />
               <p className="z-10 p-4 bg-background/80 rounded-md text-foreground">
                Componenta de hartă interactivă va fi implementată aici.
              </p>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Legenda (exemple):</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li><MapPin className="inline w-4 h-4 text-purple-500 mr-1" /> Clădirea Universității, Teatrul Național</li>
                <li><Building className="inline w-4 h-4 text-blue-500 mr-1" /> Primăria S1, Poliția Locală S1</li>
                <li><School className="inline w-4 h-4 text-indigo-500 mr-1" /> Școli, Grădinițe, Facultăți</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
