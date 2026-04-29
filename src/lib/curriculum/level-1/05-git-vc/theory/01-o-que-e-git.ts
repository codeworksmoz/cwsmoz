
import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "git-t1",
  title: "O que é o Git?",
  youtubeVideoId: "",
  content: `
    <div class="space-y-6">
      <div class="bg-red-50 dark:bg-red-950 p-6 rounded-xl border border-red-200 dark:border-red-900">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🕒 Uma Máquina do Tempo para Código
        </h2>
        <p class="text-lg leading-relaxed">
          O Git é um sistema de <strong>controlo de versão</strong>. Ele regista todas as alterações que fazes nos teus ficheiros, permitindo-te voltar atrás no tempo se algo correr mal.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Porquê usar o Git?</h3>
        <ul>
          <li><strong>Segurança:</strong> Nunca perdes o teu trabalho.</li>
          <li><strong>Colaboração:</strong> Várias pessoas podem trabalhar no mesmo projeto sem se atropelarem.</li>
          <li><strong>Histórico:</strong> Sabes exatamente QUEM mudou O QUÊ e PORQUÊ.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "git-t1-quiz"
};
