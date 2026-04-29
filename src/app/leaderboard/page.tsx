
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Zap, Loader2, Crown, Flame, Award, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { useLanguage } from "@/components/LanguageContext";
import { cn } from "@/lib/utils";

export default function LeaderboardPage() {
  const { t } = useLanguage();
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaders() {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('total_points', { ascending: false })
        .limit(50);
      if (!error && data) setLeaders(data);
      setLoading(false);
    }
    fetchLeaders();
  }, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="w-8 h-8 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />;
      case 1: return <Medal className="w-8 h-8 text-gray-300 fill-gray-300" />;
      case 2: return <Medal className="w-8 h-8 text-amber-600 fill-amber-600" />;
      default: return <span className="font-bold text-muted-foreground ml-2">{index + 1}</span>;
    }
  };

  const UserBadges = ({ user }: { user: any }) => {
    const list = [];
    if (user.total_points >= 1000) list.push(<Trophy key="t" className="w-3 h-3 text-yellow-500" />);
    if (user.streak >= 7) list.push(<Flame key="f" className="w-3 h-3 text-orange-500" />);
    if (user.total_points >= 500) list.push(<ShieldCheck key="s" className="w-3 h-3 text-blue-500" />);
    return <div className="flex gap-1 ml-2">{list}</div>;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl flex-1">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-primary/10 mb-6 border-4 border-primary/20 shadow-2xl">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-headline text-5xl font-bold tracking-tight">Ranking de Elite</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Os desenvolvedores mais brilhantes de Moçambique. <br/>
            Transformando lógica em prestígio.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16">
              {leaders.slice(0, 3).map((leader, i) => (
                <Card key={leader.id} className={cn(
                  "border-none shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden rounded-[2.5rem] transition-all hover:translate-y-[-5px]",
                  i === 0 ? "h-[340px] bg-primary/20 border-t-8 border-primary ring-2 ring-primary/20" : "h-[280px] bg-card/60 border border-white/5",
                  i === 1 && "md:order-first",
                  i === 2 && "md:order-last"
                )}>
                  <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="absolute top-6 right-6">{getRankIcon(i)}</div>
                    <div className="relative mb-6">
                      <Avatar className={cn("w-24 h-24 border-4 shadow-2xl", i === 0 ? "border-primary" : "border-background")}>
                        <AvatarImage src={leader.avatar_url} />
                        <AvatarFallback className="text-2xl font-bold">{leader.display_name?.[0]}</AvatarFallback>
                      </Avatar>
                      {i === 0 && <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg">MVP</div>}
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-headline font-bold text-xl line-clamp-1">{leader.display_name}</h3>
                      <UserBadges user={leader} />
                    </div>
                    <div className="flex items-center gap-2 text-primary font-black text-2xl">
                      <Zap className="w-6 h-6 fill-primary" />
                      {leader.total_points || 0}
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                       <Badge variant="secondary" className="text-[10px] uppercase font-black px-3 py-1 bg-secondary/80">
                          {leader.streak || 0} DIAS
                       </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/40 border-none shadow-2xl overflow-hidden rounded-[2rem] border border-white/5">
              <Table>
                <TableHeader className="bg-secondary/30">
                  <TableRow className="border-white/5 h-16">
                    <TableHead className="w-16 text-center font-black uppercase text-[10px] tracking-widest px-2 sm:px-4">{t.rank}</TableHead>
                    <TableHead className="font-black uppercase text-[10px] tracking-widest px-2 sm:px-4">{t.user}</TableHead>
                    <TableHead className="text-right font-black uppercase text-[10px] tracking-widest px-2 sm:px-4">{t.points}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaders.slice(3).map((leader, i) => (
                    <TableRow key={leader.id} className="hover:bg-white/[0.03] transition-colors border-white/5 h-20 group">
                      <TableCell className="text-center font-black text-lg text-muted-foreground group-hover:text-primary transition-colors p-2 sm:p-4">{i + 4}</TableCell>
                      <TableCell className="p-2 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/10 group-hover:border-primary/50 transition-all">
                            <AvatarImage src={leader.avatar_url} />
                            <AvatarFallback>{leader.display_name?.[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col overflow-hidden">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm sm:text-base truncate">{leader.display_name}</span>
                              <div className="hidden sm:flex">
                                <UserBadges user={leader} />
                              </div>
                            </div>
                            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                              <Flame className="w-3 h-3 text-orange-500" /> {leader.streak || 0}
                              <span className="hidden sm:inline">&nbsp;dias de streak</span>
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right p-2 sm:p-4">
                         <div className="inline-flex items-center justify-end gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-2xl bg-primary/5 font-black text-primary text-base sm:text-xl border border-primary/10">
                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-primary" />
                            {leader.total_points || 0}
                         </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
