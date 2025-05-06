"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { LogIn } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Adresă de email invalidă." }),
  password: z.string().min(6, { message: "Parola trebuie să conțină cel puțin 6 caractere." }),
});

export default function AutentificarePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual login logic
    console.log(values);
    // Example: redirect to home or dashboard after login
    // router.push('/'); 
  }

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-10rem)]"> {/* Adjust min-height based on header/footer */}
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <LogIn className="w-7 h-7 text-primary" /> Autentificare
          </CardTitle>
          <CardDescription>Accesează contul tău pentru a beneficia de toate funcționalitățile.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresă de Email</FormLabel>
                    <FormControl>
                      <Input placeholder="exemplu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parolă</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Intră în cont
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <Button variant="link" asChild className="text-sm">
            <Link href="/parola-uitata">Ai uitat parola?</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Nu ai cont?{" "}
            <Button variant="link" asChild className="p-0 h-auto text-sm">
              <Link href="/inregistrare">Înregistrează-te</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
