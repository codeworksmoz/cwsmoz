'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Send } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Label } from '@/components/ui/label';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Comment = {
  id: string;
  created_at: string;
  content: string;
  user_id: string;
  user_name: string | null;
  user_avatar_url: string | null;
};

function ForumContent() {
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const supabase = createClient();
  
  const exerciseId = searchParams.get('exerciseId');
  const exerciseTitle = searchParams.get('exerciseTitle');

  useEffect(() => {
    if (!exerciseId) return;

    // Fetch initial comments
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('forum_comments')
        .select('*')
        .eq('exercise_id', exerciseId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching comments:', error.message);
        toast({
          variant: 'destructive',
          title: 'Erro ao carregar comentários',
          description: 'Não foi possível buscar as discussões. Tente novamente mais tarde.',
        });
      } else {
        setComments(data || []);
      }
    };

    fetchComments();

    // Set up realtime subscription
    const channel = supabase
      .channel(`forum-comments-${exerciseId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'forum_comments', filter: `exercise_id=eq.${exerciseId}` },
        (payload) => {
          setComments((prevComments) => [...prevComments, payload.new as Comment]);
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [exerciseId, supabase, toast]);


  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user || !exerciseId) return;

    const { error } = await supabase.from('forum_comments').insert({
      exercise_id: exerciseId,
      user_id: user.id,
      user_name: user.full_name,
      content: newComment,
      // user_avatar_url can be added here if available in user profile
    });

    if (error) {
      console.error('Error posting comment:', error);
      toast({
        variant: 'destructive',
        title: 'Erro ao publicar comentário',
        description: 'Não foi possível publicar seu comentário. Tente novamente.',
      });
    } else {
      setNewComment('');
    }
  };

  if (!exerciseId || !exerciseTitle) {
    return (
      <div className="text-center py-20">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Fórum da Comunidade</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Para ver as discussões, primeiro selecione um exercício e clique no botão "Pedir Ajuda".
        </p>
        <Button asChild className="mt-6">
          <Link href="/curriculo">Explorar Currículo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
        <div className="mb-8 flex items-center justify-between">
            <div>
                <p className="text-sm text-muted-foreground">Fórum de Ajuda</p>
                <h1 className="font-headline text-3xl md:text-4xl font-bold">
                {exerciseTitle}
                </h1>
            </div>
             <Button variant="outline" asChild>
                <Link href="/curriculo">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Currículo
                </Link>
            </Button>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Discussão da Comunidade</CardTitle>
          <CardDescription>
            Veja as dúvidas de outros alunos ou deixe a sua própria pergunta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {comments.length === 0 && (
                <div className="text-center py-10 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">Ainda não há discussões para este exercício.</p>
                    <p className="font-semibold mt-1">Seja o primeiro a pedir ajuda!</p>
                </div>
            )}
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <Avatar>
                  <AvatarFallback>{comment.user_name?.split(' ').map(n => n[0]).join('').substring(0, 2) || 'U'}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{comment.user_name || 'Usuário Anônimo'}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true, locale: ptBR })}
                    </p>
                  </div>
                  <p className="mt-1 text-muted-foreground">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            {user ? (
              <form onSubmit={handlePostComment} className="space-y-4">
                <div className="flex gap-4 items-start">
                    <Avatar>
                        <AvatarFallback>{user.full_name?.split(' ').map(n => n[0]).join('').substring(0, 2) || 'U'}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <Label htmlFor="comment">Deixe sua dúvida ou contribuição</Label>
                        <Textarea
                            id="comment"
                            placeholder="Descreva sua dificuldade ou compartilhe sua solução..."
                            className="mt-2"
                            rows={4}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={!newComment.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    Publicar
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground">Você precisa estar logado para postar no fórum.</p>
                <Button asChild variant="link">
                  <Link href={`/login?redirect=/forum?exerciseId=${exerciseId}&exerciseTitle=${encodeURIComponent(exerciseTitle)}`}>Fazer Login</Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


export default function ForumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center"><p>Carregando fórum...</p></div>}>
          <ForumContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
