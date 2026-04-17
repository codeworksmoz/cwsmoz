import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Star } from 'lucide-react';
import Link from 'next/link';

const certificateTypes = [
  {
    title: "Certificado de Conclusão de Nível",
    description: "Emitido ao completar todas as lições teóricas e exercícios práticos de um nível do nosso currículo.",
    icon: <Award className="w-8 h-8 text-primary" />
  },
  {
    title: "Certificado de Especialização",
    description: "Emitido ao completar todas as áreas de conhecimento dentro de uma especialização do Nível 5.",
    icon: <Star className="w-8 h-8 text-primary" />
  },
  {
    title: "Certificação Full Stack (freeCodeCamp)",
    description: "Ao completar os 5 projetos de uma das certificações do freeCodeCamp, você pode submetê-los para validação e obter um certificado reconhecido.",
    icon: <GraduationCap className="w-8 h-8 text-primary" />
  }
];


export default function CertificadosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nossos Certificados</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Valide suas habilidades e compartilhe suas conquistas com nossa comunidade e empregadores.
          </p>
        </div>

        <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-center mb-8">Tipos de Certificados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificateTypes.map((cert) => (
                <Card key={cert.title} className="flex flex-col text-center">
                <CardHeader className="items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4 inline-flex">
                    {cert.icon}
                    </div>
                    <CardTitle className="font-headline">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                </Card>
            ))}
            </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Meus Certificados</CardTitle>
              <CardDescription>
                Aqui serão listados todos os certificados que você conquistou.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                  <GraduationCap className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sua jornada está apenas começando</h3>
                  <p className="text-muted-foreground mb-4 max-w-sm">
                      Continue aprendendo e completando os módulos para ganhar seu primeiro certificado.
                  </p>
                  <Button asChild>
                    <Link href="/curriculo">Explorar Currículo</Link>
                  </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
      <Footer />
    </div>
  );
}
