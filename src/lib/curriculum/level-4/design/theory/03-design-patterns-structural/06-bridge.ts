import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-bridge",
    title: "Padrão Bridge",
    content: `
        <h2>Desacoplando Abstração e Implementação</h2>
        <p>O <strong>Bridge</strong> é um padrão de projeto estrutural que permite dividir uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas — abstração e implementação — que podem ser desenvolvidas independentemente uma da outra.</p>
        
        <h3>Problema que Resolve</h3>
        <p>Imagine que você tem uma classe <code>Forma</code> com subclasses <code>Círculo</code> e <code>Quadrado</code>. Agora, você quer estender essa hierarquia para incluir cores. Você poderia criar subclasses como <code>CírculoVermelho</code>, <code>CírculoAzul</code>, <code>QuadradoVermelho</code>, etc. Isso resulta em uma explosão de classes (2 formas * N cores). Se você adicionar uma nova forma, precisará criar N novas classes.</p>
        <p>O padrão Bridge resolve isso mudando da herança para a composição. Ele extrai uma das "dimensões" (neste caso, a cor) para uma hierarquia de classe separada, de modo que as classes originais (Forma) referenciem um objeto da nova hierarquia (Cor), em vez de ter todos os seus estados e comportamentos dentro de uma classe.</p>
        
        <h3>Estrutura</h3>
        <ol>
            <li>A <strong>Abstração</strong> fornece lógica de controle de alto nível. Ela depende de um objeto de implementação para fazer o trabalho de baixo nível.</li>
            <li>A <strong>Implementação</strong> declara a interface que é comum para todas as implementações concretas.</li>
            <li>As <strong>Implementações Concretas</strong> contêm código específico da plataforma.</li>
            <li>O <strong>Cliente</strong> geralmente só está interessado em trabalhar com a abstração.</li>
        </ol>

        <pre><code class="language-typescript">// Hierarquia de Implementação (ex: Cores ou Dispositivos)
interface Dispositivo {
    ligar(): void;
    desligar(): void;
    setCanal(canal: number): void;
}

class TV implements Dispositivo {
    // ... implementações concretas
}
class Radio implements Dispositivo {
    // ... implementações concretas
}

// Hierarquia de Abstração (ex: Controles Remotos)
class ControleRemoto {
    protected dispositivo: Dispositivo;

    constructor(dispositivo: Dispositivo) {
        this.dispositivo = dispositivo;
    }

    public ligarDesligar() { /* ... chama this.dispositivo.ligar() ... */ }
}

// Você pode estender a abstração sem tocar na implementação.
class ControleRemotoAvancado extends ControleRemoto {
    public mudo() { /* ... */ }
}

// Uso
const tv = new TV();
const controle = new ControleRemoto(tv);

const radio = new Radio();
const controleAvancado = new ControleRemotoAvancado(radio);
</code></pre>
        <p>Agora você pode ter N tipos de controles e M tipos de dispositivos, e combiná-los de qualquer forma, resultando em N + M classes, em vez de N * M.</p>

        <h3>Quando Usar?</h3>
        <p>Use o padrão Bridge quando você quer dividir e organizar uma classe monolítica que tem várias variantes de alguma funcionalidade, ou quando você precisa ser capaz de trocar a implementação em tempo de execução.</p>
    `
};
