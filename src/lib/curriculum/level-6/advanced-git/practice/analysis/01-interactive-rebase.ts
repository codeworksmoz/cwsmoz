import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'advgit-ex-1',
    title: 'Cenário: Git Rebase Interativo',
    statement: 'Você está trabalhando em uma feature e fez 3 commits: "WIP", "Corrige bug" e "Finaliza feature". Antes de submeter o Pull Request, você quer limpar o histórico. Qual comando do Git você usaria e quais ações você tomaria no modo interativo?',
    template: `// Comando para iniciar:
// git ...

// Ações no modo interativo:
// 1. Manter o commit "Finaliza feature" com 'pick'.
// 2. Usar '...' nos outros dois commits para mesclá-los no commit final.
`,
    youtubeVideoId: 'a_a_LuS-8yY',
    detailedExplanation: `
        <h2>Limpando seu Histórico de Commits</h2>
        <p>Manter um histórico de commits limpo e significativo é uma habilidade profissional importante. O <code>git rebase -i</code> é a ferramenta perfeita para isso.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Comando:</strong> Você usaria <code>git rebase -i HEAD~3</code> para iniciar uma rebase interativa nos seus últimos 3 commits.</li>
            <li><strong>Ações:</strong> O Git abrirá um editor de texto. Você verá seus três commits. Para combinar "WIP" e "Corrige bug" no commit "Finaliza feature", você deve:
                <ul>
                    <li>Manter a linha do commit "Finaliza feature" com a ação <code>pick</code>.</li>
                    <li>Mudar a ação dos commits "WIP" e "Corrige bug" para <code>squash</code> (ou <code>s</code>). Isso os "espremerá" no commit acima deles.</li>
                </ul>
            </li>
            <li>Ao salvar, o Git pedirá para você escrever uma nova mensagem de commit consolidada.</li>
        </ol>
    `
};
