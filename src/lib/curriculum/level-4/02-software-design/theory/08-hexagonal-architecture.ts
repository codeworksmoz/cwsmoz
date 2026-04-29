
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t8",
  title: "Hexagonal Architecture: Ports & Adapters",
  quizId: "des-q8-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          ⬢ Isolamento Radical do Domínio
        </h2>
        <p class="text-lg leading-relaxed">
          Criada por Alistair Cockburn, a Arquitetura Hexagonal propõe que a lógica de negócio (o Core) deve estar no centro, isolada de tecnologias externas como bancos de dados, UIs ou brokers de mensagens.
        </p>
      </div>

      <div class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg">
            <h4 class="font-bold text-accent mb-2">Ports (Portas)</h4>
            <p class="text-xs leading-relaxed">São interfaces que definem "como" o sistema quer ser falado ou "como" ele quer falar com o exterior. <br/>Ex: <code>UserRepositoryInterface</code>.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-primary/20 shadow-lg">
            <h4 class="font-bold text-primary mb-2">Adapters (Adaptadores)</h4>
            <p class="text-xs leading-relaxed">São as implementações concretas que ligam o mundo exterior às Portas. <br/>Ex: <code>PostgresUserAdapter</code> ou <code>RestUserController</code>.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Porquê usar o Hexágono?</h3>
        <p class="text-sm">Esta arquitetura permite trocar a base de dados de MySQL para MongoDB, ou a interface de REST para gRPC, <strong>sem tocar numa única linha</strong> de lógica de negócio no centro do hexágono.</p>
      </div>
    </div>
  `
};
