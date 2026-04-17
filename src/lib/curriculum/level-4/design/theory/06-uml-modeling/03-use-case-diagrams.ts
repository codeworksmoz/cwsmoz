import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-uml-use-case",
    title: "Modelagem UML: Diagramas de Caso de Uso",
    content: `
        <h2>Descrevendo a Funcionalidade do Sistema</h2>
        <p>O <strong>Diagrama de Caso de Uso</strong> descreve a funcionalidade de um sistema do ponto de vista do usuário. Ele captura os requisitos de alto nível e o escopo do sistema, mostrando como os usuários interagem com ele para atingir um objetivo.</p>
        
        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Ator (Actor):</strong> Representa um papel desempenhado por um usuário ou outro sistema que interage com o sistema. É desenhado como uma figura de palito.</li>
            <li><strong>Caso de Uso (Use Case):</strong> Uma ação ou objetivo específico que um ator pode realizar com o sistema. É representado por uma elipse. (Ex: "Fazer Login", "Consultar Saldo").</li>
            <li><strong>Sistema (System Boundary):</strong> Um retângulo que representa o escopo do sistema, separando o que está dentro e o que está fora.</li>
        </ul>

        <h3>Relações Comuns:</h3>
        <ul>
            <li><strong>Associação:</strong> Uma linha conectando um Ator a um Caso de Uso.</li>
            <li><strong>Inclusão (Include):</strong> Um caso de uso base inclui a funcionalidade de outro. (Ex: "Fazer Pedido" inclui "Verificar Crédito"). É usado para reutilizar comportamento comum.</li>
            <li><strong>Extensão (Extend):</strong> Um caso de uso opcional que pode estender o comportamento de um caso de uso base sob certas condições. (Ex: "Calcular Imposto de Importação" estende "Fazer Pedido" apenas para produtos internacionais).</li>
        </ul>
        <p>Eles são uma ferramenta valiosa na fase de levantamento de requisitos para garantir que todos entendam o que o sistema deve fazer.</p>
    `
};
