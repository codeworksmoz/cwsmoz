import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "teng-t3-1",
    title: "Decifrando Mensagens de Erro Comuns",
    content: `
        <h2>Erros São Seus Amigos</h2>
        <p>Mensagens de erro são guias. Aprender a lê-las é uma habilidade fundamental no "debugging" (depuração de código).</p>
        <h3>Tipos Comuns de Erros em Inglês:</h3>
        <ul>
            <li><strong>SyntaxError:</strong> Erro na "gramática" do código. Ex: "Missing semicolon" (Falta ponto e vírgula), "Unexpected token" (Símbolo inesperado).</li>
            <li><strong>ReferenceError / NameError:</strong> Tentou usar uma variável que não existe. Ex: "variable 'x' is not defined" (variável 'x' não definida).</li>
            <li><strong>TypeError:</strong> Usou um tipo de dado de forma errada. Ex: "Cannot read property 'length' of null" (Não é possível ler a propriedade 'length' de um valor nulo).</li>
            <li><strong>IndexError / RangeError:</strong> Tentou acessar um item em uma lista/array com um índice que não existe.</li>
            <li><strong>FileNotFoundError:</strong> O programa não encontrou um arquivo que você pediu para ele ler.</li>
        </ul>
    `
};
