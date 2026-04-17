import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "advgit-t1",
    title: "Dominando o Git para Colaboração",
    youtubeVideoId: "a_a_LuS-8yY",
    content: `
        <h2>Além do Básico</h2>
        <p>Comandos e fluxos de trabalho avançados para equipes profissionais.</p>
        <ul>
            <li><strong>Rebase Interativo:</strong> Permite reescrever o histórico de commits, tornando-o mais limpo e legível antes de mesclar.</li>
            <li><strong>Code Reviews:</strong> O processo de ter seu código revisado por outros membros da equipe antes de ser integrado. É uma prática crucial para manter a qualidade do código e compartilhar conhecimento.</li>
            <li><strong>Contribuição Open Source:</strong> Como encontrar projetos, fazer um "fork", criar um "Pull Request" e contribuir para a comunidade de software livre.</li>
        </ul>
    `
};
