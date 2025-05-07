'use client'
import Link from 'next/link';
// import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe, LogIn, Menu, UserPlus } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: '/info-cartier', label: 'Info Cartier' },
  { href: '/resurse', label: 'Resurse' },
  { href: '/cetateni', label: 'Cetățeni' },
];
const translations: { [key: string]: { [key: string]: string } } = {
  ro: {
    'Info Cartier': 'Info Cartier',
    'Resurse': 'Resurse',
    'Cetățeni': 'Cetățeni',
    'Autentificare': 'Autentificare',
    'Înregistrare': 'Înregistrare',
  },
  en: {
    'Info Cartier': 'Neighborhood Info',
    'Resurse': 'Resources',
    'Cetățeni': 'Citizens',
    'Autentificare': 'Login',
    'Înregistrare': 'Register'
  },
};

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('ro');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ro';
    setLanguage(savedLanguage);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => localStorage.setItem('language', 'ro')}>Română</DropdownMenuItem>
        <DropdownMenuItem onClick={() => localStorage.setItem('language', 'en')}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const NavLinkItem = ({ href, label }: { href: string; label: string }) => {
  return (
  <Button variant="ghost" asChild className="text-sm font-medium text-foreground/80 hover:text-foreground">
    <Link href={href}>{label}</Link>
  </Button>
  );
}

export default function Header() {
  const [language, setLanguage] = useState<string>('ro');
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ro';
    setLanguage(savedLanguage);
    const handleStorageChange = () => {
      setLanguage(localStorage.getItem('language') || 'ro');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const translateText = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <>
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="https://picsum.photos/seed/logo/40/40" alt="Sector 1 Logo" width={32} height={32} className="rounded-sm" data-ai-hint="city logo" /> */}
          <span className="font-semibold text-lg">{translateText('Cartierul Meu')}</span> {/* Add translation here */} {/* Add logo placeholder or uncomment Image */}
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <div className="w-64"> {/* Adjusted width for the search bar */}
            <Input
              type="text"
              placeholder={translateText('Search...')} // Add translation here
              className="w-full"
            />
          </div>
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={translateText(link.label)} />
          ))}

          {/* Login and Register Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/autentificare">
                <LogIn className="mr-2 h-4 w-4" /> {translateText('Autentificare')}{' '}
              </Link>
            </Button>{' '}
            <Button variant="default" size="sm" asChild>
              <Link href="/inregistrare">{/* Translate text */}
                <UserPlus className="mr-2 h-4 w-4" /> {translateText('Înregistrare')}
              </Link>
            </Button>{' '}

            <LanguageSwitcher />
          </div>
        </nav>
{/* mobile navigation */}
        <div className="md:hidden flex items-center">
          <div className="w-40 mr-2"> {/* Adjusted width for the mobile search bar */}
            <Input
              type="text"
              placeholder={translateText('Search...')} // Add translation here
              className="w-full"
            />
          </div>
          <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="ghost" size="icon" className="h-9 w-9">
               <Globe className="h-5 w-5" />
               <span className="sr-only">{translateText('Schimbă limba')}</span>{' '}
             </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end">
             <DropdownMenuItem onClick={() => localStorage.setItem('language', 'ro')}>{translateText('Română')}</DropdownMenuItem>
             <DropdownMenuItem onClick={() => localStorage.setItem('language', 'en')}>{translateText('English')}</DropdownMenuItem>
           </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{translateText('Deschide meniul')}</span>{' '}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, index) => (
                  <NavLinkItem key={index} href={link.href} label={translateText(link.label)} />
                ))}
                <div className="mt-auto flex flex-col gap-2 pt-6">
                  <Button variant="outline" asChild>
                    <Link href="/autentificare">
                      <LogIn className="mr-2 h-4 w-4" /> {translateText('Autentificare')}
                    </Link>
                  </Button>
                  <Button variant="default" asChild>

                    <Link href="/inregistrare">
                      <UserPlus className="mr-2 h-4 w-4" /> {translateText('Înregistrare')}{' '}
                    </Link>
                  </Button>{' '}
                </div>{' '}
              </nav>
            </SheetContent>{' '}
          </Sheet>{' '}
        </div>{' '}
      </div>{' '}
    </div>
    </>
  );
}
