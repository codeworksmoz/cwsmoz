import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t6-playwright",
    title: "Ferramentas: Playwright",
    content: `
        <h2>Automação de Navegador Confiável para Testes E2E</h2>
        <p><strong>Playwright</strong> é um framework de código aberto da Microsoft para automação de navegadores. Ele permite testar aplicações web modernas de ponta a ponta (E2E) em todos os principais navegadores (Chromium, Firefox, WebKit) com uma única API.</p>
        
        <h3>Recursos Notáveis:</h3>
        <ul>
            <li>
                <strong>Suporte Multi-Navegador:</strong> A capacidade de testar em diferentes motores de renderização é sua maior vantagem, garantindo que seu site funcione para todos os usuários.
            </li>
            <li>
                <strong>Auto-Waits (Esperas Automáticas):</strong> Playwright espera automaticamente que os elementos estejam prontos para serem interagidos antes de executar uma ação (como um clique). Isso elimina uma das maiores fontes de fragilidade (flakiness) em testes E2E.
            </li>
            <li>
                <strong>Seletores Resilientes:</strong> Encontra elementos na página de uma forma que é resiliente a pequenas mudanças no DOM.
            </li>
            <li>
                <strong>Geração de Código (Codegen):</strong> Possui uma ferramenta incrível que observa suas interações em um navegador e gera o código de teste Playwright correspondente, acelerando a escrita de testes.
            </li>
            <li>
                <strong>Paralelismo:</strong> Pode executar testes em paralelo em múltiplos "workers" para acelerar drasticamente a execução da suíte de testes.
            </li>
        </ul>

        <h3>Exemplo de um Teste E2E:</h3>
        <pre><code class="language-javascript">import { test, expect } from '@playwright/test';

test('página de título', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Espera que o elemento <h1> tenha o texto "Playwright"
  await expect(page.locator('h1')).toContainText('Playwright');
});
</code></pre>
        <p>Playwright está rapidamente se tornando um dos favoritos da comunidade para testes E2E devido à sua velocidade, confiabilidade e conjunto de recursos poderosos.</p>
    `
};
