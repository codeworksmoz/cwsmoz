import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t43-system-design-principles",
    title: "Arquitetura: Princípios de System Design",
    youtubeVideoId: "b-r7I4h_4_I",
    content: `
        <h2>Projetando Sistemas para Escala e Resiliência</h2>
        <p><strong>System Design</strong> é o processo de definir a arquitetura, componentes, módulos, interfaces e dados para um sistema, a fim de satisfazer requisitos específicos. Em entrevistas para posições de sênior, é comum ser apresentado a um problema vago (ex: "proje um clone do Twitter") e ter que discutir as decisões arquiteturais.</p>

        <h3>Pilares Fundamentais:</h3>
        <ul>
            <li>
                <strong>Escalabilidade (Scalability):</strong> A capacidade do sistema de lidar com uma carga crescente de trabalho.
                <ul>
                    <li><strong>Escala Vertical:</strong> Aumentar os recursos de um único servidor (mais CPU, mais RAM). Tem limites.</li>
                    <li><strong>Escala Horizontal:</strong> Adicionar mais servidores ao sistema. É a abordagem usada para sistemas massivos.</li>
                </ul>
            </li>
            <li>
                <strong>Disponibilidade (Availability):</strong> A proporção de tempo que um sistema está funcional e operacional. Medida em "noves" (ex: 99.9% de disponibilidade). Alta disponibilidade é alcançada através de redundância (sem pontos únicos de falha).
            </li>
            <li>
                <strong>Performance:</strong> Medida em termos de latência (o tempo para servir uma requisição) e throughput (o número de requisições que o sistema pode lidar por segundo).
            </li>
        </ul>

        <h3>Teorema CAP</h3>
        <p>Em um sistema de computação distribuído, você só pode ter duas das três seguintes garantias:</p>
        <ul>
            <li><strong>Consistência (Consistency):</strong> Todos os nós veem os mesmos dados ao mesmo tempo.</li>
            <li><strong>Disponibilidade (Availability):</strong> Cada requisição recebe uma resposta (não-erro), sem garantia de que ela contenha a escrita mais recente.</li>
            <li><strong>Tolerância a Particionamento (Partition Tolerance):</strong> O sistema continua a operar apesar de um número arbitrário de mensagens serem descartadas (ou atrasadas) pela rede entre os nós.</li>
        </ul>
        <p>Como falhas de rede são inevitáveis, todo sistema distribuído deve ser tolerante a particionamento. Portanto, a escolha real é entre consistência e disponibilidade.</p>
    `
};
