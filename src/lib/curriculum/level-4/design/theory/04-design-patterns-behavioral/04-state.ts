import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-state",
    title: "Padrão State",
    content: `
        <h2>Permitindo que um Objeto Mude seu Comportamento</h2>
        <p>O <strong>State</strong> é um padrão de projeto comportamental que permite a um objeto alterar seu comportamento quando seu estado interno muda. O objeto parece ter mudado de classe.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você está modelando um documento em um editor. O documento pode estar em diferentes estados: <code>Rascunho</code>, <code>EmRevisao</code>, <code>Publicado</code>. O comportamento de uma operação como <code>publicar()</code> depende do estado atual. Se estiver em <code>Rascunho</code>, ele vai para <code>EmRevisao</code>. Se estiver <code>EmRevisao</code> e for aprovado, vai para <code>Publicado</code>. Se já estiver <code>Publicado</code>, não faz nada.</p>
        <p>A abordagem ingênua é usar uma grande máquina de estados com condicionais (<code>if/else</code> ou <code>switch</code>) dentro da classe <code>Documento</code>. Isso rapidamente se torna um pesadelo de manter à medida que mais estados e transições são adicionados.</p>
        <p>O padrão State sugere criar novas classes para cada um dos estados possíveis e extrair todos os comportamentos específicos do estado para dentro dessas classes. O objeto original, chamado de contexto, armazena uma referência a um dos objetos de estado que representa seu estado atual, e delega todo o trabalho relacionado ao estado para esse objeto.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>O <strong>Contexto</strong> armazena uma referência a uma instância de um dos estados concretos e delega a ele o trabalho.</li>
            <li>A <strong>Interface do Estado</strong> declara os métodos que todos os estados concretos devem implementar.</li>
            <li>Os <strong>Estados Concretos</strong> fornecem sua própria implementação para os métodos. Eles também podem realizar a transição do contexto para um novo estado.</li>
        </ol>

        <pre><code class="language-typescript">// A interface do Estado
abstract class Estado {
    protected documento: Documento;
    public setContexto(documento: Documento) { this.documento = documento; }
    public abstract publicar(): void;
}

// Estados Concretos
class Rascunho extends Estado {
    public publicar(): void {
        console.log('Movendo para revisão.');
        this.documento.transitarPara(new EmRevisao());
    }
}
class EmRevisao extends Estado {
    public publicar(): void {
        console.log('Documento publicado com sucesso!');
        this.documento.transitarPara(new Publicado());
    }
}
class Publicado extends Estado {
    public publicar(): void {
        console.log('Documento já está publicado.');
    }
}

// O Contexto
class Documento {
    private estado: Estado;
    constructor() { this.estado = new Rascunho(); this.estado.setContexto(this); }
    public transitarPara(estado: Estado): void {
        this.estado = estado;
        this.estado.setContexto(this);
    }
    public publicar(): void {
        this.estado.publicar();
    }
}
</code></pre>
        
        <h3>Quando Usar?</h3>
        <p>Use o padrão State quando você tem um objeto que se comporta de maneira diferente dependendo de seu estado atual, o número de estados é enorme, e o código do estado muda com frequência. O padrão ajuda a organizar a lógica de estados em classes separadas, seguindo o Princípio da Responsabilidade Única.</p>
    `
};
