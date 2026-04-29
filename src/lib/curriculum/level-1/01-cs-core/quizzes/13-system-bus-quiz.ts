import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t13-quiz",
  title: "Quiz: Domínio de Barramentos de Sistema",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual barramento é responsável por indicar a localização exata de um dado na memória RAM?",
      options: ["Barramento de Dados", "Barramento de Controlo", "Barramento de Endereço", "Barramento USB"],
      correctAnswer: 2,
      explanation: "O Barramento de Endereço funciona como um 'ponteiro' que a CPU usa para dizer à RAM qual endereço de memória ela deseja aceder."
    },
    {
      id: "q2",
      question: "O que acontece se aumentarmos a largura do Barramento de Dados de 32 para 64 bits?",
      options: [
        "O computador gasta o dobro da eletricidade",
        "A CPU consegue processar o dobro da informação num único ciclo de transferência",
        "O disco rígido fica com mais espaço livre",
        "A internet fica mais rápida"
      ],
      correctAnswer: 1,
      explanation: "A largura de um barramento define quantos bits viajam em paralelo. Dobrar a largura permite mover o dobro de dados no mesmo pulsar do relógio."
    },
    {
      id: "q3",
      question: "Qual destes barramentos é estritamente UNIDIRECIONAL (CPU -> Memória)?",
      options: ["Dados", "Endereço", "Controlo", "Ponte Norte"],
      correctAnswer: 1,
      explanation: "A CPU é quem decide qual endereço quer ler ou escrever. A memória RAM nunca envia um endereço para a CPU."
    },
    {
      id: "q4",
      question: "Para que serve o Barramento de Controlo?",
      options: [
        "Para guardar ficheiros temporários",
        "Para enviar sinais de sincronização e comandos como 'READ' ou 'WRITE'",
        "Para ligar o monitor ao teclado",
        "Para acelerar a placa de vídeo"
      ],
      correctAnswer: 1,
      explanation: "O Barramento de Controlo é o sistema de sinalização que coordena o fluxo, indicando se a operação atual é de leitura, escrita ou se ocorreu um erro."
    },
    {
      id: "q5",
      question: "O que define o 'Gargalo de Von Neumann'?",
      options: [
        "Um erro de fabrico em chips antigos",
        "A limitação de velocidade causada pelo facto de dados e instruções partilharem o mesmo barramento",
        "O aquecimento excessivo da memória RAM",
        "A falta de cabos de rede"
      ],
      correctAnswer: 1,
      explanation: "O gargalo ocorre porque a CPU é muito mais rápida que o barramento que a alimenta, criando uma fila de espera para os dados chegarem ao processador."
    },
    {
      id: "q6",
      question: "Se um Barramento de Endereço tem 32 linhas (32 bits), qual o limite máximo de endereçamento direto?",
      options: ["1 GB", "4 GB", "16 GB", "64 GB"],
      correctAnswer: 1,
      explanation: "2 elevado a 32 resulta em aproximadamente 4,2 mil milhões de endereços únicos, o que equivale a 4GB de RAM endereçável."
    }
  ]
};
