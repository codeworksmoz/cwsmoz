import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p8-js",
  language: "javascript",
  title: "Missão: O Perfil do Engenheiro",
  description: "Construa uma estrutura de dados para representar um utilizador no sistema Codworks.",
  statement: "Crie um objeto que guarde o nome, nível e pontos de um aluno, e exiba uma das propriedades.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "TQvD-Uq86oY",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Modelagem de Entidades</h3>
      <p>Um "Perfil" é um conjunto de dados relacionados. Em JavaScript, usamos chavetas <code>{ }</code> para agrupar estas informações.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">const</span> perfil = { <br/>
          &nbsp;&nbsp;nome: "Edson", <br/>
          &nbsp;&nbsp;pontos: 100 <br/>
          }; <br/>
          <span class="text-primary">console.log</span>(perfil.nome);
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a constante <code>aluno</code>.
        <br/>2. Atribui a ela um objeto com as chaves: <code>nome</code> (texto), <code>nivel</code> (número 1) e <code>pontos</code> (número 500).
        <br/>3. Usa <code>console.log()</code> para exibir apenas o <code>pontos</code> do aluno no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar objeto 'aluno' com as 3 propriedades", test: "const aluno = {" },
    { id: "obj2", description: "Definir nivel: 1", test: "nivel: 1" },
    { id: "obj3", description: "Exibir aluno.pontos no terminal", test: "console.log(aluno.pontos)" }
  ]
};