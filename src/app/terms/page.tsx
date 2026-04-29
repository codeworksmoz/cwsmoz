
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Scale, ShieldAlert, FileText, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function TermsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-3xl flex-1">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/login')} 
          className="mb-8 gap-2 rounded-full hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4" /> {t.backToLogin}
        </Button>

        <header className="mb-12 space-y-4">
          <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-xl border border-primary/20">
            <Scale className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tight">{t.terms}</h1>
          <p className="text-muted-foreground text-lg italic">Última atualização: Março de 2026</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12 mb-20">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <FileText className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0">01. Aceitação dos Termos</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Ao aceder à plataforma Codworks Moz, o utilizador concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. A Codworks Moz reserva-se o direito de atualizar estes termos para refletir melhorias no currículo ou mudanças legislativas.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <ShieldAlert className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0">02. Propriedade Intelectual</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Todo o conteúdo do currículo, incluindo códigos, vídeos e metodologias de ensino, são propriedade exclusiva da Codworks Moz. É proibida a redistribuição ou revenda dos materiais sem autorização prévia por escrito.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Globe className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0">03. Uso da Plataforma</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              A plataforma destina-se ao uso educacional. Atividades maliciosas, como tentativas de injeção de código nos servidores ou abuso dos sistemas de recompensa, resultarão no banimento imediato da conta.
            </p>
          </section>

          <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/20 mt-16 text-center">
            <p className="font-bold text-primary mb-2">Dúvidas sobre os nossos termos?</p>
            <p className="text-sm text-muted-foreground">Envie uma mensagem para a nossa equipa jurídica em <span className="text-primary font-mono underline">legal@codworks.mz</span></p>
          </div>
        </div>
      </main>
    </div>
  );
}
