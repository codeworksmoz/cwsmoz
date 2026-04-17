import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-factory',
    title: 'Padrão Factory Method em TypeScript',
    statement: 'Implemente o padrão Factory Method para criar diferentes tipos de notificações (Email, SMS) sem que o código cliente precise saber das classes concretas.',
    template: `interface Notificacao {
    enviar(mensagem: string): void;
}

class NotificacaoEmail implements Notificacao {
    public enviar(mensagem: string): void {
        console.log(\`Enviando por Email: \${mensagem}\`);
    }
}

class NotificacaoSMS implements Notificacao {
    public enviar(mensagem: string): void {
        console.log(\`Enviando por SMS: \${mensagem}\`);
    }
}

// Crie a classe abstrata 'FabricaDeNotificacao'
// Ela deve ter um método abstrato 'criarNotificacao' e um método concreto 'enviarNotificacao'.
// SEU CÓDIGO DA FÁBRICA ABSTRATA AQUI

// Crie as fábricas concretas 'FabricaDeEmail' e 'FabricaDeSMS'
// Elas devem estender a fábrica abstrata e implementar o método 'criarNotificacao'.
// SEU CÓDIGO DAS FÁBRICAS CONCRETAS AQUI


// Código cliente (não modificar)
function cliente(fabrica: FabricaDeNotificacao) {
    fabrica.enviarNotificacao("Seu pedido foi confirmado!");
}

console.log('Cliente: Usando a fábrica de Email.');
cliente(new FabricaDeEmail());

console.log('');

console.log('Cliente: Usando a fábrica de SMS.');
cliente(new FabricaDeSMS());
`,
    youtubeVideoId: 'EhnxN_K3vY8',
    detailedExplanation: `
        <h2>Deixando as Subclasses Decidirem</h2>
        <p>O Factory Method permite que uma classe adie a instanciação para as subclasses. Isso é útil quando uma classe não pode antecipar a classe de objetos que deve criar.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li>Crie uma classe <code>abstract class FabricaDeNotificacao</code>.</li>
            <li>Dentro dela, declare um método abstrato: <code>public abstract criarNotificacao(): Notificacao;</code>.</li>
            <li>Ainda dentro dela, crie um método concreto, <code>enviarNotificacao</code>, que usa o método fábrica:
                <pre><code>public enviarNotificacao(msg: string): void {
    const notificacao = this.criarNotificacao();
    notificacao.enviar(msg);
}</code></pre>
            </li>
            <li>Crie a classe <code>class FabricaDeEmail extends FabricaDeNotificacao</code>. Implemente o método <code>criarNotificacao</code> para que ele retorne <code>new NotificacaoEmail()</code>.</li>
            <li>Faça o mesmo para <code>FabricaDeSMS</code>, fazendo com que retorne <code>new NotificacaoSMS()</code>.</li>
        </ol>
        <p>O código cliente agora só precisa saber qual fábrica usar, desacoplando-o completamente das classes de notificação concretas.</p>
    `
};
