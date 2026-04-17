import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'soft-ex-2',
    title: 'Dando Feedback Construtivo',
    statement: 'Seu colega submeteu um Pull Request com um código que funciona, mas é muito confuso e difícil de ler. Use o modelo SBI (Situação, Comportamento, Impacto) para escrever um comentário de code review que seja construtivo e não desmotivador.',
    template: `// Feedback Construtivo usando SBI:

// Situação (Situation):
// "Neste Pull Request, na função 'processarDados' do arquivo 'utils.js'..."

// Comportamento (Behavior):
// "...Eu notei que a função tem mais de 100 linhas e múltiplas responsabilidades, como buscar os dados, formatá-los e salvá-los."

// Impacto (Impact):
// "...O impacto disso é que torna a função difícil de entender e testar de forma isolada, o que pode levar a bugs no futuro. Que tal se a gente quebrasse ela em funções menores e mais focadas?"
`,
    youtubeVideoId: 'm_nOAo-Lajw',
    detailedExplanation: `
        <h2>Feedback que Constrói, Não Destrói</h2>
        <p>O modelo SBI é uma ferramenta poderosa para dar feedback porque foca em fatos observáveis e suas consequências, em vez de julgamentos pessoais.</p>
        <h3>Analisando o Modelo</h3>
        <ol>
            <li><strong>Situação:</strong> Seja específico sobre onde e quando o comportamento ocorreu. "No seu código" é vago. "Nesta função específica deste arquivo" é claro.</li>
            <li><strong>Comportamento:</strong> Descreva o que você observou de forma neutra e objetiva. Evite palavras como "seu código é ruim". Em vez disso, diga "Notei que a função tem X linhas" ou "A variável foi nomeada 'x'".</li>
            <li><strong>Impacto:</strong> Explique o impacto real ou potencial desse comportamento no código, no time ou no produto. É aqui que você justifica por que a mudança é necessária. Frases como "Isso me deixou confuso sobre..." ou "Isso pode dificultar a manutenção porque..." são eficazes.</li>
        </ol>
        <p>Finalizar com uma sugestão ou uma pergunta ("Que tal se...?", "O que você acha de...?") transforma o feedback em uma colaboração.</p>
    `
};
