import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, AlertTriangle, CalendarDays, Megaphone } from "lucide-react";
import Link from "next/link";

export default function InfoCartierPage() {
  const subcategories = [
    { name: "Noutăți", href: "/info-cartier/noutati", icon: Newspaper, description: "Ultimele știri și anunțuri din cartier." },
    { name: "Alerte", href: "/info-cartier/alerte", icon: AlertTriangle, description: "Informații despre utilități, trafic, lucrări." },
    { name: "Evenimente", href: "/info-cartier/evenimente", icon: CalendarDays, description: "Descoperă evenimentele locale." },
    { name: "Proiecte/Campanii", href: "/info-cartier/proiecte-campanii", icon: Megaphone, description: "Inițiative și campanii în desfășurare." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Info Cartier</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {subcategories.map((category) => (
          <Link href={category.href} key={category.name} className="block hover:no-underline">
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 ease-in-out">
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="w-8 h-8 text-accent" />
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
