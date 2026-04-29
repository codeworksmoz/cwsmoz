"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/components/LanguageContext";
import { MessageSquare, ArrowLeft, Send, Loader2, Info, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ExerciseCommunityPage() {
  const params = useParams();
  const exerciseId = params.exerciseId as string;
  const router = useRouter();
  const { user } = useAuth();
  const { t } = useLanguage();
  const { toast } = useToast();

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      if (!exerciseId) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('community_posts')
          .select(`*, profiles(display_name, avatar_url)`)
          .eq('exercise_id', exerciseId)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        if (data) setPosts(data);
      } catch (err: any) {
        console.error('Erro ao buscar posts:', err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [exerciseId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({ 
        variant: "destructive", 
        title: "Acesso Negado", 
        description: "Precisas de estar logado para pedir ajuda." 
      });
      return;
    }

    if (!newTitle.trim() || !newContent.trim()) {
      toast({ variant: "destructive", title: "Campos vazios", description: "Preenche o título e a mensagem." });
      return;
    }

    setIsPosting(true);
    try {
      const { data, error } = await supabase
        .from('community_posts')
        .insert({
          user_id: user.id,
          exercise_id: exerciseId,
          title: newTitle.trim(),
          content: newContent.trim()
        })
        .select(`*, profiles(display_name, avatar_url)`)
        .single();

      if (error) throw error;

      if (data) {
        setPosts(prev => [data, ...prev]);
        setNewTitle("");
        setNewContent("");
        toast({ 
          title: "Dúvida Enviada!", 
          description: "A tua dúvida foi publicada. Alguém da comunidade irá ajudar em breve." 
        });
      }
    } catch (err: any) {
      console.error('Erro ao publicar:', err);
      toast({ 
        variant: "destructive", 
        title: "Erro ao publicar", 
        description: err.message || "Ocorreu um erro inesperado." 
      });
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-1 scroll-container">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8 gap-2 rounded-full">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Laboratório
        </Button>

        <header className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
             </div>
             <div>
                <h1 className="text-3xl font-headline font-bold uppercase tracking-tight">Laboratório: {exerciseId}</h1>
                <p className="text-muted-foreground">Fórum de ajuda específico para este desafio.</p>
             </div>
          </div>
        </header>

        <div className="space-y-12 mb-20">
          {user ? (
            <Card className="bg-card/50 border-primary/20 shadow-2xl overflow-hidden rounded-[2rem]">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-lg flex items-center gap-2">
                   <Send className="w-4 h-4 text-primary" /> {t.createPost}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                 <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      placeholder="Título curto (ex: Erro no loop for)" 
                      className="rounded-xl h-12 bg-background/50"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      required
                      disabled={isPosting}
                    />
                    <Textarea 
                      placeholder="Explica o que estás a tentar fazer e qual é o erro específico que encontraste..." 
                      className="min-h-[150px] rounded-xl bg-background/50 resize-none"
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      required
                      disabled={isPosting}
                    />
                    <Button type="submit" className="w-full rounded-xl h-12 font-bold gap-2 shadow-lg shadow-primary/20" disabled={isPosting}>
                      {isPosting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      Publicar Pedido de Ajuda
                    </Button>
                 </form>
              </CardContent>
            </Card>
          ) : (
            <Alert className="bg-primary/5 border-primary/20 rounded-2xl">
              <Info className="h-4 w-4" />
              <AlertTitle>Faz login para participar</AlertTitle>
              <AlertDescription>Precisas de estar autenticado para criar um pedido de ajuda neste exercício.</AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
             <h3 className="font-headline text-xl font-bold flex items-center gap-3">
                Discussões Ativas
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{posts.length}</span>
             </h3>

             {loading ? (
                <div className="text-center py-10">
                   <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
                </div>
             ) : posts.length > 0 ? (
                posts.map(post => (
                  <Card key={post.id} className="bg-card/40 border-white/5 hover:border-primary/20 transition-all shadow-xl rounded-2xl">
                    <CardContent className="p-6 space-y-4">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <Avatar className="w-8 h-8 border">
                                <AvatarImage src={post.profiles?.avatar_url} />
                                <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                             </Avatar>
                             <div>
                                <p className="text-xs font-bold leading-none">{post.profiles?.display_name || 'Estudante Moz'}</p>
                                <p className="text-[10px] text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</p>
                             </div>
                          </div>
                          <span className="text-[9px] font-bold bg-secondary px-2 py-0.5 rounded-md uppercase text-muted-foreground">Pendente</span>
                       </div>
                       <h4 className="text-lg font-bold font-headline">{post.title}</h4>
                       <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">{post.content}</p>
                       <Separator className="opacity-10" />
                       <div className="flex justify-end">
                         <Button variant="link" onClick={() => router.push(`/community/post/${post.id}`)} className="p-0 h-auto text-primary text-xs font-bold hover:no-underline">
                            Ver Soluções e Respostas →
                         </Button>
                       </div>
                    </CardContent>
                  </Card>
                ))
             ) : (
                <div className="text-center py-20 bg-card/10 rounded-[2rem] border-2 border-dashed border-white/5">
                   <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                   <h3 className="text-xl font-bold opacity-60 mb-2">Ainda não há dúvidas!</h3>
                   <p className="text-muted-foreground text-sm max-w-xs mx-auto">Sê o primeiro a pedir ajuda. Não tenhas vergonha de aprender!</p>
                </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}
