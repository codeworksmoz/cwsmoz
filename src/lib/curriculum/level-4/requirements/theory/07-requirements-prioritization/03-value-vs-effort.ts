import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t7-value-effort",
    title: "Priorização: Matriz Valor vs. Esforço",
    content: `
        <h2>Maximizando o Retorno sobre o Investimento</h2>
        <p>A <strong>Matriz Valor vs. Esforço</strong> é uma ferramenta de priorização visual e simples, usada para ajudar as equipes a decidir em quais iniciativas ou funcionalidades focar. Ela plota cada item em um gráfico de dois eixos: o valor que ele entrega (para o negócio ou para o cliente) e o esforço necessário para implementá-lo.</p>
        <p>Isso ajuda a identificar as "vitórias rápidas" e a evitar as "armadilhas".</p>
        
        <h3>Os Quatro Quadrantes:</h3>
        <p>A matriz é dividida em quatro quadrantes:</p>
        <dl>
            <dt class="font-bold mt-4">1. Quick Wins / High Value, Low Effort (Vitórias Rápidas / Alto Valor, Baixo Esforço)</dt>
            <dd class="ml-4">
                <strong>O que fazer: Faça primeiro.</strong> Estas são as prioridades máximas. Elas entregam muito valor com pouco esforço, proporcionando o maior retorno sobre o investimento.
            </dd>

            <dt class="font-bold mt-4">2. Major Projects / High Value, High Effort (Grandes Projetos / Alto Valor, Alto Esforço)</dt>
            <dd class="ml-4">
                <strong>O que fazer: Planeje cuidadosamente.</strong> Estas são grandes iniciativas que entregam muito valor, mas exigem um investimento significativo. Elas devem ser planejadas e quebradas em partes menores.
            </dd>

            <dt class="font-bold mt-4">3. Fill-ins / Low Value, Low Effort (Preenchimentos / Baixo Valor, Baixo Esforço)</dt>
            <dd class="ml-4">
                <strong>O que fazer: Faça se tiver tempo.</strong> São tarefas fáceis que não entregam muito valor. Elas podem ser feitas para preencher o tempo entre tarefas maiores ou adiadas indefinidamente.
            </dd>
            
            <dt class="font-bold mt-4">4. Thankless Tasks / Low Value, High Effort (Tarefas Ingratas / Baixo Valor, Alto Esforço)</dt>
            <dd class="ml-4">
                <strong>O que fazer: Evite a todo custo.</strong> Estas são as "armadilhas de tempo". Elas consomem muitos recursos e entregam pouco ou nenhum valor. Devem ser questionadas e evitadas.
            </dd>
        </dl>
        <p>Esta técnica simples força a equipe a pensar criticamente sobre o valor e o custo de cada peça de trabalho, levando a uma tomada de decisão mais estratégica.</p>
    `
};
