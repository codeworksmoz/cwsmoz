import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-os-final',
    title: 'Quiz: Sistemas Operacionais',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual é a principal função do Kernel em um sistema operacional?', 
            options: ['Fornecer a interface gráfica para o usuário', 'Gerenciar os recursos de hardware e fornecer serviços para os programas', 'Executar o navegador de internet', 'Gerenciar arquivos de texto'], 
            correctAnswer: 1 
        },
        { 
            id: 'q2', 
            question: 'O que caracteriza uma thread em comparação a um processo?', 
            options: ['Tem seu próprio espaço de memória isolado', 'É mais pesada para criar', 'Compartilha o espaço de memória com outras threads do mesmo processo', 'Não pode executar código concorrentemente'], 
            correctAnswer: 2 
        }
    ]
};
