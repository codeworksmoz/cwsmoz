
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q20",
  title: "Quiz: eBPF e Observabilidade",
  passingScore: 70,
  questions: [
    {
      id: "q20_1",
      question: "Onde é executado o código eBPF?",
      options: ["No browser", "Numa máquina virtual segura dentro do Kernel Linux", "No hardware diretamente", "Na placa gráfica"],
      correctAnswer: 1
    },
    {
      id: "q20_2",
      question: "Qual a vantagem do eBPF sobre a monitorização tradicional?",
      options: ["É mais colorido", "Mínimo overhead e visibilidade total de eventos de rede e sistema sem mudar o código", "Não precisa de root", "Apaga logs antigos"],
      correctAnswer: 1
    },
    {
      id: "q20_3",
      question: "O que o 'Verifier' do eBPF garante?",
      options: ["A licença do software", "Que o programa é seguro, não trava o kernel e termina num tempo finito", "O nome do autor", "A velocidade da rede"],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "eBPF é usado extensivamente para:",
      options: ["Jogar games", "Security, Networking e Observabilidade de alto nível", "Escrever documentos", "Calculadora"],
      correctAnswer: 1
    },
    {
      id: "q20_5",
      question: "Ferramentas como BCC e bpftrace facilitam o quê?",
      options: ["O download de filmes", "A escrita e deploy de programas eBPF", "A instalação do Windows", "O design de logos"],
      correctAnswer: 1
    },
    {
      id: "q20_6",
      question: "Um programa eBPF pode derrubar o Kernel se tiver um bug?",
      options: ["Sim, sempre", "Não, o Verificador impede que código instável ou perigoso seja carregado", "Apenas se usar C++", "Depende da CPU"],
      correctAnswer: 1
    }
  ]
};
