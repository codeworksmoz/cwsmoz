import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Trophy, MessageCircleQuestion, GitMerge } from 'lucide-react';

const communityFeatures = [
  {
    title: "Leaderboard",
    description: "Veja quem está no topo do ranking de XP, complete lições e exercícios para subir de posição e motive-se para aprender mais.",
    href: "/leaderboard",
    icon: <Trophy className="w-8 h-8 text-primary" />,
    cta: "Ver Leaderboard"
  },
  {
    title: "Fóruns de Discussão",
    description: "Preso em um exercício? Peça ajuda à comunidade ou ajude outros alunos em nossos fóruns dedicados a cada exercício prático.",
    href: "/forum",
    icon: <MessageCircleQuestion className="w-8 h-8 text-primary" />,
    cta: "Ir para o Fórum"
  },
  {
    title: "Contribua com o Projeto",
    description: "O Codworks MOZ  é um projeto de código aberto construído pela comunidade. Saiba como você pode contribuir com o currículo, código ou traduções.",
    href: "/contribuir",
    icon: <GitMerge className="w-8 h-8 text-primary" />,
    cta: "Saber Mais"
  }
];

export default function ComunidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nossa Comunidade</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Aprender é uma jornada, e é melhor quando feita em conjunto. Participe, colabore e cresça com outros desenvolvedores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityFeatures.map((feature) => (
            <Card key={feature.title} className="flex flex-col text-center">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4 inline-flex">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end justify-center">
                <Button asChild>
                  <Link href={feature.href}>
                    {feature.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
