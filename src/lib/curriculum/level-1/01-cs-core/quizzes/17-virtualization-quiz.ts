import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t17-quiz",
  title: "Quiz: Virtualização e Hypervisors",
  passingScore: 75,
  questions: [
    {
      id: "q1",
      question: "Qual a função principal de um Hypervisor (VMM)?",
      options: [
        "Aumentar a resolução do monitor",
        "Gerir os recursos físicos e criar a abstração para múltiplas Máquinas Virtuais",
        "Substituir a placa de vídeo por software",
        "Fazer o download automático de drivers"
      ],
      correctAnswer: 1,
      explanation: "O Hypervisor é o 'árbitro' que distribui CPU, RAM e Disco entre as várias instâncias virtuais."
    },
    {
      id: "q2",
      question: "Qual a diferença entre um Hypervisor Tipo 1 e Tipo 2?",
      options: [
        "O Tipo 1 é para Windows e o Tipo 2 para Mac",
        "O Tipo 1 corre diretamente no hardware (Bare Metal), enquanto o Tipo 2 corre em cima de um SO (Hosted)",
        "O Tipo 1 é gratuito e o Tipo 2 é pago",
        "O Tipo 1 não suporta internet"
      ],
      correctAnswer: 1,
      explanation: "Hypervisors Tipo 1 (como o ESXi) são muito mais eficientes para servidores pois não têm o 'peso' de um SO hospedeiro por baixo."
    },
    {
      id: "q3",
      question: "O conceito de 'Snapshots' em virtualização permite:",
      options: [
        "Tirar fotografias do utilizador",
        "Gravar o estado exato da VM num momento no tempo para poder reverter se algo falhar",
        "Aumentar a velocidade da CPU em 200%",
        "Apagar a VM permanentemente"
      ],
      correctAnswer: 1,
      explanation: "Snapshots são fundamentais para testes: se uma atualização estragar o sistema, voltas ao estado anterior em segundos."
    },
    {
      id: "q4",
      question: "Por que dizemos que Containers são mais leves que Máquinas Virtuais?",
      options: [
        "Porque não suportam imagens",
        "Porque partilham o Kernel do Sistema Operativo hospedeiro em vez de emularem um hardware completo",
        "Porque são escritos em binário puro",
        "Porque só funcionam na nuvem"
      ],
      correctAnswer: 1,
      explanation: "Várias instâncias de containers usam o mesmo 'núcleo' do SO, enquanto cada VM precisa de carregar o seu próprio Windows ou Linux inteiro."
    },
    {
      id: "q5",
      question: "O que é 'Resource Overcommitment'?",
      options: [
        "Um erro de configuração fatal",
        "Alocar mais recursos virtuais do que os físicos existentes, baseando-se no facto de nem todas as VMs usarem 100% ao mesmo tempo",
        "Comprar hardware de reserva",
        "Prometer velocidade de internet que não existe"
      ],
      correctAnswer: 1,
      explanation: "É uma técnica de economia: se tens 64GB de RAM, podes criar 10 VMs de 8GB se souberes que o uso médio delas é baixo."
    },
    {
      id: "q6",
      question: "Qual a importância da virtualização para a Cibersegurança?",
      options: [
        "Muda as senhas automaticamente",
        "Permite o isolamento (Sandboxing) de processos perigosos, impedindo que infetem a máquina real",
        "Torna o teclado imune a líquidos",
        "Criptografa o monitor"
      ],
      correctAnswer: 1,
      explanation: "O isolamento garante que o que acontece na VM morre na VM, protegendo a infraestrutura física de ataques."
    }
  ]
};