import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-git-basics',
    title: 'Quiz: Git Básico',
    questions: [
      { id: 'q1', question: 'Qual comando move arquivos modificados do seu diretório de trabalho para a "Staging Area"?', options: ['git commit', 'git add', 'git push', 'git stage'], correctAnswer: 1 },
      { id: 'q2', question: 'Qual comando salva permanentemente as mudanças da "Staging Area" no repositório local?', options: ['git save', 'git push', 'git commit', 'git log'], correctAnswer: 2 },
      { id: 'q3', question: 'Qual comando é usado para verificar o estado atual do seu repositório?', options: ['git check', 'git status', 'git log', 'git diff'], correctAnswer: 1 },
      { id: 'q4', question: 'O que o comando `git clone` faz?', options: ['Cria um novo branch', 'Envia mudanças para o repositório remoto', 'Copia um repositório remoto para sua máquina local', 'Verifica o histórico de commits'], correctAnswer: 2 }
    ]
};
