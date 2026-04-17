import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "net-t1",
    title: "Introdução a Redes de Computadores",
    youtubeVideoId: "01-6pkvyA-c",
    content: `
        <h2>Conectando o Mundo</h2>
        <p>Redes de computadores são conjuntos de dois ou mais computadores interligados que podem compartilhar recursos (como impressoras), arquivos e permitir a comunicação eletrônica.</p>
        <h3>O Modelo TCP/IP</h3>
        <p>A internet funciona com base no conjunto de protocolos TCP/IP. Alguns protocolos chave são:</p>
        <ul>
            <li><strong>IP (Internet Protocol):</strong> Responsável por endereçar e rotear pacotes de dados para que eles cheguem ao destino correto.</li>
            <li><strong>TCP (Transmission Control Protocol):</strong> Garante que a entrega de dados seja confiável, ordenada e livre de erros.</li>
            <li><strong>HTTP (HyperText Transfer Protocol):</strong> O protocolo usado para transferir dados na World Wide Web (as páginas que você vê no navegador).</li>
            <li><strong>DNS (Domain Name System):</strong> Traduz nomes de domínio legíveis por humanos (como <code>www.google.com</code>) em endereços IP numéricos (como <code>142.250.218.36</code>).</li>
        </ul>
    `
};
