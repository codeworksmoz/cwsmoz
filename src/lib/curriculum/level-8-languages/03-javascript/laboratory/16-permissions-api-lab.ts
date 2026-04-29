import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p16",
  language: "html",
  title: "Projeto Master: Gestão de Permissões Críticas",
  description: "Verifique o acesso a APIs sensíveis antes de as solicitar.",
  statement: "Utilize a Permissions API para verificar se o utilizador já deu permissão de 'geolocation'.",
  isProjectPart: true,
  template: `async function checkGeoPermission() {
    const status = await navigator.permissions.query({ name: 'geolocation' });
    // Verifique status.state ('granted', 'denied' ou 'prompt')
}`,
  detailedExplanation: `
    <h3>🛡️ Respeito à Privacidade</h3>
    <p>Um site profissional não dispara popups de permissão sem aviso. A <strong>Permissions API</strong> permite-te saber antecipadamente o estado do acesso, permitindo-te mostrar uma UI explicativa antes de pedir a permissão real ao browser.</p>
  `,
  objectives: [
    {
      id: "perm_query",
      description: "Chame navigator.permissions.query().",
      test: "permissions.query"
    }
  ]
};
