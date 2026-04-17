import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-adapter",
    title: "Padrão Adapter",
    content: `
        <h2>Fazendo Interfaces Incompatíveis Trabalharem Juntas</h2>
        <p>O <strong>Adapter</strong> é um padrão de projeto estrutural que permite que objetos com interfaces incompatíveis colaborem.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está criando uma aplicação que precisa consumir uma API de terceiros. Essa API retorna os dados em formato XML. No entanto, sua aplicação foi toda construída para trabalhar com objetos JSON.</p>
        <p>Você não pode simplesmente mudar o código da API de terceiros. E também não quer reescrever sua aplicação inteira para trabalhar com XML. O que fazer?</p>
        <p>Você pode criar um "adaptador". Este é um objeto especial que converte a interface de um objeto para que outro objeto possa entendê-la. O adaptador envolve um dos objetos para esconder a complexidade da conversão.</p>
        
        <h3>Estrutura</h3>
        <p>O padrão Adapter pode ser implementado de duas maneiras:</p>
        <ol>
            <li><strong>Adapter de Objeto (composição):</strong> O adaptador implementa a interface do primeiro objeto e envolve (contém uma referência) o segundo objeto. Esta é a maneira mais comum e flexível.</li>
            <li><strong>Adapter de Classe (herança):</strong> O adaptador herda de ambas as classes ao mesmo tempo. Isso só é possível em linguagens que suportam herança múltipla.</li>
        </ol>

        <pre><code class="language-typescript">// A interface que a nossa aplicação espera (o alvo)
interface ClienteJson {
    getDados(): object;
}

// A classe que queremos adaptar (o adaptee)
class ServicoXml {
    public getDadosEmXml(): string {
        return '<dados><item>valor</item></dados>';
    }
}

// O Adaptador
class AdaptadorXmlParaJson implements ClienteJson {
    private servico: ServicoXml;

    constructor(servico: ServicoXml) {
        this.servico = servico;
    }

    public getDados(): object {
        const dadosXml = this.servico.getDadosEmXml();
        // Lógica complexa para converter XML para JSON aqui...
        console.log('Adaptador: Convertendo XML para JSON...');
        return { dados: { item: 'valor' } };
    }
}

// Código cliente
const servicoXml = new ServicoXml();
const adaptador = new AdaptadorXmlParaJson(servicoXml);

// O cliente pode usar o adaptador sem saber que por baixo ele usa XML.
const dadosJson = adaptador.getDados();
</code></pre>

        <h3>Quando Usar?</h3>
        <p>Use o padrão Adapter quando você quer usar uma classe existente, mas sua interface não é compatível com o resto do seu código. Também é útil quando você quer criar uma classe reutilizável que coopera com classes não relacionadas ou imprevistas, ou seja, classes que não necessariamente têm interfaces compatíveis.</p>
    `
};
