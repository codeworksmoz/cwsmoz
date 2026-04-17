import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-refactor-replace-conditional',
    title: 'Refatoração: Substituir Condicional por Polimorfismo',
    statement: 'A função `getVelocidadePassaro` usa um `switch` para determinar a velocidade com base no tipo de pássaro. Refatore este código para usar classes e polimorfismo, eliminando a instrução `switch`.',
    template: `// CÓDIGO ORIGINAL
enum TipoDePassaro { ANDORINHA_EUROPEIA, ANDORINHA_AFRICANA, PAPAGAIO_NORUEGUES }

function getVelocidadePassaro(tipo: TipoDePassaro): number {
    switch (tipo) {
        case TipoDePassaro.ANDORINHA_EUROPEIA:
            return 11;
        case TipoDePassaro.ANDORINHA_AFRICANA:
            return 12; // Carregando um coco
        case TipoDePassaro.PAPAGAIO_NORUEGUES:
            return 0; // Pregado no poleiro
        default:
            throw new Error("Tipo de pássaro desconhecido");
    }
}


// --- SEU CÓDIGO DE REATORAÇÃO ABAIXO ---

// 1. Crie uma interface ou classe abstrata 'Passaro' com um método 'getVelocidade'.
// 2. Crie classes concretas para cada tipo de pássaro que implementem/estendam 'Passaro'.
// 3. Cada classe concreta deve implementar 'getVelocidade' para retornar o valor correto.

`,
    youtubeVideoId: '8bYmm4hV_d4',
    detailedExplanation: `
        <h2>Eliminando 'switches' com Polimorfismo</h2>
        <p>Instruções <code>switch</code> (ou longos <code>if/else if</code>) baseadas no tipo de um objeto são um "code smell". Elas violam o Princípio Aberto/Fechado, pois adicionar um novo tipo exige modificar o código existente. O polimorfismo é a solução orientada a objetos para este problema.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Crie uma classe abstrata <code>Passaro</code> com um método abstrato <code>public abstract getVelocidade(): number;</code>.</li>
            <li>Crie a classe <code>AndorinhaEuropeia extends Passaro</code>.</li>
            <li>Dentro de <code>AndorinhaEuropeia</code>, implemente o método <code>getVelocidade()</code> para que ele retorne <code>11</code>.</li>
            <li>Repita o processo para as classes <code>AndorinhaAfricana</code> (retornando 12) e <code>PapagaioNoruegues</code> (retornando 0).</li>
            <li>Agora, o código cliente pode simplesmente chamar o método <code>getVelocidade()</code> em qualquer objeto do tipo <code>Passaro</code>, e a implementação correta será executada dinamicamente, sem a necessidade de qualquer condicional.</li>
        </ol>
    `
};
