import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q2",
  title: "Quiz: Terminal e CLI Mastery",
  passingScore: 70,
  questions: [
    {
      id: "q2_1",
      question: "Qual comando lista os ficheiros exibindo detalhes como permissões e tamanho?",
      options: ["ls", "ls -la", "dir", "show files"],
      correctAnswer: 1,
      explanation: "O parâmetro -l mostra o formato longo e -a mostra ficheiros ocultos."
    },
    {
      id: "q2_2",
      question: "O comando 'cd ~' (til) leva o utilizador para onde?",
      options: [
        "Para a raiz do disco rígido",
        "Para o diretório 'home' do utilizador atual",
        "Para a pasta anterior",
        "Para a lixeira"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "O que o comando 'mkdir -p pasta/subpasta' faz?",
      options: [
        "Cria uma pasta e apaga a subpasta",
        "Cria a pasta e a subpasta de uma só vez, se não existirem",
        "Renomeia a pasta",
        "É um comando inválido"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "Para que serve o comando 'sudo'?",
      options: [
        "Para desligar o terminal",
        "Para executar um comando com privilégios de super-utilizador (Root)",
        "Para acelerar o processamento",
        "Para mudar a cor do texto"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "O comando 'pwd' retorna:",
      options: [
        "A password do utilizador",
        "O caminho completo do diretório atual (Print Working Directory)",
        "O nome do computador",
        "A versão do terminal"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "Como se interrompe um comando que está a correr infinitamente no terminal?",
      options: ["Ctrl + S", "Ctrl + C", "Alt + F4", "Enter repetidamente"],
      correctAnswer: 1,
      explanation: "Ctrl + C envia um sinal de interrupção (SIGINT) para o processo ativo."
    }
  ]
};
