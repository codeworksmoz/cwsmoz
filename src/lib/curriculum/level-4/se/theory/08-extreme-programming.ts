import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t8-xp",
    title: "Extreme Programming (XP)",
    content: `
        <h2>Levando as Boas Práticas ao Extremo</h2>
        <p>Extreme Programming (XP) é uma metodologia de desenvolvimento de software que visa produzir software de alta qualidade e melhorar a qualidade de vida da equipe de desenvolvimento. XP leva práticas comuns de engenharia de software e as eleva a níveis "extremos".</p>
        <h3>Práticas Chave do XP:</h3>
        <ul>
            <li><strong>Test-Driven Development (TDD):</strong> Escrever um teste que falha antes de escrever o código de produção que o fará passar.</li>
            <li><strong>Pair Programming (Programação em Par):</strong> Duas pessoas trabalhando juntas em um único computador. Uma (o piloto) escreve o código, enquanto a outra (o navegador) revisa e pensa estrategicamente.</li>
            <li><strong>Refactoring (Refatoração):</strong> Melhorar continuamente o design do código existente sem alterar seu comportamento externo.</li>
            <li><strong>Continuous Integration (CI):</strong> Integrar o código ao repositório principal com frequência, rodando testes automatizados a cada integração.</li>
            <li><strong>Simple Design (Design Simples):</strong> Manter o design o mais simples possível para atender aos requisitos atuais.</li>
        </ul>
    `
};
