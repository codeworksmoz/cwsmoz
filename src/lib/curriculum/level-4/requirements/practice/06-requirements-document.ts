import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'req-ex-6',
    title: 'Prática: Documento de Requisitos',
    statement: 'Crie um mini Documento de Requisitos de Software (SRS) para uma funcionalidade de "Busca de Produtos" em um site de e-commerce. Inclua a descrição, requisitos funcionais e pelo menos um requisito não-funcional.',
    template: `// Mini-SRS: Busca de Produtos

// 1. Descrição da Funcionalidade:
// "..."

// 2. Requisitos Funcionais:
// RF-01: O usuário deve poder buscar por um termo no campo de busca.
// RF-02: ...
// RF-03: ...

// 3. Requisitos Não-Funcionais:
// RNF-01 (Performance): ...
`,
    youtubeVideoId: 'a_TleOwnW4I',
    detailedExplanation: `
        <h2>Estruturando os Requisitos</h2>
        <p>Um Documento de Requisitos de Software (SRS) formaliza os requisitos de forma clara e estruturada.</p>
        <h3>Como Preencher</h3>
        <ol>
            <li><strong>Descrição:</strong> Escreva um ou dois parágrafos explicando o objetivo da funcionalidade de busca do ponto de vista do negócio e do usuário.</li>
            <li><strong>Requisitos Funcionais:</strong> Detalhe o que o sistema deve FAZER. Pense nas diferentes facetas da busca.
                <ul>
                    <li>O usuário pode buscar por um termo.</li>
                    <li>Os resultados devem exibir o nome, imagem e preço do produto.</li>
                    <li>O que acontece se nenhum resultado for encontrado? (Ex: "O sistema deve exibir uma mensagem 'Nenhum produto encontrado'.").</li>
                </ul>
            </li>
            <li><strong>Requisitos Não-Funcionais:</strong> Detalhe COMO o sistema deve se comportar. O mais óbvio para uma busca é a performance.
                <ul>
                    <li>Qual o tempo de resposta aceitável? (Ex: "Os resultados da busca devem ser exibidos em menos de 1.5 segundos.").</li>
                </ul>
            </li>
        </ol>
    `
};
