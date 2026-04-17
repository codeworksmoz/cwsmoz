import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-mediator",
    title: "Padrão Mediator",
    content: `
        <h2>Reduzindo o Acoplamento entre Colegas</h2>
        <p>O <strong>Mediator</strong> é um padrão de projeto comportamental que permite reduzir as dependências caóticas entre objetos. O padrão restringe as comunicações diretas entre os objetos e os força a colaborar apenas através de um objeto mediador.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma caixa de diálogo com vários controles: um campo de texto, uma caixa de seleção, um botão OK e um botão Cancelar. Esses controles precisam interagir. Por exemplo, o botão OK só deve ser ativado se o campo de texto estiver preenchido e a caixa de seleção marcada.</p>
        <p>A abordagem ingênua é fazer com que cada controle conheça e interaja diretamente com todos os outros. Isso cria uma "teia de aranha" de conexões. Adicionar um novo controle exigiria modificar todas as outras classes de controle. Isso viola o Princípio Aberto/Fechado e torna o sistema difícil de manter.</p>
        <p>O padrão Mediator sugere que você extraia toda a lógica de comunicação entre os componentes para uma única classe, o mediador. Os componentes não falam mais uns com os outros diretamente; eles apenas notificam o mediador sobre seus eventos. O mediador, então, decide o que fazer e quais outros componentes devem ser acionados.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>Os <strong>Componentes</strong> são várias classes que contêm alguma lógica de negócio. Cada componente tem uma referência ao mediador.</li>
            <li>A <strong>Interface do Mediador</strong> declara métodos de comunicação com os componentes.</li>
            <li>O <strong>Mediador Concreto</strong> encapsula as relações entre vários componentes. Ele geralmente mantém referências a todos os componentes que gerencia.</li>
        </ol>

        <pre><code class="language-typescript">// A interface do Mediador
interface Mediador {
    notificar(remetente: object, evento: string): void;
}

// O Mediador Concreto
class MediadorDialogo implements Mediador {
    private botao: Botao;
    private checkbox: Checkbox;

    constructor(b: Botao, c: Checkbox) {
        this.botao = b;
        this.botao.setMediador(this);
        this.checkbox = c;
        this.checkbox.setMediador(this);
    }

    public notificar(remetente: object, evento: string): void {
        if (evento === 'checkboxMarcado') {
            console.log('Mediador reage ao checkbox e ativa o botão.');
            this.botao.ativar();
        }
    }
}

// Componente Base (opcional)
class ComponenteBase {
    protected mediador: Mediador;
    public setMediador(mediador: Mediador) { this.mediador = mediador; }
}

// Componentes Concretos
class Botao extends ComponenteBase {
    public ativar() { /* ... */ }
}
class Checkbox extends ComponenteBase {
    public marcar(): void {
        this.mediador.notificar(this, 'checkboxMarcado');
    }
}
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Mediator quando é difícil mudar algumas classes porque elas são fortemente acopladas a um monte de outras classes. O padrão permite que você substitua a comunicação de muitos-para-muitos por uma comunicação de um-para-muitos (componentes para mediador).</p>
    `
};
