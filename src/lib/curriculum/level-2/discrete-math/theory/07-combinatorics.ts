import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-combinatorics",
    title: "Análise Combinatória",
    content: `
        <h2>A Matemática da Contagem</h2>
        <p>A <strong>análise combinatória</strong> é a área da matemática que estuda a contagem, arranjo e combinação de objetos.</p>
        
        <h3>Princípios Fundamentais de Contagem:</h3>
        <ul>
            <li><strong>Regra do Produto:</strong> Se uma tarefa pode ser feita em n₁ maneiras e uma segunda tarefa pode ser feita em n₂ maneiras, então há n₁ * n₂ maneiras de fazer ambas as tarefas.</li>
            <li><strong>Regra da Soma:</strong> Se uma tarefa pode ser feita de n₁ maneiras e uma segunda tarefa de n₂ maneiras, e as duas tarefas não podem ser feitas ao mesmo tempo, então há n₁ + n₂ maneiras de fazer uma das tarefas.</li>
        </ul>
        
        <h3>Permutações e Combinações:</h3>
        <ul>
            <li><strong>Permutação:</strong> Um arranjo de objetos onde a <strong>ordem importa</strong>. O número de permutações de r objetos escolhidos de um conjunto de n é P(n, r).</li>
            <li><strong>Combinação:</strong> Uma seleção de objetos onde a <strong>ordem não importa</strong>. O número de combinações de r objetos escolhidos de um conjunto de n é C(n, r), também conhecido como coeficiente binomial.</li>
        </ul>
        
        <h3>Princípio da Casa dos Pombos:</h3>
        <p>Se você tem N pombos e M casas de pombos, e N > M, então pelo menos uma casa de pombos deve conter mais de um pombo. É um princípio simples com aplicações surpreendentes.</p>

        <h3>Coeficientes Binomiais e Triângulo de Pascal:</h3>
        <p>Os coeficientes binomiais C(n, k) são os coeficientes na expansão do binômio (x + y)ⁿ. Eles formam o famoso Triângulo de Pascal.</p>
    `
};
