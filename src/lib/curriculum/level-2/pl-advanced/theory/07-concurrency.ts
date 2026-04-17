import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-concurrency",
    title: "Concorrência e Paralelismo Básico",
    content: `
        <h2>Executando Múltiplas Tarefas</h2>
        <p>Concorrência e paralelismo são conceitos relacionados, mas distintos, para lidar com a execução de múltiplas tarefas.</p>
        <ul>
            <li><strong>Concorrência (Concurrency):</strong> Lidar com várias tarefas ao mesmo tempo. As tarefas podem estar progredindo simultaneamente, mas não necessariamente executando ao mesmo tempo (ex: alternando rapidamente entre elas em uma única CPU).</li>
            <li><strong>Paralelismo (Parallelism):</strong> Fazer várias tarefas ao mesmo tempo. Requer hardware com múltiplos núcleos de processamento.</li>
        </ul>
        
        <h3>Threads</h3>
        <p>Uma <strong>thread</strong> é a menor sequência de instruções que pode ser gerenciada de forma independente por um scheduler do sistema operacional. Um único processo pode ter múltiplas threads executando concorrentemente, compartilhando o mesmo espaço de memória.</p>
        
        <h3>Problemas de Concorrência:</h3>
        <p>Quando múltiplas threads acessam e modificam dados compartilhados, podem surgir problemas:</p>
        <ul>
            <li><strong>Condições de Corrida (Race Conditions):</strong> O resultado de uma computação depende da sequência ou do tempo de eventos incontroláveis.</li>
            <li><strong>Deadlocks:</strong> Duas ou mais threads ficam bloqueadas para sempre, cada uma esperando pela outra.</li>
        </ul>

        <h3>Mecanismos de Sincronização:</h3>
        <p>Para evitar esses problemas, usamos mecanismos de sincronização para controlar o acesso a recursos compartilhados:</p>
        <ul>
            <li><strong>Locks/Mutexes (Mutal Exclusion):</strong> Garantem que apenas uma thread possa acessar uma seção crítica do código de cada vez.</li>
            <li><strong>Semáforos:</strong> Permitem que um número limitado de threads acesse um recurso.</li>
        </ul>
    `
};
