import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p20",
  language: "html",
  title: "Projeto Master: Trusted Types & DOM Security",
  description: "Impeça ataques de XSS a nível de infraestrutura de código.",
  statement: "Crie uma política de Trusted Types que sanitize qualquer HTML antes de ser inserido no projeto.",
  isProjectPart: true,
  template: `// Verifique o suporte e crie a política
if (window.trustedTypes && window.trustedTypes.createPolicy) {
    const escapeHTMLPolicy = window.trustedTypes.createPolicy('myEscapePolicy', {
        createHTML: (string) => {
            // Implemente a sanitização aqui
            return string;
        }
    });
}`,
  detailedExplanation: `
    <h3>🛡️ Segurança Imutável</h3>
    <p><strong>Trusted Types</strong> é a defesa definitiva. Uma vez ativa, o browser bloqueia qualquer tentativa de usar <code>innerHTML</code> com strings comuns. Tu és forçado a passar objetos "confiáveis", eliminando classes inteiras de vulnerabilidades XSS por design.</p>
  `,
  objectives: [
    {
      id: "create_policy",
      description: "Utilize o método window.trustedTypes.createPolicy.",
      test: "createPolicy"
    }
  ]
};
