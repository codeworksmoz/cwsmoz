import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p8",
  language: "html",
  title: "Projeto Master: Validação Nativa e Mobile UX",
  description: "Otimize a entrada de dados para dispositivos móveis.",
  statement: "Evolua o seu formulário adicionando campos de Email e Telefone com validação.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codworks Master Studio</title>
  </head>
  <body>
    <main role="main">
      <section>
        <h2>Inscrição na Academia</h2>
        <form action="/api/save" method="POST">
          <label for="nome">Nome:</label>
          <input id="nome" type="text" required>
          <!-- Ação 1: Adicione novos campos aqui -->
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  </body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Mobile UX</h3>
      <p class="text-sm">Vá para dentro do <code>&lt;form&gt;</code> e adicione os novos campos:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Campo Email: <code>&lt;input type="email" id="email" required&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Campo Telefone: <code>&lt;input type="tel" id="tel" inputmode="tel" pattern="[0-9]{9}"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Adicione o atributo <code>title</code> ao telefone explicando o formato (9 dígitos).</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "email_type", description: "Usar type='email'", test: "type=\"email\"" },
    { id: "tel_inputmode", description: "Usar inputmode='tel'", test: "inputmode=\"tel\"" },
    { id: "tel_pattern", description: "Validar 9 dígitos com pattern", test: "pattern=" }
  ]
};