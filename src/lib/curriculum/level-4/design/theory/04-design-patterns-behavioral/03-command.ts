import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-command",
    title: "Padrão Command",
    content: `
        <h2>Encapsulando uma Requisição como um Objeto</h2>
        <p>O <strong>Command</strong> é um padrão de projeto comportamental que transforma uma requisição em um objeto autônomo que contém toda a informação sobre a requisição. Essa transformação permite que você parametrize métodos com diferentes requisições, adie ou enfileire a execução de uma requisição e suporte operações que podem ser desfeitas.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está trabalhando em um editor de texto. Você tem botões para "Copiar", "Colar", "Salvar", etc. O código desses botões está fortemente acoplado à lógica do editor. Se você quiser adicionar um atalho de teclado para a mesma operação, terá que duplicar o código. Se quiser criar uma funcionalidade de "macro" que grava e reproduz uma sequência de ações, se torna muito complexo.</p>
        <p>O padrão Command sugere que todos os detalhes da requisição sejam encapsulados em um objeto separado. Este objeto, chamado de "comando", contém a ação a ser executada e os parâmetros necessários.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A interface do <strong>Comando</strong> declara um único método (geralmente chamado <code>execute</code>).</li>
            <li>Os <strong>Comandos Concretos</strong> implementam o método <code>execute</code> e encapsulam um "receptor" (o objeto que realmente faz o trabalho) e os parâmetros necessários.</li>
            <li>O <strong>Invocador (Invoker)</strong> é responsável por iniciar a requisição. Ele está associado a um ou mais comandos, mas não conhece os detalhes concretos do comando.</li>
            <li>O <strong>Receptor (Receiver)</strong> contém a lógica de negócio real. Quase qualquer objeto pode servir como um receptor.</li>
        </ol>

        <pre><code class="language-typescript">// A interface do Comando
interface Comando {
    executar(): void;
}

// O Receptor
class Editor {
    public texto: string = "";
    public copiar() { /* ... */ }
    public colar() { /* ... */ }
}

// Comandos Concretos
class ComandoCopiar implements Comando {
    private editor: Editor;
    constructor(editor: Editor) { this.editor = editor; }
    public executar(): void { this.editor.copiar(); }
}

// O Invocador
class Botao {
    private comando: Comando;
    public setComando(comando: Comando) { this.comando = comando; }
    public aoClicar(): void { this.comando.executar(); }
}
</code></pre>
        <p>Isso desacopla a UI (invocador) da lógica de negócio (receptor). O botão não sabe o que acontece quando é clicado; ele apenas sabe que deve executar um comando.</p>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Command quando você quer parametrizar objetos com operações, enfileirar operações, ou implementar operações reversíveis. É fundamental para construir interfaces de usuário, menus, e sistemas de "desfazer/refazer" (undo/redo).</p>
    `
};
