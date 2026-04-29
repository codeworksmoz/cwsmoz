import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "net-mq12",
  title: "Quiz: DNS Internals & Security",
  passingScore: 80,
  questions: [
    {
      id: "q12_1",
      question: "Qual o papel do 'Recursive Resolver'?",
      options: ["Guardar o IP final", "Fazer as consultas sucessivas aos outros servidores até encontrar o IP", "Criptografar o tráfego", "Aumentar a velocidade da CPU"],
      correctAnswer: 1
    },
    {
      id: "q12_2",
      question: "O que o DNSSEC resolve especificamente?",
      options: ["Lentidão na rede", "Ataques de DNS Spoofing / Cache Poisoning", "Falta de endereços IP", "Crescimento do tráfego"],
      correctAnswer: 1
    },
    {
      id: "q12_3",
      question: "Anycast permite que:",
      options: ["Um IP aponte para um único servidor", "Múltiplos servidores partilhem o mesmo IP, respondendo o mais próximo", "O site seja offline", "A internet seja privada"],
      correctAnswer: 1
    },
    {
      id: "q12_4",
      question: "O que é um registo 'CNAME'?",
      options: ["Um endereço IP real", "Um alias (apelido) de um nome de domínio para outro", "Um registo de email", "Uma chave de segurança"],
      correctAnswer: 1
    },
    {
      id: "q12_5",
      question: "Qual protocolo é usado para DNS over HTTPS (DoH)?",
      options: ["UDP 53", "TCP 443", "ICMP", "BGP"],
      correctAnswer: 1
    },
    {
      id: "q12_6",
      question: "A zona '.' (ponto) representa o quê no DNS?",
      options: ["Erro", "Root (Raiz)", "O fim do domínio", "Navegação local"],
      correctAnswer: 1
    }
  ]
};