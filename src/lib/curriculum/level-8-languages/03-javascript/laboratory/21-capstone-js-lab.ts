
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p21",
  language: "html",
  title: "Projeto Master Final: Auditoria de Performance e Segurança",
  description: "Conclua o portal dinâmico com padrões bancários de segurança.",
  statement: "Implemente a auditoria final de memória e segurança no seu script.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks JS Master Final</title>
</head>
<body>
  <script>
    // Auditoria Master de Engenharia
    // Ação 1: Utilize performance.mark para medir o tempo de boot
    performance.mark("engine-start");

    // Ação 2: Proteja contra XSS limpando o estado global
    window.name = ""; 
    
    // Ação 3: Imprima o status final
    console.log("CWM-JS-MASTER: 200 OK");
  </script>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏆 Certificação de Elite</h3>
      <p class="text-sm">Chegaste ao fim da trilha JavaScript Master. O teu portal utiliza agora as APIs mais avançadas do browser para garantir performance de silício e segurança impenetrável.</p>
    </div>
  `,
  objectives: [
    { id: "perf_mark", description: "Usar a User Timing API (performance.mark)", test: "performance.mark" },
    { id: "final_log", description: "Exibir o status 200 OK no terminal", test: "200 OK" }
  ]
};
