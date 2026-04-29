
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p21",
  language: "html",
  title: "Projeto Master Final: Auditoria e Blindagem",
  description: "Conclua o projeto com padrões bancários de segurança.",
  statement: "Defina a política de cookies segura do seu portal na auditoria final.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Final Audit</title>
</head>
<body>
  <!-- Protocolo Final de Segurança -->
  <!-- Ação 1: Escreva a política de cookies abaixo num comentário -->
  <!-- HttpOnly; Secure; SameSite=Strict -->
  
  <script>
    console.log("Auditoria Master Concluída.");
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Blindagem Final</h3>
      <p class="text-sm">Finalize o projeto com as flags de segurança obrigatórias para lidar com tokens de sessão:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Escreva a string: <code>HttpOnly; Secure; SameSite=Strict</code> num comentário HTML.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "secure_flags", description: "Definir política HttpOnly e SameSite", test: "HttpOnly; Secure; SameSite=Strict" }
  ]
};
