import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q10-master",
  title: "Quiz: Estratégias de Lançamento e Resiliência",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Qual a principal vantagem estratégica do Blue-Green Deployment?",
      options: [
        "Consome 50% menos memória no servidor de produção.",
        "Permite um Rollback instantâneo ao reverter o tráfego via Load Balancer.",
        "É a estratégia que exige o menor investimento em infraestrutura.",
        "Garante que o código é compilado diretamente no servidor do cliente."
      ],
      correctAnswer: 1,
      explanation: "Como mantemos os dois ambientes (Blue e Green) ativos e idênticos, se a nova versão falhar, basta mudar o ponteiro do tráfego de volta para a versão estável, sem necessidade de novas instalações."
    },
    {
      id: "q10_2",
      question: "Como funciona tecnicamente a estratégia de Canary Deployment?",
      options: [
        "O site muda de cor para amarelo durante o processo de deploy.",
        "O código é enviado para todos os servidores ao mesmo tempo.",
        "A nova versão é libertada para uma pequena percentagem de utilizadores reais para monitorização de métricas.",
        "A atualização ocorre apenas durante a noite, quando os utilizadores estão a dormir."
      ],
      correctAnswer: 2,
      explanation: "O objetivo do Canary é limitar o 'Blast Radius' (raio de impacto). Monitorizamos as taxas de erro e latência num grupo pequeno antes de expandir para toda a base."
    },
    {
      id: "q10_3",
      question: "O que caracteriza a estratégia de Rolling Update, comum em clusters Kubernetes?",
      options: [
        "A atualização de todos os nós do cluster simultaneamente.",
        "A substituição gradual de instâncias, uma por uma, garantindo que o serviço nunca fique totalmente offline.",
        "A cópia de todos os ficheiros via FTP manual.",
        "O reinício de todos os servidores à meia-noite."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "Por que as alterações de esquema na Base de Dados são o maior desafio num Rollback de deploy?",
      options: [
        "Porque o SQL é uma linguagem lenta.",
        "Porque dados inseridos pela versão nova podem tornar-se incompatíveis ou órfãos se a versão antiga for restaurada.",
        "Porque o banco de dados não suporta o uso de Git.",
        "Porque as tabelas são apagadas automaticamente em cada deploy."
      ],
      correctAnswer: 1,
      explanation: "O código é fácil de reverter, mas os dados são persistentes. Mudanças de esquema devem ser feitas de forma a suportar tanto a versão nova quanto a antiga do código."
    },
    {
      id: "q10_5",
      question: "No Blue-Green Deployment, qual o custo de infraestrutura comparado a um deploy tradicional?",
      options: [
        "O mesmo custo.",
        "Cerca de metade do custo.",
        "O dobro do custo (exige dois ambientes completos ativos).",
        "Depende apenas da velocidade da internet."
      ],
      correctAnswer: 2
    },
    {
      id: "q10_6",
      question: "Ao utilizar o Canary Deployment, qual métrica é VITAL para decidir se o rollout deve prosseguir ou ser abortado?",
      options: [
        "O número de linhas de comentário adicionadas no commit.",
        "A taxa de erros HTTP (5xx) e a latência percebida pelo grupo de teste.",
        "A cor do log no terminal do desenvolvedor.",
        "A quantidade de ficheiros comprimidos no artefacto."
      ],
      correctAnswer: 1,
      explanation: "Se a taxa de erro ou latência subir no grupo canary, o sistema deve abortar o deploy automaticamente para proteger os restantes 95% dos utilizadores."
    }
  ]
};