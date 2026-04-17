import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-e2e-register',
    title: 'Teste E2E: Registro de Usuário',
    statement: 'Escreva um teste E2E que automatiza o fluxo de um novo usuário se registrando, incluindo o preenchimento do formulário e a verificação de uma mensagem de sucesso.',
    template: `// Use a sintaxe do Playwright:
// test('deve permitir que um novo usuário se registre com sucesso', async ({ page }) => {
//   // 1. Navegue para a página de registro
//
//   // 2. Preencha os campos do formulário (nome, email, senha)
//
//   // 3. Clique no botão de registro
//
//   // 4. Verifique se uma mensagem de sucesso é exibida
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'y3s_y0G5-eE',
    detailedExplanation: `
        <h2>Validando a Aquisição de Novos Usuários</h2>
        <p>O fluxo de registro é a porta de entrada para sua aplicação. Um bug aqui pode impedir que novos usuários se inscrevam.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Navegar:</strong> Vá para a página de registro (ex: <code>/cadastro</code>).</li>
            <li><strong>Preencher Formulário:</strong> Use localizadores como <code>page.getByLabel()</code> para encontrar cada campo e a ação <code>.fill()</code> para preenchê-los com dados de teste.</li>
            <li><strong>Submeter:</strong> Encontre o botão de registro pelo seu 'role' e nome (ex: <code>page.getByRole('button', { name: /criar conta/i })</code>) e use <code>.click()</code>.</li>
            <li><strong>Asserção:</strong> Verifique se a consequência esperada aconteceu. Isso pode ser uma mensagem de sucesso na tela (<code>expect(page.getByText('Conta criada com sucesso!')).toBeVisible()</code>) ou um redirecionamento para uma nova página.</li>
        </ol>
    `
};
