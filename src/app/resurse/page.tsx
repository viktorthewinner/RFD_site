import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Building } from "lucide-react";
import Link from "next/link";

export default function ResursePage() {
  const subcategories = [
    { name: "Regulamente", href: "/resurse/regulamente", icon: BookOpen, description: "Regulamente locale și normative." },
    { name: "Ghid Servicii Locale", href: "/resurse/ghid-servicii", icon: Building, description: "Informații despre instituții, program, contact." },
    { name: "Formulare", href: "/resurse/formulare", icon: FileText, description: "Accesează și descarcă formulare utile." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Resurse</h1>
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
