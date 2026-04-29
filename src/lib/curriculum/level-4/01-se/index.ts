
import type { KnowledgeArea } from '../../types';

export const softwareEngineering: KnowledgeArea = {
  id: 'ka-se',
  title: '01. Software Engineering',
  description: 'Ciclo de vida, metodologias ágeis e gestão de projetos.',
  load: '20h',
  iconName: 'Settings',
  theory: [
    {
      id: 'se-t1',
      title: 'Ciclo de Vida do Software (SDLC)',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">As Fases do Desenvolvimento</h2>
          <p>O SDLC é o processo usado pela indústria para desenhar, desenvolver e testar software de alta qualidade.</p>
          <ul class="list-disc ml-6 space-y-2">
            <li><strong>Planeamento:</strong> Definir objetivos e recursos.</li>
            <li><strong>Análise:</strong> Documentar requisitos do cliente.</li>
            <li><strong>Design:</strong> Arquitetura do sistema.</li>
            <li><strong>Implementação:</strong> Codificação real.</li>
            <li><strong>Testes:</strong> Verificação de bugs.</li>
            <li><strong>Manutenção:</strong> Atualizações e correções.</li>
          </ul>
        </div>
      `,
      quizId: 'se-t1-quiz'
    }
  ],
  practice: {
    process: [
      {
        id: 'se-p1',
        language: 'process',
        title: 'Laboratório: Planeamento de Sprint',
        description: 'Organize tarefas numa estrutura ágil.',
        statement: 'Identifique qual fase do SDLC envolve a correção de bugs pós-lançamento. Escreva "Manutenção".',
        template: 'let fase = "";',
        detailedExplanation: '<p>A manutenção garante que o software continue funcional após a entrega.</p>',
        objectives: [
          { id: 'obj1', description: 'Definir a fase correta', test: 'fase = "Manutenção"' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'se-t1-quiz',
      title: 'Quiz: SDLC Fundamentos',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Qual fase foca na codificação real?',
          options: ['Design', 'Implementação', 'Análise'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
