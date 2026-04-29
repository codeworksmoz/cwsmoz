import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q2-master",
  title: "Quiz: Manifesto Ágil e Excelência Técnica",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Segundo o Manifesto Ágil, o que tem maior valor num projeto de software?",
      options: [
        "Seguir o plano definido no início",
        "Documentação técnica detalhada",
        "Software em funcionamento e interações entre indivíduos",
        "Ferramentas de gestão de tarefas de última geração"
      ],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Qual o impacto da falta de excelência técnica na agilidade a longo prazo?",
      options: [
        "Nenhum, agilidade é apenas sobre reuniões",
        "Aumenta a velocidade de entrega exponencialmente",
        "Gera dívida técnica que torna as mudanças cada vez mais lentas e arriscadas",
        "Melhora a relação com o cliente"
      ],
      correctAnswer: 2,
      explanation: "Sem bom design e testes, o sistema torna-se rígido (fragilidade), impedindo a equipa de responder a mudanças rapidamente."
    },
    {
      id: "q3",
      question: "O princípio do 'Ritmo Sustentável' defende que:",
      options: [
        "A equipa deve trabalhar 12 horas por dia para entregar o Sprint",
        "O desenvolvimento deve ser capaz de manter um passo constante indefinidamente",
        "O código deve correr apenas em servidores de baixo consumo",
        "As tarefas devem ser feitas o mais rápido possível no início"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual a principal vantagem de reduzir o ciclo de feedback (interações curtas)?",
      options: [
        "Escrever menos documentação",
        "Reduzir o risco de construir algo que o cliente não quer ou que não funciona",
        "Aumentar o número de reuniões diárias",
        "Eliminar a necessidade de testes unitários"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Agilidade significa a ausência total de documentação e planos?",
      options: [
        "Sim, o código é a única documentação necessária",
        "Não, significa valorizar o software funcional ACIMA da documentação, mas ambos têm valor",
        "Sim, planos são proibidos no Scrum",
        "Apenas em startups de pequeno porte"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual destes é um dos 12 princípios do Manifesto Ágil?",
      options: [
        "Mudanças de requisitos são bem-vindas, mesmo tardiamente no desenvolvimento",
        "O arquiteto deve decidir tudo sozinho",
        "A documentação deve ser aprovada antes do código começar",
        "As ferramentas são mais importantes que as pessoas"
      ],
      correctAnswer: 0,
      explanation: "Processos ágeis tiram proveito das mudanças para garantir a vantagem competitiva do cliente."
    }
  ]
};
