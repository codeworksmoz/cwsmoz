'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Code, GitMerge, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/context/I18nContext";

export default function Home() {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const curriculumImage = PlaceHolderImages.find(p => p.id === 'curriculum');
  const editorImage = PlaceHolderImages.find(p => p.id === 'editor');
  const gitImage = PlaceHolderImages.find(p => p.id === 'git');
  const achievementsImage = PlaceHolderImages.find(p => p.id === 'achievements');

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: t('Home.feature1_title'),
      description: t('Home.feature1_desc'),
      image: curriculumImage
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: t('Home.feature2_title'),
      description: t('Home.feature2_desc'),
      image: editorImage
    },
    {
      icon: <GitMerge className="w-8 h-8 text-primary" />,
      title: t('Home.feature3_title'),
      description: t('Home.feature3_desc'),
      image: gitImage
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: t('Home.feature4_title'),
      description: t('Home.feature4_desc'),
      image: achievementsImage
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full pt-20 pb-20 md:pt-32 md:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 
              className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4"
              dangerouslySetInnerHTML={{ __html: t('Home.title') }}
            />
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              {t('Home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/cadastro">
                  {t('Home.cta_free')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/curriculo">
                  {t('Home.cta_explore')}
                </Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-[0.03]">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          )}
        </section>

        <section id="features" className="py-16 lg:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('Home.features_title')}</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                {t('Home.features_subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card text-card-foreground shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    {feature.image && (
                      <div className="relative h-40 mb-6 rounded-lg overflow-hidden border">
                        <Image
                          src={feature.image.imageUrl}
                          alt={feature.image.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={feature.image.imageHint}
                        />
                      </div>
                    )}
                     <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="font-headline text-xl leading-tight">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{t('Home.final_cta_title')}</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
              {t('Home.final_cta_subtitle')}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/cadastro">
                  {t('Home.final_cta_button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
