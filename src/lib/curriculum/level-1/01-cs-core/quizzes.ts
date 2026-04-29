
import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';
import { quiz as q3 } from './quizzes/03-algebra-booleana-quiz';
import { quiz as q4 } from './quizzes/04-arquitetura-quiz';
import { quiz as q5 } from './quizzes/05-memoria-quiz';
import { quiz as q6 } from './quizzes/06-algoritmos-quiz';
import { quiz as q7 } from './quizzes/07-complexidade-quiz';
import { quiz as q8 } from './quizzes/08-paradigmas-quiz';
import { quiz as q9 } from './quizzes/09-floating-point-quiz';
import { quiz as q10 } from './quizzes/10-cache-hierarchy-quiz';
import { quiz as q11 } from './quizzes/11-isa-architecture-quiz';
import { quiz as q12 } from './quizzes/12-logic-synthesis-quiz';
import { quiz as q13 } from './quizzes/13-system-bus-quiz';
import { quiz as q14 } from './quizzes/14-memory-virtual-quiz';
import { quiz as q15 } from './quizzes/15-file-systems-quiz';
import { quiz as q16 } from './quizzes/16-pipelining-quiz';
import { quiz as q17 } from './quizzes/17-virtualization-quiz';
import { quiz as q18 } from './quizzes/18-error-correction-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18,
  {
    id: "cs-q19",
    title: "Quiz: Microarquitetura e Microcódigo",
    passingScore: 70,
    questions: [
      { id: "q1", question: "O que é microcódigo na arquitetura de CPU?", options: ["Linguagem web", "Nível de instrução que implementa o ISA no hardware", "Erro pequeno", "Compilador"], correctAnswer: 1 },
      { id: "q2", question: "Qual a função do Micro-program Counter?", options: ["Contar processos", "Apontar para a próxima micro-instrução na control store", "Medir o clock", "Acelerar a RAM"], correctAnswer: 1 },
      { id: "q3", question: "Control Store é uma memória do tipo:", options: ["RAM", "ROM ou Flash interna da CPU", "Disco Rígido", "Cache L3"], correctAnswer: 1 },
      { id: "q4", question: "Onde o microcódigo reside?", options: ["No SSD", "Dentro da Unidade de Controlo da CPU", "Na BIOS", "No Kernel"], correctAnswer: 1 },
      { id: "q5", question: "Micro-operações (uOps) servem para:", options: ["Simplificar instruções complexas (CISC) para execução", "Aumentar o brilho do monitor", "Reduzir o custo do chip", "Nenhuma"], correctAnswer: 0 },
      { id: "q6", question: "Quem converte instruções em micro-operações?", options: ["O Sistema Operativo", "O Descodificador de Instruções da CPU", "O Compilador C++", "O Utilizador"], correctAnswer: 1 }
    ]
  },
  {
    id: "cs-q20",
    title: "Quiz: Clock, Ciclos e Sincronização",
    passingScore: 70,
    questions: [
      { id: "q1", question: "O que gera o sinal de relógio (clock) no computador?", options: ["O Software", "Um cristal de quartzo oscilante", "A bateria", "A ventoinha"], correctAnswer: 1 },
      { id: "q2", question: "O que define 1 Hertz (Hz)?", options: ["1 milhão de voltas", "1 ciclo por segundo", "1 byte por segundo", "A velocidade da luz"], correctAnswer: 1 },
      { id: "q3", question: "Clock Skew é um problema de:", options: ["Falta de memória", "Atraso na chegada do sinal de relógio a diferentes partes do chip", "Vírus", "Design de interface"], correctAnswer: 1 },
      { id: "q4", question: "Processadores Overclocked correm a:", options: ["Velocidade menor", "Frequência superior à nominal de fábrica", "Modo de economia", "Apenas 1 core"], correctAnswer: 1 },
      { id: "q5", question: "Um ciclo de instrução CPI médio de 1.0 significa:", options: ["Perfeição", "Que cada instrução leva em média 1 ciclo para terminar", "Lentidão", "Erro de cache"], correctAnswer: 1 },
      { id: "q6", question: "Qual o impacto de um clock mais alto no hardware?", options: ["Redução de temperatura", "Aumento do consumo de energia e dissipação de calor", "Aumento da RAM", "Nenhum"], correctAnswer: 1 }
    ]
  },
  {
    id: "cs-q21",
    title: "Quiz: História e Ética da Engenharia",
    passingScore: 70,
    questions: [
      { id: "q1", question: "Quem é considerado o pai da Ciência da Computação Teórica?", options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Ada Lovelace"], correctAnswer: 1 },
      { id: "q2", question: "O que o teste de Turing tenta medir?", options: ["Velocidade de cálculo", "A capacidade de uma máquina exibir comportamento inteligente", "O consumo de energia", "A segurança de rede"], correctAnswer: 1 },
      { id: "q3", question: "Quem escreveu o primeiro algoritmo da história?", options: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "Charles Babbage"], correctAnswer: 1 },
      { id: "q4", question: "A ética na engenharia de software exige:",
        options: ["Fazer tudo o que o chefe manda", "Priorizar a segurança e privacidade do utilizador final", "Escrever o código mais complexo", "Ganhar o máximo de dinheiro"],
        correctAnswer: 1
      },
      { id: "q5", question: "O bug Therac-25 ensinou à engenharia sobre:",
        options: ["Design de logos", "A perigos de falhas de software em sistemas críticos de saúde", "Aumento de clock", "Redes Wi-Fi"],
        correctAnswer: 1
      },
      { id: "q6", question: "O Manifesto Ágil foca em:",
        options: ["Processos rígidos", "Indivíduos, interações e software funcional", "Documentação de 500 páginas", "Hierarquia militar"],
        correctAnswer: 1
      }
    ]
  }
];
