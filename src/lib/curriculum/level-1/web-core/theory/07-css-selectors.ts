import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t7", 
    title: "Seletores CSS",
    youtubeVideoId: "iV4g9c6I39s",
    content: `
        <h2>Como o CSS Encontra os Elementos</h2>
        <p>CSS (Cascading Style Sheets) usa seletores para "encontrar" os elementos HTML que você quer estilizar.</p>
        <h3>Anatomia de uma Regra CSS</h3>
        <pre><code>seletor {
  propriedade: valor;
}

h1 { /* Seletor de Tipo/Tag */
  color: blue;
}

.minha-classe { /* Seletor de Classe */
  font-size: 16px;
}

#meu-id { /* Seletor de ID */
  background-color: lightgray;
}
        </code></pre>
        <ul>
            <li><strong>Seletor de Tipo:</strong> Seleciona todos os elementos de um certo tipo (ex: <code>h1</code>, <code>p</code>).</li>
            <li><strong>Seletor de Classe:</strong> Seleciona todos os elementos com um atributo <code>class</code> específico. Começa com um ponto (<code>.</code>). É reutilizável.</li>
            <li><strong>Seletor de ID:</strong> Seleciona um único elemento com um atributo <code>id</code> específico. Começa com uma cerquilha (<code>#</code>). Deve ser único na página.</li>
        </ul>
    ` 
};
