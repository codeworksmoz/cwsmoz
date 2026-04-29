
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Database, Lock } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function PrivacyPage() {
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
          <div className="w-20 h-20 rounded-[2rem] bg-green-500/10 flex items-center justify-center text-green-500 mb-6 shadow-xl border border-green-500/20">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tight">{t.privacy}</h1>
          <p className="text-muted-foreground text-lg italic">A tua privacidade é a nossa prioridade de engenharia.</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12 mb-20">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-green-500 mb-2">
              <Database className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0">Recolha de Dados</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Recolhemos apenas as informações necessárias para fornecer e melhorar o nosso serviço de aprendizagem. Isto inclui dados de perfil, progresso em lições e código submetido nos laboratórios para análise de proficiência.
            </p>
          </section>

          <section className="space-y-4">
             <div className="flex items-center gap-3 text-green-500 mb-2">
              <Lock className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0">Segurança dos Dados</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Implementamos medidas de segurança de nível industrial para proteger os seus dados. O seu código e dados pessoais são encriptados e armazenados em infraestrutura segura gerida pela nossa equipa de DevOps.
            </p>
          </section>

          <section className="space-y-4 border-l-4 border-green-500 pl-8 py-4 bg-green-500/5 rounded-r-2xl">
            <h2 className="text-xl font-bold m-0">Os Seus Direitos</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Tens o direito de aceder, exportar ou solicitar a eliminação definitiva dos teus dados a qualquer momento através das definições de perfil.
            </p>
          </section>

          <div className="text-center pt-10">
            <p className="text-xs text-muted-foreground">
              © 2026 Codworks Moz. <br/> Respeitamos integralmente a lei moçambicana de proteção de dados.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
