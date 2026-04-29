import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq14",
  title: "Quiz: Metaclasses e ABCs",
  passingScore: 80,
  questions: [
    {
      id: "q14_1",
      question: "O que acontece se tentares instanciar uma classe que herda de uma ABC mas não implementa todos os @abstractmethod?",
      options: [
        "O Python cria uma implementação vazia automaticamente",
        "Ocorre um TypeError no momento da instanciação",
        "O programa crasha apenas quando o método for chamado",
        "A classe é ignorada pelo interpretador"
      ],
      correctAnswer: 1
    },
    {
      id: "q14_2",
      question: "Qual o método da metaclasse é responsável por criar a instância da classe (o molde)?",
      options: ["__init__", "__new__", "__call__", "__prepare__"],
      correctAnswer: 1
    }
  ]
};