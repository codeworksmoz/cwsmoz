import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-decorator",
    title: "Padrão Decorator",
    content: `
        <h2>Adicionando Comportamentos a Objetos Dinamicamente</h2>
        <p>O <strong>Decorator</strong> é um padrão de projeto estrutural que permite que você anexe novos comportamentos a objetos, colocando-os dentro de objetos "invólucro" (wrappers) especiais que contêm esses comportamentos.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está trabalhando com um objeto de notificação. Você tem uma classe base simples que envia notificações por email. Agora, você precisa adicionar a funcionalidade de enviar notificações por SMS, Facebook, Slack, etc. Você poderia criar subclasses para cada combinação (Email+SMS, Email+Facebook, Email+SMS+Facebook...), mas isso levaria a uma explosão de classes e seria muito inflexível.</p>
        <p>O padrão Decorator permite que você "embrulhe" um objeto em outros objetos que adicionam novas funcionalidades. Esses "embrulhos" são chamados de decoradores.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A interface do <strong>Componente</strong> declara a interface comum tanto para os invólucros quanto para os objetos envolvidos.</li>
            <li>O <strong>Componente Concreto</strong> é a classe de objetos que estão sendo envolvidos.</li>
            <li>A classe <strong>Decorador Base</strong> tem um campo para referenciar um objeto envolvido. Ela delega todo o trabalho ao objeto envolvido.</li>
            <li><strong>Decoradores Concretos</strong> definem os comportamentos extras que podem ser adicionados aos componentes dinamicamente. Eles executam seu comportamento antes ou depois de chamar o método no objeto envolvido.</li>
        </ol>

        <pre><code class="language-typescript">// A interface do componente
interface Notificador {
    enviar(mensagem: string): void;
}

// O componente concreto
class NotificadorEmail implements Notificador {
    public enviar(mensagem: string): void {
        console.log(\`Enviando email com a mensagem: \${mensagem}\`);
    }
}

// O decorador base
abstract class DecoradorBase implements Notificador {
    protected notificador: Notificador;

    constructor(notificador: Notificador) {
        this.notificador = notificador;
    }

    public enviar(mensagem: string): void {
        this.notificador.enviar(mensagem);
    }
}

// Decoradores concretos
class DecoradorSMS extends DecoradorBase {
    public enviar(mensagem: string): void {
        super.enviar(mensagem);
        console.log(\`Enviando SMS com a mensagem: \${mensagem}\`);
    }
}

class DecoradorFacebook extends DecoradorBase {
     public enviar(mensagem: string): void {
        super.enviar(mensagem);
        console.log(\`Enviando notificação no Facebook com a mensagem: \${mensagem}\`);
    }
}

// Uso
const notificadorSimples = new NotificadorEmail();
const notificadorComSms = new DecoradorSMS(notificadorSimples);
const notificadorCompleto = new DecoradorFacebook(notificadorComSms);

notificadorCompleto.enviar("Promoção especial!");
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Decorator quando você precisa ser capaz de atribuir comportamentos extras a objetos em tempo de execução sem quebrar o código que usa esses objetos. É uma ótima alternativa à herança para estender o comportamento de uma classe.</p>
    `
};
