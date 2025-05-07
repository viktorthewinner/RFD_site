import Link from 'next/link';
import { MapComponent } from '@/components/MapComponent'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-primary">Bun venit în Cartierul Universitate!</h1>
      <p className="text-xl text-muted-foreground mb-6">Rămâi conectat la tot ce se întâmplă în cartierul tău.</p>
      
      <div className="space-y-4 text-lg">
        <p>
 <Link href="/info-cartier" className="text-primary underline">Informează-te</Link>.
 <Link href="/resurse" className="text-primary underline"> Accesează servicii</Link>.
 Descoperă evenimente.
 <Link href="/cetateni" className="text-primary underline"> Semnalează probleme</Link>.

        </p>
      </div>
      <MapComponent />
    </div>
  );
}