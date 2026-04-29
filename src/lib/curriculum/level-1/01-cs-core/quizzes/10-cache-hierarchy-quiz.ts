import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t10-quiz",
  title: "Quiz: Hierarquia de Cache e Performance",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal motivo para a existência da memória cache?",
      options: [
        "Para substituir permanentemente o disco rígido",
        "Para reduzir o custo de fabrico do processador",
        "Para compensar o abismo de velocidade entre a CPU rápida e a RAM lenta",
        "Para aumentar o tamanho físico do chip"
      ],
      correctAnswer: 2,
      explanation: "A latência da RAM é centenas de vezes superior ao tempo de ciclo da CPU. A cache serve como um 'tampão' ultra-rápido para que a CPU não fique ociosa."
    },
    {
      id: "q2",
      question: "Qual nível de cache é tipicamente partilhado entre todos os núcleos (cores) da CPU?",
      options: ["L1", "L2", "L3", "Registradores"],
      correctAnswer: 2,
      explanation: "L1 e L2 costumam ser privadas de cada núcleo para velocidade máxima. L3 é maior e serve como uma piscina comum de dados para todos os núcleos."
    },
    {
      id: "q3",
      question: "O que caracteriza a 'Localidade Espacial'?",
      options: [
        "Aceder ao mesmo dado várias vezes seguidas",
        "Aceder a endereços de memória que estão fisicamente próximos uns dos outros",
        "Mover dados do disco para a nuvem",
        "Aumentar a frequência do relógio da CPU"
      ],
      correctAnswer: 1,
      explanation: "A localidade espacial baseia-se na ideia de que, se precisas de um dado, provavelmente vais precisar do que está logo a seguir (como num array)."
    },
    {
      id: "q4",
      question: "O que acontece durante um 'Cache Miss'?",
      options: [
        "O processador acelera para compensar",
        "O computador reinicia para limpar a memória",
        "A CPU entra em 'stall' (pausa) e aguarda o carregamento da RAM, perdendo centenas de ciclos",
        "O dado é apagado para sempre"
      ],
      correctAnswer: 2,
      explanation: "Um Miss é o pior cenário para a performance: o fluxo de execução para enquanto a CPU espera pelo componente mais lento (RAM)."
    },
    {
      id: "q5",
      question: "Por que a Cache L1 é muito menor do que a L3?",
      options: [
        "Porque é feita de um material mais barato",
        "Para caber dentro do registrador",
        "Devido a limitações físicas de velocidade: caches maiores demoram mais tempo a ser pesquisadas eletricamente",
        "Porque o Windows não suporta L1 grandes"
      ],
      correctAnswer: 2,
      explanation: "Existe um tradeoff físico: quanto maior a memória, mais tempo os sinais elétricos demoram a percorrer os circuitos e encontrar o dado correto. Por isso a L1 deve ser pequena e focada."
    },
    {
      id: "q6",
      question: "Qual a unidade mínima de dados que a CPU costuma puxar da RAM para a Cache?",
      options: ["1 bit", "1 byte", "Cache Line (tipicamente 64 bytes)", "1 megabyte"],
      correctAnswer: 2,
      explanation: "A CPU puxa blocos inteiros chamados Cache Lines para tirar partido da localidade espacial, antecipando que vais precisar dos dados vizinhos."
    }
  ]
};