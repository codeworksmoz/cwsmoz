import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getCurriculumData } from '@/lib/curriculum-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Reusing the Icon helper component
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) {
    return <LucideIcons.Code className={className} />; // Fallback icon
  }
  return <LucideIcon className={className} />;
};


export default async function AreasDeConhecimentoPage() {
  const curriculumData = await getCurriculumData();
  const allKnowledgeAreas = curriculumData.flatMap(level => 
    level.knowledgeAreas.map(area => ({ ...area, levelTitle: level.title }))
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nossas Áreas de Conhecimento</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore todas as áreas de conhecimento que compõem nosso currículo, desde os fundamentos até as especializações avançadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allKnowledgeAreas.map((area) => (
                <Card key={area.id} className="flex flex-col border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <CardTitle className="text-lg font-headline flex items-center gap-3">
                                <Icon name={area.iconName} className="w-6 h-6 text-accent" />
                                {area.title}
                            </CardTitle>
                            <Badge variant="secondary">{area.load}</Badge>
                        </div>
                         <p className="text-sm pt-2 font-semibold text-primary/80">{area.levelTitle}</p>
                        <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-end justify-center">
                         <Button asChild className="w-full">
                            <Link href={`/learn/${area.id}`}>
                                Começar a Aprender
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
