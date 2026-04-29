import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q2",
  title: "Quiz: Lógica de Predicados e Quantificadores",
  passingScore: 70,
  questions: [
    {
      id: "q2_1",
      question: "O que significa o símbolo ∀?",
      options: ["Existe pelo menos um", "Para todo / Para qualquer", "Não existe", "Pertence ao conjunto"],
      correctAnswer: 1
    },
    {
      id: "q2_2",
      question: "O que significa o símbolo ∃?",
      options: ["Para todo", "Existe pelo menos um", "Nenhum", "Infinito"],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "Qual a negação de 'Todos os alunos são engenheiros' (∀x P(x))?",
      options: [
        "Nenhum aluno é engenheiro",
        "Existe pelo menos um aluno que não é engenheiro (∃x ¬P(x))",
        "Todos os engenheiros são alunos",
        "Alguns alunos são engenheiros"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "O que define um 'Domínio de Discurso'?",
      options: ["O tamanho da base de dados", "O conjunto de todos os valores que as variáveis podem assumir", "O nome da função principal", "O limite de memória da CPU"],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "Um predicado P(x) torna-se uma proposição quando:",
      options: ["É compilado", "Atribuímos um valor específico a 'x' do domínio", "Aumentamos a memória RAM", "Usamos o operador AND"],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "A afirmação ∃x (P(x) ∧ Q(x)) significa:",
      options: [
        "Para todos, P e Q são verdadeiros",
        "Existe pelo menos um x para o qual P e Q são simultaneamente verdadeiros",
        "P ou Q são verdadeiros para todos",
        "Nenhum x satisfaz P ou Q"
      ],
      correctAnswer: 1
    }
  ]
};