import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t27-kubernetes-basics",
    title: "Fundamentos de Kubernetes",
    youtubeVideoId: "tVzQ2A-GkMc",
    content: `
        <h2>Orquestrando Contêineres em Escala</h2>
        <p>Enquanto o Docker é ótimo para rodar contêineres em uma única máquina, o <strong>Kubernetes</strong> (também conhecido como K8s) é um sistema de orquestração de contêineres de código aberto para automatizar a implantação, o escalonamento e o gerenciamento de aplicações em contêineres em um cluster de máquinas.</p>

        <h3>Principais Conceitos do Kubernetes:</h3>
        <ul>
            <li><strong>Cluster:</strong> Um conjunto de máquinas (nós ou "nodes") onde seus contêineres são executados.</li>
            <li><strong>Pod:</strong> A menor unidade implantável no Kubernetes. Um Pod representa um ou mais contêineres que são executados juntos na mesma máquina e compartilham recursos de rede.</li>
            <li><strong>Deployment:</strong> Descreve o estado desejado para seus Pods. O Kubernetes trabalha para garantir que o estado atual corresponda ao estado desejado (ex: "quero que 3 réplicas do meu Pod estejam sempre rodando"). Ele lida com a criação de novos Pods se um falhar.</li>
            <li><strong>Service:</strong> Fornece um ponto de acesso estável (um endereço IP e uma porta) para um conjunto de Pods. Como os Pods podem ser criados e destruídos, seus IPs mudam. Um Service garante que você possa se comunicar com eles de forma confiável.</li>
            <li><strong>Ingress:</strong> Gerencia o acesso externo aos services em um cluster, tipicamente requisições HTTP. Ele pode fornecer balanceamento de carga, terminação SSL e roteamento baseado em nome de host ou caminho.</li>
        </ul>
        <p>Kubernetes é o padrão da indústria para gerenciar aplicações complexas e de alta disponibilidade em ambientes de produção.</p>
    `
};
