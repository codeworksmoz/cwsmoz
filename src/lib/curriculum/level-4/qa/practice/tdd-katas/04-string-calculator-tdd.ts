import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-tdd-string-calc',
    title: 'TDD Kata: Calculadora de Strings',
    statement: 'Usando o ciclo TDD, crie uma função `add(string)` que pode receber uma string com números delimitados por vírgula e retornar sua soma.',
    template: `// String Calculator TDD Kata

// Requisito 1: A função pode receber até 2 números, delimitados por vírgula, e retornará sua soma.
// Para uma string vazia, retornará 0. Para um único número, retornará o próprio número.
// Testes iniciais:
// - add("") -> 0
// - add("1") -> 1
// - add("1,2") -> 3

// Requisito 2: A função deve aceitar um número desconhecido de argumentos.
// - add("1,2,3,4,5") -> 15

// Requisito 3: A função deve aceitar novas linhas como delimitadores.
// - add("1\\n2,3") -> 6

// Requisito 4: A função deve suportar delimitadores customizados.
// - A string começará com "//[delimitador]\\n...". Ex: "//;\\n1;2" -> 3

// Requisito 5: Chamar Add com um número negativo lançará uma exceção "negativos não permitidos".

// Escreva seus testes e sua função aqui, um requisito de cada vez:
`,
    youtubeVideoId: 'USc-y6j2w-s',
    detailedExplanation: `
        <h2>Desenvolvimento Incremental com TDD</h2>
        <p>A Calculadora de Strings é um ótimo kata para praticar a evolução de um algoritmo passo a passo, à medida que novos requisitos são adicionados. A chave é fazer um requisito de cada vez.</p>
        <h3>Ciclo Sugerido</h3>
        <ol>
            <li><strong>Req 1:</strong> Comece com o caso da string vazia. Faça o teste passar. Depois, o caso de um número. Faça passar. Depois, dois números.</li>
            <li><strong>Refatoração:</strong> Após o Req 1, seu código deve estar limpo para lidar com esses casos.</li>
            <li><strong>Req 2:</strong> Adicione um teste com múltiplos números. Seu código atual provavelmente falhará. Modifique-o para lidar com qualquer quantidade de números.</li>
            <li><strong>Req 3:</strong> Adicione um teste com <code>\\n</code>. Modifique seu código para tratar tanto <code>,</code> quanto <code>\\n</code> como delimitadores.</li>
            <li>Continue o ciclo, adicionando a lógica para delimitadores customizados e, finalmente, para o tratamento de números negativos, sempre começando com um teste que falha.</li>
        </ol>
    `
};
