import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "cs-t4",
    title: "Arquitetura de Computadores (Von Neumann)",
    youtubeVideoId: "Qqug2Uncy_A",
    content: `
        <h2>Como um computador funciona?</h2>
        <p>A maioria dos computadores modernos segue a arquitetura de Von Neumann, que consiste em quatro componentes principais:</p>
        <ol>
            <li><strong>Unidade Central de Processamento (CPU):</strong> O "cérebro" do computador. Executa instruções. Divide-se em:
                <ul>
                    <li><em>Unidade de Controle (CU):</em> Busca, decodifica e executa as instruções.</li>
                    <li><em>Unidade Lógica e Aritmética (ULA/ALU):</em> Realiza cálculos matemáticos e operações lógicas.</li>
                </ul>
            </li>
            <li><strong>Memória Principal (RAM):</strong> Armazena tanto os dados quanto as instruções dos programas que estão em execução. É volátil, ou seja, seu conteúdo é perdido quando o computador é desligado.</li>
            <li><strong>Dispositivos de Entrada/Saída (E/S):</strong> Permitem a comunicação com o mundo exterior. Exemplos: teclado, mouse (entrada), monitor, impressora (saída).</li>
            <li><strong>Barramentos (Buses):</strong> Vias de comunicação que conectam todos os componentes, permitindo a transferência de dados e sinais de controle entre eles.</li>
        </ol>
    `
};
