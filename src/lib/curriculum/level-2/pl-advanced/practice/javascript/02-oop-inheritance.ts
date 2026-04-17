import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'pla-js-oop', 
    title: 'POO: Herança', 
    statement: 'Crie uma classe base `Animal` com um método `falar`. Em seguida, crie duas subclasses, `Cachorro` e `Gato`, que herdam de `Animal` e sobrescrevem o método `falar`.', 
    template: `class Animal {
  falar() {
    return "O animal faz um som.";
  }
}

// Crie a classe Cachorro que herda de Animal
// e sobrescreve o método falar para retornar "Au au"

// Crie a classe Gato que herda de Animal
// e sobrescreve o método falar para retornar "Miau"
`,
    youtubeVideoId: 'SiBw7os-_zI',
    detailedExplanation: `
        <h2>Modelando com Herança</h2>
        <p>Herança é um dos pilares da Programação Orientada a Objetos (POO). Ela permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse).</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Use a palavra-chave <code>extends</code> para criar a herança: <code>class Cachorro extends Animal { ... }</code>.</li>
            <li>Dentro da classe <code>Cachorro</code>, defina novamente o método <code>falar()</code> e faça-o retornar a string "Au au". Isso é chamado de sobrescrita (overriding).</li>
            <li>Faça o mesmo para a classe <code>Gato</code>, fazendo seu método <code>falar()</code> retornar "Miau".</li>
        </ol>
    `
};
