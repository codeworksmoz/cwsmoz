import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q1-master",
  title: "Quiz: Engenharia de SDLC e Gestão de Risco",
  passingScore: 75,
  questions: [
    {
      id: "q1_1",
      question: "Qual o impacto financeiro de corrigir um bug na fase de manutenção comparado à fase de requisitos?",
      options: [
        "O custo é o mesmo",
        "O custo na manutenção pode ser até 100 vezes superior",
        "A fase de requisitos é mais cara",
        "A manutenção não tem custos se o código for limpo"
      ],
      correctAnswer: 1,
      explanation: "A correção tardia exige retrabalho em todas as fases anteriores (documentação, design, código e testes) e aumenta o risco de regressão."
    },
    {
      id: "q1_2",
      question: "No contexto de V&V, o que define a 'Validação'?",
      options: [
        "Verificar se o código não tem erros de sintaxe",
        "Garantir que o software construído atende às necessidades reais do cliente",
        "Validar se a base de dados está online",
        "Seguir rigorosamente o manual de estilo"
      ],
      correctAnswer: 1,
      explanation: "Validação responde à pergunta: 'Estamos a fazer o sistema certo?'."
    },
    {
      id: "q1_3",
      question: "Qual modelo de ciclo de vida é mais indicado para sistemas com riscos técnicos desconhecidos no início?",
      options: ["Waterfall", "Modelo Espiral", "Modelo em V", "Linear Puro"],
      correctAnswer: 1,
      explanation: "O Modelo Espiral foca na avaliação de riscos em cada iteração, permitindo mitigar incertezas antes de grandes investimentos."
    },
    {
      id: "q1_4",
      question: "A manutenção 'Adaptativa' ocorre quando:",
      options: [
        "Existe um bug crítico em produção",
        "O ambiente externo (SO, Hardware, Cloud) muda e o software precisa de ajuste",
        "O código é refatorado para ficar mais limpo",
        "O utilizador esquece a senha"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "O que é o 'Technical Success Ratio' (TSR)?",
      options: [
        "O número de linhas de código por dia",
        "A probabilidade técnica de o projeto atingir os objetivos dentro das restrições",
        "O rácio de lucro da empresa",
        "A velocidade da internet no servidor"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual o perigo da fase de 'Análise' ser demasiado curta?",
      options: [
        "O programador fica sem trabalho",
        "Desenvolver funcionalidades que ninguém vai usar ou que não resolvem o problema",
        "O site fica com cores erradas",
        "O computador gasta mais energia"
      ],
      correctAnswer: 1
    }
  ]
};
