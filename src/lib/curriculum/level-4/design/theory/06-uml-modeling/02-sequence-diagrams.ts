import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-uml-sequence",
    title: "Modelagem UML: Diagramas de Sequência",
    content: `
        <h2>Modelando Interações ao Longo do Tempo</h2>
        <p>O <strong>Diagrama de Sequência</strong> é um diagrama de interação da UML que mostra como os processos operam uns com os outros e em que ordem. Ele foca na troca de mensagens entre objetos em uma sequência temporal.</p>
        
        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Lifeline (Linha da Vida):</strong> Representa um participante individual (um objeto ou uma instância de classe) na interação. É desenhada como uma linha vertical pontilhada.</li>
            <li><strong>Activation Box (Caixa de Ativação):</strong> Um retângulo fino na lifeline que indica o período durante o qual um objeto está executando uma ação.</li>
            <li><strong>Mensagens:</strong> Setas que representam a comunicação entre objetos.
                <ul>
                    <li><strong>Mensagem Síncrona:</strong> O remetente espera pela resposta antes de continuar. (Seta com ponta preenchida).</li>
                    <li><strong>Mensagem Assíncrona:</strong> O remetente não espera pela resposta e continua sua execução. (Seta com ponta aberta).</li>
                    <li><strong>Mensagem de Retorno:</strong> Uma linha pontilhada indicando o retorno de uma chamada de método.</li>
                </ul>
            </li>
        </ul>
        <p>Diagramas de sequência são excelentes para visualizar a lógica de um caso de uso específico, como "fazer login" ou "realizar uma compra", mostrando quais objetos estão envolvidos e como eles se comunicam passo a passo.</p>
    `
};
