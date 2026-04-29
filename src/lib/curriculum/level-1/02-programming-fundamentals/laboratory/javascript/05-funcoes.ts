import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p5-js",
  language: "javascript",
  title: "Lab JS: Criando a Tua Primeira Função",
  description: "Aprende a encapsular lógica para reutilização.",
  statement: "Cria uma função chamada 'saudar' que recebe um 'nome' e retorna 'Olá, ' seguido do nome.",
  template: `// Escreve a tua função abaixo
function saudar(nome) {
  
}`,
  detailedExplanation: `
    <h3>🛠️ Anatomia de uma Função</h3>
    <p>Uma função precisa de:</p>
    <ul>
      <li>O nome (<code>saudar</code>)</li>
      <li>Parâmetros entre parênteses (<code>nome</code>)</li>
      <li>Um corpo entre chavetas <code>{ }</code></li>
      <li>Um <code>return</code> para devolver o resultado</li>
    </ul>
  `,
  objectives: [
    {
      id: "obj1",
      description: "A função deve retornar 'Olá, Mundo' quando o nome for 'Mundo'",
      hint: "return 'Olá, ' + nome;",
      test: "saudar('Mundo') === 'Olá, Mundo'"
    }
  ]
};