import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-game-final',
    title: 'Quiz: Game Development',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual é a principal função de um "game engine" como Unity ou Unreal?', 
            options: ['Apenas para criar modelos 3D', 'Fornecer um framework com ferramentas para renderização, física, áudio, etc.', 'Apenas para escrever a história do jogo', 'Para vender o jogo em lojas online'], 
            correctAnswer: 1
        },
        { 
            id: 'q2', 
            question: 'Qual fase de um game loop é responsável por atualizar a posição dos personagens e verificar colisões?', 
            options: ['Renderizar', 'Processar Entradas', 'Atualizar Estado', 'Compilar'], 
            correctAnswer: 2
        }
    ]
};
