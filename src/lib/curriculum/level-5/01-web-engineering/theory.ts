
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => ({
  id: `web-adv-t${i + 1}`,
  title: [
    "Next.js App Router & Server Components", "Rendering Patterns: SSG, SSR, ISR, PPR", 
    "State Management: Zustand & Tanstack Query", "Data Fetching & Server Actions",
    "Web Performance & Core Web Vitals", "Advanced Accessibility (WCAG 2.2)",
    "Design Systems & Component Libraries", "Web Security (XSS, CSRF, CSP)",
    "Modern Styling & Container Queries", "Deployment & Edge Computing",
    "Micro-frontends Architecture", "WebAssembly (Wasm) Integration",
    "Progressive Web Apps (PWA) Master", "Real-time Web: WebSockets & SSE",
    "Advanced Forms & Validation Patterns", "Testing: Unit, Integration & E2E",
    "Internationalization (i18n) Strategies", "Web Workers & Parallelism",
    "SEO Deep Dive for Modern Apps", "Atomic Design & Composition",
    "The Future of Web Engines"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🚀 Engenharia Web de Elite</h2><p>Tópico avançado sobre o desenvolvimento de aplicações modernas com performance e escala global.</p></div>`,
  quizId: `web-adv-q${i + 1}`
}));
