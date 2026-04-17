import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t3-modules",
    title: "Módulos e Bundlers: ES Modules, Webpack, Vite",
    youtubeVideoId: "s97-nzo3i-c",
    content: `
        <h2>Organizando Código com Módulos</h2>
        <p>À medida que as aplicações crescem, manter todo o código em um único arquivo se torna impraticável. Módulos permitem que você divida seu código em arquivos menores e reutilizáveis.</p>
        <p><strong>ES Modules (ESM)</strong> é o padrão oficial de módulos em JavaScript, usando as palavras-chave <code>import</code> e <code>export</code>.</p>
        <pre><code class="language-js">// arquivo: utils.js
export const somar = (a, b) => a + b;

// arquivo: main.js
import { somar } from './utils.js';
console.log(somar(2, 3)); // 5
        </code></pre>
        
        <h2>O que são Bundlers?</h2>
        <p>Em grandes aplicações, ter centenas de pequenos arquivos pode ser ineficiente para o navegador. Um <strong>Module Bundler</strong> é uma ferramenta que pega todos os seus arquivos (JS, CSS, imagens) e os combina em um ou mais arquivos otimizados, prontos para produção.</p>
        
        <h3>Ferramentas Populares:</h3>
        <ul>
            <li><strong>Webpack:</strong> O bundler mais antigo e poderoso, altamente configurável. Foi a base de muitas ferramentas como o Create React App.</li>
            <li><strong>Vite:</strong> Um bundler moderno e extremamente rápido que usa módulos ES nativos durante o desenvolvimento para uma experiência de desenvolvimento instantânea, e Rollup para o build de produção.</li>
            <li><strong>esbuild:</strong> Um bundler escrito em Go, conhecido por sua velocidade incrível. É a tecnologia por trás do Vite.</li>
        </ul>
    `
};
