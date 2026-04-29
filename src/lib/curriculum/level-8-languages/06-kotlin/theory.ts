import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-null-safety-master';
import { lesson as l2 } from './theory/02-extensions-delegates';
import { lesson as l3 } from './theory/03-sealed-hierarchies';
import { lesson as l6 } from './theory/06-coroutines-master';
import { lesson as l14 } from './theory/14-kmp-architecture';
import { lesson as l17 } from './theory/17-ksp-codegen';
import { lesson as l19 } from './theory/19-advanced-generics';
import { lesson as l21 } from './theory/21-capstone-audit';

const kotlinTitles = [
  "Fase 1: Null Safety Internals e o Type System",
  "Fase 1: Extension Functions e Property Delegation",
  "Fase 1: Sealed Hierarchies e Pattern Matching (When)",
  "Fase 1: Functional Programming e Collections de Elite",
  "Fase 2: Inline Classes e Otimização de Performance",
  "Fase 2: Coroutines Master: Suspensão e Scopes",
  "Fase 2: Structured Concurrency e Job Management",
  "Fase 2: Suspension Internals: A Máquina de Estados",
  "Fase 2: Flow API: Cold Streams e Operadores",
  "Fase 3: StateFlow e SharedFlow: Hot Streams",
  "Fase 3: Channels e Padrões de Comunicação",
  "Fase 3: Coroutine Context e Dispatchers",
  "Fase 3: Exception Handling e Supervision",
  "Fase 3: Kotlin Multiplatform (KMP) Architecture",
  "Fase 3: Kotlinx Serialization e Protocolos Binários",
  "Fase 4: Dependency Injection: Padrões de Elite",
  "Fase 4: KSP e Geração de Código em Compilação",
  "Fase 4: Reflection e Introspecção (kotlin-reflect)",
  "Fase 4: Advanced Generics: Variância e Reified",
  "Fase 4: Construindo DSLs Type-safe",
  "Fase 4: Capstone: Deploy do Sync Engine Multiplataforma"
];

const videoIds = [
  "8aGhZQkoFbQ", "dQw4w9WgXcQ", "mNst8vX-u8E", "u044iM9xsTM",
  "jV8B24w82CU", "v4cd1O4zkGw", "8ME9u065vD4", "95v88Oit0H8",
  "9TycLR0TqFA", "R8dYLbJiTUE", "dQw4w9WgXcQ", "Z5JC9Ve1sfI",
  "TQvD-Uq86oY", "8aGhZQkoFbQ", "mNst8vX-u8E", "u044iM9xsTM",
  "jV8B24w82CU", "v4cd1O4zkGw", "8ME9u065vD4", "95v88Oit0H8",
  "9TycLR0TqFA"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 5: l6, 13: l14, 16: l17, 18: l19, 20: l21
};

export const lessons: TheoryLesson[] = kotlinTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `kt-m${i + 1}`,
      title: title,
      youtubeVideoId: videoIds[i],
      quizId: `kt-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `kt-m${i + 1}`,
    title: title,
    youtubeVideoId: videoIds[i],
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
            📱 Kotlin Master: \${title}
          </h2>
          <p class="text-lg leading-relaxed opacity-90">
            Estudo aprofundado da linguagem Kotlin focado em engenharia de sistemas de alta performance, 
            concorrência assíncrona e arquitetura multiplataforma.
          </p>
        </div>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Exploração Técnica</h3>
          <p class="text-sm">Nesta lição, mergulhamos nos internals do Kotlin para garantir que a sua implementação seja não apenas funcional, mas de nível industrial.</p>
          
          <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
            <h4 class="font-bold text-indigo-400 mb-4 flex items-center gap-2">🚀 Visão do Engenheiro</h4>
            <p class="text-sm leading-relaxed">
              O domínio deste tópico permite otimizar o consumo de recursos e a resiliência do <strong>Sync Engine</strong>, preparando o sistema para escalar globalmente.
            </p>
          </div>
        </section>
      </div>
    `,
    quizId: `kt-mq${i + 1}`,
    enableInteractive: true
  };
});
