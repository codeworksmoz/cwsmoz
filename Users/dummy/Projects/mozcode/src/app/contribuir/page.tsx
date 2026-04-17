import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Code, Languages, Github, ArrowRight } from 'lucide-react';

const contributionWays = [
  {
    title: "Expandir o Currículo",
    description: "Nossa maior necessidade é a criação de conteúdo educacional. Se você tem conhecimento em programação, pode nos ajudar a adicionar novas lições, exercícios e quizzes, garantindo que o Mozkod seja cada vez mais completo.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    href: "https://github.com/infortecmov03/Mozkod/blob/main/docs/CURRICULUM_GUIDE.md",
    cta: "Ver Guia do Currículo"
  },
  {
    title: "Desenvolver a Plataforma",
    description: "Você é um desenvolvedor Next.js, React ou TypeScript? Ajude-nos a melhorar a plataforma, corrigir bugs e implementar novas funcionalidades. Toda contribuição no código é bem-vinda e valorizada.",
    icon: <Code className="w-8 h-8 text-primary" />,
    href: "https://github.com/infortecmov03/Mozkod",
    cta: "Ir para o GitHub"
  },
  {
    title: "Traduções e Localização",
    description: "Fale outra língua? Ajude-nos a tornar o Mozkod acessível para mais pessoas traduzindo o currículo e a interface para outras línguas moçambicanas e do mundo. Sua ajuda é fundamental para a nossa missão.",
    icon: <Languages className="w-8 h-8 text-primary" />,
    href: "https://github.com/infortecmov03/Mozkod/issues?q=is%3Aissue+is%3Aopen+label%3Atranslation",
    cta: "Ver Tarefas de Tradução"
  }
];

export default function ContribuirPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Junte-se à Nossa Missão</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            O Codworks MOZ é um projeto de código aberto, construído pela comunidade e para a comunidade. Sua contribuição, não importa o tamanho, tem um impacto direto na educação de milhares de pessoas em Moçambique e além.
          </p>
        </div>

        <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-center mb-8">Como Você Pode Ajudar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributionWays.map((feature) => (
                <Card key={feature.title} className="flex flex-col text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4 inline-flex">
                    {feature.icon}
                    </div>
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-center">
                    <Button asChild variant="secondary">
                    <Link href={feature.href} target="_blank" rel="noopener noreferrer">
                        {feature.cta}
                    </Link>
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>

        <div className="text-center bg-card p-8 rounded-lg">
            <h2 className="font-headline text-3xl font-bold">Pronto para Começar?</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                A melhor maneira de começar é explorar nosso repositório no GitHub. Lá você encontrará as issues abertas, a documentação completa e poderá interagir com outros contribuidores.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="https://github.com/infortecmov03/Mozkod" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visitar o Repositório no GitHub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}
