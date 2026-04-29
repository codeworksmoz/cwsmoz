
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t20",
  title: "CQRS: Command Query Responsibility Segregation",
  quizId: "des-q20-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📖 Separando Leitura de Escrita</h2>
        <p class="text-lg leading-relaxed">CQRS propõe usar modelos de dados diferentes para <strong>Comandos</strong> (atualizações) e <strong>Queries</strong> (consultas). Isto permite otimizar o banco de leitura para velocidade máxima sem comprometer a integridade da escrita.</p>
      </div>

      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Escala Invejável</h4>
          <p class="text-sm">Podes ter 1 servidor de escrita e 10 réplicas de leitura otimizadas com índices massivos, atingindo performance de nível planetário.</p>
      </div>
    </div>
  `
};
