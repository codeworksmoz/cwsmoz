
import type { KnowledgeArea } from '../../types';

export const integrativeProjects: KnowledgeArea = {
  id: 'ka-integrative-projects',
  title: '04. Projetos Integrativos (Fullstack Mindset)',
  description: 'Aplicações práticas que juntam HTML, CSS, JS e Engenharia para criar módulos reais de software.',
  load: '40h',
  iconName: 'Blocks',
  theory: [
    {
      id: 'proj-t1',
      title: 'Arquitetura de um Sistema de Login Moderno',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">O Desafio da Autenticação</h2>
          <p>Criar um login não é apenas colocar dois inputs no ecrã. Envolve:</p>
          <ul class="list-disc ml-6 space-y-2">
            <li><strong>Segurança:</strong> Proteção contra ataques de força bruta e XSS.</li>
            <li><strong>UX:</strong> Feedback de erro em tempo real e estados de carregamento.</li>
            <li><strong>Acessibilidade:</strong> Labels corretas e navegação via teclado.</li>
            <li><strong>Integração:</strong> Comunicação com APIs usando JWT ou Cookies.</li>
          </ul>
        </div>
      `,
      quizId: 'proj-q1'
    },
    {
      id: 'proj-t2',
      title: 'Formulários Complexos e Validação Multicamada',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Tratamento de Dados de Elite</h2>
          <p>Aprenda a construir formulários multi-step (Wizards) que mantêm o estado e validam dados no cliente e no servidor simultaneamente.</p>
        </div>
      `,
      quizId: 'proj-q2'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'proj-p1',
        language: 'javascript',
        title: 'Projeto: Construção de Login Seguro',
        description: 'Crie um módulo de login funcional com validação e segurança.',
        statement: 'Implemente a lógica de intercepção do formulário e validação de email via Regex.',
        template: `const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Valide o email aqui
});`,
        detailedExplanation: '<p>Neste projeto, vais integrar o HTML (estrutura), CSS (design responsivo) e JS (lógica) para criar uma experiência de entrada segura.</p>',
        objectives: [
          { id: 'obj1', description: 'Impedir o comportamento padrão do form', test: 'preventDefault()' },
          { id: 'obj2', description: 'Validar formato de email', test: 'test(' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'proj-q1',
      title: 'Quiz: Engenharia de Autenticação',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Qual a forma mais segura de guardar uma palavra-passe no backend?',
          options: ['Texto simples', 'Criptografia reversível', 'Hash com Salt (ex: Bcrypt)'],
          correctAnswer: 2
        }
      ]
    }
  ]
};
