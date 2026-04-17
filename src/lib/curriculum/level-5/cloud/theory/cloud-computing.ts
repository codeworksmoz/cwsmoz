import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "cloud-t1",
    title: "Computação na Nuvem",
    youtubeVideoId: "M988_fsOSWo",
    content: `
        <h2>Infraestrutura como Serviço</h2>
        <p>Cloud Computing é a entrega de serviços de computação — incluindo servidores, armazenamento, bancos de dados, redes, software, análise e inteligência — pela Internet ("a nuvem").</p>
        <h3>Conceitos Chave:</h3>
        <ul>
            <li><strong>IaaS, PaaS, SaaS:</strong> Diferentes modelos de serviço (Infraestrutura, Plataforma, Software como Serviço).</li>
            <li><strong>Containers (Docker):</strong> Empacotam uma aplicação e suas dependências em uma unidade isolada, garantindo que ela rode consistentemente em qualquer ambiente.</li>
            <li><strong>Orquestração (Kubernetes):</strong> Uma ferramenta para automatizar a implantação, o escalonamento e o gerenciamento de aplicações em contêineres.</li>
        </ul>
    `
};
