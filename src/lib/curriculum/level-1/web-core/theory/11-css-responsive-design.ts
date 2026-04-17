import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t11",
    title: "Design Responsivo",
    youtubeVideoId: "H5G_9jpzghc",
    content: `
        <h2>Adaptando-se a Qualquer Tela</h2>
        <p>Design Responsivo é a abordagem que sugere que o design e o desenvolvimento devem responder ao comportamento e ambiente do usuário com base no tamanho da tela, plataforma e orientação.</p>
        <h3>Media Queries</h3>
        <p>A principal ferramenta para o design responsivo são as <strong>Media Queries</strong>. Elas permitem aplicar estilos CSS diferentes com base nas características do dispositivo, como a largura da tela.</p>
        <pre><code>/* Estilos base (mobile-first) */
.container {
  width: 90%;
}

/* Para telas maiores que 768px */
@media (min-width: 768px) {
  .container {
    width: 80%;
    max-width: 960px;
  }
}
        </code></pre>
        <h3>Viewport Meta Tag</h3>
        <p>É crucial incluir a meta tag de viewport no <code>&lt;head&gt;</code> do seu HTML para garantir que a renderização e o zoom funcionem corretamente em dispositivos móveis.</p>
        <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
    `
};
