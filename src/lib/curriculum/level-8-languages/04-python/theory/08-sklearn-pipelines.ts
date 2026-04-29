import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m8",
  title: "Scikit-Learn: Pipelines de Produção",
  youtubeVideoId: "8ME9u065vD4",
  enableInteractive: true,
  quizId: "py-mq8",
  content: `
    <div class="space-y-12">
      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-3">
          🤖 ML de Mission-Critical
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Treinar um modelo é a parte fácil; garantir que ele se comporta da mesma forma em produção é o verdadeiro desafio da engenharia. <strong>Pipelines</strong> encapsulam o pré-processamento e o modelo num único objeto serializável, eliminando o risco de <i>Data Leakage</i>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Encapsulamento de Transformações</h3>
        <p class="text-sm leading-relaxed">
          Um Pipeline garante que as transformações de dados (como Normalização) usem apenas as estatísticas do set de treino, prevenindo que informações do futuro "vazem" para o modelo durante o teste.
        </p>
        <pre><code class="language-python">
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('model', RandomForestClassifier())
])

# Treino atómico
pipe.fit(X_train, y_train)
        </code></pre>
      </section>
    </div>
  `
};
