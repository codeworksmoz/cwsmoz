import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "ai-t1",
    title: "Ensinando Máquinas a Aprender",
    youtubeVideoId: "i_LwzRVP7bg",
    content: `
        <h2>O que é Machine Learning?</h2>
        <p>Machine Learning (ML) é um subcampo da Inteligência Artificial (IA) que foca em construir sistemas que podem aprender com dados, identificar padrões e tomar decisões com mínima intervenção humana.</p>
        <h3>Tipos de Aprendizado:</h3>
        <ul>
            <li><strong>Supervisionado:</strong> O modelo aprende com dados rotulados (ex: um conjunto de imagens de gatos e cachorros com etiquetas dizendo o que são).</li>
            <li><strong>Não Supervisionado:</strong> O modelo encontra padrões em dados não rotulados (ex: agrupar clientes com comportamentos de compra semelhantes).</li>
            <li><strong>Por Reforço:</strong> O modelo aprende através de tentativa e erro, recebendo recompensas ou punições.</li>
        </ul>
    `
};
