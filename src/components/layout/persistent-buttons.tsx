'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, X, Volume2, Settings2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export default function PersistentButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Initial greeting from assistant
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          id: 'greeting',
          sender: 'assistant',
          text: 'Salut! Eu sunt Vecinul Digital din Sectorul 1 și sunt aici să te ajut. Ce informații cauți?',
          timestamp: new Date(),
        },
      ]);
    }
  }, []);


  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    };

    // Simulate assistant response
    const assistantResponse: ChatMessage = {
      id: `assistant-${Date.now()}`,
      sender: 'assistant',
      text: `Am primit mesajul tău: "${userInput}". Momentan sunt un asistent simplu, dar în viitor voi putea oferi răspunsuri mai detaliate.`,
      timestamp: new Date(),
    };

    setChatMessages((prevMessages) => [...prevMessages, newUserMessage, assistantResponse]);
    setUserInput('');
  };

  if (!isMounted) {
    return null; // Avoid rendering on server to prevent hydration issues
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full h-14 w-14 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
              onClick={() => setIsAccessibilityOpen(true)}
              aria-label="Deschide meniul de accesibilitate"
            >
              <Users className="h-7 w-7" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Accesibilitate</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full h-14 w-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              onClick={() => setIsChatOpen(true)}
              aria-label="Deschide asistentul virtual"
            >
              <MessageSquare className="h-7 w-7" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Vecinul Digital</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Virtual Assistant Chat Sheet */}
      <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
        <SheetContent className="flex flex-col p-0">
          <SheetHeader className="p-6 pb-2 border-b">
            <SheetTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/assistant/40/40" alt="Vecinul Digital" data-ai-hint="robot avatar"/>
                <AvatarFallback>VD</AvatarFallback>
              </Avatar>
              Vecinul Digital
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-grow p-6">
            <div className="space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg px-4 py-2 text-sm ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {msg.text}
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-secondary-foreground/70 text-left'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                type="text"
                placeholder="Scrie mesajul tău..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-grow"
                aria-label="Mesaj pentru asistentul virtual"
              />
              <Button type="submit" size="icon" aria-label="Trimite mesajul">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Accessibility Options Sheet */}
      <Sheet open={isAccessibilityOpen} onOpenChange={setIsAccessibilityOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Settings2 className="h-6 w-6" />
              Opțiuni de Accesibilitate
            </SheetTitle>
            <SheetDescription>
              Personalizează experiența pentru nevoile tale.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4 space-y-6">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <label htmlFor="screen-reader-toggle" className="text-sm font-medium">
                Screen Reader
              </label>
              <Button variant="outline" size="icon" id="screen-reader-toggle" aria-label="Activează/Dezactivează screen reader">
                <Volume2 className="h-5 w-5" />
              </Button>
            </div>
            {/* Add more accessibility options here as needed */}
            <p className="text-xs text-muted-foreground">
              Mai multe opțiuni de accesibilitate vor fi disponibile în curând.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
