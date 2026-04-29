
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Lock, Fingerprint, Server, Radio } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function SecurityPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="bg-background flex flex-col font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-1">
        <Button 
          variant="ghost" 
          onClick={() => router.back()} 
          className="mb-8 gap-2 rounded-full hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>

        <header className="mb-16 space-y-4">
          <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-2xl border border-primary/20">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-headline font-bold tracking-tight">Protocolos de Segurança</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Na Codworks Moz, a segurança não é uma funcionalidade, é a nossa fundação. <br/>
            Implementamos padrões de nível militar para proteger o teu progresso e identidade.
          </p>
        </header>

        <div className="grid gap-8 mb-20">
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card/40 border border-white/5 rounded-[2rem] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-headline font-bold">Encriptação de Dados</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todos os dados em trânsito são protegidos via TLS 1.3. Dados em repouso são encriptados utilizando AES-256, garantindo que apenas tu tens acesso às tuas submissões de código.
              </p>
            </div>

            <div className="p-8 bg-card/40 border border-white/5 rounded-[2rem] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-headline font-bold">Autenticação Multi-factor</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suportamos MFA via TOTP e WebAuthn. Recomendamos vivamente a ativação desta camada extra no teu perfil para prevenir acessos não autorizados.
              </p>
            </div>

            <div className="p-8 bg-card/40 border border-white/5 rounded-[2rem] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-headline font-bold">Infraestrutura Isolada</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O teu código corre em ambientes de sandbox isolados. Tentativas de injeção ou fuga do contentor são bloqueadas instantaneamente pelo nosso kernel de segurança.
              </p>
            </div>

            <div className="p-8 bg-card/40 border border-white/5 rounded-[2rem] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Radio className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-headline font-bold">Monitorização 24/7</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A nossa equipa de DevOps monitoriza anomalias em tempo real. Qualquer comportamento suspeito dispara um alerta imediato para o nosso centro de operações.
              </p>
            </div>
          </section>

          <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/20 text-center space-y-4">
            <h3 className="text-2xl font-headline font-bold text-primary">Encontraste uma vulnerabilidade?</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Operamos um programa de Bug Bounty. Se fores um engenheiro de segurança e encontrares um erro, reporta para <span className="text-primary font-mono underline">security@codworks.mz</span>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
