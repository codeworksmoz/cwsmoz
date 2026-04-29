
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q8",
  title: "Quiz: Sistemas de Ficheiros",
  passingScore: 70,
  questions: [
    {
      id: "q8_1",
      question: "Onde ficam os metadados (tamanho, dono, data) de um ficheiro em Unix?",
      options: ["No nome do ficheiro", "No Inode", "Na BIOS", "No monitor"],
      correctAnswer: 1
    },
    {
      id: "q8_2",
      question: "O que é o Journaling?",
      options: ["Escrever um blog", "Um diário de operações para evitar corrupção em falhas de energia", "Criptografar o disco", "Comprimir ficheiros"],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "Qual a diferença entre Hard Link e Soft Link (Symbolic)?",
      options: ["Hard Link aponta para o Inode; Soft Link aponta para o Nome do ficheiro", "Não há diferença", "Soft link é mais rápido", "Hard link é apenas para pastas"],
      correctAnswer: 0
    },
    {
      id: "q8_4",
      question: "O sistema de ficheiros FAT32 tem qual limitação crítica?",
      options: ["Não aceita nomes longos", "Ficheiros individuais não podem ultrapassar 4GB", "Só funciona em disquetes", "Não aceita fotos"],
      correctAnswer: 1
    },
    {
      id: "q8_5",
      question: "A alocação indexada permite:",
      options: ["Acesso sequencial apenas", "Acesso direto (aleatório) a qualquer parte do ficheiro", "Aumentar a CPU", "Nenhuma das anteriores"],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "O que o comando 'fsck' faz?",
      options: ["Formata o disco", "Verifica e repara a consistência do sistema de ficheiros", "Instala o Linux", "Muda a password"],
      correctAnswer: 1
    }
  ]
};
