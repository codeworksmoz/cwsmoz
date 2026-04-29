import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-prototypal-lab';
import { exercise as p2 } from './laboratory/02-mutation-observer-lab';
import { exercise as p3 } from './laboratory/03-custom-events-lab';
import { exercise as p4 } from './laboratory/04-abort-controller-lab';
import { exercise as p8 } from './laboratory/08-observers-apis-lab';
import { exercise as p13 } from './laboratory/13-drag-drop-lab';
import { exercise as p21 } from './laboratory/21-capstone-js-lab';

const jsTitles = [
  "Herança e Protótipos", "Mutation Observers", "Custom Events Architecture",
  "AbortController & Signals", "Web Workers Pipeline", "Proxy Data Validation",
  "Intl & Localização", "Observers: Intersection & Resize", "Security Sanitization",
  "Streams & Chunks", "Web Crypto Internals", "History API Routing",
  "Drag & Drop Industrial", "Hardware APIs Context", "Web Audio Feedback",
  "Permissions & Privacy", "Shared Memory & Atomics", "JS/Wasm Interop",
  "Beacon & Telemetria", "Trusted Types Security", "Capstone FINAL AUDIT"
];

const jsTests = [
  "Object.create", "MutationObserver", "CustomEvent", "AbortController",
  "Worker", "Proxy", "Intl.", "IntersectionObserver", "Sanitizer",
  "ReadableStream", "crypto.subtle", "pushState", "dataTransfer",
  "getBattery", "AudioContext", "permissions.query", "Atomics",
  "exports", "sendBeacon", "createPolicy", "200 OK"
];

export const practice = {
  javascript: jsTitles.map((title, i) => {
    if (i === 0) return p1;
    if (i === 1) return p2;
    if (i === 2) return p3;
    if (i === 3) return p4;
    if (i === 7) return p8;
    if (i === 12) return p13;
    if (i === 20) return p21;

    return {
      id: `js-p${i + 1}`,
      language: "javascript",
      title: `Laboratório Master: ${title}`,
      description: "Implementação de lógica de alta fidelidade.",
      statement: `Adicione o requisito de ${title} ao motor.`,
      isProjectPart: true,
      template: `// Checkpoint Aula ${i}\n`,
      detailedExplanation: `<h3>⚡ JavaScript Master: ${title}</h3><p>Aplicação técnica no projeto CWM Logic Engine.</p>`,
      objectives: [{ id: "obj", description: "Concluir etapa técnica", test: jsTests[i] }]
    };
  })
};
