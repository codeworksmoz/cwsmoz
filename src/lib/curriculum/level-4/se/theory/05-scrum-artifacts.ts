import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t5-scrum-artifacts",
    title: "Framework Scrum: Artefatos",
    content: `
        <h2>Os Artefatos do Scrum</h2>
        <p>Os artefatos do Scrum representam trabalho ou valor. Eles são projetados para maximizar a transparência das informações chave.</p>
        <ul>
            <li>
                <strong>Product Backlog:</strong> Uma lista ordenada de tudo que é conhecido ser necessário no produto. É a única fonte de requisitos para quaisquer mudanças a serem feitas no produto. O Product Owner é responsável pelo Product Backlog.
            </li>
            <li>
                <strong>Sprint Backlog:</strong> O conjunto de itens do Product Backlog selecionados para a Sprint, mais um plano para entregar o Incremento do produto e realizar o Objetivo da Sprint. É uma previsão do Time de Desenvolvimento sobre qual funcionalidade estará no próximo Incremento.
            </li>
            <li>
                <strong>Incremento (Increment):</strong> A soma de todos os itens do Product Backlog completados durante uma Sprint e o valor dos incrementos de todas as Sprints anteriores. No final de uma Sprint, o novo Incremento deve ser "Pronto", o que significa que ele está em uma condição utilizável.
            </li>
        </ul>
    `
};
