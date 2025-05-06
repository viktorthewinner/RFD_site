import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Users, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

const projectItems = [
  {
    id: 1,
    title: "Sectorul 1 Curat",
    category: "Campanie de Mediu",
    status: "În Desfășurare",
    goal: "Creșterea gradului de colectare selectivă cu 20%",
    progress: 65,
    description: "O inițiativă pentru un cartier mai curat și mai verde, prin promovarea colectării selective și acțiuni de ecologizare.",
    image: "https://picsum.photos/seed/eco/400/220",
    aiHint: "recycling bins",
  },
  {
    id: 2,
    title: "Digitalizare Servicii Publice",
    category: "Proiect Tehnologic",
    status: "Planificat",
    goal: "Reducerea timpului de așteptare la ghișee cu 50%",
    progress: 15,
    description: "Modernizarea și digitalizarea serviciilor oferite cetățenilor pentru un acces mai rapid și eficient.",
    image: "https://picsum.photos/seed/digital/400/220",
    aiHint: "computer screen",
  },
  {
    id: 3,
    title: "Parcuri pentru Toți",
    category: "Proiect Comunitar",
    status: "Finalizat",
    goal: "Amenajarea a 3 noi locuri de joacă în parcuri",
    progress: 100,
    description: "Crearea de spații de recreere sigure și moderne pentru copii în parcurile din sector.",
    image: "https://picsum.photos/seed/playground/400/220",
    aiHint: "playground kids",
  },
];

export default function ProiecteCampaniiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
          <Megaphone className="w-8 h-8" /> Proiecte și Campanii
        </h1>
        <Button variant="outline" asChild>
          <Link href="/info-cartier">Înapoi la Info Cartier</Link>
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectItems.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="p-0">
               <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={220} 
                className="w-full h-48 object-cover" 
                data-ai-hint={project.aiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
              <p className="text-sm text-accent font-medium mb-2">{project.category}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Target className="w-4 h-4 mr-1.5" />
                Obiectiv: {project.goal}
              </div>
               <div className="flex items-center text-sm text-muted-foreground mb-3">
                <TrendingUp className="w-4 h-4 mr-1.5" />
                Status: {project.status}
              </div>
              <CardDescription className="text-base mb-3 line-clamp-3">{project.description}</CardDescription>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Progres: {project.progress}%</p>
                <Progress value={project.progress} aria-label={`Progres ${project.progress}%`} />
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/info-cartier/proiecte-campanii/${project.id}`}>Află mai multe</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
        {projectItems.length === 0 && (
          <p className="text-center text-muted-foreground py-10 md:col-span-2 lg:col-span-3">Momentan nu sunt proiecte sau campanii active.</p>
        )}
      </div>
    </div>
  );
}
