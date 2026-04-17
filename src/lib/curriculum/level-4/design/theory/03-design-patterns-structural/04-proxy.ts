import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-proxy",
    title: "Padrão Proxy",
    content: `
        <h2>Um Substituto para Outro Objeto</h2>
        <p>O <strong>Proxy</strong> é um padrão de projeto estrutural que permite que você forneça um substituto ou um marcador para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você execute algo antes ou depois que a requisição chegue ao objeto original.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Por que você iria querer controlar o acesso a um objeto? Aqui estão alguns exemplos:</p>
        <ul>
            <li><strong>Lazy Initialization (Proxy Virtual):</strong> Se você tem um objeto que consome muitos recursos (como uma conexão com um banco de dados ou a leitura de um arquivo grande), você pode adiar sua criação até que ele seja realmente necessário.</li>
            <li><strong>Controle de Acesso (Proxy de Proteção):</strong> O proxy pode verificar se o cliente tem as permissões necessárias para executar uma requisição no objeto real.</li>
            <li><strong>Cache (Proxy de Cache):</strong> O proxy pode manter um cache de resultados de operações frequentes. Quando o cliente faz a mesma requisição, o proxy retorna o resultado do cache em vez de chamar o objeto real.</li>
            <li><strong>Logging (Proxy de Log):</strong> O proxy pode registrar todas as requisições feitas ao objeto real.</li>
        </ul>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A <strong>Interface de Serviço</strong> declara a interface comum para o serviço e o proxy.</li>
            <li>A classe <strong>Serviço Real</strong> contém a lógica de negócio real.</li>
            <li>A classe <strong>Proxy</strong> tem um campo de referência para um objeto de serviço. Após o proxy terminar seu trabalho (controle de acesso, cache, etc.), ele passa a requisição para o objeto de serviço.</li>
        </ol>

        <pre><code class="language-typescript">// A interface comum
interface Servidor {
    processarRequisicao(url: string): void;
}

// O objeto real, que é "caro"
class ServidorReal implements Servidor {
    public processarRequisicao(url: string): void {
        console.log(\`Processando requisição para: \${url}\`);
    }
}

// O Proxy
class ProxyServidor implements Servidor {
    private servidorReal: ServidorReal;
    private cache: Map<string, any> = new Map();

    constructor(servidorReal: ServidorReal) {
        this.servidorReal = servidorReal;
    }

    public processarRequisicao(url: string): void {
        if (this.cache.has(url)) {
            console.log(\`[Proxy] Retornando do cache para: \${url}\`);
            return this.cache.get(url);
        } else {
            console.log(\`[Proxy] Requisição não encontrada no cache. Chamando servidor real...\`);
            this.servidorReal.processarRequisicao(url);
            // Salva o resultado no cache para futuras requisições
            this.cache.set(url, { dados: '...' });
        }
    }
}
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão Proxy sempre que você precisar adicionar alguma lógica extra antes ou depois de interagir com o objeto original, sem alterar a classe do objeto original. É muito semelhante ao Decorator, mas o Proxy geralmente gerencia o ciclo de vida do seu objeto de serviço por conta própria, enquanto os Decorators são sempre compostos pelo cliente.</p>
    `
};
