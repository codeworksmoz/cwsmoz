import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-e2e-login',
    title: 'Teste E2E: Fluxo de Login',
    statement: 'Escreva um teste E2E usando a sintaxe do Playwright que automatiza o fluxo de login de um usuário em uma página fictícia.',
    template: `// Use a sintaxe do Playwright:
// import { test, expect } from '@playwright/test';

// test('deve permitir que um usuário com credenciais válidas faça login', async ({ page }) => {
//   // 1. Navegue para a página de login
//   // await page.goto('https://exemplo.com/login');
//
//   // 2. Encontre os campos de email/senha e preencha-os
//   // await page.getByLabel('Email').fill('usuario@teste.com');
//   // ...
//
//   // 3. Encontre o botão de login e clique nele
//   // ...
//
//   // 4. Faça uma asserção para verificar se o login foi bem-sucedido
//   // (Ex: verificar se a URL mudou para /dashboard ou se um texto de boas-vindas apareceu)
//   // await expect(page).toHaveURL(/.*dashboard/);
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'y3s_y0G5-eE',
    detailedExplanation: `
        <h2>Simulando um Usuário Real</h2>
        <p>Testes E2E validam a jornada completa do usuário. Para este exercício, imagine uma página de login simples e descreva os passos que o Playwright seguiria.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong><code>test(...)</code>:</strong> Defina o teste dentro de uma função <code>test</code>.</li>
            <li><strong><code>page.goto(url)</code>:</strong> O primeiro passo é sempre navegar para a página que você quer testar.</li>
            <li><strong>Localizadores:</strong> Use os localizadores do Playwright (<code>getByLabel</code>, <code>getByRole</code>, etc.) para encontrar os elementos na página de forma semântica.</li>
            <li><strong>Ações:</strong> Use ações como <code>.fill()</code> para digitar em um campo e <code>.click()</code> para clicar em um botão.</li>
            <li><strong>Asserções (Expect):</strong> Use <code>expect()</code> para verificar o resultado. A asserção deve confirmar que o efeito desejado da ação ocorreu (ex: uma mudança de página ou um novo elemento visível).</li>
        </ol>
    `
};
