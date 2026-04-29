import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq11",
  title: "Quiz: Decoradores e Gestão de Contexto",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o principal benefício de usar @functools.wraps?",
      options: ["Acelera o código", "Preserva a identidade e metadados da função original", "Criptografa a função", "Remove o acesso global"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O método __exit__ recebe quais argumentos?",
      options: ["Apenas o erro", "Tipo, valor e traceback da exceção", "Nenhum", "O resultado da função"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que o decorador @contextmanager utiliza internamente?",
      options: ["Threads", "Geradores (yield)", "Recursão", "Classes abstratas"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Decoradores podem ser aplicados a classes inteiras?",
      options: ["Não, apenas a funções", "Sim, eles recebem o construtor da classe como argumento", "Apenas no Python 2", "Somente via Metaclasses"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Um bloco 'with' garante a execução da limpeza mesmo se houver erro?",
      options: ["Sim, é o seu propósito principal", "Não, o erro interrompe o context manager", "Apenas se for um erro de sintaxe", "Somente se o programador chamar exit()"],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "Podes aninhar múltiplos blocos 'with' na mesma linha?",
      options: ["Não, é proibido", "Sim, separando por vírgulas", "Sim, usando a keyword and", "Apenas em scripts CLI"],
      correctAnswer: 1
    }
  ]
};
