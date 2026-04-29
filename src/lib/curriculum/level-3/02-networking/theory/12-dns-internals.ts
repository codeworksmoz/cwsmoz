import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "net-t12",
  title: "DNS Internals: Recursão, Anycast e DNSSEC",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🔍 A Hierarquia de Nomes</h2>
        <p class="text-lg">O DNS é o sistema distribuído mais importante da Internet. Entender como ele traduz nomes em IPs envolve dominar a recursão e a segurança criptográfica.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Processo de Resolução</h3>
        <p class="text-sm">Um pedido DNS viaja por 4 níveis:</p>
        <ol class="list-decimal ml-6 space-y-2 text-xs">
          <li><strong>Recursive Resolver:</strong> O servidor do teu ISP que faz o trabalho sujo.</li>
          <li><strong>Root Nameserver:</strong> O topo da hierarquia (existem 13 IPs lógicos no mundo).</li>
          <li><strong>TLD Nameserver:</strong> Gere extensões como .com, .mz ou .gov.</li>
          <li><strong>Authoritative Nameserver:</strong> Onde mora o registo real (ex: Cloudflare).</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">2. Anycast e DNSSEC</h3>
        <p class="text-sm">CDNs usam <strong>Anycast</strong> para que o mesmo IP DNS responda de centenas de locais diferentes, reduzindo a latência. O <strong>DNSSEC</strong> adiciona assinaturas digitais aos registos, prevenindo ataques de <i>Cache Poisoning</i>.</p>
      </div>
    </div>
  `,
  quizId: "net-mq12"
};