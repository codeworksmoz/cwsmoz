import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t3-story-format",
    title: "Histórias de Usuário: Formato e Propósito",
    content: `
        <h2>Descrevendo Requisitos da Perspectiva do Usuário</h2>
        <p>Uma <strong>História de Usuário (User Story)</strong> é uma descrição curta, simples e informal de uma funcionalidade, contada da perspectiva da pessoa que deseja a nova capacidade, geralmente um usuário ou cliente do sistema.</p>
        <p>Elas não são especificações detalhadas. Elas são um "convite para uma conversa". O objetivo de uma história de usuário é iniciar uma discussão entre desenvolvedores, QAs e pessoas de negócio para chegar a um entendimento compartilhado do que precisa ser construído.</p>
        
        <h3>O Formato Padrão (Template de Connextra):</h3>
        <p>O formato mais comum para escrever histórias de usuário é:</p>
        <blockquote class="text-lg font-semibold italic border-l-4 pl-4 my-4">
            Como um &lt;tipo de usuário&gt;,<br/>
            Eu quero &lt;um objetivo&gt;,<br/>
            Para que &lt;um benefício/razão&gt;.
        </blockquote>
        
        <h3>Os 3 C's das Histórias de Usuário:</h3>
        <p>Criado por Ron Jeffries, este modelo descreve os três aspectos cruciais de uma história de usuário:</p>
        <ol>
            <li>
                <strong>Card (Cartão):</strong> A descrição escrita da história, que pode ser em um cartão físico ou em uma ferramenta digital como o Jira. É apenas um token que representa o requisito.
            </li>
            <li>
                <strong>Conversation (Conversa):</strong> A discussão colaborativa entre o time e o Product Owner para esclarecer os detalhes da história. É aqui que o verdadeiro entendimento é construído.
            </li>
            <li>
                <strong>Confirmation (Confirmação):</strong> Os critérios de aceitação, que confirmam que a história foi implementada corretamente e atende à necessidade do usuário.
            </li>
        </ol>
        
        <h3>Exemplo:</h3>
        <p><strong>História:</strong> "Como um comprador, eu quero adicionar um item ao meu carrinho de compras, para que eu possa comprá-lo mais tarde."</p>
        <ul>
            <li><strong>Cartão:</strong> O texto acima.</li>
            <li><strong>Conversa:</strong> O time discute: "O que acontece se o item já estiver no carrinho? A quantidade deve ser incrementada? Existe um limite de itens? Podemos adicionar itens de vendedores diferentes?"</li>
            <li><strong>Confirmação:</strong> Os critérios de aceitação são definidos (ex: "Dado que o carrinho está vazio, quando eu adiciono um item, o ícone do carrinho deve mostrar o número 1").</li>
        </ul>
    `
};
