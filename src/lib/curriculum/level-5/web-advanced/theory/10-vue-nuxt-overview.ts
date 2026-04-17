import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t10-vue-nuxt-overview",
    title: "Visão Geral de Vue.js e Nuxt",
    youtubeVideoId: "P_n02QpCI44",
    content: `
        <h2>Uma Alternativa Progressiva ao React</h2>
        <p>Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Assim como o React, ele é baseado em componentes, mas oferece uma curva de aprendizado frequentemente considerada mais suave.</p>
        
        <h3>Principais Características do Vue:</h3>
        <ul>
            <li><strong>Single-File Components (SFCs):</strong> Vue utiliza arquivos <code>.vue</code> que encapsulam o HTML (template), CSS (style) e JavaScript (script) de um componente em um único arquivo, o que muitos desenvolvedores acham muito organizado.</li>
            <li><strong>Reatividade:</strong> O sistema de reatividade do Vue é muito otimizado. Ele rastreia dependências automaticamente e re-renderiza componentes de forma eficiente quando os dados mudam.</li>
            <li><strong>Diretivas:</strong> Vue usa diretivas de template (atributos especiais prefixados com <code>v-</code>) para aplicar lógica reativa ao DOM, como <code>v-if</code> para renderização condicional e <code>v-for</code> para renderizar listas.</li>
        </ul>
        
        <h3>Nuxt: O Framework Vue para Produção</h3>
        <p>Se React tem o Next.js, Vue tem o <strong>Nuxt</strong>. Nuxt é um framework construído sobre o Vue que oferece funcionalidades semelhantes às do Next.js:</p>
        <ul>
            <li>Renderização no Servidor (SSR) e Geração de Sites Estáticos (SSG).</li>
            <li>Roteamento baseado em arquivos.</li>
            <li>Code splitting automático.</li>
            <li>Um ecossistema rico de módulos para adicionar funcionalidades como PWA, gerenciamento de conteúdo, etc.</li>
        </ul>
        <p>Conhecer o ecossistema Vue/Nuxt é valioso, pois representa uma abordagem diferente e muito popular para o desenvolvimento web moderno.</p>
    `
};
