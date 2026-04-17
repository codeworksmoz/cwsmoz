import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'cloud-ex-1', 
    title: 'IaaS vs. PaaS vs. SaaS', 
    statement: 'Classifique os seguintes serviços em IaaS, PaaS ou SaaS: 1) Google Docs, 2) Heroku, 3) Uma máquina virtual (EC2) na AWS.', 
    template: `// 1. Google Docs:
// ...

// 2. Heroku:
// ...

// 3. Máquina Virtual na AWS:
// ...
`,
    youtubeVideoId: 'M988_fsOSWo',
    detailedExplanation: `
        <h2>Entendendo os Modelos de Serviço na Nuvem</h2>
        <p>A diferença está no nível de abstração e gerenciamento que o provedor de nuvem oferece.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li><strong>Google Docs:</strong> Você apenas usa o software. Você não gerencia nada sobre a infraestrutura ou a plataforma. Isso é <strong>SaaS (Software as a Service)</strong>.</li>
            <li><strong>Heroku:</strong> Você envia seu código e o Heroku cuida de todo o resto (servidores, sistema operacional, runtime). Você gerencia a aplicação, mas não a plataforma. Isso é <strong>PaaS (Platform as a Service)</strong>.</li>
            <li><strong>Máquina Virtual (EC2):</strong> O provedor (AWS) fornece a infraestrutura básica (servidores virtuais, armazenamento, rede), mas você é responsável por instalar o sistema operacional, o runtime e gerenciar tudo acima disso. Isso é <strong>IaaS (Infrastructure as a Service)</strong>.</li>
        </ol>
    `
};
