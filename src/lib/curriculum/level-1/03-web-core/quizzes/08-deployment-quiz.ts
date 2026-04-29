import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "web-t8-quiz",
  title: "Quiz: Publicação e Infraestrutura Web",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a função principal do sistema DNS?",
      options: [
        "Aumentar a velocidade do servidor",
        "Traduzir nomes de domínio (ex: google.com) em endereços IP",
        "Criar animações no CSS",
        "Validar o código HTML"
      ],
      correctAnswer: 1,
      explanation: "O DNS (Domain Name System) funciona como a lista telefónica da web, mapeando nomes fáceis de lembrar para endereços numéricos de máquinas."
    },
    {
      id: "q2",
      question: "O que garante que um site usa o protocolo HTTPS e exibe o 'cadeado' de segurança?",
      options: [
        "Um computador mais rápido",
        "Um Certificado SSL/TLS válido instalado no servidor",
        "O uso de tags semânticas no HTML",
        "A largura de banda da internet"
      ],
      correctAnswer: 1,
      explanation: "O SSL encripta a ligação, garantindo que ninguém interceta os dados entre o utilizador e o servidor."
    },
    {
      id: "q3",
      question: "Qual a vantagem de utilizar uma CDN (Content Delivery Network)?",
      options: [
        "Mudar as cores do site automaticamente",
        "Distribuir cópias do site em vários locais do mundo para reduzir a latência",
        "Aumentar o número de curtidas nas redes sociais",
        "Substituir a necessidade de ter um domínio"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O que acontece durante a 'Propagação de DNS'?",
      options: [
        "O site é formatado pelo Google",
        "A nova informação sobre o endereço do seu domínio espalha-se pelos servidores da internet global",
        "O JavaScript é transformado em binário",
        "O servidor apaga os ficheiros antigos"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Em fluxos modernos de deploy, qual ferramenta é frequentemente o gatilho para a atualização do site?",
      options: ["USB Drive", "E-mail", "GitHub (Git Push)", "Telefone"],
      correctAnswer: 2,
      explanation: "O Continuous Deployment (CD) monitoriza o repositório Git e reconstrói o site automaticamente a cada mudança de código."
    },
    {
      id: "q6",
      question: "Qual o impacto de não ter HTTPS num site profissional hoje em dia?",
      options: [
        "Nenhum, o site continua igual",
        "Browsers exibem avisos de 'Não Seguro' e o ranking no Google cai drasticamente",
        "As imagens ficam a preto e branco",
        "O teclado do utilizador deixa de funcionar"
      ],
      correctAnswer: 1
    }
  ]
};
