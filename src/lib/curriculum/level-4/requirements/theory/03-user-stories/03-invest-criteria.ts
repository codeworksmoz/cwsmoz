import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t3-invest-criteria",
    title: "Histórias de Usuário: O Critério INVEST",
    content: `
        <h2>O que Faz uma Boa História de Usuário?</h2>
        <p><strong>INVEST</strong> é um acrônimo, criado por Bill Wake, que serve como um guia para avaliar a qualidade de uma história de usuário. Uma boa história de usuário deve ser:</p>
        
        <dl>
            <dt class="font-bold mt-4">I - Independent (Independente)</dt>
            <dd class="ml-4">
                A história deve ser autossuficiente e independente de outras histórias. Isso permite que elas sejam desenvolvidas e implantadas em qualquer ordem. Se uma história depende fortemente de outra, talvez elas devam ser combinadas.
            </dd>

            <dt class="font-bold mt-4">N - Negotiable (Negociável)</dt>
            <dd class="ml-4">
                Uma história não é um contrato. Ela é um convite para uma conversa. Os detalhes devem ser negociados e co-criados entre o Product Owner e o time de desenvolvimento durante a Sprint.
            </dd>

            <dt class="font-bold mt-4">V - Valuable (Valiosa)</dt>
            <dd class="ml-4">
                A história deve entregar valor claro para o cliente ou usuário final. Se você não consegue articular o benefício (a parte "para que..." da história), talvez ela não seja necessária.
            </dd>

            <dt class="font-bold mt-4">E - Estimable (Estimável)</dt>
            <dd class="ml-4">
                O time de desenvolvimento deve ser capaz de estimar o esforço necessário para implementar a história. Se a história é muito vaga ou grande demais, ela não pode ser estimada e precisa ser refinada.
            </dd>

            <dt class="font-bold mt-4">S - Small (Pequena)</dt>
            <dd class="ml-4">
                A história deve ser pequena o suficiente para ser concluída dentro de uma única Sprint. Histórias grandes (chamadas de "Épicos") precisam ser quebradas em histórias menores.
            </dd>

            <dt class="font-bold mt-4">T - Testable (Testável)</dt>
            <dd class="ml-4">
                A história deve ter critérios de aceitação claros para que seja possível verificar que ela foi implementada corretamente. Se você não sabe como testar uma história, você não sabe o que ela realmente significa.
            </dd>
        </dl>
    `
};
