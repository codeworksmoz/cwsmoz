import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m7",
  title: "Pandas: Otimização de DataFrames e Memória",
  youtubeVideoId: "u044iM9xsTM",
  enableInteractive: true,
  quizId: "py-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📊 Engenharia de Big Data no Cliente
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Um Dataframe de 1GB pode tornar-se 200MB apenas com a tipagem correta. No nível Master, otimizamos o consumo de memória antes de iniciar qualquer análise estatística massiva.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Downcasting e Categorias</h3>
        <p class="text-sm leading-relaxed">
          Por padrão, o Pandas utiliza tipos pesados (float64, int64). Se os seus dados cabem em tipos menores, deves convertê-los explicitamente.
        </p>
        <pre><code class="language-python">
# Otimizando strings repetitivas
df['status'] = df['status'].astype('category')

# Reduzindo precisão desnecessária
df['count'] = pd.to_numeric(df['count'], downcast='integer')
        </code></pre>
      </section>

      <section class="bg-green-500/5 p-8 rounded-[2rem] border-2 border-dashed border-green-500/20 text-center">
        <h4 class="text-xl font-bold text-green-500 mb-4">🏆 Dica de Produção</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca utilize loops <code>for</code> num DataFrame. Utilize métodos vectorizados nativos. Se precisares de lógica customizada complexa, utilize o <code>.apply()</code> apenas como último recurso, preferindo sempre operações aritméticas de coluna."
        </p>
      </section>
    </div>
  `
};
