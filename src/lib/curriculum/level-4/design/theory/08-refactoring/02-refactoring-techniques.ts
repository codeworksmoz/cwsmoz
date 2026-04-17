import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-refactoring-techniques",
    title: "Refatoração: Técnicas Comuns",
    content: `
        <h2>Um Catálogo de Movimentos Seguros</h2>
        <p>Refatorar é o processo de reestruturar o código existente, alterando a fatoração, sem alterar seu comportamento externo. Existem muitas técnicas de refatoração, cada uma projetada para resolver um code smell específico.</p>
        
        <h3>Técnicas de Composição de Métodos:</h3>
        <ul>
            <li>
                <strong>Extract Method (Extrair Método):</strong> O "canivete suíço" da refatoração. Se você tem um fragmento de código que pode ser agrupado, transforme-o em seu próprio método. Isso melhora a legibilidade e promove a reutilização.
            </li>
            <li>
                <strong>Inline Method (Embutir Método):</strong> O oposto de Extrair Método. Se o corpo de um método é tão claro quanto seu nome, embuta o código do método diretamente no local da chamada e remova o método.
            </li>
        </ul>
        
        <h3>Técnicas de Movimentação de Funcionalidades entre Objetos:</h3>
        <ul>
            <li>
                <strong>Move Method (Mover Método):</strong> Se um método está usando mais funcionalidades de outra classe do que de sua própria classe, mova-o para a classe que ele mais usa.
            </li>
            <li>
                <strong>Extract Class (Extrair Classe):</strong> Quando uma classe está fazendo o trabalho de duas, crie uma nova classe e mova os campos e métodos relevantes para ela. Isso segue o Princípio da Responsabilidade Única.
            </li>
        </ul>
        
        <h3>Técnicas de Simplificação de Expressões Condicionais:</h3>
        <ul>
            <li>
                <strong>Decompose Conditional (Decompor Condicional):</strong> Extraia a lógica de condicionais complexas (<code>if/then/else</code>) para métodos separados.
            </li>
            <li>
                <strong>Replace Conditional with Polymorphism (Substituir Condicional por Polimorfismo):</strong> Se você tem um condicional que escolhe diferentes comportamentos com base no tipo de um objeto, use o polimorfismo para que cada classe implemente seu próprio comportamento.
            </li>
        </ul>
        <p>O livro "Refactoring" de Martin Fowler é a referência definitiva e cataloga dezenas dessas técnicas.</p>
    `
};
