import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-py",
  language: "python",
  title: "Missão: Limpeza e F-Strings em Python",
  description: "Remova espaços indesejados e formate textos como um profissional.",
  statement: "Limpe o nome do usuário e gere a mensagem de boas-vindas.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "v4cd1O4zkGw",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Tratamento de Texto</h3>
      <p>Em Python, usamos o método <code>.strip()</code> para remover espaços e as <code>f-strings</code> para montar textos com variáveis.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          entrada = "  MozDev  " <br/>
          limpo = entrada.<span class="text-accent">strip()</span> <br/>
          msg = <span class="text-green-400">f"Bem-vindo, {limpo}!"</span>
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>entrada</code> com o valor "  MozDev  ".
        <br/>2. Cria a variável <code>user</code> usando <code>entrada.strip()</code>.
        <br/>3. Cria a <code>mensagem</code> usando o prefixo <b>f</b> antes das aspas: f"Olá {user}".
        <br/>4. Usa <code>print(mensagem)</code> para ver o resultado.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Usar .strip() para limpar", test: ".strip()" },
    { id: "obj2", description: "Usar f-string para formatar", test: "f" },
    { id: "obj3", description: "Usar print(mensagem)", test: "print(mensagem)" }
  ]
};
