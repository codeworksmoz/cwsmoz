import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p12",
  language: "java",
  title: "Projeto Master Java: Segurança com JWT",
  description: "Proteja as APIs do banco com tokens de acesso.",
  statement: "Implemente um filtro que valide a presença do cabeçalho 'Authorization' começando com 'Bearer '.",
  isProjectPart: true,
  template: `public class JwtFilter {
    public boolean validateHeader(String header) {
        // Valide o formato do Bearer Token
        return false;
    }
}`,
  detailedExplanation: `
    <h3>🛡️ Autenticação Stateless</h3>
    <p>JSON Web Tokens (JWT) permitem que o seu sistema valide identidades sem precisar de consultar a base de dados em cada pedido, ideal para arquiteturas de microserviços.</p>
  `,
  objectives: [
    {
      id: "bearer_check",
      description: "Verifique se a string começa com 'Bearer '.",
      test: "startsWith(\"Bearer \")"
    }
  ]
};