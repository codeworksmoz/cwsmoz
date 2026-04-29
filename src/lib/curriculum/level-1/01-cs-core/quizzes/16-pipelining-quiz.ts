import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t16-quiz",
  title: "Quiz: CPU Pipelining & Performance",
  passingScore: 75,
  questions: [
    {
      id: "q1",
      question: "Qual o principal objetivo do Pipelining numa arquitetura de processador?",
      options: [
        "Reduzir a voltagem do CPU",
        "Aumentar o Throughput (instruções finalizadas por segundo)",
        "Diminuir a latência de uma única instrução",
        "Eliminar a necessidade de memória RAM"
      ],
      correctAnswer: 1,
      explanation: "O pipelining foca na vazão total. Tal como numa fábrica, mais carros saem da linha por hora, embora cada um leve o mesmo tempo a ser feito."
    },
    {
      id: "q2",
      question: "Um 'Data Hazard' ocorre especificamente quando:",
      options: [
        "A ventoinha do PC para de rodar",
        "Uma instrução depende do resultado de uma instrução anterior que ainda está na pipeline",
        "O utilizador apaga um ficheiro",
        "Duas CPUs tentam ligar-se à mesma internet"
      ],
      correctAnswer: 1,
      explanation: "Este conflito de dados exige que a pipeline faça uma 'bolha' (bubble/stall) ou use técnicas como 'Forwarding' para resolver a dependência."
    },
    {
      id: "q3",
      question: "O que acontece durante um 'Pipeline Flush' causado por erro de Branch Prediction?",
      options: [
        "O CPU é limpo fisicamente",
        "As instruções que foram carregadas erroneamente na pipeline são descartadas e o processo recomeça do endereço correto",
        "A memória RAM é formatada",
        "O sistema operativo faz o download de uma atualização"
      ],
      correctAnswer: 1,
      explanation: "Erros de predição são caros em performance porque invalidam todo o trabalho paralelo que estava a ser feito no caminho errado."
    },
    {
      id: "q4",
      question: "No estágio 'ID' (Instruction Decode) de uma pipeline de 5 estágios, o que é que o hardware faz?",
      options: [
        "Busca a instrução na RAM",
        "Interpreta o opcode e lê os valores dos registradores de origem",
        "Faz uma conta de somar",
        "Grava o resultado no disco rígido"
      ],
      correctAnswer: 1,
      explanation: "O descodificador 'entende' o que a instrução quer fazer e prepara os operandos para a ALU."
    },
    {
      id: "q5",
      question: "Por que não podemos aumentar infinitamente o número de estágios de uma pipeline (ex: 100 estágios)?",
      options: [
        "Porque o processador ficaria demasiado longo fisicamente",
        "Devido ao overhead de sincronização entre estágios e ao custo massivo de erros de predição de desvio",
        "Porque não existem tantas letras para dar nome aos estágios",
        "Porque o Windows não suporta mais de 10 estágios"
      ],
      correctAnswer: 1,
      explanation: "Pipelines muito longas (superpipelining) sofrem penalizações gigantescas em cada desvio errado, tornando o sistema instável em termos de performance."
    },
    {
      id: "q6",
      question: "A técnica de 'Forwarding' ou 'Bypassing' serve para resolver qual problema?",
      options: [
        "Acesso lento à internet",
        "Data Hazards, enviando o resultado da ALU diretamente para a próxima instrução sem esperar pela escrita no registrador",
        "Aquecimento global",
        "Falta de espaço em disco"
      ],
      correctAnswer: 1,
      explanation: "O Forwarding é um 'atalho' elétrico que envia o dado mal ele sai da ALU para o estágio seguinte que precisa dele, poupando ciclos de espera."
    }
  ]
};