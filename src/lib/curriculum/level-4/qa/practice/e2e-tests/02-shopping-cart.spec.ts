import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'qa-e2e-cart',
    title: 'Teste E2E: Carrinho de Compras',
    statement: 'Escreva um teste E2E que simula um usuário adicionando um item ao carrinho e verificando se o total do carrinho é atualizado corretamente.',
    template: `// Use a sintaxe do Playwright:
// test('deve adicionar um item ao carrinho e atualizar o total', async ({ page }) => {
//   // 1. Navegue para a página de um produto
//
//   // 2. Clique no botão "Adicionar ao Carrinho"
//
//   // 3. Navegue para a página do carrinho
//
//   // 4. Verifique se o item está no carrinho
//
//   // 5. Verifique se o preço total está correto
// });

// Escreva seu teste abaixo:
`,
    youtubeVideoId: 'y3s_y0G5-eE',
    detailedExplanation: `
        <h2>Validando um Fluxo de E-commerce Crítico</h2>
        <p>Garantir que o carrinho de compras funcione é essencial para qualquer site de e-commerce. Este teste valida esse fluxo principal.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Navegar:</strong> Comece indo para a página de um produto específico.</li>
            <li><strong>Ação:</strong> Encontre e clique no botão para adicionar o produto ao carrinho. Você pode usar <code>page.getByRole('button', { name: /adicionar ao carrinho/i })</code>.</li>
            <li><strong>Navegar Novamente:</strong> Vá para a página do carrinho de compras.</li>
            <li><strong>Asserção 1 (Item):</strong> Verifique se o nome do produto que você adicionou está visível na página do carrinho. Use <code>expect(page.getByText('Nome do Produto')).toBeVisible()</code>.</li>
            <li><strong>Asserção 2 (Total):</strong> Verifique se o elemento que mostra o preço total contém o valor correto.</li>
        </ol>
    `
};
