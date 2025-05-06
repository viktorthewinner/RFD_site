import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CalendarCheck2, Users, Handshake, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function CetateniPage() {
  const subcategories = [
    { name: "Sesizări", href: "/cetateni/sesizari", icon: AlertCircle, description: "Raportează probleme și nereguli." },
    { name: "Programări", href: "/cetateni/programari", icon: CalendarCheck2, description: "Programează-te online la diverse servicii." },
    { name: "Consultări Publice", href: "/cetateni/consultari", icon: Users, description: "Participă la procesul decizional." },
    { name: "Voluntariat", href: "/cetateni/voluntariat", icon: Handshake, description: "Implică-te în proiecte de voluntariat." },
    { name: "Panou Anunțuri", href: "/cetateni/anunturi", icon: ClipboardList, description: "Anunțuri de interes pentru cetățeni." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Cetățeni</h1>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
