import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t6-rtl",
    title: "Ferramentas: React Testing Library",
    content: `
        <h2>Testando Componentes React da Maneira Correta</h2>
        <p><strong>React Testing Library (RTL)</strong> é uma família de bibliotecas de teste que fornece utilitários leves para testar componentes React (e de outros frameworks) sem depender dos detalhes de sua implementação.</p>
        
        <h3>A Filosofia Guia</h3>
        <blockquote class="italic border-l-4 pl-4">
            "Quanto mais seus testes se assemelharem à forma como seu software é usado, mais confiança eles lhe darão."
        </blockquote>
        <p>RTL incentiva você a escrever testes que interagem com seus componentes da mesma forma que um usuário faria. Em vez de buscar um componente por seu nome ou estado interno, você o busca pelo texto que ele renderiza, seu label, ou seu papel de acessibilidade.</p>
        
        <h3>Principais Funções e Conceitos:</h3>
        <ul>
            <li>
                <strong><code>render()</code>:</strong> Renderiza um componente React em um contêiner DOM simulado.
            </li>
            <li>
                <strong>Queries:</strong> Funções para encontrar elementos na tela. A RTL fornece diferentes tipos de queries, com uma ordem de prioridade recomendada que promove a acessibilidade:
                <ol>
                    <li><code>getByRole</code>, <code>findByRole</code>, <code>queryByRole</code> (acessibilidade)</li>
                    <li><code>getByLabelText</code> (formulários)</li>
                    <li><code>getByText</code> (texto visível)</li>
                    <li><code>getByTestId</code> (usado como último recurso)</li>
                </ol>
            </li>
            <li>
                <strong><code>fireEvent</code> / <code>userEvent</code>:</strong> Utilidades para disparar eventos do DOM e simular interações do usuário (cliques, digitação, etc.). A biblioteca <code>user-event</code> é geralmente preferida por simular o comportamento do usuário de forma mais realista.
            </li>
        </ul>

        <pre><code class="language-jsx">import { render, screen, fireEvent } from '@testing-library/react';
import MeuContador from './MeuContador';

test('o contador incrementa quando o botão é clicado', () => {
  render(<MeuContador />);

  // Encontra o botão pelo seu texto visível
  const button = screen.getByText('Incrementar');

  // Simula um clique de usuário
  fireEvent.click(button);

  // Verifica se o texto na tela foi atualizado
  expect(screen.getByText('Contagem: 1')).toBeInTheDocument();
});
</code></pre>
        <p>Ao focar no comportamento observável pelo usuário, os testes escritos com RTL são mais robustos a refatorações internas do componente e dão mais confiança de que a aplicação está funcionando para seus usuários.</p>
    `
};
