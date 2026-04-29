import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t9",
  title: "Docker: Contentores e Isolamento de Infraestrutura",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-blue-400 flex items-center gap-2">
          🐳 "Na minha máquina funciona" acabou!
        </h2>
        <p class="text-lg leading-relaxed"><strong>Docker</strong> permite empacotar uma aplicação com todas as suas dependências (SO, bibliotecas, configs) num contentor isolado que corre identicamente em qualquer lugar.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Imagem vs Contentor</h3>
        <p class="text-sm">A <strong>Imagem</strong> é o molde estático (como uma fotografia do sistema). O <strong>Contentor</strong> é a instância viva desse molde em execução na memória RAM.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Docker Compose: Orquestração Simples</h3>
        <p class="text-sm">Um site precisa de código + base de dados + cache. O Docker Compose permite-te subir toda essa infraestrutura complexa com um único comando: <code>docker-compose up</code>.</p>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2">💎 Vantagem de Engenharia</h4>
          <p class="text-sm leading-relaxed">Com Docker, um novo desenvolvedor entra na equipa e consegue ter o projeto inteiro a correr no primeiro dia, sem precisar de instalar bases de dados ou drivers manualmente no seu Windows ou Mac.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q9"
};