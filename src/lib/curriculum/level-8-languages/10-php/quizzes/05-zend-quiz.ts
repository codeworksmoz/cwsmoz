import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq5",
  title: "Quiz Master: Zend Engine e Ciclo de Vida da Execução",
  passingScore: 85,
  questions: [
    {
      id: "q5_1",
      question: "O que é um 'Opcode' no contexto do motor do PHP?",
      options: [
        "A representação visual do código no navegador.",
        "Uma instrução binária de baixo nível que a Zend VM consegue executar diretamente.",
        "Um plugin usado para acelerar a base de dados.",
        "O nome do servidor que executa o código."
      ],
      correctAnswer: 1,
      explanation: "Opcodes são os 'bits de execução' do PHP, gerados pelo compilador a partir da AST para serem processados pela máquina virtual."
    },
    {
      id: "q5_2",
      question: "Qual o papel primordial do estágio de 'Parsing' no pipeline da Zend Engine?",
      options: [
        "Mudar as cores do editor de texto.",
        "Converter a sequência de tokens numa AST (Abstract Syntax Tree) estruturada.",
        "Enviar o código para o servidor de produção.",
        "Criptografar as senhas do sistema."
      ],
      correctAnswer: 1,
      explanation: "O Parser organiza os tokens léxicos numa árvore gramatical que representa a lógica do programa de forma hierárquica."
    },
    {
      id: "q5_3",
      question: "Por que razão o OpCache é vital para a performance de aplicações PHP em larga escala?",
      options: [
        "Porque ele apaga o código desnecessário do disco.",
        "Porque ele armazena os Opcodes compilados na RAM, eliminando o custo de parsing e compilação em cada request.",
        "Porque ele permite que o PHP rode sem memória RAM.",
        "Porque ele converte PHP para JavaScript automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "O que acontece num processo de 'Deoptimization' durante a execução?",
      options: [
        "O computador desliga para arrefecer.",
        "O motor descarta o código otimizado e volta ao interpretador se uma suposição do JIT for violada.",
        "O banco de dados apaga os índices.",
        "O código é reescrito pelo programador em tempo real."
      ],
      correctAnswer: 1,
      explanation: "Se o JIT assume que uma variável é sempre INT mas ela recebe uma STRING, a VM deve reverter para o modo seguro de interpretação."
    },
    {
      id: "q5_5",
      question: "No contexto da Zend VM, o que indica o acrónimo 'CV' (Compiled Variable)?",
      options: [
        "Uma variável convertida para binário.",
        "Um acesso ultra-rápido via índice na stack de memória, evitando pesquisas por nome (hash lookups).",
        "Uma variável constante que não muda.",
        "Uma variável global acessível por todos os ficheiros."
      ],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "A Zend Virtual Machine (ZVM) é classificada como que tipo de arquitetura?",
      options: [
        "Register-based VM (Baseada em Registradores).",
        "Stack-based VM (Baseada em Pilha).",
        "Cloud-only Engine.",
        "Hardware Emulation Layer."
      ],
      correctAnswer: 1,
      explanation: "A ZVM utiliza uma pilha para gerir operandos e resultados das instruções (Opcodes), um modelo clássico de máquinas virtuais de alta eficiência."
    }
  ]
};