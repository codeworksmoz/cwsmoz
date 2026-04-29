import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p7",
  language: "html",
  title: "Projeto Master: Engenharia de Formulários",
  description: "Crie um ponto de entrada de dados resiliente e acessível.",
  statement: "Adicione uma nova seção de 'Inscrição' no final do seu conteúdo principal.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codworks Master Studio</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <nav aria-label="Menu Principal">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Treinos</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </nav>
    </header>
    <main role="main">
      <section>
        <h1>Bem-vindo ao Nível Master</h1>
        <p>A estrutura está validada.</p>
      </section>
      <!-- Ação 1: Adicione a nova <section> aqui -->
    </main>
    <footer>
      <p>&copy; 2024 Codworks Moz</p>
    </footer>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: O Formulário</h3>
      <p class="text-sm">Crie uma nova seção de captura de dados no final do <code>&lt;main&gt;</code>:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Crie uma <code>&lt;section&gt;</code> com um <code>&lt;h2&gt;</code>: "Inscrição na Academia".</p>
        <p><strong>Ação 2:</strong> Adicione a tag <code>&lt;form action="/api/save" method="POST"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Crie um campo de Nome: <code>&lt;label for="nome"&gt;Nome:&lt;/label&gt;</code> seguido do <code>&lt;input id="nome" type="text" required&gt;</code>.</p>
        <p><strong>Ação 4:</strong> Adicione um <code>&lt;button type="submit"&gt;Enviar&lt;/button&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "form_post", description: "Formulário com method='POST'", test: "method=\"POST\"" },
    { id: "label_for", description: "Label corretamente ligada ao ID", test: "for=\"nome\"" },
    { id: "input_req", description: "Input de nome obrigatório", test: "required" }
  ]
};