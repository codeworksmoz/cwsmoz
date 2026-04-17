import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-solid",
    title: "Princípios SOLID",
    youtubeVideoId: "Nlyit_a33-M",
    content: `
        <h2>Fundamentos para um Design de Software Robusto</h2>
        <p>SOLID é um acrônimo que representa cinco princípios de design para programação orientada a objetos, destinados a tornar o design de software mais compreensível, flexível e manutenível. Eles foram promovidos por Robert C. Martin (Uncle Bob).</p>
        
        <h3>1. S - Single Responsibility Principle (Princípio da Responsabilidade Única)</h3>
        <p><strong>"Uma classe deve ter apenas um motivo para mudar."</strong></p>
        <p>Isso significa que uma classe deve ter apenas uma responsabilidade ou um trabalho. Se uma classe faz muitas coisas, ela se torna acoplada e difícil de manter. Mudanças em uma responsabilidade podem quebrar as outras.</p>
        
        <h3>2. O - Open/Closed Principle (Princípio Aberto/Fechado)</h3>
        <p><strong>"Entidades de software (classes, módulos, funções, etc.) devem ser abertas para extensão, mas fechadas para modificação."</strong></p>
        <p>Você deve ser capaz de adicionar novas funcionalidades sem alterar o código-fonte existente. Isso geralmente é alcançado através de herança, polimorfismo ou padrões de design como o Strategy.</p>
        
        <h3>3. L - Liskov Substitution Principle (Princípio da Substituição de Liskov)</h3>
        <p><strong>"Subtipos devem ser substituíveis por seus tipos base."</strong></p>
        <p>Se a classe S é um subtipo da classe T, então objetos do tipo T em um programa podem ser substituídos por objetos do tipo S sem alterar nenhuma das propriedades desejáveis daquele programa. Essencialmente, uma subclasse não deve quebrar a funcionalidade esperada de sua classe pai.</p>
        
        <h3>4. I - Interface Segregation Principle (Princípio da Segregação de Interface)</h3>
        <p><strong>"Nenhum cliente deve ser forçado a depender de métodos que não usa."</strong></p>
        <p>É melhor ter muitas interfaces pequenas e específicas do que uma única interface grande e genérica. Isso evita que as classes implementem métodos que não precisam, mantendo o sistema desacoplado.</p>
        
        <h3>5. D - Dependency Inversion Principle (Princípio da Inversão de Dependência)</h3>
        <p><strong>"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações."</strong></p>
        <p>Isso significa que você deve depender de interfaces ou classes abstratas, não de implementações concretas. Facilita a troca de componentes e o teste, usando injeção de dependência.</p>
    `
};
