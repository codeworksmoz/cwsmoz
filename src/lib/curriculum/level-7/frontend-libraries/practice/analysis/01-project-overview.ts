import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-fel-proj-1', 
    title: 'Análise de Projeto: Máquina de Citações Aleatórias', 
    statement: 'O primeiro projeto da certificação de Bibliotecas de Front-End é construir uma Máquina de Citações Aleatórias usando React. Descreva os principais componentes e o gerenciamento de estado necessários.', 
    template: `// Componentes Necessários:
// 1. Componente Principal (App):
//    - Responsabilidade: ... (Buscar dados, gerenciar o estado principal)
// 2. Componente de Citação (QuoteBox):
//    - Responsabilidade: ... (Exibir a citação atual e o autor)
// 3. Componente de Botão (Button):
//    - Responsabilidade: ... (Acionar a busca por uma nova citação)

// Gerenciamento de Estado:
// - Qual estado precisa ser mantido? (ex: a lista de todas as citações, a citação atual)
// - Onde esse estado deve viver?
`,
    youtubeVideoId: 'EEo-8hW073k',
    detailedExplanation: `
        <h2>Planejando seu Primeiro App React</h2>
        <p>Este projeto introduz a componentização e o gerenciamento de estado, que são conceitos centrais no React.</p>
        <h3>Estrutura Sugerida</h3>
        <ol>
            <li><strong>Componente Principal (App):</strong> Este será o componente "pai". Ele será responsável por buscar a lista de citações de uma API (ou de um arquivo local) quando o aplicativo carregar e armazenar essa lista e a citação atualmente exibida em seu estado.</li>
            <li><strong>Gerenciamento de Estado:</strong> Você precisará de pelo menos duas variáveis de estado no componente App: uma para armazenar o array de todas as citações (<code>allQuotes</code>) e outra para a citação que está sendo exibida no momento (<code>currentQuote</code>).</li>
            <li><strong>Componente de Citação (QuoteBox):</strong> Um componente "filho" que recebe a <code>currentQuote</code> como prop e a exibe na tela.</li>
            <li><strong>Componente de Botão:</strong> Um botão que, quando clicado, chama uma função passada como prop pelo componente App. Essa função será responsável por escolher aleatoriamente uma nova citação do array <code>allQuotes</code> e atualizar o estado <code>currentQuote</code>.</li>
        </ol>
    `
};
