import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t11",
  title: "Princípios de Gestalt: Como o Cérebro Processa a UI",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🧠 A Psicologia da Percepção Visual</h2>
        <p class="text-lg leading-relaxed">Gestalt é uma escola de psicologia que explica como o cérebro humano agrupa elementos visuais automaticamente para entender o mundo de forma organizada e simples.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 text-xs">
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <strong class="text-accent block mb-1">Proximidade:</strong> Elementos próximos entre si são percebidos como pertencentes ao mesmo grupo.
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <strong class="text-accent block mb-1">Semelhança:</strong> Itens que partilham a mesma cor ou forma parecem ter a mesma função.
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <strong class="text-accent block mb-1">Continuidade:</strong> O olho segue naturalmente caminhos e linhas suaves.
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <strong class="text-accent block mb-1">Fechamento:</strong> O cérebro completa formas "incompletas" para reconhecer um objeto familiar.
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q11"
};