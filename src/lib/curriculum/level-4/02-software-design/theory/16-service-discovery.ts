
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t16",
  title: "Service Discovery e Health Checks",
  quizId: "des-q16-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📍 Localização de Serviços</h2>
        <p class="text-lg">Num cluster com centenas de instâncias que nascem e morrem, IPs fixos não existem. O Service Discovery é o "GPS" da tua arquitetura.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Registro de Serviços</h3>
        <p class="text-sm">Cada serviço "avisa" um servidor central (ex: Consul) quando inicia. O motor de busca garante que o tráfego só seja enviado para instâncias que passaram no <strong>Health Check</strong> técnico.</p>
      </div>
    </div>
  `
};
