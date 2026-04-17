import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-advgit-final',
    title: 'Quiz: Git Avançado',
    questions: [
        {
            id: 'q1',
            question: 'Qual comando é usado para combinar múltiplos commits em um só, limpando o histórico antes de um merge?',
            options: ['git merge --squash', 'git rebase -i', 'git commit --amend', 'git cherry-pick'],
            correctAnswer: 1
        },
        {
            id: 'q2',
            question: 'Em qual workflow de Git é comum ter branches de longa duração como `develop` e `main`?',
            options: ['GitHub Flow', 'GitFlow', 'Trunk-Based Development', 'GitLab Flow'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'Qual ferramenta do Git é usada para encontrar o commit exato que introduziu um bug, automatizando uma busca binária no histórico?',
            options: ['git blame', 'git reflog', 'git bisect', 'git log --grep'],
            correctAnswer: 2
        }
    ]
};
