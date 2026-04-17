import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-observer',
    title: 'Padrão Observer em TypeScript',
    statement: 'Implemente o padrão Observer onde uma `Loja` (Subject) notifica múltiplos `Clientes` (Observers) quando um novo produto chega.',
    template: `// A interface do Observer
interface Observer {
    update(subject: Subject): void;
}

// A interface do Subject
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class Loja implements Subject {
    public novoProduto: string = '';
    private observers: Observer[] = [];

    // Implemente os métodos attach, detach e notify
    // SEU CÓDIGO AQUI

    public lancarNovoProduto(produto: string): void {
        console.log(\`\\nLoja: Lançando novo produto: \${produto}\`);
        this.novoProduto = produto;
        this.notify();
    }
}

class Cliente implements Observer {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public update(subject: Subject): void {
        if (subject instanceof Loja) {
            console.log(\`Cliente \${this.nome}: Novo produto '\${subject.novoProduto}' chegou na loja!\`);
        }
    }
}

// Código cliente (não modificar)
const loja = new Loja();

const cliente1 = new Cliente('Ana');
loja.attach(cliente1);

const cliente2 = new Cliente('João');
loja.attach(cliente2);

loja.lancarNovoProduto("iPhone 20");

loja.detach(cliente1);

loja.lancarNovoProduto("Samsung Galaxy Ultra");
`,
    youtubeVideoId: '45TeJ2I_G0I',
    detailedExplanation: `
        <h2>Mantendo Objetos Sincronizados</h2>
        <p>O padrão Observer define uma dependência um-para-muitos entre objetos, de modo que, quando um objeto (o Subject) muda de estado, todos os seus dependentes (os Observers) são notificados e atualizados automaticamente.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li><strong>attach(observer):</strong> Adicione o observador ao array <code>this.observers</code>.</li>
            <li><strong>detach(observer):</strong> Remova o observador do array <code>this.observers</code>. Você pode usar o método <code>filter</code> para isso.</li>
            <li><strong>notify():</strong> Itere sobre o array <code>this.observers</code> e chame o método <code>update(this)</code> em cada observador. O <code>this</code> passa a própria instância da loja para que os observadores possam acessar seu estado (como o <code>novoProduto</code>).</li>
        </ol>
    `
};
