
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q10",
  title: "Quiz: Segurança de Sistemas Operativos",
  passingScore: 70,
  questions: [
    {
      id: "q10_1",
      question: "O que impede que uma aplicação de utilizador formate o disco rígido diretamente?",
      options: ["O Antivírus", "A separação de CPU entre User Mode e Kernel Mode", "O utilizador ser lento", "O firewall"],
      correctAnswer: 1
    },
    {
      id: "q10_2",
      question: "Qual o princípio do 'Menor Privilégio'?",
      options: ["Dar acesso root a todos", "Dar a cada processo apenas as permissões mínimas necessárias", "Desligar o sistema", "Não usar senhas"],
      correctAnswer: 1
    },
    {
      id: "q10_3",
      question: "O que é o ASLR (Address Space Layout Randomization)?",
      options: ["Mudar o IP", "Mudar aleatoriamente a localização de processos na memória para dificultar exploits", "Limpar a RAM", "Aumentar a cache"],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "Um ataque de 'Buffer Overflow' visa o quê?",
      options: ["O monitor", "Escrever dados além do limite de um buffer para corromper a pilha de execução", "A rede", "A bateria"],
      correctAnswer: 1
    },
    {
      id: "q10_5",
      question: "As ACLs (Access Control Lists) estão ligadas a:",
      options: ["Processos", "Objetos (ex: ficheiros, pastas)", "Cables", "Redes"],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "O que é o bit NX (No-eXecute) nas páginas de memória?",
      options: ["Impede a leitura", "Impede que dados em certas áreas de memória sejam executados como código", "Impede o acesso à rede", "Muda a cor do ecrã"],
      correctAnswer: 1
    }
  ]
};
