import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "go-mq1",
  title: "Quiz: Interfaces Implícitas e Tipagem",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Qual a palavra-chave usada para declarar que uma struct implementa uma interface em Go?",
      options: ["implements", "satisfies", "extends", "Nenhuma, a satisfação é implícita"],
      correctAnswer: 3,
      explanation: "Go utiliza tipagem estrutural. Se a struct possui os métodos, ela cumpre a interface sem declaração explícita."
    },
    {
      id: "q1_2",
      question: "O que é o 'Empty Interface' (interface{})?",
      options: [
        "Uma interface com erro",
        "Uma interface que pode aceitar qualquer valor de qualquer tipo",
        "Uma interface que não ocupa memória",
        "Uma constante do sistema"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "O que acontece ao tentar chamar um método de uma interface cujo valor interno é nil?",
      options: [
        "Retorna nil automaticamente",
        "O programa lança um runtime panic",
        "O compilador dá erro",
        "A interface é inicializada sozinha"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "Qual a complexidade de verificar se um tipo satisfaz uma interface em runtime (Type Assertion)?",
      options: ["O(1)", "O(n)", "O(log n)", "O(1) amortizado"],
      correctAnswer: 0
    },
    {
      id: "q1_5",
      question: "Interfaces em Go podem conter campos (atributos)?",
      options: ["Sim", "Apenas constantes", "Não, apenas assinaturas de métodos", "Somente se forem privadas"],
      correctAnswer: 2
    },
    {
      id: "q1_6",
      question: "O que é 'Interface Composition'?",
      options: [
        "Criar uma interface dentro de uma struct",
        "Combinar múltiplas interfaces menores numa nova interface maior",
        "Escrever o código da interface num ficheiro separado",
        "Mudar o tipo da interface em runtime"
      ],
      correctAnswer: 1
    }
  ]
};
