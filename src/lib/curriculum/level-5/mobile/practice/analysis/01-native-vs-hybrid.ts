import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'mobile-ex-1', 
    title: 'Nativo vs. Híbrido', 
    statement: 'Liste uma vantagem e uma desvantagem da abordagem Nativa e da abordagem Híbrida/Multiplataforma para o desenvolvimento de aplicativos móveis.', 
    template: `// Abordagem Nativa (Swift/Kotlin)
// Vantagem: ...
// Desvantagem: ...

// Abordagem Híbrida (React Native/Flutter)
// Vantagem: ...
// Desvantagem: ...
`,
    youtubeVideoId: '0-S5a0eXPoc',
    detailedExplanation: `
        <h2>A Escolha da Estratégia Mobile</h2>
        <p>A decisão entre desenvolvimento nativo e híbrido é uma das primeiras e mais importantes ao iniciar um projeto mobile.</p>
        <h3>Analisando os Trade-offs</h3>
        <ul>
            <li><strong>Nativo:</strong>
                <ul>
                    <li><strong>Vantagem:</strong> Melhor performance possível e acesso imediato a todas as APIs e funcionalidades nativas do sistema operacional.</li>
                    <li><strong>Desvantagem:</strong> Custo e tempo de desenvolvimento mais altos, pois é preciso manter dois códigos-base separados (um para iOS, um para Android).</li>
                </ul>
            </li>
            <li><strong>Híbrido:</strong>
                <ul>
                    <li><strong>Vantagem:</strong> Custo e tempo de desenvolvimento menores, pois você escreve um único código-base que serve para ambas as plataformas.</li>
                    <li><strong>Desvantagem:</strong> Performance pode ser inferior à nativa para tarefas intensivas, e pode haver um atraso para ter acesso às novas funcionalidades do sistema operacional.</li>
                </ul>
            </li>
        </ul>
    `
};
