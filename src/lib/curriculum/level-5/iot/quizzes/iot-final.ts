import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-iot-final',
    title: 'Quiz: Internet of Things',
    questions: [
        { 
            id: 'q1', 
            question: 'Qual componente de um sistema IoT é responsável por coletar dados do ambiente físico?', 
            options: ['Interface do Usuário', 'Servidor na Nuvem', 'Sensor', 'Roteador'], 
            correctAnswer: 2
        },
        { 
            id: 'q2', 
            question: 'Placas como Arduino e Raspberry Pi são exemplos de que tipo de componente em um projeto IoT?', 
            options: ['Sensores', 'Microcontroladores/Computadores de Placa Única', 'Servidores de Nuvem', 'Atuadores'], 
            correctAnswer: 1
        }
    ]
};
