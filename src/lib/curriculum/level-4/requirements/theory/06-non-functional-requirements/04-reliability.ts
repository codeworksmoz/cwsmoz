import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t6-nfr-reliability",
    title: "RNFs: Confiabilidade (Reliability)",
    content: `
        <h2>Quão Confiável o Sistema Deve Ser?</h2>
        <p><strong>Requisitos Não-Funcionais (RNFs) de Confiabilidade</strong> definem a capacidade de um sistema de funcionar sem falhas por um determinado período de tempo em um ambiente específico.</p>
        
        <h3>Métricas de Confiabilidade:</h3>
        <ul>
            <li>
                <strong>Disponibilidade (Availability):</strong> A porcentagem de tempo que o sistema está operacional e disponível para uso. É a métrica mais comum e geralmente é expressa em "noves".
                <br/><em>Exemplo: "O sistema deve ter uma disponibilidade de 99.9% (três noves), o que permite um tempo de inatividade de no máximo 8.77 horas por ano."</em>
                <ul>
                    <li>99% ("dois noves") = ~3.65 dias de inatividade/ano</li>
                    <li>99.9% ("três noves") = ~8.77 horas de inatividade/ano</li>
                    <li>99.99% ("quatro noves") = ~52.6 minutos de inatividade/ano</li>
                    <li>99.999% ("cinco noves") = ~5.26 minutos de inatividade/ano</li>
                </ul>
            </li>
            <li>
                <strong>Mean Time Between Failures (MTBF):</strong> O tempo médio que o sistema opera antes de uma falha ocorrer.
                <br/><em>Exemplo: "O MTBF para o servidor de banco de dados deve ser de pelo menos 10.000 horas."</em>
            </li>
            <li>
                <strong>Mean Time To Repair (MTTR):</strong> O tempo médio necessário para reparar um sistema após uma falha e restaurar sua funcionalidade.
                <br/><em>Exemplo: "Em caso de falha crítica do sistema, o MTTR não deve exceder 30 minutos."</em>
            </li>
        </ul>
        <p>A confiabilidade é crítica para sistemas de missão crítica, como sistemas bancários, controle de tráfego aéreo ou aplicações de saúde. O nível de confiabilidade necessário tem um impacto direto na arquitetura do sistema (ex: necessidade de redundância, failover, etc.).</p>
    `
};
