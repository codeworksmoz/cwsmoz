import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t4-use-case-diagrams",
    title: "Casos de Uso: Diagramas de Caso de Uso",
    content: `
        <h2>Visualizando as Funcionalidades do Sistema</h2>
        <p>O <strong>Diagrama de Caso de Uso</strong> é um diagrama da UML que fornece uma visão gráfica e de alto nível das funcionalidades de um sistema, mostrando como os atores interagem com os casos de uso e as relações entre os casos de uso.</p>
        <p>Ele não mostra os detalhes passo a passo (isso fica para o caso de uso textual), mas sim o escopo geral do sistema.</p>
        
        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Ator (Actor):</strong> Representa um papel que interage com o sistema. Pode ser uma pessoa (ex: Cliente) ou outro sistema (ex: Sistema de Pagamento). É representado por uma figura de palito.</li>
            <li><strong>Caso de Uso (Use Case):</strong> Uma funcionalidade ou objetivo que o sistema fornece ao ator. É representado por uma elipse.</li>
            <li><strong>Limite do Sistema (System Boundary):</strong> Um retângulo que engloba todos os casos de uso, definindo o que está dentro e fora do sistema.</li>
        </ul>
        
        <h3>Relações:</h3>
        <ul>
            <li>
                <strong>Associação:</strong> Uma linha sólida entre um Ator e um Caso de Uso, indicando que o ator participa daquele caso de uso.
            </li>
            <li>
                <strong><code>&lt;&lt;include&gt;&gt;</code> (Inclusão):</strong> Uma seta pontilhada de um caso de uso base para um caso de uso incluído. Significa que o caso de uso base <em>sempre</em> inclui a funcionalidade do outro. É usado para reutilizar comportamento comum.
                <br/><em>Exemplo: "Efetuar Compra" e "Ver Histórico de Compras" podem ambos <code>&lt;&lt;include&gt;&gt;</code> o caso de uso "Autenticar Usuário".</em>
            </li>
            <li>
                <strong><code>&lt;&lt;extend&gt;&gt;</code> (Extensão):</strong> Uma seta pontilhada de um caso de uso de extensão para um caso de uso base. Significa que o comportamento de extensão é <em>opcional</em> e só ocorre sob certas condições.
                <br/><em>Exemplo: "Calcular Juros por Atraso" pode <code>&lt;&lt;extend&gt;&gt;</code> o caso de uso "Pagar Fatura".</em>
            </li>
            <li>
                <strong>Generalização:</strong> Uma seta com uma ponta triangular vazia, mostrando uma relação pai-filho entre atores ou entre casos de uso.
            </li>
        </ul>
        <p>Diagramas de Caso de Uso são uma excelente ferramenta de comunicação para alinhar o entendimento sobre o escopo e as funcionalidades de um sistema com os stakeholders.</p>
    `
};
