import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p8-py",
  language: "python",
  title: "Missão: Dicionário do Engenheiro",
  description: "Utilize dicionários Python para gerir metadados de utilizador.",
  statement: "Crie um dicionário para o perfil do aluno e imprima o seu nível de experiência.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "TQvD-Uq86oY",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Dicionários Python</h3>
      <p>Em Python, chamamos os objetos de <strong>Dicionários</strong>. A sintaxe é similar, mas o acesso às chaves costuma ser feito com parênteses retos e aspas.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          aluno = { <br/>
          &nbsp;&nbsp;"nome": "Edson", <br/>
          &nbsp;&nbsp;"pontos": 500 <br/>
          } <br/>
          print(aluno["nome"])
        </p>
      </div>

      <p class="text-xs leading-relaxed">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria a variável <code>aluno</code>.
        <br/>2. Atribui um dicionário com as chaves: <code>"nome"</code>, <code>"nivel"</code> (valor 1) e <code>"pontos"</code> (valor 500).
        <br/>3. Usa a função <code>print()</code> para exibir o valor da chave <code>"nivel"</code> no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Criar dicionário 'aluno'", test: "aluno = {" },
    { id: "obj2", description: "Definir chaves com aspas", test: "\"nivel\":" },
    { id: "obj3", description: "Imprimir aluno['nivel']", test: "print(aluno[\"nivel\"])" }
  ]
};