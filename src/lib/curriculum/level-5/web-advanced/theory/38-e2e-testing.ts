import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t38-e2e-testing",
    title: "Testes End-to-End (E2E): Playwright e Cypress",
    youtubeVideoId: "y3s_y0G5-eE",
    content: `
        <h2>Testando a Aplicação Completa do Início ao Fim</h2>
        <p><strong>Testes End-to-End (E2E)</strong> simulam um fluxo de usuário real na sua aplicação, do início ao fim. Eles rodam em um navegador real, interagindo com a sua aplicação da mesma forma que um usuário faria (clicando em botões, preenchendo formulários, navegando entre páginas).</p>
        <p>O objetivo é verificar se todos os componentes do sistema (frontend, backend, banco de dados) funcionam juntos corretamente em um cenário real. São os testes mais caros e lentos de executar, mas os que dão a maior confiança de que a aplicação está funcionando como um todo.</p>
        
        <h3>Ferramentas Populares:</h3>
        <ul>
            <li>
                <strong>Cypress:</strong> Uma ferramenta "tudo em um" que roda no mesmo loop de eventos do navegador, o que a torna rápida e confiável para testes E2E. É conhecida por sua excelente experiência de desenvolvimento e depuração interativa.
            </li>
            <li>
                <strong>Playwright:</strong> Uma ferramenta da Microsoft que se destaca por sua capacidade de rodar testes em múltiplos navegadores (Chromium, Firefox, WebKit) com uma única API. É conhecido por sua velocidade e recursos poderosos, como a geração automática de código de teste.
            </li>
        </ul>

        <pre><code class="language-javascript">// Exemplo de teste E2E com sintaxe do Playwright

import { test, expect } from '@playwright/test';

test('deve permitir que o usuário faça login com sucesso', async ({ page }) => {
  // Navega para a página de login
  await page.goto('http://localhost:3000/login');
  
  // Preenche o formulário
  await page.getByLabel('Email').fill('usuario@exemplo.com');
  await page.getByLabel('Senha').fill('senha123');
  
  // Clica no botão de login
  await page.getByRole('button', { name: /entrar/i }).click();
  
  // Verifica se o usuário foi redirecionado para o dashboard
  await expect(page).toHaveURL('http://localhost:3000/dashboard');
  
  // Verifica se uma mensagem de boas-vindas é exibida
  await expect(page.getByRole('heading', { name: /bem-vindo/i })).toBeVisible();
});
</code></pre>
    `
};
