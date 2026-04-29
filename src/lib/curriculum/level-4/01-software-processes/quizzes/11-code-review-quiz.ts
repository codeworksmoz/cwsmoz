import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q11-master",
  title: "Quiz: Auditoria de Pares e Colaboração Radical",
  passingScore: 80,
  questions: [
    {
      id: "q11_1",
      question: "No modelo Driver/Navigator do Peer Programming, qual a responsabilidade principal do Navigator?",
      options: [
        "Digitar o código o mais rápido possível.",
        "Observar erros de sintaxe e focar na estratégia e arquitetura de longo prazo.",
        "Responder a e-mails enquanto o Driver trabalha.",
        "Substituir o Driver a cada 5 minutos obrigatoriamente."
      ],
      correctAnswer: 1,
      explanation: "O Navigator atua como um revisor em tempo real, garantindo que o Driver não se perca nos detalhes e mantenha a qualidade arquitetural."
    },
    {
      id: "q11_2",
      question: "Qual o principal benefício do 'Ego-less Programming' num Code Review?",
      options: [
        "Aumentar a velocidade de digitação.",
        "Permitir que a equipa foque na qualidade técnica do artefacto sem que o autor se sinta atacado pessoalmente.",
        "Remover a necessidade de usar Git.",
        "Garantir que o arquiteto tenha sempre a razão."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_3",
      question: "Um revisor nota um erro de lógica num Pull Request. Qual a forma MAIS profissional de comunicar o feedback?",
      options: [
        "Escrever: 'Tu fizeste isto errado, corrige'.",
        "Escrever: 'Notei que o cenário de saldo negativo não está tratado aqui; como podemos mitigar este risco?'.",
        "Rejeitar o PR sem comentários para o autor descobrir sozinho.",
        "Corrigir o erro no branch do colega sem avisar."
      ],
      correctAnswer: 1,
      explanation: "O feedback profissional deve ser baseado em factos e perguntas colaborativas, promovendo o aprendizado e a correção precisa."
    },
    {
      id: "q11_4",
      question: "Por que o Peer Programming é considerado eficiente, apesar de usar dois engenheiros para a mesma tarefa?",
      options: [
        "Porque o computador corre 2x mais rápido.",
        "Porque reduz drasticamente o retrabalho futuro e a necessidade de correções de bugs em produção.",
        "Porque as empresas gostam de gastar dinheiro.",
        "Porque permite que um engenheiro durma enquanto o outro trabalha."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_5",
      question: "O que deve ser priorizado num checklist de Code Review de alta performance?",
      options: [
        "Apenas a preferência estética do revisor sobre espaços e vírgulas.",
        "Lógica de negócio, segurança, performance e legibilidade.",
        "O número de linhas de código removidas.",
        "O tempo que o autor levou a abrir o PR."
      ],
      correctAnswer: 1
    },
    {
      id: "q11_6",
      question: "Qual o perigo de não realizar Code Reviews num sistema de missão crítica?",
      options: [
        "O código fica muito curto.",
        "Criação de silos de conhecimento onde apenas uma pessoa entende partes vitais do sistema.",
        "Aumento da velocidade de entrega inicial sem riscos.",
        "O browser deixa de suportar o HTML."
      ],
      correctAnswer: 1,
      explanation: "Code Review garante que o conhecimento do sistema seja disseminado por toda a equipa, aumentando o 'Bus Factor' do projeto."
    }
  ]
};
