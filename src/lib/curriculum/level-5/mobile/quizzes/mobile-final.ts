import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-mobile-final',
    title: 'Quiz: Mobile Development',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual é a principal vantagem de usar um framework multiplataforma como React Native ou Flutter?', 
            options: ['Performance superior à nativa', 'Manter um único código-base para iOS e Android', 'Acesso mais fácil a APIs nativas', 'Menor consumo de bateria'], 
            correctAnswer: 1
        },
        { 
            id: 'q2', 
            question: 'Se você precisa de acesso de baixo nível ao hardware e a máxima performance possível para um aplicativo de jogos, qual abordagem seria geralmente a mais recomendada?', 
            options: ['Nativa (Swift/Kotlin)', 'Híbrida (React Native)', 'Progressive Web App (PWA)', 'Web View'], 
            correctAnswer: 0
        }
    ]
};
