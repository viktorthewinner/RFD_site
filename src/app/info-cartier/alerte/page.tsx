import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CalendarClock, Lightbulb, TrafficCone, Construction } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const alertItems = [
  {
    id: 1,
    type: "Utilități",
    title: "Întrerupere programată a apei reci",
    date: "2024-07-20 09:00",
    duration: "4 ore",
    affectedArea: "Str. Lalelelor, Bl. A1-A5",
    details: "Lucrări de mentenanță la rețeaua de distribuție. Vă mulțumim pentru înțelegere.",
    icon: Lightbulb,
    badgeVariant: "destructive" as "destructive" | "default" | "secondary" | "outline" | null | undefined,
  },
  {
    id: 2,
    type: "Trafic",
    title: "Restricții de circulație - Maraton Urban",
    date: "2024-07-22 08:00",
    duration: "6 ore",
    affectedArea: "Bd. Unirii, Piața Constituției",
    details: "Circulația va fi restricționată pe anumite tronsoane pentru desfășurarea evenimentului sportiv.",
    icon: TrafficCone,
    badgeVariant: "secondary" as "destructive" | "default" | "secondary" | "outline" | null | undefined,
  },
  {
    id: 3,
    type: "Lucrări",
    title: "Lucrări de modernizare carosabil",
    date: "2024-07-25 07:00",
    duration: "5 zile",
    affectedArea: "Str. Zambilelor, între nr. 10-20",
    details: "Se vor efectua lucrări de asfaltare. Vă rugăm utilizați rute alternative.",
    icon: Construction,
    badgeVariant: "default" as "destructive" | "default" | "secondary" | "outline" | null | undefined,
  },
];

export default function AlertePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">Alerte</h1>
      <p className="text-center text-lg text-muted-foreground mb-8">Pe această pagină veți găsi alerte și informații despre utilități, trafic și lucrări în Cartierul Universitate.</p>
      
      <div className="flex items-center justify-between mb-8"> {/* This div might need adjustment based on desired layout */}
        <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
          <AlertTriangle className="w-8 h-8" /> Alerte
        </h1>
        <Button variant="outline" asChild>
          <Link href="/info-cartier">Înapoi la Info Cartier</Link>
        </Button>
      </div>
      
      <div className="space-y-6">
        {alertItems.map((alert) => (
          <Card key={alert.id} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <alert.icon className="w-6 h-6 text-primary" /> {alert.title}
                </CardTitle>
                <Badge variant={alert.badgeVariant}>{alert.type}</Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <CalendarClock className="w-4 h-4 mr-1.5" />
                <span>Data: {new Date(alert.date).toLocaleString('ro-RO')} | Durata estimată: {alert.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium mb-1">Zona afectată: <span className="font-normal">{alert.affectedArea}</span></p>
              <CardDescription className="text-base">{alert.details}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="p-0 h-auto">
                <Link href={`/info-cartier/alerte/${alert.id}`}>Vezi detalii complete</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
        {alertItems.length === 0 && (
          <p className="text-center text-muted-foreground py-10">Momentan nu sunt alerte active în cartier.</p>
        )}
      </div>
    </div>
  );
}
