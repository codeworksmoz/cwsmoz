import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-observer",
    title: "Padrão Observer",
    content: `
        <h2>Mantendo Objetos Sincronizados</h2>
        <p>O <strong>Observer</strong> é um padrão de projeto comportamental que permite definir um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você tem dois tipos de objetos: um <strong>Cliente</strong> e uma <strong>Loja</strong>. O cliente está muito interessado em um produto específico que está fora de estoque. Ele poderia visitar a loja todos os dias para verificar se o produto chegou, mas isso seria ineficiente (polling).</p>
        <p>Alternativamente, a loja poderia manter uma lista de clientes interessados e notificá-los assim que o produto estivesse disponível. Isso elimina a necessidade de o cliente verificar constantemente.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>O <strong>Subject (Sujeito)</strong> ou Publisher mantém uma lista de observadores e fornece métodos para adicionar e remover observadores.</li>
            <li>O <strong>Observer (Observador)</strong> ou Subscriber declara a interface de notificação (geralmente um método <code>update()</code>).</li>
            <li><strong>Subjects Concretos</strong> disparam eventos de interesse. Quando um novo evento acontece, eles percorrem a lista de observadores e chamam o método de notificação em cada um deles.</li>
            <li><strong>Observadores Concretos</strong> implementam a lógica para reagir às notificações do sujeito.</li>
        </ol>

        <pre><code class="language-typescript">interface Observador {
    atualizar(sujeito: Sujeito): void;
}

class Sujeito {
    private observadores: Observador[] = [];
    public estado: number = 0;

    public adicionar(observador: Observador): void { this.observadores.push(observador); }
    public remover(observador: Observador): void { /* ... */ }

    public notificar(): void {
        for (const observador of this.observadores) {
            observador.atualizar(this);
        }
    }
    
    public algumaLogica(): void {
        this.estado = Math.floor(Math.random() * 10);
        this.notificar();
    }
}

class ObservadorConcretoA implements Observador {
    public atualizar(sujeito: Sujeito): void {
        if (sujeito.estado < 5) {
            console.log('A: Reagindo ao evento.');
        }
    }
}

// Uso
const sujeito = new Sujeito();
const obsA = new ObservadorConcretoA();
sujeito.adicionar(obsA);

sujeito.algumaLogica();
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Observer quando mudanças no estado de um objeto podem precisar mudar outros objetos, e o conjunto de objetos que precisam ser mudados é desconhecido ou muda dinamicamente. Ele permite que você estabeleça relações de um-para-muitos entre objetos sem acoplá-los.</p>
    `
};
