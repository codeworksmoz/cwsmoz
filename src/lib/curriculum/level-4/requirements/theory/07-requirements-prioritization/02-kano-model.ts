import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t7-kano-model",
    title: "Priorização: Modelo de Kano",
    content: `
        <h2>Entendendo a Satisfação do Cliente</h2>
        <p>O <strong>Modelo de Kano</strong> é uma teoria para o desenvolvimento de produtos e satisfação do cliente desenvolvida nos anos 80 por Noriaki Kano. Ele classifica as funcionalidades de um produto em cinco categorias com base em como elas impactam a satisfação do cliente.</p>
        <p>O modelo ajuda a priorizar funcionalidades, focando não apenas no que os clientes dizem que querem, mas no que realmente os deixará satisfeitos ou encantados.</p>
        
        <h3>As 5 Categorias de Kano:</h3>
        <dl>
            <dt class="font-bold mt-4">1. Must-Be (Atributos Básicos)</dt>
            <dd class="ml-4">
                Funcionalidades que os clientes esperam como padrão. Se não estiverem presentes, os clientes ficarão muito insatisfeitos. No entanto, sua presença não aumenta a satisfação, pois são consideradas obrigatórias.
                <br/>
                <em>Exemplo: Freios em um carro.</em>
            </dd>

            <dt class="font-bold mt-4">2. One-Dimensional (Atributos de Performance)</dt>
            <dd class="ml-4">
                A satisfação do cliente é diretamente proporcional ao nível de execução desta funcionalidade. Quanto melhor, mais satisfeito o cliente fica.
                <br/>
                <em>Exemplo: A economia de combustível de um carro.</em>
            </dd>

            <dt class="font-bold mt-4">3. Attractive (Atributos de Encantamento)</dt>
            <dd class="ml-4">
                Funcionalidades inesperadas que, quando presentes, causam uma grande satisfação e encanto. Sua ausência, no entanto, não causa insatisfação, pois os clientes não as esperavam. São os "wow factors".
                <br/>
                <em>Exemplo: O primeiro smartphone com uma tela sensível ao toque.</em>
            </dd>

            <dt class="font-bold mt-4">4. Indifferent (Atributos Indiferentes)</dt>
            <dd class="ml-4">
                Funcionalidades que não fazem diferença para a satisfação do cliente, seja pela sua presença ou ausência. Devem ser evitadas, pois representam desperdício de esforço.
            </dd>
            
            <dt class="font-bold mt-4">5. Reverse (Atributos Reversos)</dt>
            <dd class="ml-4">
                Funcionalidades que, quando presentes, causam insatisfação. Alguns clientes preferem ativamente que elas não existam.
            </dd>
        </dl>
        <p>O Modelo de Kano é poderoso porque reconhece que nem todas as funcionalidades são criadas iguais e que o caminho para a satisfação do cliente é um equilíbrio entre atender às expectativas básicas e fornecer momentos de encanto.</p>
    `
};
