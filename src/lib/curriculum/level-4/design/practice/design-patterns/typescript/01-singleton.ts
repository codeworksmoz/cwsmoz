import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-singleton',
    title: 'Padrão Singleton em TypeScript',
    statement: 'Implemente o padrão Singleton para uma classe `Configuracao` que garante que apenas uma instância de configuração seja criada na aplicação.',
    template: `class Configuracao {
    private static instance: Configuracao;
    public readonly tema: string;

    // Torne o construtor privado para que não possa ser instanciado com 'new'
    private constructor() {
        // Simula a leitura de uma configuração
        this.tema = "dark";
    }

    // Crie o método estático 'getInstance'
    // Ele deve criar a instância se não existir, e sempre retornar a mesma instância.
    public static getInstance(): Configuracao {
        // SEU CÓDIGO AQUI
    }
}

// Código de verificação (não modificar)
const config1 = Configuracao.getInstance();
const config2 = Configuracao.getInstance();

if (config1 === config2) {
    console.log("Singleton funciona! Ambas as variáveis contêm a mesma instância.");
} else {
    console.log("Singleton falhou. Variáveis contêm instâncias diferentes.");
}
`,
    youtubeVideoId: 'sJ-Z9gQ-p9E',
    detailedExplanation: `
        <h2>Garantindo uma Instância Única</h2>
        <p>O padrão Singleton é um dos padrões criacionais mais conhecidos. Ele é útil quando você precisa ter exatamente um objeto de uma classe para coordenar ações em todo o sistema.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li>Declare um campo estático privado na classe para armazenar a instância única (ex: <code>private static instance: Configuracao;</code>).</li>
            <li>Torne o construtor da classe privado. Isso impede que qualquer outra parte do código crie uma instância com o operador <code>new</code>.</li>
            <li>Crie um método estático público (geralmente chamado <code>getInstance</code>). Este método verificará se a instância já foi criada.</li>
            <li>Se a instância ainda não existir (<code>!Configuracao.instance</code>), ele chamará o construtor privado para criar o objeto e o armazenará no campo estático.</li>
            <li>Finalmente, ele retorna a instância armazenada.</li>
        </ol>
    `
};
