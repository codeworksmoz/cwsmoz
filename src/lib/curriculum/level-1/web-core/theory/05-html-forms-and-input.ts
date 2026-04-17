import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t5", 
    title: "Formulários e Entradas de Usuário",
    youtubeVideoId: "fNcIitL32bY",
    content: `
        <h2>Coletando Dados do Usuário</h2>
        <p>Formulários são um dos principais pontos de interação em um site. A tag <code>&lt;form&gt;</code> é o container para diferentes tipos de entrada (inputs).</p>
        <pre><code>&lt;form action="/processa-dados" method="post"&gt;
  &lt;label for="nome"&gt;Nome:&lt;/label&gt;
  &lt;input type="text" id="nome" name="usuario_nome"&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="usuario_email"&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;
        </code></pre>
        <h3>Tipos de Input Comuns:</h3>
        <ul>
            <li><code>type="text"</code>: Campo de texto de uma linha.</li>
            <li><code>type="email"</code>: Para endereços de e-mail.</li>
            <li><code>type="password"</code>: Para senhas.</li>
            <li><code>type="checkbox"</code>: Caixa de seleção.</li>
            <li><code>type="radio"</code>: Botão de opção (permite apenas uma seleção em um grupo).</li>
            <li><code>&lt;textarea&gt;</code>: Campo de texto de múltiplas linhas.</li>
            <li><code>&lt;select&gt;</code>: Lista de opções (dropdown).</li>
        </ul>
        <p>A tag <code>&lt;label&gt;</code> é crucial para acessibilidade, pois associa um texto descritivo a um campo de formulário.</p>
    `
};
