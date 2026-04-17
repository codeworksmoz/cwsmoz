import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t8",
    title: "O Modelo de Caixa (Box Model)",
    youtubeVideoId: "rIO532_iZ9w",
    content: `
        <h2>Tudo é uma Caixa</h2>
        <p>No CSS, todo elemento HTML é tratado como uma caixa retangular. O "Box Model" é um conceito fundamental que descreve como essa caixa é composta:</p>
        <img src="https://picsum.photos/seed/boxmodel/600/250" alt="Diagrama do CSS Box Model" style="width:100%; max-width:500px; margin: 1rem auto; display: block; border: 1px solid #ccc;"/>
        <ul>
            <li><strong>Conteúdo (Content):</strong> A área onde seu texto e imagens aparecem. Suas dimensões são definidas por <code>width</code> e <code>height</code>.</li>
            <li><strong>Padding:</strong> Uma área transparente ao redor do conteúdo, mas dentro da borda. Cria um espaçamento interno.</li>
            <li><strong>Borda (Border):</strong> Uma borda que envolve o padding e o conteúdo. Pode ter estilo, cor e espessura.</li>
            <li><strong>Margem (Margin):</strong> Uma área transparente fora da borda, que empurra outros elementos para longe. Cria um espaçamento externo.</li>
        </ul>
        <pre><code>div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 15px;
}
        </code></pre>
    `
};
