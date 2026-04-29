
"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Book, Code, GraduationCap, Shield, Terminal, Users, Database, Zap, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DocumentationPage() {
  const router = useRouter();

  const sections = [
    {
      title: "O Currículo Híbrido",
      icon: Code,
      content: "A Codworks Moz utiliza uma arquitetura híbrida onde o conteúdo pedagógico reside em ficheiros estáticos versionados (Git), garantindo performance e integridade, enquanto o progresso é sincronizado em tempo real com o Supabase."
    },
    {
      title: "Níveis de Engenharia",
      icon: GraduationCap,
      content: "Nossa jornada está dividida em 8 níveis. Dos fundamentos de Ciência da Computação (Nível 1) até ao domínio profundo de linguagens específicas como Rust e Go (Nível 8)."
    },
    {
      title: "Laboratórios e Validação",
      icon: Terminal,
      content: "Cada laboratório prático possui um motor de validação que verifica o teu código em tempo real. No Nível 8, implementamos a 'Herança de Projeto', onde o código da aula anterior é a base da aula seguinte."
    }
  ];

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

        <header className="mb-16 space-y-4">
          <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-2xl border border-primary/20">
            <Book className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tight">Manual do Engenheiro</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Entenda como funciona o motor de aprendizagem da plataforma de engenharia mais avançada de Moçambique.
          </p>
        </header>

        <Tabs defaultValue="architecture" className="space-y-12 mb-20">
          <TabsList className="bg-secondary/50 p-1 rounded-2xl h-14 w-full md:w-fit grid grid-cols-2">
            <TabsTrigger value="architecture" className="rounded-xl px-8 font-bold">Arquitetura</TabsTrigger>
            <TabsTrigger value="mastery" className="rounded-xl px-8 font-bold">Nível 8: Mastery</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-8 animate-in fade-in duration-500">
            <div className="grid md:grid-cols-3 gap-6">
              {sections.map((section, idx) => (
                <Card key={idx} className="bg-card/40 border-white/5 rounded-[2rem] overflow-hidden shadow-xl hover:border-primary/30 transition-all">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl font-headline">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20 rounded-[2.5rem] p-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Database className="w-32 h-32" /></div>
              <h2 className="text-2xl font-headline font-bold text-primary mb-6">Persistência de Estado</h2>
              <div className="space-y-4 max-w-2xl">
                 <p className="text-muted-foreground">O teu progresso é guardado em três camadas para garantir resiliência total:</p>
                 <ul className="space-y-4">
                    <li className="flex gap-4">
                       <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-1">1</div>
                       <div>
                          <p className="font-bold">Local Storage:</p>
                          <p className="text-xs text-muted-foreground">O código que estás a escrever no momento é guardado no browser a cada tecla digitada.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-1">2</div>
                       <div>
                          <p className="font-bold">Sync Database (Supabase):</p>
                          <p className="text-xs text-muted-foreground">Ao submeteres uma solução, o teu código final e progresso são enviados para a nossa infraestrutura cloud.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-1">3</div>
                       <div>
                          <p className="font-bold">Relatórios de Auditoria:</p>
                          <p className="text-xs text-muted-foreground">O motor gera estatísticas de proficiência que validam o teu pedido de certificação.</p>
                       </div>
                    </li>
                 </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mastery" className="space-y-8 animate-in slide-in-from-right-4 duration-500">
             <div className="max-w-3xl space-y-6">
                <div className="flex items-center gap-3">
                   <Zap className="w-8 h-8 text-accent" />
                   <h2 className="text-3xl font-headline font-bold">O Projeto Master Cumulativo</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                   Diferente dos níveis básicos onde os laboratórios são isolados, o Nível 8 introduz a <strong>Herança de Projeto</strong>. 
                </p>
                
                <div className="grid gap-6">
                   <div className="p-8 bg-card/40 border border-white/5 rounded-3xl space-y-4">
                      <h4 className="font-bold text-accent flex items-center gap-2"><Sparkles className="w-4 h-4" /> Como funciona na prática?</h4>
                      <p className="text-sm text-muted-foreground">Se na aula de "Estrutura HTML" criaste um <code>index.html</code>, na aula seguinte de "Acessibilidade", o editor já iniciará com o código que escreveste anteriormente carregado. Tu constróis uma aplicação real, linha a linha, ao longo de 21 laboratórios.</p>
                   </div>
                   
                   <div className="p-8 bg-card/40 border border-white/5 rounded-3xl space-y-4">
                      <h4 className="font-bold text-accent flex items-center gap-2"><Shield className="w-4 h-4" /> Regras de Validação</h4>
                      <p className="text-sm text-muted-foreground">O motor de validação do Nível 8 não verifica apenas se o código "corre". Ele utiliza análise estática para garantir que as boas práticas de arquitetura e padrões de segurança de elite foram seguidos em cada etapa.</p>
                   </div>
                </div>
             </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
