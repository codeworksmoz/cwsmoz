"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Globe, Mail, Rocket, Building2, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PartnersPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl flex-1">
        <Button 
          variant="ghost" 
          onClick={() => router.back()} 
          className="mb-8 gap-2 rounded-full hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>

        <header className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2.5rem] bg-accent/10 mb-6 border-2 border-accent/20 shadow-2xl">
            <Handshake className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tight">Parceiros de Ecossistema</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Colaboramos com as mentes e empresas mais inovadoras para transformar Moçambique num hub tecnológico global.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-card/40 border-white/5 rounded-[2rem] p-8 text-center space-y-4 shadow-xl group hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-headline font-bold">Tech Hubs</h3>
            <p className="text-sm text-muted-foreground">Parcerias com espaços de co-working e incubadoras em Maputo, Beira e Nampula.</p>
          </Card>

          <Card className="bg-card/40 border-white/5 rounded-[2rem] p-8 text-center space-y-4 shadow-xl group hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-headline font-bold">Empresas de Elite</h3>
            <p className="text-sm text-muted-foreground">Acesso prioritário a talentos formados na nossa plataforma para recrutamento de alto nível.</p>
          </Card>

          <Card className="bg-card/40 border-white/5 rounded-[2rem] p-8 text-center space-y-4 shadow-xl group hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-headline font-bold">ONGs & Governo</h3>
            <p className="text-sm text-muted-foreground">Projetos de impacto social para massificar a literacia digital e engenharia no país.</p>
          </Card>
        </div>

        <section className="bg-primary/5 border border-primary/20 rounded-[3rem] p-12 text-center space-y-6">
          <h2 className="text-3xl font-headline font-bold text-primary">Queres ser nosso parceiro?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Se representas uma empresa ou instituição que acredita no poder da engenharia de software, entra em contacto connosco.
          </p>
          <Button size="lg" className="rounded-full px-12 h-14 font-bold text-lg shadow-lg shadow-primary/20">
            <Mail className="w-5 h-5 mr-2" /> parcerias@codworks.mz
          </Button>
        </section>
      </main>
    </div>
  );
}
