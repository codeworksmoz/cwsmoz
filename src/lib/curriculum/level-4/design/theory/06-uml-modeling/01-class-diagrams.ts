import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-uml-class",
    title: "Modelagem UML: Diagramas de Classe",
    content: `
        <h2>Visualizando a Estrutura Estática do Sistema</h2>
        <p>O <strong>Diagrama de Classes</strong> é um dos diagramas mais fundamentais da UML (Unified Modeling Language). Ele descreve a estrutura estática de um sistema, mostrando suas classes, atributos, operações (ou métodos) e as relações entre os objetos.</p>
        
        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Classe:</strong> Representada por um retângulo dividido em três partes: nome da classe, atributos (variáveis) e operações (métodos).</li>
            <li><strong>Atributos:</strong> As propriedades ou dados que uma classe possui.</li>
            <li><strong>Operações:</strong> As ações ou comportamentos que uma classe pode executar.</li>
        </ul>
        
        <h3>Relações Comuns:</h3>
        <ul>
            <li><strong>Associação:</strong> Uma relação entre duas classes. Indica que objetos de uma classe estão conectados a objetos de outra. (Ex: Um <code>Usuário</code> tem um <code>Pedido</code>).</li>
            <li><strong>Agregação:</strong> Um tipo especial de associação que representa uma relação "tem-um" ou "parte-de", mas as partes podem existir independentemente do todo. (Ex: Um <code>Departamento</code> tem <code>Professores</code>. Se o departamento for extinto, os professores continuam existindo).</li>
            <li><strong>Composição:</strong> Uma forma mais forte de agregação onde as partes não podem existir sem o todo. Se o todo é destruído, as partes também são. (Ex: Um <code>Carro</code> é composto por um <code>Motor</code>).</li>
            <li><strong>Herança (Generalização):</strong> Representa uma relação "é-um-tipo-de". (Ex: <code>Cachorro</code> e <code>Gato</code> são tipos de <code>Animal</code>).</li>
        </ul>
        <p>Diagramas de classe são essenciais para entender a arquitetura de um sistema orientado a objetos antes de escrever o código.</p>
    `
};
