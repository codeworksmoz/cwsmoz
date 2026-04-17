import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t2-surveys",
    title: "Elicitação: Questionários (Surveys)",
    content: `
        <h2>Coletando Dados de um Grande Número de Pessoas</h2>
        <p><strong>Questionários</strong> ou <strong>pesquisas (surveys)</strong> são uma técnica de elicitação de requisitos usada para coletar informações de um grande e geograficamente disperso grupo de stakeholders de forma eficiente.</p>
        
        <h3>Quando Usar Questionários?</h3>
        <p>Eles são mais adequados para obter dados quantitativos e validar suposições, em vez de explorar problemas complexos em profundidade. Por exemplo:</p>
        <ul>
            <li>Para priorizar uma lista de funcionalidades propostas ("Classifique as seguintes funcionalidades em ordem de importância para você").</li>
            <li>Para medir a satisfação do usuário com um sistema existente.</li>
            <li>Para coletar dados demográficos sobre a base de usuários.</li>
        </ul>

        <h3>Tipos de Perguntas:</h3>
        <ul>
            <li>
                <strong>Fechadas:</strong> Oferecem um conjunto limitado de respostas predefinidas. São fáceis de analisar estatisticamente.
                <ul>
                    <li>Múltipla escolha, escalas (ex: Likert - "discordo totalmente" a "concordo totalmente"), ranking.</li>
                </ul>
            </li>
            <li>
                <strong>Abertas:</strong> Permitem que os respondentes escrevam livremente. São mais difíceis de analisar, mas podem revelar insights inesperados. Devem ser usadas com moderação.
            </li>
        </ul>
        
        <h3>Dicas para um Bom Questionário:</h3>
        <ul>
            <li><strong>Seja Breve:</strong> Questionários longos têm taxas de resposta mais baixas.</li>
            <li><strong>Seja Claro:</strong> Evite perguntas ambíguas ou com duplo sentido.</li>
            <li><strong>Teste Antes:</strong> Faça um teste piloto com um pequeno grupo para identificar perguntas confusas antes de enviar para o público principal.</li>
            <li><strong>Evite Perguntas Tendenciosas:</strong> Formule as perguntas de forma neutra para não influenciar a resposta.</li>
        </ul>
        <p>Questionários são uma ótima ferramenta para complementar técnicas qualitativas como entrevistas, permitindo validar em escala as hipóteses levantadas em conversas individuais.</p>
    `
};
