import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "req-t8-validation",
    title: "Validação de Requisitos",
    content: `
        <h2>Estamos Construindo a Coisa Certa?</h2>
        <p><strong>Validação de Requisitos</strong> é o processo de verificar se os requisitos definidos e documentados correspondem às reais necessidades dos stakeholders. Enquanto a verificação ("estamos construindo a coisa certo?"), foca na correção, a validação ("estamos construindo a coisa certa?") foca na adequação.</p>
        <p>O objetivo é encontrar erros e omissões nos requisitos <em>antes</em> que o desenvolvimento comece, pois o custo de corrigir um erro aumenta exponencialmente nas fases posteriores do projeto.</p>
        
        <h3>Técnicas de Validação:</h3>
        <ul>
            <li>
                <strong>Revisões de Requisitos (Requirements Reviews):</strong>
                <ul>
                    <li><strong>Walkthroughs:</strong> Uma revisão informal onde o analista apresenta os requisitos para um grupo de stakeholders para obter feedback.</li>
                    <li><strong>Inspeções Formais:</strong> Um processo de revisão mais rigoroso, com papéis definidos (moderador, inspetores) e checklists, para encontrar defeitos no documento de requisitos.</li>
                </ul>
            </li>
            <li>
                <strong>Prototipagem (Prototyping):</strong>
                <p>Criar uma versão inicial e simplificada da interface do usuário (UI) para que os usuários possam interagir e fornecer feedback. Um protótipo pode ser um simples esboço em papel (baixa fidelidade) ou um mockup interativo (alta fidelidade).</p>
                <p>Prototipagem é extremamente eficaz para validar requisitos de UI e fluxos de trabalho, pois permite que os usuários "vejam" e "sintam" o sistema antes que uma única linha de código seja escrita.</p>
            </li>
            <li>
                <strong>Geração de Casos de Teste:</strong>
                <p>Tentar escrever casos de teste de aceitação a partir dos requisitos é uma ótima maneira de encontrar ambiguidades e detalhes faltantes. Se você não consegue definir como testar um requisito, ele provavelmente não está claro o suficiente.</p>
            </li>
        </ul>
        <p>A validação é um processo contínuo e colaborativo que garante que o produto final realmente resolva o problema do cliente.</p>
    `
};
