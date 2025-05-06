"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { UserPlus } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Numele complet trebuie să conțină cel puțin 3 caractere." }),
  email: z.string().email({ message: "Adresă de email invalidă." }),
  password: z.string().min(6, { message: "Parola trebuie să conțină cel puțin 6 caractere." }),
  confirmPassword: z.string().min(6, { message: "Confirmarea parolei trebuie să conțină cel puțin 6 caractere." }),
  agreeToTerms: z.boolean().refine(val => val === true, { message: "Trebuie să fii de acord cu Termenii și Condițiile." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Parolele nu se potrivesc.",
  path: ["confirmPassword"], // path of error
});

export default function InregistrarePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement actual registration logic
    console.log(values);
    // Example: redirect to login or dashboard after registration
    // router.push('/autentificare'); 
  }

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <UserPlus className="w-7 h-7 text-primary" /> Creare Cont Nou
          </CardTitle>
          <CardDescription>Alătură-te comunității Sector 1 Digital Hub.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nume Complet</FormLabel>
                    <FormControl>
                      <Input placeholder="Popescu Ion" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmă Parola</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Sunt de acord cu <Button variant="link" asChild className="p-0 h-auto"><Link href="/termeni-si-conditii" target="_blank">Termenii și Condițiile</Link></Button>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Creează cont
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Ai deja cont?{" "}
            <Button variant="link" asChild className="p-0 h-auto text-sm">
              <Link href="/autentificare">Autentifică-te</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
