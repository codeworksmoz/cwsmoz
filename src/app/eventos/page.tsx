import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mockEvents = [
  {
    title: "Workshop: Introdução ao React com Hooks",
    description: "Participe do nosso workshop online e aprenda os fundamentos do React, incluindo componentes, estado e os hooks mais importantes como useState e useEffect.",
    date: "30 de Outubro, 2024",
    time: "19:00 - 21:00 (GMT+2)",
    location: "Online (Zoom)",
    type: "Workshop",
    isFree: true,
    icon: <Video className="w-8 h-8 text-primary" />,
  },
  {
    title: "Live: O Futuro do Desenvolvimento Web com Next.js 15",
    description: "Junte-se a nós para uma live especial com especialistas da indústria discutindo as novas features do Next.js 15 e o impacto dos Server Components.",
    date: "15 de Novembro, 2024",
    time: "20:00 (GMT+2)",
    location: "Online (YouTube)",
    type: "Live",
    isFree: true,
    icon: <Video className="w-8 h-8 text-primary" />,
  },
  {
    title: "Hackathon Codworks MOZ 2024",
    description: "Forme uma equipe e participe do nosso hackathon anual! Construa uma solução inovadora para um problema local e concorra a prémios incríveis.",
    date: "07-08 de Dezembro, 2024",
    time: "Todo o dia",
    location: "Maputo, Moçambique",
    type: "Presencial",
    isFree: false,
    icon: <MapPin className="w-8 h-8 text-primary" />,
  }
];


export default function EventosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nossos Eventos</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Participe de workshops, lives e hackathons para aprimorar suas habilidades, fazer networking e se conectar com a comunidade Codworks MOZ.
          </p>
        </div>

        <div className="space-y-8">
          {mockEvents.map((event) => (
            <Card key={event.title} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:w-1/3 bg-muted/50 flex items-center justify-center p-8">
                   {event.icon}
                </div>
                <div className="md:w-2/3">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                            <Badge variant={event.isFree ? "default" : "secondary"}>{event.isFree ? "Gratuito" : "Pago"}</Badge>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{event.date}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button disabled>Inscrições em breve</Button>
                        </div>
                    </CardContent>
                </div>
            </Card>
          ))}
        </div>

         <div className="text-center mt-16 text-muted-foreground">
            <p>Nenhum evento futuro agendado no momento. Volte em breve!</p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
