
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "os-q19",
  title: "Quiz: VFS e Abstração",
  passingScore: 70,
  questions: [
    {
      id: "q19_1",
      question: "Qual o objetivo do Virtual File System (VFS)?",
      options: [
        "Aumentar o espaço em disco",
        "Fornecer uma interface universal para o utilizador, escondendo as diferenças entre Ext4, NTFS, etc.",
        "Mudar a cor das pastas",
        "Substituir a RAM"
      ],
      correctAnswer: 1
    },
    {
      id: "q19_2",
      question: "No Unix, um 'File Descriptor' é:",
      options: ["Uma descrição longa", "Um número inteiro que serve de índice para a tabela de ficheiros abertos", "O nome do ficheiro", "O tamanho do disco"],
      correctAnswer: 1
    },
    {
      id: "q19_3",
      question: "Para o VFS, um socket de rede é tratado como:",
      options: ["Um erro", "Um ficheiro", "Uma variável", "Um processo"],
      correctAnswer: 1
    },
    {
      id: "q19_4",
      question: "O Dentry Cache (Directory Entry) serve para:",
      options: ["Zipar ficheiros", "Acelerar a localização de Inodes através do nome do ficheiro", "Mudar a password", "Ligar a internet"],
      correctAnswer: 1
    },
    {
      id: "q19_5",
      question: "O comando 'mount' faz o quê no VFS?",
      options: ["Apaga o disco", "Anexa um sistema de ficheiros à árvore diretiva principal", "Reinicia o PC", "Cria um utilizador"],
      correctAnswer: 1
    },
    {
      id: "q19_6",
      question: "Qual a diferença entre stat e fstat?",
      options: ["Nenhuma", "stat usa o nome; fstat usa o file descriptor", "fstat é para fotos", "stat é para redes"],
      correctAnswer: 1
    }
  ]
};
