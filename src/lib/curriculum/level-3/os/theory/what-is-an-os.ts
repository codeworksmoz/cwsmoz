import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "os-t1",
    title: "O que é um Sistema Operacional?",
    youtubeVideoId: "26QPDBe-NB8",
    content: `
        <h2>O Gerente do Computador</h2>
        <p>Um Sistema Operacional (SO) é o software mais importante que roda em um computador. Ele gerencia o hardware do computador, os recursos de software e fornece serviços comuns para programas de computador.</p>
        <h3>Funções Principais:</h3>
        <ul>
            <li><strong>Gerenciamento de Processos:</strong> Controla a execução de programas (processos e threads).</li>
            <li><strong>Gerenciamento de Memória:</strong> Aloca e desaloca espaço na memória RAM para os processos.</li>
            <li><strong>Gerenciamento de Sistema de Arquivos:</strong> Organiza e controla o acesso a arquivos e diretórios em discos.</li>
            <li><strong>Gerenciamento de Dispositivos de E/S:</strong> Controla a comunicação com dispositivos como teclado, mouse, impressora, etc.</li>
        </ul>
    `
};
