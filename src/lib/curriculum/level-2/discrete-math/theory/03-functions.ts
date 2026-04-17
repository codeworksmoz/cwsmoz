import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-functions",
    title: "Funções",
    content: `
        <h2>Mapeamentos entre Conjuntos</h2>
        <p>Uma <strong>função</strong> f de um conjunto A para um conjunto B é uma regra que atribui a cada elemento de A exatamente um elemento de B.</p>
        
        <h3>Terminologia:</h3>
        <ul>
            <li><strong>Domínio:</strong> O conjunto de entrada A.</li>
            <li><strong>Contradomínio:</strong> O conjunto de possíveis saídas B.</li>
            <li><strong>Imagem:</strong> O subconjunto do contradomínio que consiste em todos os valores que a função realmente produz.</li>
        </ul>
        
        <h3>Tipos de Funções:</h3>
        <ul>
            <li><strong>Injetora (ou Injetiva):</strong> Uma função onde elementos diferentes no domínio são mapeados para elementos diferentes no contradomínio. Se f(a) = f(b), então a = b.</li>
            <li><strong>Sobrejetora (ou Sobrejetiva):</strong> Uma função cuja imagem é igual ao seu contradomínio. Todo elemento no contradomínio é mapeado por pelo menos um elemento do domínio.</li>
            <li><strong>Bijetora (ou Bijetiva):</strong> Uma função que é tanto injetora quanto sobrejetora. Existe uma correspondência um-para-um entre os elementos do domínio e do contradomínio.</li>
        </ul>

        <h3>Composição e Inversão:</h3>
        <ul>
            <li><strong>Composição de Funções:</strong> Se f: A -> B e g: B -> C, a composição (g ∘ f) é uma função de A para C definida por (g ∘ f)(x) = g(f(x)).</li>
            <li><strong>Função Inversa:</strong> Apenas funções bijetoras têm uma função inversa (f⁻¹), que "desfaz" a operação da função original.</li>
        </ul>
    `
};
