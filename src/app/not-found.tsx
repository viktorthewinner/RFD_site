import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <TriangleAlert className="w-24 h-24 text-destructive mb-6" />
      <h1 className="text-5xl font-bold mb-4">404 - Pagina Nu A Fost Găsită</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! Se pare că pagina pe care o cauți nu există sau a fost mutată.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Acasă</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Suport</Link>
        </Button>
      </div>
    </div>
  );
}
