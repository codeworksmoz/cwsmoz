import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t7-moscow",
    title: "Priorização: Método MoSCoW",
    content: `
        <h2>Decidindo o que é Realmente Importante</h2>
        <p>Priorizar requisitos é essencial para garantir que a equipe de desenvolvimento esteja sempre trabalhando nas funcionalidades de maior valor e para gerenciar o escopo de um projeto ou release. O <strong>Método MoSCoW</strong> é uma técnica simples e eficaz para classificar requisitos.</p>
        <p>MoSCoW é um acrônimo para quatro categorias de prioridade:</p>
        
        <dl>
            <dt class="font-bold mt-4">M - Must Have (Deve Ter)</dt>
            <dd class="ml-4">
                Requisitos críticos e não negociáveis. O sistema não pode ser lançado sem eles. Se um requisito "Must Have" não for entregue, o projeto é considerado um fracasso.
                <br/>
                <em>Exemplo: Em um e-commerce, a funcionalidade de "Adicionar ao Carrinho" é um "Must Have".</em>
            </dd>

            <dt class="font-bold mt-4">S - Should Have (Deveria Ter)</dt>
            <dd class="ml-4">
                Requisitos importantes, mas não vitais para o lançamento. Se não forem incluídos, o sistema ainda funcionará, mas será menos valioso ou terá um impacto negativo. Podem ser adiados para um próximo release se necessário.
                <br/>
                <em>Exemplo: A funcionalidade de "Lista de Desejos" é um "Should Have".</em>
            </dd>

            <dt class="font-bold mt-4">C - Could Have (Poderia Ter)</dt>
            <dd class="ml-4">
                Requisitos desejáveis, mas menos importantes. São os "nice-to-haves". Geralmente só são implementados se houver tempo e recursos sobrando, sem impactar outros requisitos.
                <br/>
                <em>Exemplo: Animações customizadas na interface do carrinho de compras.</em>
            </dd>

            <dt class="font-bold mt-4">W - Won't Have (Não Terá... por agora)</dt>
            <dd class="ml-4">
                Requisitos que foram explicitamente acordados que <strong>não</strong> serão incluídos no release atual. Documentar o que "não será feito" é tão importante quanto documentar o que será, para gerenciar as expectativas dos stakeholders.
            </dd>
        </dl>
        <p>O método MoSCoW ajuda a criar um entendimento compartilhado sobre a prioridade de cada funcionalidade e a tomar decisões difíceis sobre o escopo.</p>
    `
};
