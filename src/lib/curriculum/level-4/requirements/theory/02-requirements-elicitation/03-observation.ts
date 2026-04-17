import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t2-observation",
    title: "Elicitação: Observação",
    content: `
        <h2>"Ver para Crer": Entendendo o Contexto Real</h2>
        <p>A técnica de <strong>observação</strong> envolve observar os usuários em seu ambiente de trabalho natural para entender como eles realizam suas tarefas, quais são seus fluxos de trabalho e quais problemas eles enfrentam.</p>
        <p>Muitas vezes, o que as pessoas <em>dizem</em> que fazem é diferente do que elas <em>realmente</em> fazem. A observação ajuda a descobrir requisitos implícitos e a identificar ineficiências no processo atual que os próprios usuários podem não perceber.</p>
        
        <h3>Tipos de Observação:</h3>
        <ul>
            <li>
                <strong>Passiva:</strong> O observador (analista) apenas assiste sem interferir. É útil para entender o fluxo de trabalho natural sem influenciá-lo.
            </li>
            <li>
                <strong>Ativa (Contextual Inquiry):</strong> O observador atua como um "aprendiz" e pode fazer perguntas ao usuário enquanto ele executa a tarefa ("Por que você fez isso? O que você está pensando agora?"). Isso fornece um contexto muito mais rico.
            </li>
        </ul>

        <h3>O que Observar?</h3>
        <ul>
            <li>
                <strong>O Fluxo de Trabalho:</strong> A sequência de passos que o usuário segue para completar uma tarefa.
            </li>
            <li>
                <strong>As Ferramentas:</strong> Quais softwares, papéis, planilhas ou outras ferramentas são usados?
            </li>
            <li>
                <strong>Os Desafios (Pain Points):</strong> Onde o usuário parece frustrado? Onde ele comete erros? Onde o processo é lento ou repetitivo?
            </li>
            <li>
                <strong>Soluções de Contorno (Workarounds):</strong> Quais "gambiarras" ou soluções improvisadas os usuários criaram para contornar as limitações das ferramentas atuais? Elas são uma mina de ouro para identificar oportunidades de melhoria.
            </li>
        </ul>
        <p>A observação é uma técnica poderosa para gerar empatia com o usuário e descobrir necessidades que não seriam reveladas em uma entrevista tradicional.</p>
    `
};
