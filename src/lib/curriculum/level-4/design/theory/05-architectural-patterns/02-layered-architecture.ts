import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-layered",
    title: "Arquitetura em Camadas (Layered Architecture)",
    content: `
        <h2>Separando as Responsabilidades do Sistema</h2>
        <p>A arquitetura em camadas é um padrão clássico onde os componentes são organizados em camadas horizontais. Cada camada tem uma responsabilidade específica e só pode se comunicar com a camada diretamente abaixo dela.</p>
        
        <h3>Camadas Típicas:</h3>
        <ol>
            <li>
                <strong>Camada de Apresentação (Presentation Layer):</strong> Responsável pela interface do usuário (UI) e pela interação com o usuário. Não contém lógica de negócio. (Ex: componentes React, páginas HTML).
            </li>
            <li>
                <strong>Camada de Aplicação/Serviço (Application/Service Layer):</strong> Orquestra a lógica de negócio. Ela não contém a lógica em si, mas coordena as classes da camada de domínio para realizar as tarefas solicitadas pela camada de apresentação.
            </li>
            <li>
                <strong>Camada de Domínio/Negócio (Domain/Business Layer):</strong> O coração da aplicação. Contém toda a lógica de negócio, as entidades e as regras que são específicas do domínio do problema.
            </li>
            <li>
                <strong>Camada de Acesso a Dados/Persistência (Data Access/Persistence Layer):</strong> Responsável por se comunicar com o banco de dados. Ela abstrai a lógica de armazenamento e recuperação de dados. (Ex: Repositórios, ORMs).
            </li>
        </ol>
        <p>Essa separação promove o baixo acoplamento e facilita a manutenção e a substituição de uma camada sem afetar as outras (por exemplo, trocar o banco de dados afeta apenas a camada de persistência).</p>
    `
};
