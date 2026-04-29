import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t26",
  title: "Bases de Dados: SQL, NoSQL e o Teorema CAP",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          Onde os Dados Vivem
        </h2>
        <p class="text-lg leading-relaxed">
          Toda a aplicação precisa guardar dados. A escolha entre uma base de dados relacional (SQL) e uma não-relacional (NoSQL) é uma das decisões arquiteturais mais importantes para um engenheiro.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. SQL: Bases Relacionais</h3>
        <p>Dados organizados em <strong>tabelas</strong> com colunas fixas. Relações entre tabelas via <strong>Foreign Keys</strong>.</p>
        <div class="grid md:grid-cols-3 gap-3 text-xs mt-3">
          <div class="bg-card p-3 rounded-xl border"><span class="font-bold text-blue-400">PostgreSQL</span><p class="text-gray-400">Open-source, mais avançado. JSON, GIS.</p></div>
          <div class="bg-card p-3 rounded-xl border"><span class="font-bold text-yellow-400">MySQL/MariaDB</span><p class="text-gray-400">Mais popular na web. WordPress, Facebook.</p></div>
          <div class="bg-card p-3 rounded-xl border"><span class="font-bold text-green-400">SQLite</span><p class="text-gray-400">Base de dados num ficheiro. Apps mobile, embedded.</p></div>
        </div>

        <h4 class="font-bold text-sm mt-4">ACID (Transações Confiáveis):</h4>
        <ul class="text-xs space-y-1 text-gray-400 mt-2">
          <li><strong>Atomicidade:</strong> Tudo ou nada. Se uma parte falha, tudo é desfeito (ROLLBACK).</li>
          <li><strong>Consistência:</strong> Regras de integridade são sempre mantidas.</li>
          <li><strong>Isolamento:</strong> Transações concorrentes não se interferem.</li>
          <li><strong>Durabilidade:</strong> Dados confirmados sobrevivem a falhas de energia.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Índices: Como as Bases Encontram Dados Rápido</h3>
        <p class="text-sm">Sem índice, uma busca percorre toda a tabela (O(n)). Com índice B-Tree, a mesma busca é O(log n).</p>
        <div class="bg-black/40 p-4 rounded font-code text-xs mt-2">
          <p class="text-gray-400">CREATE INDEX idx_email ON users(email);</p>
          <p class="text-green-400 mt-1">SELECT * FROM users WHERE email = 'joao@email.com'; → Instantâneo!</p>
        </div>
        <p class="text-xs text-gray-400 mt-2"><strong>Trade-off:</strong> Índices aceleram leituras, mas tornam escritas (INSERT/UPDATE) mais lentas.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. NoSQL: Para Além das Tabelas</h3>
        <div class="space-y-3 text-sm">
          <p><strong class="text-green-400">Documentos (MongoDB):</strong> JSON/BSON flexível. Schema-less. Ideal para catálogos, CMS.</p>
          <p><strong class="text-purple-400">Chave-Valor (Redis):</strong> Ultra-rápido, em memória. Cache, sessões, rate limiting.</p>
          <p><strong class="text-yellow-400">Colunas (Cassandra):</strong> Escala horizontalmente. IoT, time-series.</p>
          <p><strong class="text-cyan-400">Grafos (Neo4j):</strong> Dados altamente conectados. Redes sociais, recomendações.</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. O Teorema CAP</h3>
        <p class="text-sm">Em sistemas distribuídos, só podes garantir <strong>2 dos 3</strong>:</p>
        <div class="grid grid-cols-3 gap-4 text-xs text-center mt-3">
          <div class="bg-blue-500/10 p-4 rounded-xl"><span class="font-bold text-blue-400">C - Consistency</span><p class="text-gray-400 mt-1">Todos os nós veem os mesmos dados ao mesmo tempo.</p></div>
          <div class="bg-green-500/10 p-4 rounded-xl"><span class="font-bold text-green-400">A - Availability</span><p class="text-gray-400 mt-1">Toda a requisição recebe resposta (sem erro).</p></div>
          <div class="bg-purple-500/10 p-4 rounded-xl"><span class="font-bold text-purple-400">P - Partition Tolerance</span><p class="text-gray-400 mt-1">Sistema funciona mesmo com falhas de rede.</p></div>
        </div>
        <p class="text-xs text-gray-400 mt-3 text-center">PostgreSQL: CP | MongoDB: CP (default) | Cassandra: AP | Como a rede falha, P é obrigatório. Escolhes entre C e A.</p>

        <div class="bg-green-500/5 p-5 rounded-xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 text-sm">Normalização vs Desnormalização:</h4>
          <p class="text-xs text-gray-400 mt-1">Normalizar = evitar duplicação (3ª forma normal). Desnormalizar = duplicar para acelerar leituras. A arte está no equilíbrio.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q26"
};