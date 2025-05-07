import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Nou parc inaugurat în cartier",
    date: "2024-07-15",
    summary: "Un nou spațiu verde a fost deschis publicului, oferind facilități moderne pentru recreere și sport.",
    image: "https://picsum.photos/seed/park/400/200",
    aiHint: "city park",
  },
  {
    id: 2,
    title: "Programul de reabilitare a străzilor continuă",
    date: "2024-07-10",
    summary: "Lucrările de modernizare a infrastructurii rutiere avansează conform planului.",
    image: "https://picsum.photos/seed/street/400/200",
    aiHint: "street construction",
  },
  {
    id: 3,
    title: "Dezbatere publică privind bugetul local",
    date: "2024-07-05",
    summary: "Cetățenii sunt invitați să participe la discuțiile privind alocarea fondurilor pentru anul viitor.",
    image: "https://picsum.photos/seed/meeting/400/200",
    aiHint: "public meeting",
  },
];

export default function NoutatiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-4">
          Noutăți
        </h1>
 <p className="text-xl text-muted-foreground text-center">
        Pe această pagină veți găsi cele mai recente noutăți și anunțuri despre Cartierul Universitate.
 </p>
      </div>

      <div className="flex justify-center mb-8">
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="p-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover" 
                data-ai-hint={item.aiHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <CalendarDays className="w-4 h-4 mr-1.5" />
                <span>Publicat la: {new Date(item.date).toLocaleDateString('ro-RO')}</span>
              </div>
              <CardDescription className="text-base">{item.summary}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/info-cartier/noutati/${item.id}`}>Citește mai mult</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
