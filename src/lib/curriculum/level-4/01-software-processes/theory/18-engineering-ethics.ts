import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t18",
  title: "Ética Profissional e Responsabilidade: O Peso do Código",
  quizId: "se-q18-master",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          ⚖️ Mais que Bits e Bytes
        </h2>
        <p class="text-lg leading-relaxed">
          O código que escrevemos controla aviões, gere contas bancárias e decide quem recebe tratamento médico. Um <strong>Engenheiro Master</strong> compreende que a sua responsabilidade vai além do compilador: o software é um ato social com consequências reais na vida das pessoas.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Código de Ética ACM/IEEE</h3>
        <p class="text-sm">Os oito princípios fundamentais que regem a nossa profissão exigem compromisso com o interesse público e integridade profissional:</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Sociedade (Public Interest):</strong> Nunca aceitar trabalho que cause dano deliberado ou que viole os direitos humanos. O interesse da sociedade deve estar acima do lucro da empresa.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Integridade do Julgamento:</strong> Nunca "mascarar" falhas técnicas ou riscos de segurança sob pressão de prazos. Se o sistema não é seguro, o dever é alertar.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Responsabilidade por Falhas</h3>
        <p class="text-sm leading-relaxed">
          A história da engenharia está marcada por tragédias de software (ex: Therac-25, Ariane 5). Nestes casos, a causa não foi apenas um "bug", mas a falha no <strong>processo de garantia de qualidade</strong> e a negligência ética na gestão de riscos.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🤖 Viés Algorítmico (Algorithmic Bias)</h3>
          <p class="text-sm leading-relaxed mb-4">
            Dados de treino "sujos" ou falta de diversidade nas equipas de engenharia criam algoritmos que discriminam. Um engenheiro de elite audita os seus modelos para garantir que a automação não perpetua injustiças sociais ou raciais.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 O Juramento do Engenheiro
          </h4>
          <p class="text-sm leading-relaxed">
            Ser Master na Codworks Moz significa ser um guardião da integridade digital. A ética não é um obstáculo à velocidade; é a fundação que permite ao software durar décadas e ser confiável pela sociedade moçambicana e global.
          </p>
        </div>
      </div>
    </div>
  `
};
