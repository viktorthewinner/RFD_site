import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const eventItems = [
  {
    id: 1,
    title: "Festivalul de Film Urban",
    date: "2024-08-01",
    time: "18:00",
    location: "Piața Universității",
    description: "Proiecții de filme în aer liber, muzică și atmosferă de festival.",
    image: "https://picsum.photos/seed/festival/400/250",
    aiHint: "outdoor festival",
    price: "Gratuit",
  },
  {
    id: 2,
    title: "Concert de Jazz în Parc",
    date: "2024-08-05",
    time: "20:00",
    location: "Parcul Cișmigiu (foișor)",
    description: "Seară de jazz cu artiști locali și internaționali.",
    image: "https://picsum.photos/seed/concert/400/250",
    aiHint: "jazz concert",
    price: "25 RON",
  },
  {
    id: 3,
    title: "Târg de Artizanat Local",
    date: "2024-08-10",
    time: "10:00 - 18:00",
    location: "Str. Lipscani",
    description: "Descoperă produse unicat create de meșteri populari și artiști locali.",
    image: "https://picsum.photos/seed/market/400/250",
    aiHint: "craft market",
    price: "Acces liber",
  },
];

export default function EvenimentePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
          <CalendarDays className="w-8 h-8" /> Evenimente în Cartier
        </h1>
        <Button variant="outline" asChild>
          <Link href="/info-cartier">Înapoi la Info Cartier</Link>
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventItems.map((event) => (
          <Card key={event.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="p-0 relative">
              <Image 
                src={event.image} 
                alt={event.title} 
                width={400} 
                height={250} 
                className="w-full h-52 object-cover"
                data-ai-hint={event.aiHint} 
              />
               <div className="absolute bottom-0 left-0 bg-black/50 text-white px-3 py-1 text-sm font-semibold">
                {new Date(event.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long' })}
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <CalendarDays className="w-4 h-4 mr-1.5 text-primary" />
                <span>{new Date(event.date).toLocaleDateString('ro-RO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} la {event.time}</span>
              </div>
              <CardDescription className="text-base line-clamp-3">{event.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <div className="flex items-center text-sm font-medium">
                <Ticket className="w-4 h-4 mr-1.5 text-accent" />
                <span>{event.price}</span>
              </div>
              <Button asChild size="sm">
                <Link href={`/info-cartier/evenimente/${event.id}`}>Detalii Eveniment</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
         {eventItems.length === 0 && (
          <p className="text-center text-muted-foreground py-10 md:col-span-2 lg:col-span-3">Momentan nu sunt evenimente programate.</p>
        )}
      </div>
    </div>
  );
}
