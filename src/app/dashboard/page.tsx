'use client';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookOpen, Percent, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { Progress } from '@/components/ui/progress';
import { useI18n } from '@/context/I18nContext';

export default function DashboardPage() {
  const { t } = useI18n();
  const { user, loading } = useAuth();
  const router = useRouter();
  const { completedLessons } = useProgress();
  const [totalLessons, setTotalLessons] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  // Fake total lessons for now. In a real app this would come from an API.
  useEffect(() => {
    setTotalLessons(258);
  }, []);

  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  if (loading || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
            <h1 
              className="font-headline text-3xl md:text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: t('Dashboard.welcome').replace('{name}', user.full_name?.split(' ')[0] || 'Aluno') }}
            />
            <p className="text-muted-foreground mt-2">{t('Dashboard.subtitle')}</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{t('Dashboard.learning_panel_title')}</CardTitle>
              <CardDescription>{t('Dashboard.learning_panel_subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              {completedLessons === 0 ? (
                 <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                    <BookOpen className="w-16 h-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{t('Dashboard.start_learning_title')}</h3>
                    <p className="text-muted-foreground mb-4 max-w-sm">
                        {t('Dashboard.start_learning_subtitle')}
                    </p>
                    <Button asChild>
                      <Link href="/curriculo">{t('Dashboard.start_learning_button')}</Link>
                    </Button>
                </div>
              ) : (
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold">{t('Dashboard.continue_journey_title')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t('Dashboard.continue_journey_subtitle')}</p>
                  <Button asChild>
                    <Link href="/curriculo">{t('Dashboard.continue_journey_button')}</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="w-5 h-5" />
                <span>{t('Dashboard.progress_card_title')}</span>
              </CardTitle>
               <CardDescription>{t('Dashboard.progress_card_subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{t('Dashboard.progress_total')}</span>
                      <span className="text-sm font-bold text-primary">{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} />
                  </div>
                  <div 
                    className="text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{
                      __html: t('Dashboard.progress_summary')
                        .replace('{completed}', completedLessons.toString())
                        .replace('{total}', totalLessons.toString())
                    }}
                  />

                   <Button variant="outline" className="w-full" asChild>
                       <Link href="/curriculo">{t('Dashboard.progress_view_curriculum')}</Link>
                   </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
