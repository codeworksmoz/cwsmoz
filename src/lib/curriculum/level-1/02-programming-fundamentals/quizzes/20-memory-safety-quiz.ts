import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t20-quiz",
  title: "Quiz: Gestão de Memória e Garbage Collection",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é o Garbage Collector (GC)?",
      options: [
        "Um software que apaga ficheiros antigos do disco",
        "Um processo automático que liberta memória RAM ocupada por objetos não utilizados",
        "Uma ferramenta de design de interfaces",
        "Um tipo de vírus que consome memória"
      ],
      correctAnswer: 1,
      explanation: "O GC é o faxineiro da memória, garantindo que o programa não esgote a RAM disponível."
    },
    {
      id: "q2",
      question: "O que caracteriza um 'Memory Leak' (Fuga de Memória)?",
      options: [
        "A memória RAM está fisicamente estragada",
        "Quando o programa guarda referências a objetos que já não são necessários, impedindo a sua limpeza",
        "Quando o download de um ficheiro falha",
        "Quando a bateria do portátil acaba mais rápido"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Como o algoritmo de 'Reference Counting' decide apagar um objeto?",
      options: [
        "Quando o objeto fica muito grande",
        "Quando o número de referências que apontam para ele chega a zero",
        "Após 10 minutos de uso",
        "Sempre que o utilizador clica num botão"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual o benefício de uma 'Weak Reference' (Referência Fraca)?",
      options: [
        "Ela é mais rápida de ler",
        "Ela permite que o objeto seja limpo pelo GC mesmo que a referência ainda exista",
        "Ela protege o objeto contra hackers",
        "Ela ocupa zero bits"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Em qual área de memória o Garbage Collector atua principalmente?",
      options: ["Stack", "CPU Registers", "Heap", "L1 Cache"],
      correctAnswer: 2,
      explanation: "A Stack é limpa automaticamente pelo CPU. O Heap é onde vivem os objetos dinâmicos que exigem o trabalho do GC."
    },
    {
      id: "q6",
      question: "Por que pausar o programa para o GC (Stop-the-world) pode ser ruim?",
      options: [
        "Porque apaga os dados do utilizador",
        "Porque causa 'engasgos' ou lentidão visível na interface (lag)",
        "Porque gasta muita internet",
        "Porque desliga o monitor"
      ],
      correctAnswer: 1
    }
  ]
};
