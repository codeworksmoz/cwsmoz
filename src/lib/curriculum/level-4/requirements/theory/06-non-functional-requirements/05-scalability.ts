import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t6-nfr-scalability",
    title: "RNFs: Escalabilidade (Scalability)",
    content: `
        <h2>O Sistema Pode Crescer?</h2>
        <p><strong>Requisitos Não-Funcionais (RNFs) de Escalabilidade</strong> definem a capacidade de um sistema de lidar com um aumento na carga de trabalho (seja em volume de dados, número de usuários ou transações) de forma eficiente.</p>
        <p>Um sistema escalável é aquele que pode aumentar sua capacidade para atender a um aumento na demanda.</p>
        
        <h3>Tipos de Escalabilidade:</h3>
        <dl>
            <dt class="font-bold mt-4">Escala Vertical (Scale-Up)</dt>
            <dd class="ml-4">
                Aumentar a capacidade de um único servidor, adicionando mais recursos (CPU, RAM, armazenamento). É como trocar o motor de um carro por um mais potente.
                <br/>
                <strong>Vantagens:</strong> Simples de implementar.
                <br/>
                <strong>Desvantagens:</strong> Tem um limite físico e financeiro (hardware muito potente é caro) e cria um ponto único de falha.
            </dd>

            <dt class="font-bold mt-4">Escala Horizontal (Scale-Out)</dt>
            <dd class="ml-4">
                Aumentar a capacidade adicionando mais servidores ao sistema e distribuindo a carga entre eles (geralmente com um Load Balancer). É como adicionar mais carros a uma frota.
                <br/>
                <strong>Vantagens:</strong> Praticamente ilimitada em termos de escala, melhora a disponibilidade (se um servidor falhar, os outros continuam operando).
                <br/>
                <strong>Desvantagens:</strong> Mais complexo de gerenciar. A aplicação precisa ser projetada para rodar em um ambiente distribuído.
            </dd>
        </dl>
        
        <h3>Exemplos de Requisitos de Escalabilidade:</h3>
        <ul>
            <li><em>"O sistema deve ser capaz de lidar com um aumento de 10.000 para 100.000 usuários ativos sem degradação no tempo de resposta."</em></li>
            <li><em>"A arquitetura deve permitir a adição de novos servidores de aplicação sem tempo de inatividade."</em></li>
        </ul>
        <p>A escalabilidade é um dos principais impulsionadores das arquiteturas modernas baseadas em nuvem e microserviços.</p>
    `
};
