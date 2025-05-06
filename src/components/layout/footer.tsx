import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Primăria Sectorului 1</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 shrink-0 text-primary" />
                <span>Bd. Banu Manta nr. 9, Sector 1, București</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 shrink-0 text-primary" />
                <a href="tel:0213191013" className="hover:text-primary transition-colors">021 319 1013</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 shrink-0 text-primary" />
                <a href="mailto:registratura@primarias1.ro" className="hover:text-primary transition-colors">registratura@primarias1.ro</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Linkuri Utile</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/info-cartier" className="hover:text-primary transition-colors">Info Cartier</Link></li>
              <li><Link href="/resurse" className="hover:text-primary transition-colors">Resurse</Link></li>
              <li><Link href="/cetateni" className="hover:text-primary transition-colors">Cetățeni</Link></li>
              <li><Link href="/harta-interactiva" className="hover:text-primary transition-colors">Hartă Interactivă</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/termeni-si-conditii" className="hover:text-primary transition-colors">Termeni și Condiții</Link></li>
              <li><Link href="/politica-de-confidentialitate" className="hover:text-primary transition-colors">Politică de Confidențialitate</Link></li>
              <li><Link href="/politica-cookies" className="hover:text-primary transition-colors">Politică de Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Primăria Sectorului 1. Toate drepturile rezervate.</p>
          <p>Dezvoltat pentru comunitatea Sectorului 1.</p>
        </div>
      </div>
    </footer>
  );
}
