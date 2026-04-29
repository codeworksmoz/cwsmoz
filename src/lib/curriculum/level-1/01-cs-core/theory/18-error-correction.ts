import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t18",
  title: "Deteção e Correção de Erros: A Integridade do Bit",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Sobrevivendo ao Ruído Físico
        </h2>
        <p class="text-lg leading-relaxed">
          No mundo real, os bits não são perfeitos. Calor, interferência eletromagnética ou radiação podem causar o <strong>Bit Flip</strong> (um 0 torna-se 1). Sem mecanismos de correção, o teu dinheiro no banco poderia desaparecer ou o teu ficheiro de sistema corromper-se silenciosamente.
        </p>
        <div class="mt-4 flex gap-4 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="text-gray-400">Richard Hamming - 1950</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
            <span class="text-gray-400">Essencial em RAM, Redes, Satélites</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- BIT FLIP -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 shadow-inner">
          <h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            O Problema: Bit Flip (Inversão de Bit)
          </h4>
          <div class="grid md:grid-cols-2 gap-4 text-xs">
            <div class="bg-black/40 p-3 rounded">
              <p class="text-green-400 font-bold mb-2">Cenário Normal:</p>
              <p class="font-code">0110<span class="text-green-400 font-bold">1</span>001 → Valor correto: 105</p>
            </div>
            <div class="bg-red-500/10 p-3 rounded border border-red-500/20">
              <p class="text-red-400 font-bold mb-2">Bit Flip (Erro):</p>
              <p class="font-code">0110<span class="text-red-400 font-bold">0</span>001 → Valor errado: 97</p>
              <p class="text-[10px] text-red-400/70 mt-1">Um único bit mudou devido a interferência!</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Métodos de Deteção (Saber que falhou)</h3>
        <p>Estes métodos indicam que o dado está errado, mas não sabem onde e não o podem reparar.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-accent/20 hover:border-accent/50 transition-all">
            <h4 class="font-bold text-accent mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
              Bit de Paridade
            </h4>
            <p class="text-xs text-muted-foreground">
              Adiciona-se um bit extra ao byte. Se o número de '1s' for ímpar num sistema de paridade par, o erro é detetado.
            </p>
            <div class="bg-black/40 p-3 rounded mt-3 font-code text-[10px]">
              <p class="text-gray-400 mb-1">Paridade Par:</p>
              <p>Dados: 1011<span class="text-yellow-400 font-bold">0</span>1 → Total de 1s = 4 (par) ✓</p>
              <p>Erro: 1011<span class="text-red-400 font-bold">1</span>1 → Total de 1s = 5 (ímpar) ✗</p>
            </div>
            <p class="text-[10px] text-red-400/70 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-1"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/></svg>
              <strong>Limitação:</strong> Falha se 2 bits inverterem ao mesmo tempo.
            </p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-primary/20 hover:border-primary/50 transition-all">
            <h4 class="font-bold text-primary mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              Checksum e CRC
            </h4>
            <p class="text-xs text-muted-foreground">
              Somas matemáticas complexas enviadas com o pacote. O destinatário refaz a conta. Se não bater, o pacote é descartado. Vital em Downloads e WiFi.
            </p>
            <div class="bg-black/40 p-3 rounded mt-3 font-code text-[10px]">
              <p class="text-gray-400">CRC-32 (Ethernet, ZIP):</p>
              <p>Dados → [Divisão polinomial] → Resto (CRC)</p>
              <p class="text-green-400/70 mt-1">Deteta múltiplos erros em rajada</p>
            </div>
          </div>
        </div>

        <!-- CÓDIGO DE HAMMING DETALHADO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary mt-8">2. Código de Hamming: A Auto-Cura</h3>
        <p>A engenharia de elite utiliza <strong>Redundância Inteligente</strong>. O Código de Hamming insere bits de verificação em posições de potência de 2 (1, 2, 4, 8...).</p>
        
        <div class="bg-black/40 p-6 rounded-2xl border border-indigo-500/20 shadow-inner my-4">
          <h4 class="text-indigo-400 font-bold text-lg mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            Como funciona a mágica?
          </h4>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">1</span>
              </div>
              <div class="bg-indigo-500/5 p-3 rounded-lg flex-1 border border-indigo-500/10">
                <p class="text-xs text-gray-300">Cada <strong>bit de verificação</strong> (P1, P2, P4, P8) monitoriza um grupo diferente de bits de dados.</p>
                <p class="text-[10px] text-indigo-400/70 mt-1">P1 cobre posições ímpares, P2 cobre grupos de 2, P4 grupos de 4...</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">2</span>
              </div>
              <div class="bg-indigo-500/5 p-3 rounded-lg flex-1 border border-indigo-500/10">
                <p class="text-xs text-gray-300">Se ocorre um erro, a combinação de falhas nos bits de verificação cria um <strong>Síndrome</strong>.</p>
                <p class="text-[10px] text-indigo-400/70 mt-1">Cada bit de verificação que falha contribui com o seu valor de posição para o síndrome.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">3</span>
              </div>
              <div class="bg-indigo-500/5 p-3 rounded-lg flex-1 border border-indigo-500/10">
                <p class="text-xs text-gray-300">Este síndrome é um <strong>número binário</strong> que indica a posição exata do bit que inverteu.</p>
                <p class="text-[10px] text-indigo-400/70 mt-1">Ex: Síndrome = 0110 (6) → Bit 6 está errado!</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-indigo-500/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span class="font-bold text-indigo-400 text-sm">4</span>
              </div>
              <div class="bg-indigo-500/5 p-3 rounded-lg flex-1 border border-indigo-500/10">
                <p class="text-xs text-gray-300">O hardware inverte o bit de volta. O erro foi <strong>corrigido em milissegundos</strong> sem qualquer intervenção!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- EXEMPLO NUMÉRICO DE HAMMING -->
        <div class="bg-gray-900 p-5 rounded-xl border border-primary/20 my-4">
          <h4 class="text-primary font-bold text-sm mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Exemplo Prático: Código de Hamming (7,4)
          </h4>
          <p class="text-xs text-gray-400 mb-3">Proteger 4 bits de dados com 3 bits de verificação (total 7 bits):</p>
          
          <div class="space-y-3 font-code text-xs">
            <div class="bg-black/40 p-3 rounded">
              <p class="text-yellow-400 font-bold mb-1">Posições e Grupos:</p>
              <div class="grid grid-cols-7 gap-1 text-center text-[10px]">
                <div class="bg-blue-500/20 p-1 rounded">P1</div>
                <div class="bg-green-500/20 p-1 rounded">P2</div>
                <div class="p-1">D1</div>
                <div class="bg-purple-500/20 p-1 rounded">P4</div>
                <div class="p-1">D2</div>
                <div class="p-1">D3</div>
                <div class="p-1">D4</div>
              </div>
              <p class="text-gray-500 mt-1">P1(pos1), P2(pos2), P4(pos4) - potências de 2</p>
            </div>
            <div class="bg-black/40 p-3 rounded">
              <p class="text-yellow-400 font-bold mb-1">Deteção de Erro na Posição 6:</p>
              <p class="text-gray-400">P1 cobre {1,3,5,7} → <span class="text-green-400">OK</span> (0)</p>
              <p class="text-gray-400">P2 cobre {2,3,6,7} → <span class="text-red-400">ERRO</span> (1) → +2</p>
              <p class="text-gray-400">P4 cobre {4,5,6,7} → <span class="text-red-400">ERRO</span> (1) → +4</p>
              <p class="text-indigo-400 font-bold mt-1">Síndrome = 4+2 = 6 → Corrigir bit 6!</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline mt-8">3. ECC RAM: Memória de Missão Crítica</h3>
        <p class="mb-4">As memórias <strong>ECC (Error Correction Code)</strong> possuem chips extras que guardam estes bits de Hamming. Enquanto uma RAM normal morre num crash (BSOD) se um bit inverter, a ECC deteta e corrige erros de 1 bit sem que o utilizador sequer perceba.</p>
        
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="p-4 bg-muted/20 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
            <span class="block font-bold text-red-400 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
              Desktop RAM
            </span>
            <span class="text-[10px] text-gray-400 mt-2 block">Mais barata. Sem proteção contra erros. Ideal para jogos/casa.</span>
            <div class="mt-3 bg-black/20 p-2 rounded text-[10px]">
              <p class="text-red-400/70">1 bit flip = Crash/BSOD</p>
            </div>
          </div>
          <div class="p-4 bg-muted/20 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
            <span class="block font-bold text-green-400 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Server/ECC RAM
            </span>
            <span class="text-[10px] text-gray-400 mt-2 block">Mais cara. Obrigatória em Bancos, Servidores e Nuvens.</span>
            <div class="mt-3 bg-black/20 p-2 rounded text-[10px]">
              <p class="text-green-400/70">1 bit flip = Corrigido automaticamente</p>
            </div>
          </div>
        </div>

        <!-- SEC-DED -->
        <div class="bg-blue-500/5 p-5 rounded-xl border border-blue-500/20 my-4">
          <h4 class="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            SEC-DED: Single Error Correction, Double Error Detection
          </h4>
          <p class="text-xs">O padrão da indústria. Com <strong>8 bits ECC por 64 bits de dados</strong> (total 72 bits), o sistema consegue:</p>
          <div class="grid md:grid-cols-2 gap-3 mt-3 text-xs">
            <div class="bg-green-500/10 p-3 rounded border border-green-500/20">
              <span class="text-green-400 font-bold">Corrigir 1 erro</span>
              <p class="text-gray-400 text-[10px] mt-1">Single-bit error: síndrome aponta a posição exata</p>
            </div>
            <div class="bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
              <span class="text-yellow-400 font-bold">Detetar 2 erros</span>
              <p class="text-gray-400 text-[10px] mt-1">Double-bit error: paridade geral falha, mas não corrige</p>
            </div>
          </div>
        </div>

        <!-- DISTÂNCIA DE HAMMING -->
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Visão Master: Distância de Hamming
          </h4>
          <p class="text-sm leading-relaxed mb-4">
            Medimos a robustez de um código pela sua <strong>Distância</strong>. Quanto mais bits de diferença existirem entre duas palavras válidas, mais erros o sistema consegue detetar ou corrigir antes que uma mensagem se transforme noutra mensagem válida (porém errada).
          </p>
          
          <div class="bg-black/40 p-4 rounded-lg">
            <h5 class="text-indigo-400 font-bold text-sm mb-3">Relação Distância vs Capacidade:</h5>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between border-b border-indigo-500/10 pb-2">
                <span class="text-gray-400">Distância = 2</span>
                <span class="text-yellow-400">Deteta 1 erro</span>
              </div>
              <div class="flex justify-between border-b border-indigo-500/10 pb-2">
                <span class="text-gray-400">Distância = 3</span>
                <span class="text-green-400">Corrige 1 erro (ou detecta 2)</span>
              </div>
              <div class="flex justify-between border-b border-indigo-500/10 pb-2">
                <span class="text-gray-400">Distância = 4</span>
                <span class="text-green-400">Corrige 1 erro E detecta 2 (SEC-DED)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Distância = 7</span>
                <span class="text-purple-400">Corrige 3 erros (comunicação espacial)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- APLICAÇÕES REAIS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Aplicações no Mundo Real</h3>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-blue-400"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
            <span class="text-blue-400 font-bold text-sm">ECC RAM</span>
            <p class="text-[10px] text-gray-400 mt-1">Servidores, Data Centers, missão crítica</p>
          </div>
          <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-green-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <span class="text-green-400 font-bold text-sm">Redes & WiFi</span>
            <p class="text-[10px] text-gray-400 mt-1">CRC-32 em Ethernet, TCP checksum</p>
          </div>
          <div class="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mx-auto mb-2 text-purple-400"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <span class="text-purple-400 font-bold text-sm">Armazenamento</span>
            <p class="text-[10px] text-gray-400 mt-1">Discos (HDD/SSD), CDs, DVDs, Blu-ray</p>
          </div>
        </div>

        <!-- DICA PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Por que isso importa para o programador?
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Protocolos de comunicação:</strong>
                <p class="text-xs text-gray-400">TCP, UDP, Ethernet, WiFi usam checksums e CRC para garantir integridade.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Sistemas de ficheiros:</strong>
                <p class="text-xs text-gray-400">ZFS e Btrfs usam checksums para detetar corrupção silenciosa de dados (bit rot).</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Códigos QR:</strong>
                <p class="text-xs text-gray-400">Usam Reed-Solomon (código corretor de erros) para serem lidos mesmo com parte danificada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t18-quiz"
};