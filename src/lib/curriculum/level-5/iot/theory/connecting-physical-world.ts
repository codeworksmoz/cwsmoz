import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "iot-t1",
    title: "Conectando o Mundo Físico",
    youtubeVideoId: "6mboj8CvoaA",
    content: `
        <h2>O que é IoT?</h2>
        <p>A Internet das Coisas (IoT) descreve a rede de objetos físicos — "coisas" — que são incorporados com sensores, software e outras tecnologias com o propósito de conectar e trocar dados com outros dispositivos e sistemas pela Internet.</p>
        <h3>Componentes de um Sistema IoT:</h3>
        <ul>
            <li><strong>Dispositivos/Sensores:</strong> Coletam dados do ambiente (ex: sensor de temperatura, câmera).</li>
            <li><strong>Conectividade:</strong> Enviam os dados para a nuvem (via Wi-Fi, Bluetooth, 4G/5G).</li>
            <li><strong>Processamento de Dados:</strong> O software na nuvem processa os dados.</li>
            <li><strong>Interface do Usuário:</strong> Apresenta a informação ao usuário (ex: um aplicativo no celular).</li>
        </ul>
    `
};
