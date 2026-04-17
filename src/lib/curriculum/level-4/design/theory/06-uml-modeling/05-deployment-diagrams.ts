import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-uml-deployment",
    title: "Modelagem UML: Diagramas de Implantação",
    content: `
        <h2>Modelando a Arquitetura Física</h2>
        <p>O <strong>Diagrama de Implantação</strong> (Deployment Diagram) é usado para modelar a arquitetura física de um sistema. Ele mostra como os componentes de software (artefatos) são distribuídos e implantados nos componentes de hardware (nós).</p>
        
        <h3>Propósito:</h3>
        <p>Este diagrama é crucial para planejar a infraestrutura de um sistema, visualizando onde cada parte do software será executada. Ele ajuda a entender a topologia da rede, a distribuição de componentes e os requisitos de hardware.</p>

        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Nó (Node):</strong> Um recurso computacional de hardware sobre o qual os artefatos são implantados para execução. Pode ser um servidor de aplicação, um servidor de banco de dados, um dispositivo cliente, etc. É representado como um cubo 3D.</li>
            <li><strong>Artefato (Artifact):</strong> Um produto do processo de desenvolvimento de software. Pode ser um arquivo executável (<code>.jar</code>, <code>.exe</code>), uma biblioteca (<code>.dll</code>), um script (<code>.js</code>), ou um arquivo de banco de dados.</li>
            <li><strong>Caminho de Comunicação (Communication Path):</strong> Uma conexão entre dois nós, representando um caminho de comunicação de rede (ex: TCP/IP, HTTP). É desenhado como uma linha sólida.</li>
            <li><strong>Relação de Implantação (Deployment Relationship):</strong> Uma seta pontilhada de um artefato para um nó, indicando que o artefato é implantado naquele nó.</li>
        </ul>
        <p>Diagramas de implantação são vitais para equipes de DevOps e arquitetos de sistema para planejar e documentar como a aplicação será entregue e executada no ambiente de produção.</p>
    `
};
