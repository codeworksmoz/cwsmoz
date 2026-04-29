
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t12",
  title: "API Design & RESTful Constraints",
  quizId: "des-q12-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌐 O Contrato de Comunicação</h2>
        <p class="text-lg">REST (Representational State Transfer) não é um protocolo, mas um conjunto de restrições arquiteturais que garantem que APIs sejam escaláveis e independentes.</p>
      </div>

      <div class="space-y-6 text-sm">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">As 6 Restrições de Fielding</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Client-Server:</strong> Separação total de interesses.</li>
          <li><strong>Stateless:</strong> O servidor não guarda estado entre pedidos.</li>
          <li><strong>Cacheable:</strong> Respostas devem ser marcadas como cacheáveis.</li>
          <li><strong>Uniform Interface:</strong> O ponto mais crítico para a semântica.</li>
          <li><strong>Layered System:</strong> O cliente não sabe se está ligado ao servidor final ou a um proxy intermediário.</li>
          <li><strong>Code on Demand:</strong> Envio de lógica executável (opcional).</li>
        </ul>
      </div>
    </div>
  `
};
