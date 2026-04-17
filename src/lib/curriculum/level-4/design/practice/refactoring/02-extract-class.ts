import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-refactor-extract-class',
    title: 'Refatoração: Extrair Classe (Extract Class)',
    statement: 'A classe `Pessoa` abaixo tem informações de contato (telefone) misturadas com informações pessoais. Refatore-a, extraindo os campos de telefone para uma nova classe `Telefone` para aderir melhor ao Princípio da Responsabilidade Única.',
    template: `class Pessoa {
    public nome: string;
    public ddd: string; // Ex: "11"
    public numeroTelefone: string; // Ex: "98765-4321"

    constructor(nome: string, ddd: string, numero: string) {
        this.nome = nome;
        this.ddd = ddd;
        this.numeroTelefone = numero;
    }

    public getTelefoneCompleto(): string {
        return \`(\${this.ddd}) \${this.numeroTelefone}\`;
    }
}

// --- SEU CÓDIGO DE REATORAÇÃO ABAIXO ---

// 1. Crie uma nova classe 'Telefone'
//    - Ela deve ter as propriedades 'ddd' e 'numero'.
//    - Mova o método 'getTelefoneCompleto' para dentro dela.

// 2. Crie a classe 'PessoaRefatorada'
//    - Ela deve ter 'nome' e uma propriedade 'telefone' do tipo 'Telefone'.

`,
    youtubeVideoId: '8bYmm4hV_d4',
    detailedExplanation: `
        <h2>Quando uma Classe Faz Coisas Demais</h2>
        <p>"Extract Class" é uma técnica usada quando uma classe acumula muitas responsabilidades. Se um subconjunto de dados e métodos dentro de uma classe parece formar um conceito coeso, eles podem ser extraídos para sua própria classe.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Crie a nova classe <code>Telefone</code>.</li>
            <li>Mova as propriedades <code>ddd</code> e <code>numeroTelefone</code> da classe <code>Pessoa</code> para a classe <code>Telefone</code> (você pode renomear <code>numeroTelefone</code> para apenas <code>numero</code>).</li>
            <li>Mova o método <code>getTelefoneCompleto</code> para dentro da classe <code>Telefone</code>.</li>
            <li>Na classe <code>PessoaRefatorada</code>, remova os campos de telefone antigos e adicione uma nova propriedade, <code>public telefone: Telefone;</code>.</li>
            <li>Ajuste o construtor da <code>PessoaRefatorada</code> para receber um objeto <code>Telefone</code>.</li>
        </ol>
        <p>Isso torna o design mais limpo. A classe <code>Pessoa</code> agora lida apenas com dados da pessoa, e a classe <code>Telefone</code> encapsula tudo relacionado a um número de telefone.</p>
    `
};
