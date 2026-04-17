import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-prac-isp',
    title: 'Refatoração: Princípio da Segregação de Interface (ISP)',
    statement: 'A interface `Trabalhador` abaixo é uma "interface gorda", forçando a classe `Robo` a implementar o método `comer()`, que não faz sentido para ela. Refatore o código, segregando a interface `Trabalhador` em interfaces menores e mais específicas.',
    template: `// INTERFACE GORDA ORIGINAL
interface Trabalhador {
    trabalhar(): void;
    comer(): void;
}

class Humano implements Trabalhador {
    public trabalhar(): void {
        console.log("Humano trabalhando...");
    }
    public comer(): void {
        console.log("Humano comendo...");
    }
}

class Robo implements Trabalhador {
    public trabalhar(): void {
        console.log("Robô trabalhando...");
    }
    public comer(): void {
        // Esta implementação é forçada e não faz sentido.
        throw new Error("Robôs não comem!");
    }
}


// --- SEU CÓDIGO DE REATORAÇÃO ABAIXO ---

// 1. Crie uma interface 'Trabalhavel' com o método 'trabalhar'.
// 2. Crie uma interface 'Alimentavel' com o método 'comer'.
// 3. Refatore as classes 'HumanoRefatorado' e 'RoboRefatorado'
//    para implementar apenas as interfaces que fazem sentido para elas.

`,
    youtubeVideoId: 'Nlyit_a33-M',
    detailedExplanation: `
        <h2>Nenhum Cliente Deve ser Forçado a Depender de Métodos que Não Usa</h2>
        <p>O ISP lida com os problemas de "interfaces gordas". Interfaces que têm muitos métodos forçam as classes clientes a implementar métodos de que não precisam. É melhor ter muitas interfaces pequenas e específicas do que uma única interface grande e genérica.</p>
        <h3>Passo a Passo da Refatoração</h3>
        <ol>
            <li>Crie <code>interface Trabalhavel { trabalhar(): void; }</code>.</li>
            <li>Crie <code>interface Alimentavel { comer(): void; }</code>.</li>
            <li>A classe <code>HumanoRefatorado</code> deve implementar ambas as interfaces: <code>class HumanoRefatorado implements Trabalhavel, Alimentavel</code>.</li>
            <li>A classe <code>RoboRefatorado</code> deve implementar apenas a interface que lhe diz respeito: <code>class RoboRefatorado implements Trabalhavel</code>.</li>
        </ol>
        <p>Com essa mudança, a classe <code>RoboRefatorado</code> não é mais forçada a ter um método <code>comer()</code>, e o design do sistema se torna mais limpo, coeso e flexível.</p>
    `
};
