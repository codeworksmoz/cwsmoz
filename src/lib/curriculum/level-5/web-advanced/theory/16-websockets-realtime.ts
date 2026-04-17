import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t16-websockets-realtime",
    title: "WebSockets e Comunicação em Tempo Real",
    youtubeVideoId: "FdiSj9pCGu8",
    content: `
        <h2>Indo Além do Requisição/Resposta</h2>
        <p>O modelo HTTP padrão de requisição e resposta é ótimo para muitas coisas, mas falha quando precisamos de comunicação instantânea e bidirecional. Para isso, usamos WebSockets.</p>

        <h3>O Protocolo WebSocket</h3>
        <p>O WebSocket (<code>ws://</code> ou <code>wss://</code> para seguro) é um protocolo de comunicação que fornece um canal de comunicação <strong>full-duplex</strong> (bidirecional) sobre uma única conexão TCP de longa duração. Uma vez que a conexão ("handshake") é estabelecida, tanto o cliente quanto o servidor podem enviar mensagens um para o outro a qualquer momento, sem a necessidade de uma nova requisição.</p>
        <p>Isso é ideal para:</p>
        <ul>
            <li>Aplicações de chat</li>
            <li>Jogos multiplayer online</li>
            <li>Feeds de dados em tempo real (ex: cotações da bolsa)</li>
            <li>Edição colaborativa de documentos</li>
        </ul>

        <h3>A API WebSocket Nativa</h3>
        <p>Os navegadores modernos têm uma API nativa para WebSockets.</p>
        <pre><code class="language-javascript">// Lado do Cliente
const socket = new WebSocket('wss://api.exemplo.com/chat');

// Evento para quando a conexão é aberta
socket.onopen = () => {
  socket.send('Olá, servidor!');
};

// Evento para receber mensagens
socket.onmessage = (event) => {
  console.log('Mensagem do servidor: ', event.data);
};
        </code></pre>

        <h3>Socket.IO: WebSockets com Superpoderes</h3>
        <p><strong>Socket.IO</strong> é uma biblioteca popular que aprimora o WebSocket. Ela não é uma implementação do WebSocket, mas uma camada de abstração sobre ele.</p>
        <p>Principais vantagens:</p>
        <ul>
            <li><strong>Fallback:</strong> Se a conexão WebSocket falhar, o Socket.IO pode automaticamente recorrer a outras técnicas, como long-polling, garantindo que a comunicação funcione em ambientes de rede restritivos.</li>
            <li><strong>Reconexão Automática:</strong> Se a conexão for perdida, ele tenta se reconectar automaticamente.</li>
            <li><strong>Salas e Namespaces:</strong> Facilita a transmissão de mensagens para grupos específicos de clientes (ex: uma "sala" de chat).</li>
        </ul>
    `
};
