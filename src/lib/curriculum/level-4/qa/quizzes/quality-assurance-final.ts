import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-qa-final',
    title: 'Quiz Final: Garantia de Qualidade',
    questions: [
        {
            id: 'q1',
            question: 'Qual tipo de teste é melhor para verificar se uma pequena função, como `somar(a, b)`, funciona corretamente de forma isolada?',
            options: ['Teste End-to-End', 'Teste de Integração', 'Teste Unitário', 'Teste de Aceitação'],
            correctAnswer: 2
        },
        {
            id: 'q2',
            question: 'No ciclo "Red-Green-Refactor" do TDD, o que você deve fazer na fase "Green"?',
            options: ['Escrever o teste que falha', 'Escrever o mínimo de código para fazer o teste passar', 'Limpar e otimizar o código', 'Escrever a documentação'],
            correctAnswer: 1
        },
        {
            id: 'q3',
            question: 'Se você precisa testar a lógica de um serviço que depende de um banco de dados, mas não quer usar um banco real no seu teste unitário, que tipo de dublê de teste você usaria para simular o repositório do banco?',
            options: ['Spy', 'Stub ou Mock', 'Driver', 'Um banco de dados real'],
            correctAnswer: 1
        },
        {
            id: 'q4',
            question: 'Qual é o principal objetivo da métrica "Cobertura de Código" (Code Coverage)?',
            options: ['Provar que não existem bugs no código', 'Identificar quais partes do código não estão sendo executadas pela suíte de testes', 'Medir a velocidade dos testes', 'Substituir a revisão de código manual'],
            correctAnswer: 1
        }
    ]
};
