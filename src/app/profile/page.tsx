"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/contexts/ProgressContext";
import { useLanguage } from "@/components/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Zap, Star, Trophy, Calendar, MapPin, Edit2, Loader2, 
  MessageSquare, Award, ShieldCheck, Flame, Lock, 
  Fingerprint, Github, Chrome, Bell, LogOut, Check, KeyRound, RefreshCcw
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { useMemo, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const { user, profile, loading: authLoading, signOut, unlinkIdentity, updateProfile, updatePassword } = useAuth();
  const { progress, loading: progressLoading, syncPoints } = useProgress();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  
  // Edit Profile States
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Password States
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (profile) {
      setNewDisplayName(profile.display_name || "");
      setNewAvatarUrl(profile.avatar_url || "");
    }
  }, [profile]);

  const completedInL1 = useMemo(() => {
    return progress.filter(p => p.level_id === 1 && p.completed).length;
  }, [progress]);

  const level1Total = 21 * 7; 

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await updateProfile({
        display_name: newDisplayName,
        avatar_url: newAvatarUrl
      });
      toast({ title: "Perfil Atualizado", description: "Suas alterações foram guardadas com sucesso." });
      setIsEditDialogOpen(false);
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao atualizar", description: err.message });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      await syncPoints();
      toast({ title: "Sincronizado!", description: "Os teus pontos e posição no ranking foram actualizados." });
    } catch (err) {
      toast({ variant: "destructive", title: "Erro na sincronização" });
    } finally {
      setIsSyncing(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({ variant: "destructive", title: "Erro", description: "As senhas não coincidem." });
      return;
    }
    if (newPassword.length < 6) {
      toast({ variant: "destructive", title: "Erro", description: "A senha deve ter pelo menos 6 caracteres." });
      return;
    }

    setIsChangingPassword(true);
    try {
      await updatePassword(newPassword);
      toast({ title: "Senha Alterada", description: "O teu acesso foi atualizado com sucesso." });
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao atualizar", description: err.message });
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleUnlink = async (provider: string) => {
    try {
      await unlinkIdentity(provider);
      toast({ title: "Conta desvinculada", description: `A tua conta ${provider} foi removida.` });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro ao desvincular", description: err.message });
    }
  };

  if (!mounted || authLoading || progressLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-6xl flex-1 scroll-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden rounded-[2.5rem]">
              <div className="h-32 bg-gradient-to-br from-primary via-accent to-primary opacity-20" />
              <CardContent className="pt-0 -mt-16 text-center pb-8">
                <Avatar className="w-32 h-32 mx-auto border-8 border-background mb-4 shadow-xl">
                  <AvatarImage src={profile?.avatar_url || ""} />
                  <AvatarFallback className="text-4xl font-bold bg-secondary text-primary">
                    {profile?.display_name?.[0] || user?.email?.[0]}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-headline font-bold">{profile?.display_name}</h2>
                <p className="text-muted-foreground text-sm mb-6">{user?.email}</p>
                
                <div className="flex flex-col gap-3 px-4">
                  <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full font-bold gap-2 w-full">
                        <Edit2 className="w-3.5 h-3.5" /> Editar Perfil
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-[2.5rem]">
                      <DialogHeader>
                        <DialogTitle>Editar Perfil de Engenheiro</DialogTitle>
                        <DialogDescription>Altere suas informações de exibição na plataforma.</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleUpdateProfile} className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="displayName">Nome de Exibição</Label>
                          <Input 
                            id="displayName" 
                            value={newDisplayName} 
                            onChange={e => setNewDisplayName(e.target.value)} 
                            placeholder="Seu nome completo"
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="avatarUrl">URL do Avatar</Label>
                          <Input 
                            id="avatarUrl" 
                            value={newAvatarUrl} 
                            onChange={e => setNewAvatarUrl(e.target.value)} 
                            placeholder="Link da imagem (HTTPS)"
                            className="rounded-xl"
                          />
                        </div>
                        <DialogFooter className="pt-4">
                          <Button type="submit" disabled={isUpdating} className="rounded-xl gap-2">
                            {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                            Guardar Alterações
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="rounded-full font-bold gap-2 w-full bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <RefreshCcw className={cn("w-3.5 h-3.5", isSyncing && "animate-spin")} />
                    {isSyncing ? "Sincronizando..." : "Sincronizar Ranking"}
                  </Button>
                </div>
              </CardContent>
              <Separator className="opacity-10" />
              <CardContent className="py-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" /> <span>Maputo, Moçambique</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" /> 
                  <span>Membro desde {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-primary/5 rounded-[2rem] overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xs font-headline uppercase tracking-widest text-primary flex items-center gap-2">
                  <Trophy className="w-4 h-4" /> Estatísticas Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex justify-between items-center bg-background/40 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Zap className="w-5 h-5 text-primary fill-primary" />
                       <span className="text-sm font-medium">Pontos Totais</span>
                    </div>
                    <span className="font-bold">{profile?.total_points || 0}</span>
                 </div>
                 <div className="flex justify-between items-center bg-background/40 p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                       <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                       <span className="text-sm font-medium">Streak Atual</span>
                    </div>
                    <span className="font-bold">{profile?.streak || 0} dias</span>
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="bg-secondary/50 p-1 rounded-2xl h-14 w-full grid grid-cols-3 md:w-fit">
                <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-background font-bold px-4 md:px-8">
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger value="security" className="rounded-xl data-[state=active]:bg-background font-bold px-4 md:px-8">
                  Segurança
                </TabsTrigger>
                <TabsTrigger value="settings" className="rounded-xl data-[state=active]:bg-background font-bold px-4 md:px-8">
                  Definições
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
                 <section className="space-y-4">
                    <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" /> Domínio de Fundamentos (Nível 1)
                    </h3>
                    <Card className="bg-card/40 border-none shadow-xl p-8 rounded-3xl">
                      <div className="space-y-6">
                        <div className="space-y-3">
                           <div className="flex justify-between items-end">
                              <div>
                                <p className="text-[10px] uppercase font-bold text-primary tracking-tighter">Progresso do Nível</p>
                                <h4 className="text-lg font-bold">Arquitetura & Lógica Base</h4>
                              </div>
                              <span className="text-2xl font-bold text-primary">{Math.min(100, Math.round((completedInL1 / level1Total) * 100))}%</span>
                           </div>
                           <Progress value={(completedInL1 / level1Total) * 100} className="h-4 bg-secondary" />
                           <p className="text-xs text-muted-foreground">Faltam {Math.max(0, level1Total - completedInL1)} tópicos para dominar os fundamentos.</p>
                        </div>
                      </div>
                    </Card>
                 </section>

                 <section className="space-y-4">
                    <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" /> Conquistas Recentes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <Card className="bg-background/40 border-dashed border-2 p-6 flex flex-col items-center justify-center text-center opacity-40 rounded-3xl">
                          <Trophy className="w-8 h-8 mb-2" />
                          <p className="text-xs font-bold uppercase tracking-widest">Aguardando Certificação</p>
                       </Card>
                       <Card className="bg-background/40 border-dashed border-2 p-6 flex flex-col items-center justify-center text-center opacity-40 rounded-3xl">
                          <MessageSquare className="w-8 h-8 mb-2" />
                          <p className="text-xs font-bold uppercase tracking-widest">Colaborador Iniciante</p>
                       </Card>
                    </div>
                 </section>
              </TabsContent>

              <TabsContent value="security" className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                <div className="grid gap-6">
                  <Card id="password-reset" className="bg-card/40 border-none shadow-xl overflow-hidden rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2"><KeyRound className="w-5 h-5 text-primary" /> Alterar Senha</CardTitle>
                      <CardDescription>Crie uma nova credencial robusta para a sua conta.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                       <form onSubmit={handleUpdatePassword} className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="new-pass">Nova Senha</Label>
                              <Input id="new-pass" type="password" placeholder="Mínimo 6 caracteres" value={newPassword} onChange={e => setNewPassword(e.target.value)} required className="rounded-xl" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirm-pass">Confirmar Senha</Label>
                              <Input id="confirm-pass" type="password" placeholder="Repita a nova senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="rounded-xl" />
                            </div>
                          </div>
                          <Button type="submit" disabled={isChangingPassword} className="font-bold rounded-xl gap-2">
                             {isChangingPassword ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                             Atualizar Senha
                          </Button>
                       </form>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/40 border-none shadow-xl overflow-hidden rounded-3xl">
                    <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Lock className="w-5 h-5 text-primary" /> Contas Vinculadas</CardTitle></CardHeader>
                    <CardContent className="p-6 space-y-4">
                       <div className="flex items-center justify-between p-4 bg-background/40 rounded-2xl border border-white/5">
                          <div className="flex items-center gap-3">
                             <Chrome className="w-5 h-5 text-primary" />
                             <div><p className="text-sm font-bold">Google</p></div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-destructive font-bold" onClick={() => handleUnlink('google')}>Desvincular</Button>
                       </div>
                       <div className="flex items-center justify-between p-4 bg-background/40 rounded-2xl border border-white/5">
                          <div className="flex items-center gap-3">
                             <Github className="w-5 h-5 text-white" />
                             <div><p className="text-sm font-bold">GitHub</p></div>
                          </div>
                          <Button variant="secondary" size="sm" className="font-bold">Vincular</Button>
                       </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="bg-card/40 border-none shadow-xl rounded-3xl p-8">
                   <h4 className="text-lg font-bold mb-4">Definições da Conta</h4>
                   <div className="pt-4 border-t border-white/5 space-y-4">
                      <p className="text-sm text-muted-foreground">Encerrar a sessão removerá o acesso temporário deste dispositivo.</p>
                      <Button variant="destructive" className="h-12 rounded-xl font-bold w-full md:w-auto" onClick={signOut}>
                        <LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão
                      </Button>
                   </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}