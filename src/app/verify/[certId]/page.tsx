"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, XCircle, Loader2, Award, User, Calendar, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VerificationPage() {
  const params = useParams();
  const certId = params.certId as string;
  
  const [cert, setCert] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function verify() {
      setLoading(true);
      const { data, error } = await supabase
        .from('certificates')
        .select('*, profiles:user_id (display_name, avatar_url)')
        .eq('id', certId)
        .single();
      
      if (error || !data) {
        setError(true);
      } else {
        setCert(data);
      }
      setLoading(false);
    }
    verify();
  }, [certId]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 font-body">
      <div className="mb-12">
         <Logo className="h-40 w-auto" />
      </div>

      {loading ? (
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground font-medium animate-pulse">Verificando credencial na infraestrutura Codworks...</p>
        </div>
      ) : error ? (
        <Card className="w-full max-w-md border-destructive/20 bg-destructive/5 rounded-[2.5rem]">
          <CardContent className="pt-10 pb-10 text-center space-y-6">
            <XCircle className="w-20 h-20 text-destructive mx-auto" />
            <div className="space-y-2">
              <h2 className="text-2xl font-headline font-bold">Certificado Não Encontrado</h2>
              <p className="text-sm text-muted-foreground">Esta credencial não existe ou foi revogada pelo sistema de auditoria.</p>
            </div>
            <Link href="/" className="block">
              <Button variant="outline" className="rounded-full px-8">Voltar ao Início</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="w-full max-w-2xl space-y-8 animate-in fade-in zoom-in duration-700">
           <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-black uppercase tracking-widest">
                 <CheckCircle2 className="w-4 h-4" /> Credencial Autêntica
              </div>
              <h1 className="text-4xl font-headline font-bold">Verificação de Elite</h1>
           </div>

           <Card className="border-none shadow-[0_30px_100px_rgba(0,0,0,0.4)] bg-card/60 backdrop-blur-xl rounded-[3rem] overflow-hidden">
              <div className="h-4 bg-primary" />
              <CardContent className="p-12 space-y-10">
                 <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                    <div className="w-24 h-24 rounded-full bg-secondary border-4 border-background overflow-hidden shadow-2xl">
                       <img src={cert.profiles?.avatar_url || 'https://picsum.photos/seed/user/200'} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-primary">Engenheiro Certificado</p>
                       <h3 className="text-3xl font-headline font-bold">{cert.profiles?.display_name}</h3>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-2"><Award className="w-3 h-3" /> Especialização</p>
                       <p className="font-bold text-lg">{cert.level_title}</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase text-muted-foreground flex items-center gap-2"><Calendar className="w-3 h-3" /> Data de Emissão</p>
                       <p className="font-bold text-lg">{new Date(cert.issued_at).toLocaleDateString('pt-MZ', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                 </div>

                 <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                    <p className="text-[9px] font-black uppercase text-primary mb-2">Hash de Verificação</p>
                    <code className="text-xs break-all opacity-70 font-mono">{cert.id}</code>
                 </div>

                 <div className="text-center pt-4">
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      A Codworks Moz garante que este utilizador concluiu com sucesso todos os requisitos técnicos, 
                      quizzes de engenharia e laboratórios práticos exigidos para este nível.
                    </p>
                 </div>
              </CardContent>
           </Card>

           <div className="flex justify-center">
              <Link href="/modules">
                 <Button variant="link" className="text-muted-foreground hover:text-primary font-bold">
                    Conheça o Currículo de Engenharia Codworks →
                 </Button>
              </Link>
           </div>
        </div>
      )}
    </div>
  );
}