import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-ubiquitous-language",
    title: "DDD: Linguagem Ubíqua",
    content: `
        <h2>A Base da Colaboração</h2>
        <p>A <strong>Linguagem Ubíqua</strong> é um termo do Domain-Driven Design (DDD) para a prática de construir uma linguagem rigorosa e compartilhada entre desenvolvedores e especialistas do domínio (usuários, stakeholders).</p>
        <p>Esta linguagem deve ser usada em todas as formas de comunicação, incluindo discussões, documentos e, crucialmente, no próprio código (nomes de classes, métodos, variáveis).</p>
        <h3>Por que é importante?</h3>
        <ul>
            <li><strong>Elimina Ambiguidade:</strong> Garante que quando um especialista diz "Cliente", o desenvolvedor entende e modela exatamente o mesmo conceito.</li>
            <li><strong>Conecta o Código ao Negócio:</strong> O código se torna uma expressão direta do modelo de negócio, facilitando a compreensão e a evolução.</li>
            <li><strong>Melhora a Colaboração:</strong> Cria uma ponte entre a equipe técnica e a de negócio.</li>
        </ul>
    `
};
