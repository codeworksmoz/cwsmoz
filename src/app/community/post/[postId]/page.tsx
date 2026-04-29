"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/components/LanguageContext";
import { MessageSquare, ArrowLeft, Send, Loader2, User, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function PostDetailPage() {
  const params = useParams();
  const postId = params.postId as string;
  const router = useRouter();
  const { user } = useAuth();
  const { t } = useLanguage();
  const { toast } = useToast();

  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    async function fetchPostAndComments() {
      if (!postId) return;
      setLoading(true);
      try {
        const { data: postData, error: postError } = await supabase
          .from('community_posts')
          .select(`*, profiles(display_name, avatar_url)`)
          .eq('id', postId)
          .single();
        
        if (postError) throw postError;
        if (postData) setPost(postData);

        const { data: commentsData, error: commentsError } = await supabase
          .from('community_comments')
          .select(`*, profiles(display_name, avatar_url)`)
          .eq('post_id', postId)
          .order('created_at', { ascending: true });
        
        if (commentsError) throw commentsError;
        if (commentsData) setComments(commentsData);
      } catch (err: any) {
        console.error('Erro ao carregar post:', err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPostAndComments();
  }, [postId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    setIsCommenting(true);
    try {
      const { data, error } = await supabase
        .from('community_comments')
        .insert({
          post_id: postId,
          user_id: user.id,
          content: newComment.trim()
        })
        .select(`*, profiles(display_name, avatar_url)`)
        .single();

      if (error) throw error;

      if (data) {
        setComments(prev => [...prev, data]);
        setNewComment("");
        toast({ title: "Resposta enviada!", description: "Obrigado por ajudar a comunidade." });
      }
    } catch (err: any) {
      console.error('Erro ao comentar:', err);
      toast({ variant: "destructive", title: "Erro ao comentar", description: err.message });
    } finally {
      setIsCommenting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center p-20 text-center gap-4">
          <p className="text-xl font-bold opacity-50">Discussão não encontrada.</p>
          <Button onClick={() => router.push('/community')}>Voltar ao Fórum</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-1 scroll-container">
        <Button variant="ghost" onClick={() => router.push('/community')} className="mb-8 gap-2 rounded-full">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Fórum
        </Button>

        <Card className="bg-card/40 border-primary/20 shadow-2xl rounded-[2.5rem] overflow-hidden mb-12">
          <CardContent className="p-10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarImage src={post.profiles?.avatar_url} />
                  <AvatarFallback><User className="w-6 h-6" /></AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{post.profiles?.display_name || 'Estudante Moz'}</p>
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {new Date(post.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              {post.exercise_id && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-black text-[10px] uppercase">
                   LAB: {post.exercise_id}
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-headline font-bold">{post.title}</h1>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{post.content}</p>
          </CardContent>
        </Card>

        <div className="space-y-8 mb-20">
          <h3 className="font-headline text-xl font-bold flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            Respostas ({comments.length})
          </h3>

          <div className="space-y-6">
            {comments.map((comment) => (
              <Card key={comment.id} className="bg-card/20 border-white/5 rounded-3xl overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src={comment.profiles?.avatar_url} />
                      <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-bold">{comment.profiles?.display_name || 'Colaborador'}</p>
                      <p className="text-[9px] text-muted-foreground">{new Date(comment.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{comment.content}</p>
                </CardContent>
              </Card>
            ))}

            {comments.length === 0 && (
              <div className="text-center py-10 opacity-40 italic text-sm">
                Ainda não há respostas. Seja o primeiro a ajudar!
              </div>
            )}
          </div>

          {user ? (
            <Card className="bg-primary/5 border-primary/20 rounded-[2rem] mt-12">
              <CardHeader>
                <CardTitle className="text-lg">Tua Resposta</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <Textarea 
                    placeholder="Escreve aqui a tua solução ou sugestão técnica..."
                    className="min-h-[120px] rounded-2xl bg-background/50 resize-none"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    disabled={isCommenting}
                  />
                  <Button type="submit" className="w-full h-12 rounded-xl font-bold gap-2" disabled={isCommenting}>
                    {isCommenting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Enviar Comentário
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center p-8 bg-secondary/20 rounded-2xl border-dashed border-2">
              <p className="text-sm text-muted-foreground">Faz login para responder a esta discussão.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
