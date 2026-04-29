import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p21",
  language: "html",
  title: "Projeto Master: Persistência de Nível Bancário",
  description: "Garanta a segurança máxima no armazenamento de tokens de sessão.",
  statement: "Simule a definição de um cookie ultra-seguro utilizando as flags 'HttpOnly' e 'SameSite=Strict' numa string de comentário técnica.",
  isProjectPart: true,
  template: `<!-- Protocolo de Segurança de Sessão:
Defina a política de cookies aqui -->`,
  detailedExplanation: `
    <h3>🔒 Blindagem Final</h3>
    <p>Chegaste ao fim do HTML Master. O último passo de um engenheiro de elite é garantir que a persistência de dados é imune a ataques XSS e CSRF. Usar <code>HttpOnly</code> impede o acesso via JS, e <code>SameSite=Strict</code> impede o envio do cookie por sites de terceiros.</p>
  `,
  objectives: [
    {
      id: "httponly",
      description: "Inclua a flag 'HttpOnly' na sua política.",
      test: "HttpOnly"
    },
    {
      id: "samesite",
      description: "Inclua a flag 'SameSite=Strict' na sua política.",
      test: "SameSite=Strict"
    }
  ]
};
