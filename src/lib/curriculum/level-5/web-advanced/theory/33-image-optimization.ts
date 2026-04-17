import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t33-image-optimization",
    title: "Otimização de Imagens: Formatos Modernos e Carregamento Lento",
    youtubeVideoId: "A5g69Uo2a78",
    content: `
        <h2>Imagens são Pesadas. Vamos Otimizá-las.</h2>
        <p>Imagens não otimizadas são uma das maiores causas de lentidão em sites. Felizmente, temos várias estratégias para resolver isso.</p>

        <h3>Formatos de Imagem Modernos</h3>
        <p>Use formatos de imagem de próxima geração que oferecem melhor compressão e qualidade do que os formatos antigos (JPEG, PNG).</p>
        <ul>
            <li><strong>WebP:</strong> Oferece compressão superior com e sem perdas. É amplamente suportado por todos os navegadores modernos.</li>
            <li><strong>AVIF:</strong> Oferece uma compressão ainda melhor que o WebP, especialmente para imagens de alta fidelidade. O suporte está crescendo rapidamente.</li>
        </ul>
        <p>Use a tag <code>&lt;picture&gt;</code> para oferecer múltiplos formatos, permitindo que o navegador escolha o melhor que ele suporta.</p>

        <h3>Lazy Loading (Carregamento Lento)</h3>
        <p>Lazy loading é a técnica de adiar o carregamento de recursos não críticos (como imagens "abaixo da dobra") para o momento em que eles são realmente necessários. Em vez de carregar todas as imagens de uma vez, você só carrega aquelas que estão prestes a entrar na tela do usuário.</p>
        <p>Isso pode ser feito nativamente no navegador com o atributo <code>loading="lazy"</code>.</p>
        <pre><code class="language-html">&lt;img src="minha-imagem.jpg" alt="..." loading="lazy" width="200" height="200"&gt;</code></pre>
        
        <h3>O Componente <code>next/image</code></h3>
        <p>Se você está usando Next.js, o componente <code>&lt;Image&gt;</code> automatiza muitas dessas otimizações para você:</p>
        <ul>
            <li>Automaticamente serve imagens em formatos modernos como WebP, se o navegador suportar.</li>
            <li>Implementa lazy loading por padrão para imagens que não estão na viewport inicial.</li>
            <li>Redimensiona imagens para evitar o envio de imagens enormes para dispositivos pequenos.</li>
            <li>Previne Cumulative Layout Shift (CLS) ao exigir os atributos <code>width</code> e <code>height</code>.</li>
        </ul>
    `
};
