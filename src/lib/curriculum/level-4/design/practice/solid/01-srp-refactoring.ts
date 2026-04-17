import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-prac-srp',
    title: 'Refatoração: Princípio da Responsabilidade Única (SRP)',
    statement: 'Você tem uma classe `Relatorio` que gera um relatório e também o salva em um arquivo. Refatore esta classe para que cada responsabilidade (geração e persistência) fique em sua própria classe, aderindo ao SRP.',
    template: `class Relatorio {
    public titulo: string;
    public conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    gerarRelatorio(): string {
        return \`<h1>\${this.titulo}</h1><p>\${this.conteudo}</p>\`;
    }

    salvarParaArquivo(nomeArquivo: string): void {
        // Lógica para salvar o conteúdo em um arquivo...
        console.log(\`Salvando relatório em \${nomeArquivo}...\`);
    }
}

// --- SEU CÓDIGO DE REATORAÇÃO ABAIXO ---

// 1. Crie uma classe 'GeradorDeRelatorio' para a lógica de geração.
// 2. Crie uma classe 'PersistenciaDeRelatorio' para a lógica de salvamento.

`,
    youtubeVideoId: 'Nlyit_a33-M',
    detailedExplanation: `
        <h2>Separando Responsabilidades</h2>
        <p>A classe 'Relatorio' original viola o SRP porque ela tem duas razões para mudar: se a formatação do relatório mudar, ou se a forma como o relatório é salvo mudar.</p>
        <h3>Passo a Passo da Refatoração</h3>
        <ol>
            <li>Mantenha a classe <code>Relatorio</code> como um objeto de dados simples, contendo apenas <code>titulo</code> e <code>conteudo</code>.</li>
            <li>Crie uma nova classe, <code>GeradorDeRelatorio</code>, com um método que recebe um objeto <code>Relatorio</code> e retorna o conteúdo formatado (ex: HTML).</li>
            <li>Crie outra nova classe, <code>PersistenciaDeRelatorio</code>, com um método que recebe um objeto <code>Relatorio</code> (ou o conteúdo já formatado) e um nome de arquivo, e lida com a lógica de salvamento.</li>
        </ol>
        <p>Essa separação torna o sistema mais flexível. Agora você pode criar diferentes tipos de geradores (HTML, PDF, etc.) ou diferentes tipos de persistência (arquivo, banco de dados) sem alterar as outras classes.</p>
    `
};
