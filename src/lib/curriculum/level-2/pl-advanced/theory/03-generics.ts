import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "pla-t-generics",
    title: "Genéricos e Tipos Paramétricos",
    content: `
        <h2>Escrevendo Código que Funciona com Qualquer Tipo</h2>
        <p><strong>Genéricos</strong> (ou tipos paramétricos) permitem escrever classes, interfaces e funções que podem operar em uma variedade de tipos, em vez de um único. Isso aumenta a reutilização de código e a segurança de tipo.</p>
        
        <h3>A Motivação:</h3>
        <p>Imagine criar uma classe de lista em Java. Sem genéricos, você teria que criar uma <code>ListaDeInteiros</code>, uma <code>ListaDeStrings</code>, etc., ou usar uma <code>ListaDeObjetos</code> e perder a segurança de tipo. Com genéricos, você cria uma única <code>List<T></code>, onde <code>T</code> é um parâmetro de tipo que será especificado no momento do uso.</p>
        
        <pre><code class="language-java">List<String> nomes = new ArrayList<String>();
nomes.add("Ana");
// O compilador sabe que 'nomes' só pode conter Strings.
// nomes.add(123); // Erro de compilação!
</code></pre>

        <h3>Constraints e Bounds (Restrições e Limites)</h3>
        <p>Às vezes, você precisa garantir que o tipo genérico tenha certas propriedades ou métodos. Você pode usar "bounds" para restringir o tipo <code>T</code> a subtipos de uma classe ou implementações de uma interface.</p>

        <h3>Covariância e Contravariância</h3>
        <p>Esses são conceitos avançados que descrevem como os tipos genéricos se relacionam. Se <code>Gato</code> é um subtipo de <code>Animal</code>, uma <code>List<Gato></code> é um subtipo de <code>List<Animal></code> (covariância)? Ou o contrário (contravariância)? A resposta depende da linguagem e do uso, e tem implicações importantes para a segurança de tipo.</p>
    `
};
