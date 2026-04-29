import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p1",
  language: "html",
  title: "Projeto Master: Design System e Seletores de Elite",
  description: "Inicie a construção da camada visual do seu portal utilizando seletores avançados e lógicas relacionais.",
  statement: "Utilize :has() para destacar seções do seu portal e configure as variáveis de design no escopo correto.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    /* 1. Defina os Design Tokens no root */
    :root {
      --primary: #3b82f6;
      --bg-surface: #0f172a;
    }

    body {
      background-color: var(--bg-surface);
      color: white;
      font-family: system-ui, sans-serif;
    }

    /* 2. Aplique a lógica de Seletores de Elite abaixo */
    section {
      padding: 2rem;
      border: 1px solid #1e293b;
      margin-bottom: 1rem;
      border-radius: 1rem;
      transition: all 0.3s ease;
    }

    /* MISSÃO: Destacar a seção APENAS se ela contiver um formulário */
    
  </style>
</head>
<body>
  <main>
    <section>
      <h1>Engenharia de Interface</h1>
      <p>Bem-vindo ao módulo de design de alta fidelidade.</p>
    </section>

    <section id="register">
      <h2>Inscrição</h2>
      <form>
        <input type="text" placeholder="Seu Nome">
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Missão: Seletores Relacionais</h3>
      <p class="text-sm">A sua tarefa é utilizar o seletor <code>:has()</code> para aplicar um estilo diferenciado à seção que contém o formulário de inscrição, sem precisar de adicionar uma classe extra no HTML.</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Instruções:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Lógica Relacional:</strong> No CSS, adicione o seletor <code>section:has(form)</code>.</li>
          <li><strong>Estilização:</strong> Mude o <code>border-color</code> para <code>var(--primary)</code> e aplique um <code>box-shadow</code> sutil.</li>
          <li><strong>Interatividade:</strong> Verifique no preview como apenas a seção de inscrição reage, mantendo a primeira seção intacta.</li>
        </ul>
      </div>
      <p class="text-xs italic">Esta técnica permite que o seu CSS "entenda" o contexto do conteúdo dinamicamente.</p>
    </div>
  `,
  objectives: [
    {
      id: "has_selector",
      description: "Utilizar o seletor :has(form) no bloco de estilo.",
      test: "section:has(form)"
    },
    {
      id: "primary_border",
      description: "Aplicar a cor da borda usando a variável --primary.",
      test: "border-color: var(--primary)"
    }
  ]
};
