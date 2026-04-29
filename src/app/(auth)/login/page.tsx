'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Chrome, Loader2, ArrowLeft, UserPlus, LogIn, KeyRound } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/components/LanguageContext';

export default function LoginPage() {
  const router = useRouter();
  const { user, signInWithEmail, signInWithPassword, signUp, resetPassword, signInWithGoogle, signInWithGithub, loading } = useAuth();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Redireciona se o utilizador já estiver logado (útil no modo bypass)
  useEffect(() => {
    if (user && !loading) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      await signInWithEmail(email);
      setIsSent(true);
      toast({ title: "Link enviado!", description: `Verifique o seu email ${email} para entrar.` });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Erro", description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signInWithPassword(email, password);
      router.replace('/dashboard');
    } catch (error: any) {
      toast({ variant: "destructive", title: "Erro no login", description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signUp(email, password, displayName);
      toast({ title: "Conta criada!", description: "Verifique o seu email para confirmar a conta." });
      setMode('login');
    } catch (error: any) {
      toast({ variant: "destructive", title: "Erro no registo", description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await resetPassword(email);
      setIsSent(true);
      toast({ title: "Email enviado!", description: "Instruções de recuperação enviadas para o seu email." });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Erro", description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background p-4 overflow-y-auto scroll-container">
      <Card className="w-full max-w-md border-none shadow-2xl bg-card/50 backdrop-blur-sm rounded-[2.5rem] my-8">
        <CardHeader className="text-center pt-8">
          <CardTitle className="text-4xl font-headline font-bold">Codworks <span className="text-primary">Moz</span></CardTitle>
          <CardDescription>
            {mode === 'login' ? "Bem-vindo de volta, dev!" : 
             mode === 'signup' ? "Inicia a tua jornada hoje." : 
             "Recuperar o teu acesso"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          
          {mode === 'forgot' ? (
            <div className="space-y-6 animate-in fade-in zoom-in duration-300">
               {isSent ? (
                  <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 text-center">
                    <p className="text-primary font-bold">Email Enviado! ✉️</p>
                    <p className="text-xs mt-2 text-muted-foreground">Verifique a sua caixa de entrada e siga as instruções.</p>
                  </div>
               ) : (
                  <form onSubmit={handleReset} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">{t.email}</Label>
                      <Input id="reset-email" type="email" placeholder="dev@codworks.mz" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-xl h-12" />
                    </div>
                    <Button type="submit" className="w-full h-12 rounded-xl font-bold" disabled={isSubmitting}>
                       {isSubmitting ? <Loader2 className="animate-spin" /> : "Enviar Instruções"}
                    </Button>
                  </form>
               )}
               <Button variant="ghost" onClick={() => setMode('login')} className="w-full gap-2 rounded-xl">
                  <ArrowLeft className="w-4 h-4" /> {t.backToLogin}
               </Button>
            </div>
          ) : (
            <Tabs defaultValue="login" className="w-full" onValueChange={(v) => setMode(v as any)}>
              <TabsList className="grid grid-cols-2 w-full mb-6 bg-secondary/50 rounded-2xl p-1 h-12">
                <TabsTrigger value="login" className="rounded-xl data-[state=active]:bg-background font-bold gap-2">
                  <LogIn className="w-3.5 h-3.5" /> {t.login}
                </TabsTrigger>
                <TabsTrigger value="signup" className="rounded-xl data-[state=active]:bg-background font-bold gap-2">
                  <UserPlus className="w-3.5 h-3.5" /> {t.createAccount}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6 animate-in fade-in duration-500">
                 <form onSubmit={handlePasswordLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.email}</Label>
                      <Input id="email" type="email" placeholder="teu@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password">{t.password}</Label>
                        <button type="button" onClick={() => setMode('forgot')} className="text-[10px] font-bold text-primary hover:underline">
                          {t.forgotPassword}
                        </button>
                      </div>
                      <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required className="rounded-xl h-12" />
                    </div>
                    <Button type="submit" className="w-full h-12 rounded-xl font-bold shadow-lg shadow-primary/20" disabled={isSubmitting}>
                       {isSubmitting ? <Loader2 className="animate-spin" /> : "Entrar"}
                    </Button>
                 </form>

                 <div className="relative">
                    <div className="absolute inset-0 flex items-center"><Separator className="w-full" /></div>
                    <div className="relative flex justify-center text-[10px] uppercase">
                      <span className="bg-background px-3 text-muted-foreground font-black tracking-widest italic">Ou Alternativa</span>
                    </div>
                 </div>

                 <Button variant="outline" onClick={handleMagicLink} className="w-full h-12 rounded-xl gap-2 border-primary/20 text-primary hover:bg-primary/5" disabled={isSubmitting}>
                    <Mail className="w-4 h-4" /> Link Mágico por Email
                 </Button>
              </TabsContent>

              <TabsContent value="signup" className="space-y-6 animate-in fade-in duration-500">
                 <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reg-name">Nome Completo</Label>
                      <Input id="reg-name" placeholder="Ex: Edson da Cruz" value={displayName} onChange={e => setDisplayName(e.target.value)} required className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">{t.email}</Label>
                      <Input id="reg-email" type="email" placeholder="teu@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">{t.password}</Label>
                      <Input id="reg-password" type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={e => setPassword(e.target.value)} required className="rounded-xl h-12" />
                    </div>
                    <Button type="submit" className="w-full h-12 rounded-xl font-bold bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20" disabled={isSubmitting}>
                       {isSubmitting ? <Loader2 className="animate-spin" /> : "Criar Minha Conta"}
                    </Button>
                 </form>
              </TabsContent>
            </Tabs>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" className="h-12 rounded-xl bg-secondary/50 hover:bg-secondary" onClick={signInWithGoogle}>
              <Chrome className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button variant="secondary" className="h-12 rounded-xl bg-secondary/50 hover:bg-secondary" onClick={signInWithGithub}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>

          <p className="text-center text-[10px] text-muted-foreground leading-relaxed px-4">
            {t.agreeToTerms}{" "}
            <Link href="/terms" className="text-primary hover:underline font-bold">{t.terms}</Link> e{" "}
            <Link href="/privacy" className="text-primary hover:underline font-bold">{t.privacy}</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}