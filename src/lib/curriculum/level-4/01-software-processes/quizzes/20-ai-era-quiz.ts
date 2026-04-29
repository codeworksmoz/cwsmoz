import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q20-master",
  title: "Quiz: Engenharia de Software na Era da IA",
  passingScore: 80,
  questions: [
    {
      id: "q20_1",
      question: "Qual o principal perigo de aceitar sugestões de IA (Copilots) sem uma revisão linha a linha?",
      options: [
        "A IA cobrar taxas extras por cada linha sugerida.",
        "A introdução de alucinações lógicas ou vulnerabilidades de segurança que parecem código correto.",
        "O compilador ficar mais lento ao processar código gerado.",
        "A perda automática da licença do software."
      ],
      correctAnswer: 1,
      explanation: "LLMs são probabilísticos. Eles podem gerar código sintaticamente correto que falha em casos de borda ou introduz falhas de segurança graves."
    },
    {
      id: "q20_2",
      question: "No modelo de desenvolvimento assistido por IA, qual o novo papel do Engenheiro Master?",
      options: [
        "Digitador de prompts sem necessidade de saber algoritmos.",
        "Editor e Auditor Crítico, responsável pela validação da arquitetura e segurança.",
        "Substituir todos os testes automatizados por revisões de IA.",
        "Escrever apenas a documentação e deixar o código para a máquina."
      ],
      correctAnswer: 1,
      explanation: "A responsabilidade técnica e legal pelo software continua a ser do humano; a IA é apenas um acelerador de produtividade."
    },
    {
      id: "q20_3",
      question: "Sobre a segurança de dados e privacidade em IAs Generativas públicas, qual a conduta master?",
      options: [
        "Pode-se colar qualquer código se for para resolver um bug urgente.",
        "Nunca submeter segredos, chaves de API ou dados sensíveis de clientes em modelos públicos.",
        "A IA apaga os dados após a sessão, por isso é 100% seguro.",
        "Apenas código de bases de dados deve ser protegido."
      ],
      correctAnswer: 1,
      explanation: "Dados submetidos a modelos públicos podem ser usados para treino ou ficar acessíveis a terceiros, violando conformidades como o GDPR."
    },
    {
      id: "q20_4",
      question: "Como a IA Generativa deve ser utilizada na fase de Testes e QA?",
      options: [
        "Para garantir que o código não precisa de ser testado por humanos.",
        "Para gerar rapidamente cenários de teste, dados de 'mock' e identificar casos de borda negligenciados.",
        "Para substituir o ambiente de staging.",
        "Apenas para escrever comentários sobre o que foi testado."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_5",
      question: "O conceito de 'Zero Trust AI' na engenharia de software prega que:",
      options: [
        "Não devemos usar IA no trabalho.",
        "Todo o código gerado por IA é considerado suspeito até que seja validado por testes e revisão humana.",
        "O utilizador final não deve saber que a IA foi usada.",
        "O servidor deve bloquear acessos vindos de bots de IA."
      ],
      correctAnswer: 1,
      explanation: "Tal como na segurança de rede, não confiamos em nada que venha de 'fora' (IA) sem uma verificação rigorosa de integridade e lógica."
    },
    {
      id: "q20_6",
      question: "O uso de IA reduz a necessidade de o engenheiro dominar fundamentos de Algoritmos e Arquitetura?",
      options: [
        "Sim, a IA já conhece todos os algoritmos do mundo.",
        "Não, aumenta a necessidade, pois o engenheiro precisa desses fundamentos para auditar e corrigir a lógica da IA.",
        "Sim, o foco agora é apenas em Prompt Engineering.",
        "Apenas para desenvolvedores frontend."
      ],
      correctAnswer: 1,
      explanation: "Sem fundamentos, o desenvolvedor torna-se um refém da IA, incapaz de detetar erros de performance ou falhas arquiteturais no código sugerido."
    }
  ]
};
