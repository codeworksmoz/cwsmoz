import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t12-metrics",
    title: "Métricas Ágeis",
    content: `
        <h2>Medindo o Progresso e a Previsibilidade</h2>
        <p>Métricas ágeis ajudam a equipe a entender seu desempenho e a fazer previsões mais precisas sobre entregas futuras.</p>
        <h3>Métricas Comuns:</h3>
        <ul>
            <li>
                <strong>Velocity (Velocidade):</strong> A quantidade de trabalho (medida em Story Points) que uma equipe consegue concluir em uma Sprint. É uma média histórica e usada apenas para planejamento futuro, nunca para comparar equipes.
            </li>
            <li>
                <strong>Burndown Chart:</strong> Um gráfico que mostra a quantidade de trabalho restante em uma Sprint ou release. O eixo X é o tempo e o eixo Y é o trabalho (em Story Points ou horas). A linha deve "queimar para baixo" (burndown) em direção a zero.
            </li>
            <li>
                <strong>Burnup Chart:</strong> Mostra a quantidade de trabalho concluído ao longo do tempo, juntamente com o escopo total. É útil para visualizar o progresso em relação a mudanças no escopo.
            </li>
            <li>
                <strong>Cumulative Flow Diagram (CFD):</strong> Um gráfico de área que mostra a quantidade de itens em cada etapa do fluxo de trabalho ao longo do tempo. Ajuda a identificar gargalos.
            </li>
        </ul>
    `
};
