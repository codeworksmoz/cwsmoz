import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t18-quiz",
  title: "Quiz: Integridade de Dados e ECC",
  passingScore: 75,
  questions: [
    {
      id: "q1",
      question: "Qual o principal perigo de um 'Bit Flip' num servidor sem memória ECC?",
      options: [
        "O monitor fica sem cor",
        "Corrupção silenciosa de dados ou crash fatal do sistema",
        "Aumento da conta de eletricidade",
        "O rato para de funcionar"
      ],
      correctAnswer: 1,
      explanation: "Um bit flip num valor de ponteiro ou num saldo bancário pode causar danos catastróficos sem aviso prévio."
    },
    {
      id: "q2",
      question: "A paridade simples consegue detetar um erro se 2 bits forem invertidos ao mesmo tempo?",
      options: [
        "Sim, deteta sempre",
        "Não, pois a contagem de '1s' voltará a parecer correta para o sistema (Paridade Par/Ímpar)",
        "Apenas em sistemas de 64 bits",
        "Sim, mas apenas em dias quentes"
      ],
      correctAnswer: 1,
      explanation: "A paridade só deteta um número ímpar de erros. Erros duplos anulam-se mutuamente na contagem simples."
    },
    {
      id: "q3",
      question: "Qual a diferença fundamental entre Deteção e Correção de erros?",
      options: [
        "Deteção é mais rápida",
        "Deteção apenas avisa que algo está errado; Correção utiliza redundância para identificar e reparar o bit invertido",
        "Correção não precisa de bits extras",
        "Nenhuma, são o mesmo conceito"
      ],
      correctAnswer: 1,
      explanation: "Correção exige algoritmos como o de Hamming e mais bits de redundância para 'reconstruir' a verdade."
    },
    {
      id: "q4",
      question: "Como o Código de Hamming localiza a posição de um erro?",
      options: [
        "Pedindo ao utilizador para adivinhar",
        "Através de um 'Síndrome' gerado pela verificação cruzada de múltiplos bits de paridade em posições estratégicas",
        "Enviando um sinal para a internet",
        "Comparando o ficheiro com uma cópia no Google Drive"
      ],
      correctAnswer: 1,
      explanation: "O síndrome aponta diretamente para o índice binário do bit que está corrompido."
    },
    {
      id: "q5",
      question: "Onde é que a tecnologia SECDED (Single Error Correction, Double Error Detection) é mais comum?",
      options: [
        "Em joysticks de videojogos",
        "Em memórias RAM ECC de servidores e workstations de engenharia",
        "Em cabos HDMI barátos",
        "Em pen drives de brinde"
      ],
      correctAnswer: 1,
      explanation: "SECDED permite que o sistema corrija 1 bit errado e, no mínimo, detete (parando o sistema) se 2 bits estiverem errados."
    },
    {
      id: "q6",
      question: "O que representa o 'Checksum' de um ficheiro que descarregas?",
      options: [
        "O preço do ficheiro",
        "Uma impressão digital matemática (hash) que garante que o ficheiro não foi alterado ou corrompido durante a viagem",
        "O nome do autor do ficheiro",
        "O tempo que falta para o download terminar"
      ],
      correctAnswer: 1,
      explanation: "Se o teu checksum local for diferente do fornecido no site, o ficheiro foi corrompido ou sabotado."
    }
  ]
};