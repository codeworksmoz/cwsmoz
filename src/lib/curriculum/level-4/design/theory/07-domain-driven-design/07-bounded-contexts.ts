import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-ddd-bounded-contexts",
    title: "DDD: Contextos Delimitados (Bounded Contexts)",
    content: `
        <h2>Onde a Linguagem Ubíqua se Aplica</h2>
        <p>Em uma empresa grande, um único termo pode ter significados diferentes para diferentes departamentos. Por exemplo, a palavra "Produto" significa uma coisa para o time de Vendas (preço, catálogo) e outra para o time de Logística (peso, dimensões, localização no armazém).</p>
        <p>Um <strong>Contexto Delimitado</strong> é um limite explícito (lógico ou físico) dentro do qual um modelo de domínio e sua Linguagem Ubíqua são consistentes e unificados. Dentro de um contexto, cada termo tem um único significado.</p>
        
        <h3>Múltiplos Modelos</h3>
        <p>DDD reconhece que para sistemas grandes e complexos, um único modelo unificado para toda a empresa é impraticável. Em vez disso, o sistema é decomposto em múltiplos Contextos Delimitados, cada um com seu próprio modelo.</p>
        <ul>
            <li>No <strong>Contexto de Vendas</strong>, o <code>Produto</code> tem atributos como <code>preco</code> e <code>desconto</code>.</li>
            <li>No <strong>Contexto de Logística</strong>, o <code>Produto</code> tem atributos como <code>peso</code> e <code>dimensoes</code>.</li>
        </ul>
        <p>Eles são o mesmo produto no mundo real, mas são modelados de forma diferente em cada contexto.</p>
        
        <h3>Mapa de Contextos (Context Map)</h3>
        <p>Um Mapa de Contextos é um diagrama que mostra as relações entre os diferentes Contextos Delimitados e como eles se integram. Alguns padrões de integração incluem:</p>
        <ul>
            <li><strong>Shared Kernel (Núcleo Compartilhado):</strong> Dois times compartilham uma parte do modelo.</li>
            <li><strong>Customer-Supplier (Cliente-Fornecedor):</strong> Um time (fornecedor) fornece uma API para o outro (cliente).</li>
            <li><strong>Anti-Corruption Layer (Camada Anticorrupção):</strong> Um time cria uma camada de tradução para se proteger de mudanças no modelo de outro time.</li>
        </ul>
        <p>Contextos Delimitados são o padrão estratégico de mais alto nível no DDD, guiando a decomposição de grandes sistemas em partes gerenciáveis, e são a base conceitual para arquiteturas de microserviços.</p>
    `
};
