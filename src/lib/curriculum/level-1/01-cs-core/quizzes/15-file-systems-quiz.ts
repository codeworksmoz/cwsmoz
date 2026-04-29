import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t15-quiz",
  title: "Quiz: Sistemas de Ficheiros de Elite",
  passingScore: 75,
  questions: [
    {
      id: "q1",
      question: "Qual das seguintes informações NÃO é armazenada dentro de um Inode típico?",
      options: [
        "O tamanho do ficheiro",
        "O nome do ficheiro",
        "As permissões de acesso",
        "Os ponteiros para os blocos de dados"
      ],
      correctAnswer: 1,
      explanation: "O nome do ficheiro vive na estrutura do diretório, não no Inode. O Inode foca-se nos metadados e localização física."
    },
    {
      id: "q2",
      question: "O que é um 'Hard Link' tecnicamente?",
      options: [
        "Um atalho de ambiente de trabalho",
        "Uma entrada de diretório diferente que aponta para o mesmo número de Inode",
        "Uma cópia física do ficheiro noutro disco",
        "Um cabo de ligação entre servidores"
      ],
      correctAnswer: 1,
      explanation: "Como o Inode é a identidade real, múltiplos nomes (hard links) podem partilhar o mesmo Inode e os mesmos dados."
    },
    {
      id: "q3",
      question: "Qual a função primordial do 'Journaling' num sistema de ficheiros?",
      options: [
        "Aumentar a velocidade de download",
        "Prevenir a corrupção de dados após desligamentos inesperados ou falhas de energia",
        "Compactar ficheiros automaticamente",
        "Criptografar as pastas do utilizador"
      ],
      correctAnswer: 1,
      explanation: "O Journal regista as operações antes de as executar, permitindo a recuperação rápida da integridade do sistema após um crash."
    },
    {
      id: "q4",
      question: "Em termos de performance, por que a fragmentação é mais prejudicial em HDDs do que em SSDs?",
      options: [
        "Porque o SSD é azul e o HDD é prateado",
        "Porque o HDD tem peças móveis (agulha) que precisam de saltar fisicamente entre setores distantes",
        "Porque os SSDs apagam os fragmentos automaticamente",
        "Não existe diferença de performance"
      ],
      correctAnswer: 1,
      explanation: "Nos HDDs, o tempo de busca (seek time) é alto. Nos SSDs, o acesso é eletrónico e instantâneo em qualquer bloco."
    },
    {
      id: "q5",
      question: "O que acontece ao Inode e aos blocos de dados quando o 'Link Count' de um ficheiro chega a zero?",
      options: [
        "O ficheiro é movido para a reciclagem",
        "Os blocos são marcados como livres e o Inode é libertado para reutilização",
        "O computador reinicia",
        "Nada, o ficheiro permanece lá para sempre"
      ],
      correctAnswer: 1,
      explanation: "Zero links significa que nenhum nome aponta para aquele Inode, logo o sistema pode reutilizar aquele espaço."
    },
    {
      id: "q6",
      question: "Qual o limite de tamanho de um ficheiro num sistema FAT32?",
      options: ["100 MB", "2 GB", "4 GB", "1 TB"],
      correctAnswer: 2,
      explanation: "FAT32 usa endereçamento de 32 bits, limitando ficheiros individuais a no máximo 4GB, um limite crítico para vídeos modernos."
    }
  ]
};