import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-chain-of-responsibility",
    title: "Padrão Chain of Responsibility",
    content: `
        <h2>Passando Requisições por uma Corrente de Manipuladores</h2>
        <p>O <strong>Chain of Responsibility</strong> (Cadeia de Responsabilidade) é um padrão de projeto comportamental que permite que você passe requisições ao longo de uma cadeia de manipuladores. Ao receber uma requisição, cada manipulador decide se processa a requisição ou se a passa para o próximo manipulador na cadeia.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está trabalhando em um sistema de pedidos online. Um pedido precisa passar por várias verificações: validação de dados, verificação de permissão do usuário, verificação de estoque, etc. Você poderia criar uma classe monolítica com um método enorme que faz todas essas verificações. No entanto, isso seria inflexível. Adicionar uma nova verificação exigiria modificar essa classe enorme.</p>
        <p>O padrão Chain of Responsibility sugere que você transforme cada verificação em um objeto separado chamado "manipulador". Cada manipulador tem um campo para armazenar uma referência ao próximo manipulador na cadeia. Ao receber uma requisição, o manipulador decide se pode processá-la. Se puder, ele não passa a requisição adiante. Se não, ele a passa para o próximo manipulador.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A <strong>Interface do Manipulador</strong> declara um método para construir a cadeia de manipuladores e um método para executar uma requisição.</li>
            <li>O <strong>Manipulador Base (opcional)</strong> é uma classe abstrata que fornece uma implementação padrão para o encadeamento.</li>
            <li>Os <strong>Manipuladores Concretos</strong> contêm a lógica real para processar a requisição.</li>
            <li>O <strong>Cliente</strong> pode compor as cadeias uma única vez ou dinamicamente, dependendo da lógica da aplicação.</li>
        </ol>

        <pre><code class="language-typescript">interface Manipulador {
    setProximo(manipulador: Manipulador): Manipulador;
    manipular(requisicao: string): string | null;
}

abstract class ManipuladorAbstrato implements Manipulador {
    private proximoManipulador: Manipulador;

    public setProximo(manipulador: Manipulador): Manipulador {
        this.proximoManipulador = manipulador;
        return manipulador;
    }

    public manipular(requisicao: string): string | null {
        if (this.proximoManipulador) {
            return this.proximoManipulador.manipular(requisicao);
        }
        return null;
    }
}

class VerificadorDePermissao extends ManipuladorAbstrato {
    public manipular(requisicao: string): string | null {
        if (requisicao === 'Admin') {
            return \`VerificadorDePermissao: Acesso concedido.\`;
        }
        return super.manipular(requisicao);
    }
}

class ValidadorDeDados extends ManipuladorAbstrato {
    public manipular(requisicao: string): string | null {
        // ... lógica de validação ...
        return super.manipular(requisicao);
    }
}

// Uso
const permissao = new VerificadorDePermissao();
const validacao = new ValidadorDeDados();

permissao.setProximo(validacao);

// O cliente só precisa interagir com o primeiro manipulador da cadeia.
const resultado = permissao.manipular("Admin");
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Chain of Responsibility quando seu programa precisa processar diferentes tipos de requisições de várias maneiras, mas os tipos exatos de requisições e suas sequências são desconhecidos a priori. O padrão permite que você vincule vários manipuladores em uma cadeia e, ao receber uma requisição, pergunte a cada um se ele pode processá-la.</p>
    `
};
