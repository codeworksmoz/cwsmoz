import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p11",
  language: "html",
  title: "Projeto Master: Criptografia com Web Crypto",
  description: "Proteja dados sensíveis do utilizador usando algoritmos nativos de alto desempenho.",
  statement: "Utilize a API crypto.subtle para gerar um hash SHA-256 de uma string de identificação.",
  isProjectPart: true,
  template: `async function generateHash(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    // Gere o digest aqui
    return null;
}`,
  detailedExplanation: `
    <h3>🔐 Segurança Nativa</h3>
    <p>A <strong>Web Crypto API</strong> permite realizar operações criptográficas (hash, assinatura, cifragem) diretamente no browser com performance de hardware. Nunca implementes algoritmos de hash manualmente; utiliza as primitivas do sistema para garantir segurança contra ataques de timing.</p>
  `,
  objectives: [
    {
      id: "crypto_digest",
      description: "Utilize crypto.subtle.digest('SHA-256', data).",
      test: "crypto.subtle.digest"
    }
  ]
};
