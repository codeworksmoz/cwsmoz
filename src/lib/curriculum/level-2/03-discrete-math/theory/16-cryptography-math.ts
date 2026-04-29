import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t16",
  title: "Matemática da Criptografia: Chaves e Segredos",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🔐 A Segurança nos Números Primos</h2>
        <p class="text-lg leading-relaxed">
          A criptografia assimétrica (RSA) baseia-se num problema matemático simples de enunciar mas difícil de resolver: a <strong>Fatoração de Inteiros Gigantes</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Funções de Direção Única (One-Way)</h3>
        <p class="text-sm">Multiplicar dois primos de 2048 bits é instantâneo para um telemóvel. Mas encontrar esses dois primos a partir do resultado levaria biliões de anos com a tecnologia atual.</p>

        <h3 class="text-xl font-bold font-headline">2. Função Totiente de Euler φ(n)</h3>
        <p class="text-sm">É a contagem de números menores que n que são coprimos com n. No RSA, φ(p*q) = (p-1)*(q-1). Sem conhecer p e q, é impossível calcular o inverso modular da chave privada.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Criptografia de Curvas Elípticas (ECC)</h3>
          <p class="text-sm leading-relaxed">
            A nova fronteira da matemática discreta. O ECC oferece o mesmo nível de segurança que o RSA mas com chaves muito menores, sendo ideal para redes móveis e IoT em Moçambique.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q16"
};
