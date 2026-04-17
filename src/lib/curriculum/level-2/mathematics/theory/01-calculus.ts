import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "math-t1",
    title: "Cálculo, Álgebra e Estatística",
    youtubeVideoId: "Ws-a_L_3kbg",
    content: `
        <h2>A Matemática por trás da Inovação</h2>
        <p>Certos campos da matemática são indispensáveis para a computação moderna.</p>
        <h3>Tópicos Fundamentais:</h3>
        <ul>
            <li><strong>Cálculo:</strong> O estudo de taxas de mudança (derivadas) e acumulação (integrais). É a base de muitos algoritmos de otimização em Machine Learning, como o gradiente descendente, e é crucial para física em simulações e jogos.</li>
            <li><strong>Álgebra Linear:</strong> O estudo de vetores, espaços vetoriais e matrizes. É a linguagem da computação gráfica (para transformações 3D) e do Machine Learning (para representar dados e realizar operações).</li>
            <li><strong>Estatística e Probabilidade:</strong> Essencial para Ciência de Dados, Machine Learning e qualquer campo que lide com incerteza e análise de dados. Conceitos como média, mediana, desvio padrão e distribuições de probabilidade são usados diariamente.</li>
        </ul>
    `
};
