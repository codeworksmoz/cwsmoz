import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-adapter',
    title: 'Padrão Adapter em TypeScript',
    statement: 'Crie um Adaptador para fazer com que um `ServicoDeLogAntigo` com um método `logar(msg)` seja compatível com um novo sistema que espera uma interface `ILogger` com um método `logInfo(info)`.',
    template: `// A interface alvo que nosso sistema espera
interface ILogger {
    logInfo(info: string): void;
}

// A classe legada (Adaptee) que queremos adaptar
class ServicoDeLogAntigo {
    public logar(msg: string): void {
        console.log(\`LOG ANTIGO: \${msg}\`);
    }
}

// O Adaptador
// Ele deve implementar a interface 'ILogger'
// e conter uma instância de 'ServicoDeLogAntigo'.
class AdaptadorDeLog implements ILogger {
    // SEU CÓDIGO AQUI
}

// Código cliente (não modificar)
function sistemaNovo(logger: ILogger) {
    logger.logInfo("Esta é uma mensagem do sistema novo.");
}

const logAntigo = new ServicoDeLogAntigo();
const adaptador = new AdaptadorDeLog(logAntigo);

console.log("Usando o adaptador com o sistema novo:");
sistemaNovo(adaptador);
`,
    youtubeVideoId: '2PKQtcJjYvc',
    detailedExplanation: `
        <h2>Fazendo Interfaces Incompatíveis Colaborarem</h2>
        <p>O padrão Adapter atua como uma ponte entre duas interfaces incompatíveis. Ele converte a interface de uma classe em outra que o cliente espera.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li>Na classe <code>AdaptadorDeLog</code>, adicione uma propriedade privada para armazenar o serviço antigo: <code>private servicoAntigo: ServicoDeLogAntigo;</code>.</li>
            <li>Crie um construtor que receba uma instância de <code>ServicoDeLogAntigo</code> e a atribua à sua propriedade privada.</li>
            <li>Implemente o método <code>logInfo(info: string): void</code>, que é exigido pela interface <code>ILogger</code>.</li>
            <li>Dentro de <code>logInfo</code>, chame o método da classe legada: <code>this.servicoAntigo.logar(info);</code>. O adaptador está traduzindo a chamada de <code>logInfo</code> para uma chamada de <code>logar</code>.</li>
        </ol>
        <p>Com o adaptador, o <code>sistemaNovo</code> pode usar o <code>ServicoDeLogAntigo</code> sem nem saber que ele existe ou que sua interface é diferente.</p>
    `
};
