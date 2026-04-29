import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p13-js",
  language: "javascript",
  title: "Missão: Validador de Chaves de Acesso",
  description: "Crie um motor de validação de strings usando padrões RegEx.",
  statement: "Utilize uma RegEx para validar se uma chave de acesso tem exatamente 3 letras maiúsculas seguidas de 2 números.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🕵️ O Verificador de Padrões</h3>
      <p>Em sistemas de segurança, validamos se o código de acesso respeita o formato antes de o enviar para o servidor.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> padrao = /^[A-Z]{3}\\d{2}$/; <br/>
          <span class="text-primary">const</span> resultado = padrao.test("CWM24"); <br/>
          <span class="text-primary">console.log</span>(resultado);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>regex</code> com o padrão: Início, 3 letras maiúsculas, 2 dígitos, Fim.
        <br/>2. Cria a variável <code>chave</code> com o valor "MOZ25".
        <br/>3. Usa o método <code>regex.test(chave)</code> para validar.
        <br/>4. Mostra o resultado (true/false) no terminal usando <code>console.log</code>.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir a RegEx /^[A-Z]{3}\\d{2}$/", test: "/^[A-Z]{3}\\d{2}$/" },
    { id: "obj2", description: "Utilizar o método .test()", test: ".test(" },
    { id: "obj3", description: "Exibir o resultado no terminal", test: "console.log" }
  ]
};