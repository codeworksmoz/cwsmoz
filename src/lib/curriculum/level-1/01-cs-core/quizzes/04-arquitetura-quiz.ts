import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t4-quiz",
  title: "Quiz: Arquitetura de Computadores",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Quem propôs a arquitetura de 'Programa Armazenado' que usamos até hoje?",
      options: ["Bill Gates", "John von Neumann", "Alan Turing", "Steve Jobs"],
      correctAnswer: 1,
      explanation: "John von Neumann formalizou a ideia de que dados e instruções devem ser armazenados no mesmo espaço de memória, permitindo computadores flexíveis."
    },
    {
      id: "q2",
      question: "Qual componente da CPU é responsável por realizar operações matemáticas e comparações?",
      options: ["Unidade de Controlo (UC)", "Registradores", "ALU (Unidade Lógica e Aritmética)", "Memória Cache"],
      correctAnswer: 2,
      explanation: "A ALU (Arithmetic Logic Unit) é o motor de cálculo da CPU. É lá que os bits são somados ou comparados logicamente."
    },
    {
      id: "q3",
      question: "Qual é a função da Unidade de Controlo (UC)?",
      options: [
        "Guardar ficheiros permanentemente",
        "Interpretar instruções e gerir o fluxo de dados entre componentes",
        "Aumentar a velocidade da internet",
        "Realizar apenas cálculos de vírgula flutuante"
      ],
      correctAnswer: 1,
      explanation: "A UC é o maestro; ela decifra o código binário das instruções e envia sinais de controlo para que a ALU e a Memória saibam o que fazer."
    },
    {
      id: "q4",
      question: "Onde se localizam os Registradores?",
      options: ["No Disco Rígido", "Na Placa Mãe", "Dentro da CPU", "Na Memória RAM"],
      correctAnswer: 2,
      explanation: "Os registradores são as memórias mais rápidas do sistema e localizam-se fisicamente dentro do chip do processador para acesso instantâneo."
    },
    {
      id: "q5",
      question: "O que acontece durante a fase de 'Fetch' no ciclo de instrução?",
      options: [
        "A CPU desliga para poupar energia",
        "O resultado é gravado no disco",
        "A instrução é movida da RAM para a CPU",
        "A ALU realiza uma soma"
      ],
      correctAnswer: 2,
      explanation: "Fetch (Busca) é o primeiro passo: a CPU utiliza o barramento de endereço para buscar a instrução na RAM e trazê-la para o seu interior."
    },
    {
      id: "q6",
      question: "Qual barramento é responsável por indicar ONDE um dado deve ser lido na RAM?",
      options: ["Barramento de Dados", "Barramento de Controlo", "Barramento de Endereço", "Barramento USB"],
      correctAnswer: 2,
      explanation: "O barramento de endereço transporta a localização (o índice) da memória que a CPU deseja aceder."
    }
  ]
};