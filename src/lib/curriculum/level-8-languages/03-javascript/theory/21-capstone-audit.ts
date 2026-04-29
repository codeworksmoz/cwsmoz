import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m21",
  title: "Fase 4: Capstone: Auditoria de Performance e Segurança Final",
  enableInteractive: true,
  youtubeVideoId: "R8dYLbJiTUE",
  quizId: "js-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 A Graduação do Engenheiro Master</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao fim da jornada **JavaScript Master**. Esta lição final é uma auditoria de todos os pilares da trilha: do motor V8 à segurança de dados, garantindo que o seu **CWM Logic Engine** está pronto para escala global.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Checklist de Performance de Elite</h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
            <strong class="text-primary block mb-1">Monomorfismo V8:</strong> Objetos com formas consistentes para otimização JIT.
          </li>
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
            <strong class="text-primary block mb-1">Zero Memory Leaks:</strong> Closures limpas e Observadores removidos após o uso.
          </li>
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
            <strong class="text-primary block mb-1">Non-blocking UI:</strong> Lógica pesada movida para Web Workers e cancelável via AbortSignal.
          </li>
          <li class="p-4 bg-muted/20 border border-white/5 rounded-xl">
            <strong class="text-primary block mb-1">Lazy Everything:</strong> Uso de Observers e Dynamic Imports para carregar o mínimo de código.
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Auditoria de Segurança e Resiliência</h3>
        <p class="text-sm">O seu portal foi blindado contra os ataques mais comuns da internet moderna:</p>
        <ul class="list-disc ml-6 space-y-2 text-xs opacity-80">
          <li><strong>XSS Protection:</strong> Sanitização obrigatória de todos os inputs de utilizador.</li>
          <li><strong>Secure Tokens:</strong> Uso de Web Crypto para identificadores não-determinísticos.</li>
          <li><strong>Encapsulamento:</strong> Shadow DOM isolando componentes de UI sensíveis.</li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Selo de Excelência Codworks</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "A engenharia de software não é sobre escrever código; é sobre projetar sistemas que resistam ao tempo, à carga e à malícia. Você dominou as entranhas da linguagem que move a web. Parabéns, Engenheiro!"
        </p>
      </section>
    </div>
  `
};
