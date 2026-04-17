import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-abstract-factory",
    title: "Padrão Abstract Factory",
    content: `
        <h2>Criando Famílias de Objetos Relacionados</h2>
        <p>O <strong>Abstract Factory</strong> é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma UI que suporta múltiplos temas (ex: Windows, macOS). Você tem botões, caixas de seleção, etc. Para cada tema, a aparência desses elementos é diferente. Você precisa garantir que sua UI não misture elementos de temas diferentes (um botão do macOS com uma caixa de seleção do Windows).</p>
        <p>O padrão Abstract Factory sugere criar uma interface para cada produto distinto da família de produtos (ex: <code>Botao</code>, <code>Checkbox</code>). Em seguida, você cria uma interface "fábrica abstrata" com uma lista de métodos de criação para todos os produtos da família (ex: <code>criarBotao</code>, <code>criarCheckbox</code>). Agora, para cada variante da família, você cria uma fábrica concreta que implementa a fábrica abstrata e cria os produtos daquela variante específica.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li><strong>Interfaces de Produtos Abstratos:</strong> Declaram interfaces para um conjunto de produtos distintos mas relacionados.</li>
            <li><strong>Produtos Concretos:</strong> São várias implementações de produtos abstratos, agrupados por variantes.</li>
            <li><strong>Interface da Fábrica Abstrata:</strong> Declara um conjunto de métodos para criar cada um dos produtos abstratos.</li>
            <li><strong>Fábricas Concretas:</strong> Implementam os métodos de criação da fábrica abstrata. Cada fábrica concreta corresponde a uma variante específica de produtos.</li>
        </ol>

        <pre><code class="language-typescript">// Interfaces para cada produto
interface Botao {
    pintar(): void;
}
interface Checkbox {
    pintar(): void;
}

// Produtos concretos para um tema (ex: Windows)
class BotaoWin implements Botao {
    public pintar(): void { console.log('Renderizando um botão do Windows.'); }
}
class CheckboxWin implements Checkbox {
    public pintar(): void { console.log('Renderizando uma checkbox do Windows.'); }
}

// Interface da fábrica abstrata
interface FabricaGUI {
    criarBotao(): Botao;
    criarCheckbox(): Checkbox;
}

// Fábrica concreta para o tema Windows
class FabricaWin implements FabricaGUI {
    public criarBotao(): Botao {
        return new BotaoWin();
    }
    public criarCheckbox(): Checkbox {
        return new CheckboxWin();
    }
}
</code></pre>

        <h3>Quando Usar?</h3>
        <p>Use o Abstract Factory quando seu código precisa trabalhar com várias famílias de produtos relacionados, mas você não quer que ele dependa das classes concretas desses produtos. Isso permite que você altere a "família" inteira de produtos de uma só vez, trocando a instância da fábrica concreta.</p>
    `
};
