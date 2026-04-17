'use client';

import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from "@/context/I18nContext";
import { useSearchParams } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useToast } from "@/hooks/use-toast";

export default function LoginComponent() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInWithPassword, signInWithGithub } = useAuth();
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu e-mail e senha.",
      });
      setLoading(false);
      return;
    }
    
    const redirectPath = searchParams.get('redirect');
    const { error } = await signInWithPassword(email, password, redirectPath);
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Falha no login.",
        description: error.message || "E-mail ou senha incorretos.",
      });
    } else {
       toast({
        title: "Login bem-sucedido!",
        description: "Bem-vindo de volta!",
      });
    }
    setLoading(false);
  };
  
  const handleGithubLogin = async () => {
    setLoading(true);
    await signInWithGithub();
    // No need to set loading to false here as the page will redirect
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute left-4 top-4">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('Login.back_to_home')}
          </Link>
        </Button>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
             <Logo />
          </div>
          <CardTitle className="text-2xl font-headline">{t('Login.title')}</CardTitle>
          <CardDescription>
            {t('Login.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">{t('Login.email_label')}</Label>
              <Input id="email" type="email" placeholder="nome@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('Login.password_label')}</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t('Login.loading_button') : t('Login.submit_button')}
            </Button>
          </form>
           <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t('Login.or_continue_with')}
              </span>
            </div>
          </div>
           <Button variant="outline" className="w-full" onClick={handleGithubLogin} disabled={loading}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
        </CardContent>
         <CardFooter className="justify-center">
            <p className="mt-4 text-center text-sm">
                 {t('Login.no_account')}{" "}
                <Link href="/cadastro" className="underline">
                {t('Login.signup_link')}
                </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
