import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-decorator',
    title: 'Padrão Decorator em TypeScript',
    statement: 'Use o padrão Decorator para adicionar funcionalidades a um objeto de notificação. Comece com uma notificação simples por email e adicione decoradores para enviar também por SMS e Slack.',
    template: `// A interface do Componente
interface Notificador {
    enviar(mensagem: string): void;
}

// O Componente Concreto
class NotificadorEmail implements Notificador {
    public enviar(mensagem: string): void {
        console.log(\`Enviando email com a mensagem: \${mensagem}\`);
    }
}

// O Decorator Base
abstract class DecoradorBase implements Notificador {
    protected notificador: Notificador;

    constructor(notificador: Notificador) {
        this.notificador = notificador;
    }

    // A implementação base do decorator DELEGA a chamada para o objeto envolvido
    public enviar(mensagem: string): void {
        this.notificador.enviar(mensagem);
    }
}

// Crie os Decoradores Concretos 'DecoradorSMS' e 'DecoradorSlack'
// Eles devem estender o DecoradorBase.
// No método 'enviar', eles devem primeiro chamar o método pai (super.enviar)
// e depois adicionar sua própria funcionalidade (console.log).

// SEU CÓDIGO DOS DECORADORES AQUI


// Código cliente (não modificar)
let notificador: Notificador = new NotificadorEmail();
notificador = new DecoradorSMS(notificador);
notificador = new DecoradorSlack(notificador);

notificador.enviar("Lançamento da v2.0 concluído!");
`,
    youtubeVideoId: 'v6tpE7kA2_Y',
    detailedExplanation: `
        <h2>Adicionando Responsabilidades Dinamicamente</h2>
        <p>O Decorator oferece uma alternativa flexível à herança para estender a funcionalidade. Ele envolve um objeto com outros objetos que adicionam novas responsabilidades.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li>Crie a classe <code>class DecoradorSMS extends DecoradorBase</code>.</li>
            <li>Dentro dela, implemente o método <code>public enviar(mensagem: string): void</code>.</li>
            <li>A primeira linha do método deve ser <code>super.enviar(mensagem);</code> para garantir que a notificação original (ou a do decorador anterior) seja executada.</li>
            <li>Após a chamada <code>super</code>, adicione a nova funcionalidade: <code>console.log(\`Enviando SMS com: \${mensagem}\`);</code></li>
            <li>Repita o mesmo processo para a classe <code>DecoradorSlack</code>.</li>
        </ol>
        <p>Dessa forma, você pode "empilhar" responsabilidades em um objeto em tempo de execução, criando combinações que seriam difíceis de gerenciar com herança.</p>
    `
};
