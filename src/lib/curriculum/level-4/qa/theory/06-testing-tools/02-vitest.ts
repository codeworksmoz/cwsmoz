import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t6-vitest",
    title: "Ferramentas: Vitest",
    content: `
        <h2>Um Framework de Testes Unitários Rápido como um Raio</h2>
        <p><strong>Vitest</strong> é um framework de testes unitários moderno, projetado para ser extremamente rápido, com foco em projetos que usam Vite como ferramenta de build. Ele foi criado para oferecer uma alternativa mais rápida e moderna ao Jest.</p>
        
        <h3>Principais Vantagens:</h3>
        <ul>
            <li>
                <strong>Velocidade:</strong> Aproveita a arquitetura do Vite (incluindo HMR - Hot Module Replacement) para executar testes de forma incrivelmente rápida, especialmente no "watch mode".
            </li>
            <li>
                <strong>API Compatível com Jest:</strong> Vitest tem uma API quase idêntica à do Jest. Isso significa que as funções <code>describe</code>, <code>it</code>, <code>expect</code> e os mocks funcionam da mesma maneira. A migração de um projeto Jest para Vitest é geralmente muito simples.
            </li>
            <li>
                <strong>Configuração Mínima:</strong> Se seu projeto já usa Vite, a configuração do Vitest é trivial, pois ele reutiliza a mesma configuração.
            </li>
            <li>
                <strong>Moderno por Padrão:</strong> Suporta TypeScript, JSX e ESM (ES Modules) prontos para uso, sem a necessidade de configurações complexas.
            </li>
        </ul>

        <h3>Exemplo de Teste com Vitest:</h3>
        <p>O código de teste é exatamente o mesmo que seria em Jest, o que é uma grande vantagem.</p>
        <pre><code class="language-typescript">// Arquivo de teste (ex: somar.test.ts)
import { describe, it, expect } from 'vitest';
import { somar } from './matematica';

describe('somar', () => {
    it('deve retornar a soma de dois números', () => {
        expect(somar(2, 3)).toBe(5);
    });
});
</code></pre>
        
        <h3>Quando escolher Vitest?</h3>
        <p>Se você está iniciando um novo projeto que já usa Vite (comum em ecossistemas como React, Vue, Svelte), Vitest é a escolha natural e recomendada. Para projetos existentes que usam Jest, a migração pode valer a pena se a velocidade da suíte de testes for uma preocupação.</p>
    `
};
