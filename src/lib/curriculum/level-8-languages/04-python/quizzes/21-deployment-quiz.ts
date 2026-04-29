import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq21",
  title: "Quiz: Auditoria Final e Produção",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Num ambiente Cloud Native, qual a estratégia recomendada para escalar workers Python?",
      options: [
        "Aumentar manualmente a memória do servidor todos os dias",
        "Horizontal Pod Autoscaling (HPA) baseado em métricas de CPU/Memória ou tamanho da fila",
        "Usar apenas um servidor gigante (Vertical Scaling)",
        "Reiniciar o container a cada hora"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "Qual o papel do 'Liveness Probe' num orquestrador como Kubernetes para uma app Python?",
      options: [
        "Mudar a cor da interface",
        "Verificar se o processo da aplicação ainda está 'vivo' e reiniciá-lo se travar",
        "Contar o número de utilizadores logados",
        "Criptografar os logs"
      ],
      correctAnswer: 1
    }
  ]
};