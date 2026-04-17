import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-relations",
    title: "Relações",
    content: `
        <h2>Conectando Elementos de Conjuntos</h2>
        <p>Uma <strong>relação binária</strong> de um conjunto A para um conjunto B é um subconjunto do produto cartesiano A x B. Se (a, b) pertence à relação, dizemos que "a está relacionado com b".</p>
        
        <h3>Propriedades de Relações (em um conjunto A):</h3>
        <ul>
            <li><strong>Reflexiva:</strong> Todo elemento está relacionado consigo mesmo. Para todo a em A, (a, a) está na relação.</li>
            <li><strong>Simétrica:</strong> Se a está relacionado com b, então b está relacionado com a. Se (a, b) está na relação, então (b, a) também está.</li>
            <li><strong>Transitiva:</strong> Se a está relacionado com b e b está relacionado com c, então a está relacionado com c.</li>
        </ul>
        
        <h3>Tipos de Relações:</h3>
        <ul>
            <li><strong>Relação de Equivalência:</strong> Uma relação que é reflexiva, simétrica e transitiva. Ela particiona o conjunto em classes de equivalência. Ex: A relação "é igual a".</li>
            <li><strong>Ordem Parcial:</strong> Uma relação que é reflexiva, antissimétrica (se aRb e bRa, então a=b) e transitiva. Ex: A relação "menor ou igual a" em números.</li>
        </ul>

        <h3>Fechos (Closures)</h3>
        <p>O fecho de uma relação R com respeito a uma propriedade P é a menor relação que contém R e possui a propriedade P. Por exemplo, o fecho transitivo de uma relação é o que obtemos se adicionarmos todas as implicações da transitividade.</p>
    `
};
