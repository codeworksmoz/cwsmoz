import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

export const devTools: KnowledgeArea = {
  id: 'ka-dev-tools',
  title: '07. Dev Tools (Produtividade de Elite)',
  description: 'Domine o editor, o terminal e as ferramentas de build que multiplicam a tua velocidade de entrega.',
  load: '25h',
  iconName: 'Wrench',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    bash: [
      {
        id: "dt-p1",
        language: "bash",
        title: "Laboratório: Comandos de Navegação",
        description: "Explore o sistema de ficheiros via terminal.",
        statement: "Qual comando lista todos os ficheiros, incluindo ocultos? Escreva 'ls -la'.",
        template: "let comando = '';",
        detailedExplanation: "<h3>🐚 Linha de Comandos</h3><p>Navegar via terminal é mais rápido que usar o rato. O parâmetro -a revela ficheiros de configuração importantes como o .env ou .gitignore.</p>",
        objectives: [{ id: "obj1", description: "Identificar comando ls -la", test: "ls -la" }]
      },
      {
        id: "dt-p2",
        language: "bash",
        title: "Laboratório: Atalhos VS Code",
        description: "Acelere a edição de código.",
        statement: "Qual atalho abre a paleta de comandos? Escreva 'Ctrl+Shift+P'.",
        template: "let atalho = '';",
        detailedExplanation: "<h3>⚡ Produtividade</h3><p>Atalhos reduzem a carga cognitiva e permitem que as tuas mãos nunca saiam do teclado.</p>",
        objectives: [{ id: "obj1", description: "Identificar atalho da paleta", test: "Ctrl+Shift+P" }]
      }
    ]
  }
};
