import { createClient } from '@/lib/supabase/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Crown, Medal, Award } from 'lucide-react';

export default async function LeaderboardPage() {
  const supabase = createClient();
  
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('username, full_name, avatar_url, total_xp')
    .order('total_xp', { ascending: false })
    .limit(100);

  if (error) {
    console.error('Error fetching leaderboard:', error);
  }

  const getRankIcon = (rank: number) => {
    if (rank === 0) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 1) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 2) return <Award className="w-6 h-6 text-yellow-700" />;
    return <span className="w-6 text-center font-bold">{rank + 1}</span>;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-headline text-3xl md:text-4xl font-bold">
            Leaderboard
          </h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Veja os alunos mais dedicados da plataforma. Complete lições e exercícios para ganhar XP e subir no ranking!
          </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Top 100 Alunos</CardTitle>
                <CardDescription>O ranking é atualizado em tempo real.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {profiles && profiles.map((profile, index) => (
                        <div key={profile.username} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-4 w-12 shrink-0">
                                {getRankIcon(index)}
                            </div>
                            <Avatar>
                                <AvatarFallback>{profile.full_name?.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'U'}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <p className="font-semibold">{profile.full_name || profile.username}</p>
                                <p className="text-sm text-muted-foreground">@{profile.username}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg text-primary">{profile.total_xp} XP</p>
                            </div>
                        </div>
                    ))}
                    {(!profiles || profiles.length === 0) && (
                        <div className="text-center py-10">
                            <p className="text-muted-foreground">O leaderboard ainda está vazio. Seja o primeiro a pontuar!</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
