'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useProgress } from '@/context/ProgressContext';
import { Progress } from '@/components/ui/progress';
import type { Level } from '@/lib/curriculum-data';

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) {
    return <LucideIcons.Code className={className} />; // Fallback icon
  }
  return <LucideIcon className={className} />;
};

export function CurriculumClientPage({ curriculumData }: { curriculumData: Level[] }) {
  const { isCompleted } = useProgress();

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold">
          Nosso Currículo
        </h1>
        <p className="text-muted-foreground mt-2 max-w-3xl">
          Uma jornada de aprendizado completa, do zero ao programador profissional, alinhada com os padrões da ACM. Explore nossos 7 níveis de conhecimento e acompanhe seu progresso.
        </p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
        {curriculumData.map((level) => {
          const allLessonsInLevel = level.knowledgeAreas.flatMap((ka) => ka.theory);
          const totalLessonsInLevel = allLessonsInLevel.length;
          const completedLessonsInLevel = allLessonsInLevel.filter((lesson) => isCompleted(lesson.id)).length;
          const levelProgress = totalLessonsInLevel > 0 ? (completedLessonsInLevel / totalLessonsInLevel) * 100 : 0;

          return (
            <AccordionItem value={`item-${level.id}`} key={level.id}>
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full h-12 w-12 font-bold text-xl shrink-0">
                      {level.id}
                    </div>
                    <div className="text-left">
                      <h2 className="font-headline text-xl">{level.title}</h2>
                      <p className="text-sm text-muted-foreground font-normal">{level.description}</p>
                    </div>
                  </div>
                  {totalLessonsInLevel > 0 && (
                    <div className="hidden sm:flex items-center gap-4 ml-4">
                      <div className="w-24">
                        <Progress value={levelProgress} className="h-2" />
                      </div>
                      <span className="text-sm font-bold text-primary w-12 text-right">{Math.round(levelProgress)}%</span>
                    </div>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {level.knowledgeAreas.map((area) => {
                    const totalLessonsInArea = area.theory.length;
                    const completedLessonsInArea = area.theory.filter(lesson => isCompleted(lesson.id)).length;
                    const areaProgress = totalLessonsInArea > 0 ? (completedLessonsInArea / totalLessonsInArea) * 100 : 0;

                    return (
                      <Card key={area.id} className="flex flex-col">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                              <CardTitle className="text-lg font-headline flex items-center gap-3">
                                  <Icon name={area.iconName} className="w-6 h-6 text-accent" />
                                  {area.title}
                              </CardTitle>
                              <Badge variant="secondary">{area.load}</Badge>
                          </div>
                          <CardDescription>{area.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end pt-4">
                          {totalLessonsInArea > 0 && (
                            <div className="space-y-2 mb-4">
                              <div className="flex justify-between items-center text-xs text-muted-foreground font-medium">
                                <span>Progresso ({completedLessonsInArea}/{totalLessonsInArea})</span>
                                <span>{Math.round(areaProgress)}%</span>
                              </div>
                              <Progress value={areaProgress} className="h-2" />
                            </div>
                          )}
                          <Button variant="secondary" className="w-full" asChild>
                              <Link href={`/learn/${area.id}`}>
                                  Começar a aprender
                              </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
}
