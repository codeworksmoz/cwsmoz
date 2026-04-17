import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-ts-command',
    title: 'Padrão Command em TypeScript',
    statement: 'Implemente o padrão Command para desacoplar um `ControleRemoto` (Invoker) das operações de uma `Luz` (Receiver).',
    template: `// A interface do Comando
interface Comando {
    executar(): void;
}

// O Receiver (quem executa a ação de fato)
class Luz {
    public ligar(): void {
        console.log("A luz foi ligada.");
    }
    public desligar(): void {
        console.log("A luz foi desligada.");
    }
}

// Crie os Comandos Concretos: 'ComandoLigarLuz' e 'ComandoDesligarLuz'
// Eles devem implementar a interface 'Comando' e conter uma referência para a Luz.
// SEU CÓDIGO DOS COMANDOS AQUI


// O Invoker (quem dispara a ação)
class ControleRemoto {
    private comando: Comando;

    public setComando(comando: Comando): void {
        this.comando = comando;
    }

    public pressionarBotao(): void {
        console.log("Controle: pressionando botão...");
        this.comando.executar();
    }
}


// Código cliente (não modificar)
const luzDaSala = new Luz();
const comandoLigar = new ComandoLigarLuz(luzDaSala);
const comandoDesligar = new ComandoDesligarLuz(luzDaSala);

const controle = new ControleRemoto();

controle.setComando(comandoLigar);
controle.pressionarBotao();

controle.setComando(comandoDesligar);
controle.pressionarBotao();
`,
    youtubeVideoId: '9qA5kw8I_bA',
    detailedExplanation: `
        <h2>Encapsulando uma Requisição como um Objeto</h2>
        <p>O padrão Command transforma uma requisição em um objeto autônomo que contém toda a informação sobre ela. Isso desacopla o objeto que invoca a operação do objeto que sabe como executá-la.</p>
        <h3>Passo a Passo da Implementação</h3>
        <ol>
            <li>Crie a classe <code>ComandoLigarLuz implements Comando</code>.</li>
            <li>No construtor, ela deve receber uma instância de <code>Luz</code>.</li>
            <li>No método <code>executar()</code>, ela deve chamar <code>luz.ligar()</code>.</li>
            <li>Repita o processo para <code>ComandoDesligarLuz</code>, fazendo com que ele chame <code>luz.desligar()</code>.</li>
        </ol>
        <p>O <code>ControleRemoto</code> não sabe nada sobre a <code>Luz</code>. Ele apenas sabe que tem um objeto de <code>Comando</code> que pode ser <code>executado</code>. Isso permite criar sequências, filas ou operações de desfazer/refazer com os objetos de comando.</p>
    `
};
