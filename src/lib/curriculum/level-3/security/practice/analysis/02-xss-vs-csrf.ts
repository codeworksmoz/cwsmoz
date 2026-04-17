import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'sec-ex-2', 
    title: 'XSS vs. CSRF', 
    statement: 'Explique a diferença fundamental entre um ataque de Cross-Site Scripting (XSS) e um de Cross-Site Request Forgery (CSRF). Qual deles engana o navegador e qual engana o servidor?', 
    template: `// XSS (Cross-Site Scripting):
// ...

// CSRF (Cross-Site Request Forgery):
// ...

// Quem é enganado:
// ...
`,
    youtubeVideoId: 'inWWhr5tnEA',
    detailedExplanation: `
        <h2>Diferenciando Ataques Comuns na Web</h2>
        <p>Embora ambos sejam ataques web, eles operam de maneiras muito diferentes.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>XSS:</strong> O atacante injeta um script malicioso em um site confiável. Quando a vítima visita o site, o script é executado no navegador da vítima. O ataque engana o <strong>navegador</strong> a confiar no script malicioso.</li>
            <li><strong>CSRF:</strong> O atacante engana um usuário autenticado a submeter uma requisição para um site sem seu conhecimento (ex: clicando em um link malicioso). O ataque engana o <strong>servidor</strong>, que não consegue distinguir entre uma requisição legítima e uma forjada, pois ela vem do navegador de um usuário autenticado.</li>
        </ol>
    `
};
