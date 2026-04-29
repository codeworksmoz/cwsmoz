import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m6",
  title: "Computação Científica: NumPy e Pandas",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">📊 Manipulação de Dados em Larga Escala</h2>
        <p>NumPy fornece o suporte para arrays multidimensionais de alta performance, enquanto o Pandas oferece estruturas de dados flexíveis para análise.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Vectorização</h3>
        <p>O segredo da performance destas bibliotecas é a <strong>vectorização</strong>: operações matemáticas aplicadas a arrays inteiros de uma vez, executadas em C puro, evitando o overhead de loops Python.</p>
      </div>
    </div>
  `,
  quizId: "py-mq6"
};