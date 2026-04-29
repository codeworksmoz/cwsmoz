import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t1-quiz",
  title: "Quiz: Domínio de Variáveis e Tipos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece tecnicamente quando declaras uma variável?",
      options: [
        "O computador apaga ficheiros do disco",
        "O sistema reserva um endereço na memória RAM para guardar o valor",
        "O processador aumenta a sua frequência em GHz",
        "O código é enviado para a nuvem"
      ],
      correctAnswer: 1,
      explanation: "Variáveis são abstrações para endereços de memória. Declarar uma variável é pedir ao SO um espaço para guardar bits."
    },
    {
      id: "q2",
      question: "Qual o tipo de dado ideal para guardar se um utilizador pagou ou não a fatura?",
      options: ["String", "Number", "Boolean", "Null"],
      correctAnswer: 2,
      explanation: "Estados binários (Sim/Não, On/Off, Pago/Pendente) devem ser guardados como Boolean (True/False)."
    },
    {
      id: "q3",
      question: "Em linguagens de tipagem ESTÁTICA, o que ocorre se tentares guardar um texto numa variável definida como número?",
      options: [
        "O programa converte automaticamente",
        "O programa ignora o texto",
        "Ocorre um erro de compilação antes do programa rodar",
        "A memória RAM fica corrompida"
      ],
      correctAnswer: 2,
      explanation: "A tipagem estática obriga à consistência de tipos, prevenindo erros antes mesmo da execução."
    },
    {
      id: "q4",
      question: "O que caracteriza a convenção 'camelCase'?",
      options: [
        "Tudo em maiúsculas",
        "Palavras separadas por traços",
        "A primeira palavra em minúscula e as seguintes com a inicial maiúscula",
        "Apenas a última letra em maiúscula"
      ],
      correctAnswer: 2,
      explanation: "Exemplo: minhaVariavelDeExemplo. É a norma em JavaScript e muitas outras linguagens modernas."
    },
    {
      id: "q5",
      question: "Por que deves evitar nomes de variáveis como 'a', 'b' ou 'temp123' num projeto profissional?",
      options: [
        "Porque o computador não gosta dessas letras",
        "Porque dificulta a leitura e manutenção do código por outros humanos",
        "Porque gasta mais bateria no telemóvel",
        "Porque nomes curtos são mais lentos para o processador"
      ],
      correctAnswer: 1,
      explanation: "Código é escrito para humanos lerem e máquinas executarem. Nomes semânticos (ex: userBalance) poupam tempo de manutenção."
    },
    {
      id: "q6",
      question: "Qual o valor de uma variável declarada mas nunca inicializada em muitas linguagens modernas?",
      options: ["0", "1", "undefined ou null", "Error"],
      correctAnswer: 2,
      explanation: "Se defines um espaço mas não colocas nada lá, o motor do sistema marca-o como 'não definido' ou 'nulo'."
    }
  ]
};