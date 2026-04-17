import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-event-driven-arch",
    title: "Arquitetura Orientada a Eventos (EDA)",
    content: `
        <h2>Construindo Sistemas Reativos e Desacoplados</h2>
        <p>A <strong>Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)</strong> é um paradigma de design de software que promove a produção, detecção, consumo e reação a eventos. Um "evento" é uma mudança significativa de estado em um sistema.</p>
        <p>Nesta arquitetura, os componentes (ou microserviços) se comunicam de forma assíncrona, publicando e assinando eventos, em vez de fazerem requisições diretas uns aos outros.</p>
        
        <h3>Componentes Principais:</h3>
        <ul>
            <li><strong>Produtores (Producers):</strong> Componentes que publicam eventos.</li>
            <li><strong>Consumidores (Consumers):</strong> Componentes que assinam e reagem a eventos.</li>
            <li><strong>Message Broker (ou Event Broker):</strong> Uma infraestrutura intermediária que recebe eventos dos produtores e os entrega aos consumidores interessados. Isso desacopla os produtores dos consumidores; eles não precisam saber um do outro.</li>
        </ul>

        <h3>Benefícios da EDA:</h3>
        <ul>
            <li><strong>Desacoplamento:</strong> Serviços podem ser desenvolvidos, implantados e escalados de forma independente.</li>
            <li><strong>Resiliência:</strong> Se um serviço consumidor falha, o message broker pode reter os eventos até que o serviço volte a ficar online.</li>
            <li><strong>Escalabilidade:</strong> É fácil adicionar mais consumidores para processar eventos em paralelo.</li>
        </ul>
    `
};
