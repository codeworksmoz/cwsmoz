import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq16",
  title: "Quiz: Cython e C-Extensions",
  passingScore: 80,
  questions: [
    {
      id: "q16_1",
      question: "Como o Cython consegue remover o overhead do Global Interpreter Lock (GIL)?",
      options: [
        "Usando a keyword 'await'",
        "Através do bloco 'with nogil:', permitindo paralelismo real em threads C",
        "Compilando o código para Java",
        "Desativando o Garbage Collector"
      ],
      correctAnswer: 1
    },
    {
      id: "q16_2",
      question: "Qual a vantagem de usar 'cdef' em vez de 'def' no Cython?",
      options: [
        "Permite que a função seja chamada via HTTP",
        "Declara a função no nível C para máxima performance, mas impede a chamada direta via Python puro",
        "Torna a função privada",
        "Não existe diferença de performance"
      ],
      correctAnswer: 1
    }
  ]
};