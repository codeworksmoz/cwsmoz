
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/components/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase/client";
import { MessageSquare, Search, PlusCircle, ArrowRight, Loader2, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function CommunityPage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsOpen] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('community_posts')
      .select(`*, profiles:user_id (display_name, avatar_url)`)
      .order('created_at', { ascending: false });
    if (!error && data) setPosts(data);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsPosting(true);
    try {
      const { error } = await supabase
        .from('community_posts')
        .insert({ user_id: user.id, title: newTitle, content: newContent });
      if (error) throw error;
      toast({ title: "Post Criado!", description: "A tua discussão foi publicada no fórum." });
      setNewTitle("");
      setNewContent("");
      setIsOpen(false);
      fetchPosts();
    } catch (err: any) {
      toast({ variant: "destructive", title: "Erro", description: err.message });
    } finally {
      setIsPosting(false);
    }
  };

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.exercise_id?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-6xl flex-1">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-headline text-5xl font-bold tracking-tight">Fórum da Comunidade</h1>
            <p className="text-xl text-muted-foreground">Tira dúvidas e partilha soluções com outros devs de Moçambique.</p>
          </div>
          <div className="flex gap-4">
             <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Procurar dúvida ou laboratório..." 
                  className="pl-10 rounded-full bg-card h-12 border-white/10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
             </div>
             <Dialog open={isDialogOpen} onOpenChange={setIsOpen}>
               <DialogTrigger asChild>
                 <Button className="rounded-full font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/20">
                    <PlusCircle className="w-5 h-5" /> {t.createPost}
                 </Button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[500px] rounded-[2rem]">
                 <DialogHeader>
                   <DialogTitle className="text-2xl font-headline font-bold">Nova Discussão</DialogTitle>
                   <DialogDescription>Inicia uma conversa geral ou pede ajuda sobre um tema específico.</DialogDescription>
                 </DialogHeader>
                 <form onSubmit={handleCreatePost} className="space-y-6 pt-4">
                    <div className="space-y-2">
                       <label className="text-sm font-bold ml-1">Título do Tópico</label>
                       <Input placeholder="Ex: Como configurar SSH no Windows?" className="rounded-xl" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold ml-1">Mensagem</label>
                       <Textarea placeholder="Descreve o teu problema com o máximo detalhe possível..." className="min-h-[150px] rounded-xl resize-none" value={newContent} onChange={(e) => setNewContent(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full h-14 rounded-2xl font-bold text-lg" disabled={isPosting}>
                       {isPosting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publicar no Fórum"}
                    </Button>
                 </form>
               </DialogContent>
             </Dialog>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
           <div className="lg:col-span-1 space-y-6">
              <Card className="bg-card/40 border-white/5 shadow-2xl rounded-3xl overflow-hidden">
                 <div className="p-6 pb-0"><h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary opacity-70">Filtros Rápidos</h3></div>
                 <CardContent className="p-4 space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-sm rounded-xl h-11 hover:bg-primary/10 hover:text-primary font-bold">🔥 Recentes</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm rounded-xl h-11 hover:bg-primary/10 hover:text-primary font-bold">✅ Resolvidos</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm rounded-xl h-11 hover:bg-primary/10 hover:text-primary font-bold">❓ Sem Resposta</Button>
                 </CardContent>
              </Card>
           </div>
           <div className="lg:col-span-3 space-y-4">
              {loading ? (
                <div className="py-20 text-center"><Loader2 className="w-10 h-10 animate-spin text-primary mx-auto" /></div>
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <Link key={post.id} href={`/community/post/${post.id}`}>
                    <Card className="bg-card/40 hover:bg-card/60 transition-all border-white/5 hover:border-primary/20 cursor-pointer group shadow-xl rounded-3xl overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                           <Avatar className="w-12 h-12 border-2 border-background shadow-lg">
                              <AvatarImage src={post.profiles?.avatar_url} />
                              <AvatarFallback><User className="w-6 h-6" /></AvatarFallback>
                           </Avatar>
                           <div className="flex-1 space-y-3">
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold">{post.profiles?.display_name || 'Estudante'}</span>
                                    <span className="text-[10px] text-muted-foreground">• {new Date(post.created_at).toLocaleDateString()}</span>
                                 </div>
                                 {post.exercise_id && <Badge variant="secondary" className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-primary/10 text-primary border-none">LAB: {post.exercise_id}</Badge>}
                              </div>
                              <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">{post.content}</p>
                              <div className="flex items-center gap-6 pt-4">
                                 <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium"><MessageSquare className="w-4 h-4 text-primary" /> Ver discussão</div>
                                 <div className="flex items-center gap-1.5 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">Explorar soluções <ArrowRight className="w-3.5 h-3.5" /></div>
                              </div>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="text-center py-24 bg-card/20 rounded-[3rem] border-dashed border-2 border-white/10">
                  <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-10" />
                  <h3 className="text-2xl font-bold opacity-40 mb-2">O fórum está silencioso...</h3>
                  <p className="text-muted-foreground text-sm">Sê o primeiro a iniciar uma conversa e ajuda a crescer a nossa comunidade!</p>
                </div>
              )}
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
