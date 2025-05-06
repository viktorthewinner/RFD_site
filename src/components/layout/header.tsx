import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe, LogIn, Menu, Search, UserPlus } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: '/info-cartier', label: 'Info Cartier' },
  { href: '/resurse', label: 'Resurse' },
  { href: '/cetateni', label: 'Cetățeni' },
];

const NavLinkItem = ({ href, label }: { href: string; label: string }) => (
  <Button variant="ghost" asChild className="text-sm font-medium text-foreground/80 hover:text-foreground">
    <Link href={href}>{label}</Link>
  </Button>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://picsum.photos/seed/logo/40/40" alt="Sector 1 Logo" width={32} height={32} className="rounded-sm" data-ai-hint="city logo" />
          <span className="font-semibold text-lg">Cartierul Meu</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Caută..." className="pl-8 sm:w-[200px] lg:w-[300px] rounded-full h-9" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Schimbă limba</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Română</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/autentificare">
                <LogIn className="mr-2 h-4 w-4" /> Autentificare
              </Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/inregistrare">
                <UserPlus className="mr-2 h-4 w-4" /> Înregistrare
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Deschide meniul</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Button variant="ghost" asChild className="justify-start text-base" key={link.href}>
                     <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <div className="relative mt-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Caută..." className="pl-8 w-full rounded-full h-9" />
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-6">
                   <Button variant="outline" asChild>
                    <Link href="/autentificare">
                      <LogIn className="mr-2 h-4 w-4" /> Autentificare
                    </Link>
                  </Button>
                  <Button variant="default" asChild>
                    <Link href="/inregistrare">
                      <UserPlus className="mr-2 h-4 w-4" /> Înregistrare
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
