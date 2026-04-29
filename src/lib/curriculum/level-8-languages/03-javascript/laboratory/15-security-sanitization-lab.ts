import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p15",
  language: "html",
  title: "Projeto Master: Blindagem contra XSS",
  description: "Proteja a injeção de dados no seu portal dinâmico.",
  statement: "Utilize textContent para inserir o nome do utilizador e limpe o HTML injetado.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<body>
  <div id="user-display"></div>
  <script>
    const userData = "<img src=x onerror=console.log('Hacked!')>";
    const display = document.getElementById('user-display');
    
    // Ação 1: Insira o dado de forma segura usando textContent
    display.textContent = userData;
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛡️ Operação Sanitização</h3>
      <p class="text-sm">A tua missão é impedir que o script malicioso dentro da string <code>userData</code> seja executado. Usar <code>textContent</code> transforma a tag maliciosa em texto inerte.</p>
    </div>
  `,
  objectives: [
    { id: "safe_insert", description: "Usar textContent em vez de innerHTML.", test: "textContent =" }
  ]
};
