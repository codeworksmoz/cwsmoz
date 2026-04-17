import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'cyber-ex-1', 
    title: 'Fases de um Pen Test', 
    statement: 'Liste e descreva brevemente as 5 fases principais de um teste de invasão (penetration test).', 
    template: `// 1. ... (Planejamento)
// 2. ... (Escaneamento/Reconhecimento)
// 3. ... (Obtenção de Acesso)
// 4. ... (Manutenção de Acesso)
// 5. ... (Análise/Relatório)
`,
    youtubeVideoId: 'ooJ9sE3h-pM',
    detailedExplanation: `
        <h2>Entendendo o Processo de um Hacker Ético</h2>
        <p>Um teste de invasão é um ataque simulado autorizado em um sistema de computador, realizado para avaliar a segurança do sistema. O processo segue fases bem definidas.</p>
        <h3>As 5 Fases</h3>
        <ol>
            <li><strong>Planejamento e Reconhecimento:</strong> Definir o escopo e os objetivos do teste, e coletar inteligência (ex: nomes de domínio, IPs) sobre o alvo.</li>
            <li><strong>Escaneamento:</strong> Usar ferramentas para entender como o alvo responde a intrusões. Isso pode incluir o escaneamento de portas abertas e vulnerabilidades.</li>
            <li><strong>Obtenção de Acesso:</strong> Onde a exploração acontece. O hacker tenta explorar as vulnerabilidades encontradas para obter acesso ao sistema.</li>
            <li><strong>Manutenção de Acesso:</strong> O objetivo é ver se a vulnerabilidade pode ser usada para manter uma presença persistente no sistema explorado.</li>
            <li><strong>Análise e Relatório:</strong> A fase final, onde os resultados são compilados em um relatório que inclui as vulnerabilidades encontradas, os dados acessados e recomendações de correção.</li>
        </ol>
    `
};
