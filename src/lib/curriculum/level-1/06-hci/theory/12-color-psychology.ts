import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t12",
  title: "Teoria das Cores e Psicologia Visual",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎨 Comunicando com Emoções</h2>
        <p class="text-lg leading-relaxed">Cores não são apenas decorativas. Elas evocam emoções instantâneas e têm significados técnicos e culturais profundos na engenharia de interface.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Significados Universais em Tecnologia:</h3>
        <ul class="space-y-3">
          <li><span class="text-green-500 font-bold">Verde:</span> Sucesso, confirmação, segurança. Usado para "OK" e "Finalizado".</li>
          <li><span class="text-red-500 font-bold">Vermelho:</span> Erro, perigo, interrupção. Usado para "Eliminar" ou "Falha".</li>
          <li><span class="text-yellow-500 font-bold">Amarelo/Laranja:</span> Atenção, aviso, temporário. Usado para "Aviso de sistema".</li>
          <li><span class="text-blue-500 font-bold">Azul:</span> Informação, neutralidade, confiança. A cor padrão para links e botões de ação.</li>
        </ul>
        <p class="text-sm italic mt-6">Dica de Acessibilidade: Nunca uses apenas a cor para indicar estado. Use ícones ou texto acompanhante para utilizadores daltónicos.</p>
      </div>
    </div>
  `,
  quizId: "hci-q12"
};