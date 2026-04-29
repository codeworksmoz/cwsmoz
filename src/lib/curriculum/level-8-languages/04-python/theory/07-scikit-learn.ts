import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m7",
  title: "Machine Learning com Scikit-Learn",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🤖 Algoritmos de Aprendizagem Estática</h2>
      <p>O Scikit-Learn é a biblioteca padrão para ML clássico em Python, cobrindo regressão, classificação e clustering.</p>
      <div class="bg-card p-4 rounded-xl border">
        <h4 class="font-bold">Workflow de ML:</h4>
        <ol class="list-decimal ml-6 mt-2 space-y-1">
          <li>Pré-processamento de dados.</li>
          <li>Seleção do modelo.</li>
          <li>Treino (Fit).</li>
          <li>Avaliação (Predict/Score).</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "py-mq7"
};