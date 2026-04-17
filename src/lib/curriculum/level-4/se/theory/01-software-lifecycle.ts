import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t1-lifecycle",
    title: "Ciclo de Vida do Desenvolvimento de Software (SDLC)",
    content: `
        <h2>O que é o SDLC?</h2>
        <p>O Ciclo de Vida de Desenvolvimento de Software (SDLC) é um processo estruturado que as equipes usam para projetar, desenvolver e testar software de alta qualidade. Ele define uma metodologia para melhorar a qualidade do software e o processo de desenvolvimento geral.</p>
        <h3>Modelos Tradicionais:</h3>
        <ul>
            <li><strong>Cascata (Waterfall):</strong> Um modelo linear e sequencial onde cada fase (requisitos, design, implementação, teste, implantação) deve ser concluída antes do início da próxima. É rígido e pouco flexível a mudanças.</li>
            <li><strong>Modelo V (V-Model):</strong> Uma extensão do modelo cascata que enfatiza a verificação e validação. Para cada fase do desenvolvimento, existe uma fase de teste correspondente.</li>
            <li><strong>Modelo Espiral (Spiral):</strong> Combina elementos de design e prototipagem em estágios, em um esforço para combinar as vantagens das abordagens top-down e bottom-up. É focado na gestão de riscos.</li>
        </ul>
    `
};
