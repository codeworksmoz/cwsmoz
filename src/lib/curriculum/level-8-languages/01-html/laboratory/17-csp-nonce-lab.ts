import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p17",
  language: "html",
  title: "Projeto Master: Segurança por Nonce",
  description: "Bloqueie scripts maliciosos sem sacrificar as suas funções internas.",
  statement: "Adicione uma meta tag de Content-Security-Policy que permita apenas scripts com um atributo 'nonce'.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🛡️ CSP de Elite</h3>
    <p>Uma CSP robusta impede que atacantes injetem código JS (XSS). Ao usar <code>'nonce-...'</code>, o browser só executará scripts que possuam o token secreto gerado pelo servidor.</p>
  `,
  objectives: [
    {
      id: "csp_nonce",
      description: "Adicione 'nonce-...' na diretiva script-src da sua meta CSP.",
      hint: "content=\"script-src 'nonce-...'\"",
      test: "'nonce-"
    }
  ]
};
