import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t37-integration-testing",
    title: "Testes de Integração: React Testing Library",
    youtubeVideoId: "Bsk-_i_1W-Y",
    content: `
        <h2>Verificando se as Peças Funcionam Juntas</h2>
        <p><strong>Testes de Integração</strong> verificam se diferentes unidades do seu código funcionam corretamente quando combinadas. No contexto do frontend, isso geralmente significa testar um ou mais componentes renderizados juntos.</p>
        
        <h3>React Testing Library (RTL)</h3>
        <p>RTL é uma biblioteca de testes para componentes React que incentiva boas práticas. Sua filosofia principal é: "Quanto mais seus testes se assemelharem à forma como seu software é usado, mais confiança eles lhe darão."</p>
        <p>Isso significa que, em vez de testar detalhes de implementação (como o estado interno de um componente), você testa o componente da perspectiva do usuário. Você encontra elementos na tela da mesma forma que um usuário faria (pelo texto, pelo label, pelo papel semântico) e interage com eles.</p>

        <pre><code class="language-jsx">import { render, screen, fireEvent } from '@testing-library/react';
import Contador from './Contador';

test('incrementa o contador ao clicar no botão', () => {
  // 1. Renderiza o componente
  render(<Contador />);
  
  // 2. Encontra elementos na tela como um usuário faria
  const botao = screen.getByRole('button', { name: /incrementar/i });
  const mensagem = screen.getByText(/Você clicou 0 vezes/i);

  // 3. Simula a interação do usuário
  fireEvent.click(botao);
  
  // 4. Verifica o resultado visível para o usuário
  // O teste irá falhar se o texto 'Você clicou 1 vezes' não estiver na tela
  expect(screen.getByText(/Você clicou 1 vezes/i)).toBeInTheDocument();
});
</code></pre>

        <h3>Jest-DOM</h3>
        <p>RTL é frequentemente usada com a biblioteca <code>jest-dom</code>, que adiciona "matchers" personalizados para o Jest, tornando as asserções mais declarativas e legíveis, como <code>.toBeInTheDocument()</code>, <code>.toHaveTextContent()</code>, etc.</p>
    `
};
