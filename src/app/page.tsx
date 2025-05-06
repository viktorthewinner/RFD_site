import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle, Eye, Handshake, MessageSquare, Mic, Star, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Bun venit în Cartierul Universitate!</h1>
        <p className="text-lg text-foreground/80 mb-6">
          Rămâi conectat la tot ce se întâmplă în cartierul tău.
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/info-cartier">Informează-te</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/resurse">Accesează servicii</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/info-cartier/evenimente">Descoperă evenimente</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/cetateni/sesizari">Semnalează probleme</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Acum în Cartier</h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Hartă Interactivă</CardTitle>
            <CardDescription>Explorează punctele de interes din cartierul tău.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              {/* Placeholder for interactive map. Actual map implementation will require a library like Leaflet or Mapbox GL JS. */}
              <Image 
                src="https://picsum.photos/800/450" 
                alt="Hartă Interactivă Placeholder" 
                width={800} 
                height={450} 
                className="rounded-lg object-cover"
                data-ai-hint="city map" 
              />
            </div>
            <div className="text-center mt-4">
              <Button asChild>
                <Link href="/harta-interactiva">Explorează Harta Completă</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Implică-te și Câștigă Recunoaștere!</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="w-10 h-10 text-primary" />
              <div>
                <CardTitle>Puncte de Implicare</CardTitle>
                <CardDescription>Câștigă puncte pentru fiecare acțiune utilă.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" /> Raportezi o problemă: +10 puncte</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" /> Confirmi o problemă: +3 puncte</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" /> Confirmi rezolvarea: +5 puncte</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" /> Participi la sondaje: +15 puncte</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Star className="w-10 h-10 text-primary" />
               <div>
                <CardTitle>Insigne Civice</CardTitle>
                <CardDescription>Deblochează insigne pentru implicarea ta.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                  <Award className="w-5 h-5 text-yellow-500" /> Primul Raport
                </div>
                <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                  <Eye className="w-5 h-5 text-blue-500" /> Ochi de Șoim
                </div>
                <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                  <Handshake className="w-5 h-5 text-green-500" /> Vecin de Ajutor
                </div>
                <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                  <Mic className="w-5 h-5 text-purple-500" /> Vocea Cartierului
                </div>
                 <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                  <Star className="w-5 h-5 text-orange-500" /> Reporter Activ
                </div>
                 <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                  <Shield className="w-5 h-5 text-red-500" /> Gardianul Universității
                </div>
              </div>
            </CardContent>
          </Card>

           <Card className="shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center gap-4">
               <MessageSquare className="w-10 h-10 text-primary" />
               <div>
                <CardTitle>Profilul Tău Civic (Exemplu)</CardTitle>
                <CardDescription>Vezi progresul și insignele câștigate.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Image src="https://picsum.photos/100/100" alt="Avatar Utilizator" width={80} height={80} className="rounded-full mx-auto mb-2" data-ai-hint="user avatar" />
                <p className="font-semibold">Utilizator Activ</p>
                <p className="text-sm text-muted-foreground">Puncte: 125</p>
                <div className="flex justify-center gap-2 mt-2">
                  <Award className="w-6 h-6 text-yellow-500" title="Primul Raport"/>
                  <Eye className="w-6 h-6 text-blue-500" title="Ochi de Șoim"/>
                </div>
                <Button variant="link" className="mt-2">Vezi profilul complet</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
