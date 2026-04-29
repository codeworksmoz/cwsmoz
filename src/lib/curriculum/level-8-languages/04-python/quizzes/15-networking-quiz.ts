import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq15",
  title: "Quiz: Networking e Sockets",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "Num servidor TCP usando sockets, qual a função do método listen()?",
      options: [
        "Começar a ler dados da placa de rede",
        "Colocar o socket em modo passivo e definir o tamanho da fila de conexões pendentes (backlog)",
        "Enviar um sinal de ping para o cliente",
        "Criptografar a conexão automaticamente"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_2",
      question: "Qual o risco de usar recv() sem especificar um tamanho de buffer adequado?",
      options: [
        "Aumento da latência de rede",
        "Truncamento de dados ou consumo excessivo de memória se os dados forem maiores que o esperado",
        "Nenhum, o Python gere o buffer dinamicamente",
        "A conexão é fechada pelo firewall"
      ],
      correctAnswer: 1
    }
  ]
};