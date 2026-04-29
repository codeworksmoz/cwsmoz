import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q10",
  title: "Quiz: GitHub Actions e Automação",
  passingScore: 70,
  questions: [
    {
      id: "q10_1",
      question: "Onde se guardam os ficheiros de workflow do GitHub Actions?",
      options: ["Na pasta root", "Dentro de .github/workflows/", "No servidor do Google", "Na pasta oculta .git"],
      correctAnswer: 1
    },
    {
      id: "q10_2",
      question: "Qual o formato de ficheiro usado para configurar Workflows?",
      options: ["JSON", "XML", "YAML", "TXT"],
      correctAnswer: 2
    },
    {
      id: "q10_3",
      question: "O que é um 'Runner'?",
      options: ["Um programador rápido", "O servidor virtual onde o GitHub executa o teu workflow", "Um tipo de erro de rede", "O nome do branch principal"],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "Qual evento costuma disparar um pipeline de CI?",
      options: ["Um clique no site", "O evento 'push' ou 'pull_request'", "O fecho do browser", "A mudança de password"],
      correctAnswer: 1
    },
    {
      id: "q10_5",
      question: "Para que servem os 'Secrets' no GitHub?",
      options: ["Para fofocas da equipa", "Para guardar chaves de API e senhas de forma segura, sem as expor no código", "Para esconder ficheiros grandes", "São opcionais e inseguros"],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "Qual a diferença entre Continuous Delivery e Continuous Deployment?",
      options: ["Nenhuma", "Delivery exige aprovação manual; Deployment é 100% automático até a produção", "Deployment é mais lento", "Delivery é apenas para telemóveis"],
      correctAnswer: 1
    }
  ]
};