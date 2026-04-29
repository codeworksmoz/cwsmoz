
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m10",
  title: "Projeto Final Master: API de Análise e Deploy",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-6">
      <h2 class="text-3xl font-bold">🚀 Engenharia de Produção</h2>
      <p>O teu desafio final é construir uma API de alta performance com <strong>FastAPI</strong>, documentação via <strong>Pydantic</strong> e deploy automatizado.</p>
      
      <div class="grid gap-4">
        <div class="p-5 bg-card border rounded-2xl">
          <h4 class="font-bold text-primary">Passo 1: GitHub & Estrutura</h4>
          <p class="text-sm">Cria um repositório, usa <code>virtualenv</code> e organiza a app em pacotes. Faz o commit com as tuas decisões arquiteturais.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl">
          <h4 class="font-bold text-primary">Passo 2: Deploy no Render</h4>
          <p class="text-sm">Conecta o teu GitHub ao <strong>Render.com</strong>. Configura o <code>gunicorn</code> com workers <code>uvicorn</code> para performance real.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq10"
};
