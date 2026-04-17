import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-oop-advanced",
    title: "Programação Orientada a Objetos Avançada",
    content: `
        <h2>Além do Básico da POO</h2>
        
        <h3>Herança Múltipla e seus Problemas</h3>
        <p>Algumas linguagens (como C++) permitem que uma classe herde de mais de uma superclasse. Isso pode levar ao "Problema do Diamante", onde a ambiguidade surge se duas classes pai implementam o mesmo método.</p>
        
        <h3>Classes Abstratas vs. Interfaces</h3>
        <ul>
            <li><strong>Classe Abstrata:</strong> Pode conter tanto métodos abstratos (sem implementação) quanto métodos concretos (com implementação). Uma classe só pode herdar de uma classe abstrata.</li>
            <li><strong>Interface:</strong> Define apenas um contrato (assinaturas de métodos), sem implementação. Uma classe pode implementar múltiplas interfaces.</li>
        </ul>
        <p>A regra geral é: use herança para uma relação "é um" e interfaces para uma relação "pode fazer".</p>
        
        <h3>Mixins e Traits</h3>
        <p>São mecanismos para reutilização de código que permitem que classes "peguem emprestado" métodos de outras classes ou coleções de métodos, sem entrar em uma hierarquia de herança rígida. É uma forma de composição.</p>
        
        <h3>Injeção de Dependência (Dependency Injection - DI)</h3>
        <p>Um padrão de design onde as dependências de um objeto (outros objetos de que ele precisa para funcionar) são "injetadas" de fora, em vez de serem criadas pelo próprio objeto. Isso inverte o controle, torna o código mais desacoplado e muito mais fácil de testar. É a aplicação prática do Princípio da Inversão de Dependência (o 'D' do SOLID).</p>
    `
};
