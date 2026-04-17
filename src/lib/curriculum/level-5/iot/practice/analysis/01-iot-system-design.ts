import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'iot-ex-1', 
    title: 'Design de um Sistema IoT', 
    statement: 'Projete um sistema de IoT simples para monitorar a temperatura de uma estufa. Liste os 4 componentes principais do sistema.', 
    template: `// Sistema: Monitor de Temperatura de Estufa

// 1. Dispositivo/Sensor:
// ...

// 2. Conectividade:
// ...

// 3. Processamento de Dados:
// ...

// 4. Interface do Usuário:
// ...
`,
    youtubeVideoId: '6mboj8CvoaA',
    detailedExplanation: `
        <h2>Projetando um Sistema Conectado</h2>
        <p>Um sistema de IoT sempre envolve a interação entre o mundo físico e o digital.</p>
        <h3>Componentes do Sistema</h3>
        <ol>
            <li><strong>Dispositivo/Sensor:</strong> O componente físico. Neste caso, seria um microcontrolador (como um Arduino ou ESP32) conectado a um sensor de temperatura (como o DHT11).</li>
            <li><strong>Conectividade:</strong> Como os dados chegam à internet? O dispositivo poderia usar Wi-Fi para enviar os dados para um servidor na nuvem.</li>
            <li><strong>Processamento de Dados:</strong> Na nuvem, uma aplicação (talvez uma função serverless) recebe os dados de temperatura, armazena-os em um banco de dados e pode ter lógica para enviar alertas se a temperatura sair de um intervalo ideal.</li>
            <li><strong>Interface do Usuário:</strong> Como o usuário vê os dados? Poderia ser um aplicativo de celular ou um painel web que exibe um gráfico da temperatura ao longo do tempo.</li>
        </ol>
    `
};
