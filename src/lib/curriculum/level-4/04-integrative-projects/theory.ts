
import type { TheoryLesson } from '../../types';

const projectTitles = [
  "Sistema de Login com Auth & JWT",
  "Formulário Wizard Multi-step",
  "Dashboard Dinâmico com Gráficos",
  "Sistema de E-commerce: Carrinho e Checkout",
  "Social Feed com Atualização em Tempo Real",
  "Gestor de Tarefas com Persistência Local",
  "Landing Page com Performance de Elite",
  "Portal de Notícias com SEO Técnico",
  "App de Chat com WebSockets",
  "Sistema de Reservas e Calendários"
];

export const lessons: TheoryLesson[] = projectTitles.map((title, i) => ({
  id: `proj-t${i + 3}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🚀 Projeto Integrativo: ${title}</h2><p>Hora de juntar todas as peças. Neste módulo, vais construir um sistema completo aplicando HTML, CSS, JavaScript e princípios de Engenharia de Software.</p></div>`,
  quizId: `proj-q${i + 3}`
}));
