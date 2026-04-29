import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t1",
  title: "Arquitetura de Redes e o Modelo OSI",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-950 p-6 rounded-2xl border border-blue-200 dark:border-blue-900">
        <h2 class="text-2xl font-bold mb-4">🌐 Como a Internet se Organiza</h2>
        <p class="text-lg leading-relaxed">
          Para que computadores de diferentes fabricantes comuniquem, usamos modelos de camadas que padronizam as regras.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-primary">Modelo OSI (7 Camadas)</h4>
          <p class="text-xs italic">Teórico e Educacional.</p>
          <ul class="text-[10px] mt-2 list-decimal ml-4">
            <li>Aplicação</li><li>Apresentação</li><li>Sessão</li><li>Transporte</li><li>Rede</li><li>Enlace</li><li>Física</li>
          </ul>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent">Modelo TCP/IP (4-5 Camadas)</h4>
          <p class="text-xs italic">A implementação real da Internet.</p>
          <ul class="text-[10px] mt-2 list-decimal ml-4">
            <li>Aplicação</li><li>Transporte</li><li>Internet</li><li>Acesso à Rede</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "net-q1"
};