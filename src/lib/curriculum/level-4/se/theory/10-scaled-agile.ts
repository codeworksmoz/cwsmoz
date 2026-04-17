import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "se-t10-scaled-agile",
    title: "Frameworks Ágeis em Escala",
    content: `
        <h2>Aplicando o Ágil em Grandes Organizações</h2>
        <p>Scrum e Kanban funcionam bem para equipes pequenas. Mas como alinhar dezenas ou centenas de equipes ágeis trabalhando em um mesmo produto? Frameworks ágeis em escala abordam esse desafio.</p>
        <h3>Frameworks Populares:</h3>
        <ul>
            <li><strong>SAFe (Scaled Agile Framework):</strong> O mais prescritivo e popular no mundo corporativo. Organiza as equipes em "Agile Release Trains" (ARTs) e usa eventos de planejamento de alto nível.</li>
            <li><strong>LeSS (Large-Scale Scrum):</strong> Foca em escalar os princípios do Scrum. A ideia é aplicar o Scrum em si para coordenar múltiplas equipes, em vez de adicionar novos processos.</li>
            <li><strong>Nexus:</strong> O framework de escala da Scrum.org. Introduz um "Nexus Integration Team" para coordenar o trabalho entre as equipes.</li>
            <li><strong>Spotify Model:</strong> Não é um framework, mas um conjunto de práticas que o Spotify usou para escalar. Famoso por popularizar os conceitos de Squads, Tribos, Capítulos e Guildas.</li>
        </ul>
    `
};
