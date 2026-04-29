import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p21-js",
  language: "javascript",
  title: "Missão Final: O Selo de Qualidade Codworks",
  description: "Refatorize um sistema complexo aplicando DRY, KISS e YAGNI simultaneamente.",
  statement: "Transforme um código repetitivo e confuso num módulo elegante de nível sênior.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏆 A Prova do Engenheiro</h3>
      <p>Esta é a tua última missão do Nível 1. O teu objetivo é provar que dominas a <strong>Filosofia da Simplicidade</strong>.</p>
      
      <div class="bg-red-500/10 p-3 rounded border border-red-500/20 mb-4">
        <p class="text-[10px] font-mono leading-tight">
          // CÓDIGO A SER DESTRUÍDO:<br/>
          let u1 = "Edson"; let p1 = 100;<br/>
          let u2 = "Ana"; let p2 = 200;<br/>
          console.log("User: " + u1 + " tem " + p1);<br/>
          console.log("User: " + u2 + " tem " + p2);
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Refatoração (JS):</strong>
        <br/>1. Cria uma função chamada <code>exibirStatus(usuario, pontos)</code>.
        <br/>2. Usa <strong>Backticks</strong> para a mensagem: "Dev: \${usuario} | XP: \${pontos}".
        <br/>3. Chama a função duas vezes com os dados dos utilizadores.
        <br/>4. Elimina todas as variáveis globais soltas (Princípio da Responsabilidade).
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar função exibirStatus (DRY)", test: "function exibirStatus" },
    { id: "obj2", description: "Usar Interpolação de Strings", test: "${" },
    { id: "obj3", description: "Remover código repetido", test: "exibirStatus(" }
  ]
};
