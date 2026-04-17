import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t1-fundamentals",
    title: "Fundamentos de Testes e a Pirâmide",
    content: `
        <h2>Garantindo a Qualidade do Software</h2>
        <p>Testar é o processo de verificar se o software faz o que deveria fazer e se não tem bugs. A <strong>Pirâmide de Testes</strong> é um modelo que nos ajuda a pensar sobre como distribuir nossos esforços de teste de forma eficaz.</p>
        <p>A ideia é ter muitos testes rápidos e de baixo nível na base, e poucos testes lentos e de alto nível no topo.</p>
        
        <h3>As Camadas da Pirâmide:</h3>
        <ol>
            <li><strong>Testes Unitários (Base da Pirâmide):</strong> Testam a menor parte do código (uma função ou um componente) de forma isolada. São rápidos, baratos de escrever e devem compor a maior parte da sua suíte de testes.</li>
            <li><strong>Testes de Integração (Meio da Pirâmide):</strong> Verificam se diferentes unidades do sistema funcionam bem juntas (ex: um componente que chama uma API, uma API que interage com o banco de dados).</li>
            <li><strong>Testes de Ponta a Ponta (End-to-End - Topo da Pirâmide):</strong> Simulam o fluxo completo de um usuário na aplicação, em um ambiente o mais próximo possível da produção. São lentos, caros e frágeis, por isso devem ser em menor número.</li>
        </ol>
        <p>Manter essa proporção ajuda a ter uma suíte de testes que é ao mesmo tempo rápida, confiável e que dá alta confiança de que a aplicação está funcionando corretamente.</p>
    `
};
