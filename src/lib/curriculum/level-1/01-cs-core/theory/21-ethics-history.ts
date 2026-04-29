import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t21",
  title: "Ética e História da Computação",
  youtubeVideoId: "E18Qv2bTkRU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          De Turing à IA: O Legado e a Responsabilidade
        </h2>
        <p class="text-lg leading-relaxed">
          A computação moderna não nasceu do nada. É o resultado de décadas de genialidade, guerras, colaboração e, por vezes, decisões éticas complexas. Compreender esta história e os dilemas éticos que dela emergem é tão fundamental para um engenheiro como saber programar.
        </p>
      </div>

      <div class="space-y-6">
        <!-- LINHA DO TEMPO -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Pioneiros: Linha do Tempo</h3>
        
        <div class="space-y-4">
          <!-- Alan Turing -->
          <div class="bg-gray-900 p-5 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-lg mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              1936 — Alan Turing e a Máquina Universal
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="md:col-span-2">
                <p class="text-sm leading-relaxed mb-3">
                  Alan Turing publicou "On Computable Numbers", introduzindo o conceito da <strong>Máquina de Turing</strong> — um modelo matemático abstrato que define o que significa "ser computável". Provou que existem problemas que nenhum computador pode resolver (Problema da Paragem).
                </p>
                <p class="text-sm leading-relaxed mb-3">
                  Durante a Segunda Guerra Mundial (1939-1945), Turing trabalhou em Bletchley Park, liderando a equipa que quebrou o código <strong>Enigma</strong> dos nazis — um feito que terá encurtado a guerra em 2-4 anos e salvo milhões de vidas.
                </p>
                <p class="text-sm leading-relaxed text-red-400/80">
                  Apesar do seu contributo heroico, Turing foi perseguido pelo governo britânico em 1952 por ser homossexual, forçado a castração química, e morreu em circunstâncias trágicas em 1954. Só em 2013 recebeu o perdão real póstumo.
                </p>
              </div>
              <div class="bg-black/40 p-4 rounded-lg text-xs">
                <h5 class="text-yellow-400 font-bold mb-2">Legado Técnico:</h5>
                <ul class="space-y-1 text-gray-400">
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Máquina de Turing (computação teórica)</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Teste de Turing (IA)</span>
                  </li>
                  <li class="flex items-start gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Prémio Turing ("Nobel da Computação")</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Von Neumann -->
          <div class="bg-gray-900 p-5 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-lg mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              1945 — John von Neumann e o Programa Armazenado
            </h4>
            <p class="text-sm leading-relaxed">
              Von Neumann formalizou a arquitetura que ainda hoje usamos: <strong>programa e dados partilham a mesma memória</strong>. O EDVAC foi o primeiro computador a implementar este conceito. Von Neumann também contribuiu para o Projeto Manhattan e para a teoria dos jogos — ilustrando como a computação sempre esteve ligada a questões éticas profundas.
            </p>
          </div>

          <!-- Grace Hopper -->
          <div class="bg-gray-900 p-5 rounded-xl border border-primary/20">
            <h4 class="text-primary font-bold text-lg mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
              1952 — Grace Hopper e o Primeiro Compilador
            </h4>
            <p class="text-sm leading-relaxed">
              Contra todas as expectativas da época, Grace Hopper criou o <strong>primeiro compilador</strong> (A-0 System), provando que computadores podiam entender linguagens de alto nível e não apenas código de máquina. O seu trabalho levou à criação do <strong>COBOL</strong> (1959), uma linguagem ainda usada em sistemas financeiros. Popularizou o termo "debugging" após literalmente remover uma traça de um relé num computador.
            </p>
          </div>
        </div>

        <!-- MARCOS ÉTICOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">2. Marcos Éticos na Computação</h3>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-red-500/5 p-5 rounded-xl border border-red-500/20">
            <h4 class="flex items-center gap-2 text-red-400 font-bold text-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Therac-25 (1985-1987)
            </h4>
            <p class="text-xs text-gray-400">
              Uma máquina de radioterapia controlada por software causou a morte de pelo menos 3 pacientes devido a overdoses massivas de radiação. O desastre foi causado por <strong>bugs de software</strong> concorrentes e falta de hardware de segurança. É estudado como o caso mais grave de falha de software médica da história.
            </p>
            <p class="text-[10px] text-red-400/70 mt-2">
              <strong>Lição:</strong> Software que controla vidas humanas exige verificação formal, testes exaustivos e redundância de hardware.
            </p>
          </div>
          <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20">
            <h4 class="flex items-center gap-2 text-yellow-400 font-bold text-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Encriptação e Privacidade (1990s)
            </h4>
            <p class="text-xs text-gray-400">
              A "Crypto Wars" dos anos 90: governos tentaram proibir encriptação forte (exportação de PGP foi considerada exportação de "munições"). A batalha entre segurança nacional e privacidade individual continua hoje com backdoors, vigilância em massa (Snowden, 2013) e a encriptação end-to-end.
            </p>
            <p class="text-[10px] text-yellow-400/70 mt-2">
              <strong>Lição:</strong> Engenheiros têm responsabilidade de proteger os dados dos utilizadores e resistir a pressões para enfraquecer sistemas.
            </p>
          </div>
          <div class="bg-purple-500/5 p-5 rounded-xl border border-purple-500/20">
            <h4 class="flex items-center gap-2 text-purple-400 font-bold text-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
              Vieses Algorítmicos (2010s-presente)
            </h4>
            <p class="text-xs text-gray-400">
              Algoritmos de reconhecimento facial com taxas de erro muito superiores em minorias étnicas. Sistemas de crédito que perpetuam desigualdades raciais. Inteligência Artificial treinada com dados tendenciosos que amplifica preconceitos existentes em vez de os eliminar.
            </p>
            <p class="text-[10px] text-purple-400/70 mt-2">
              <strong>Lição:</strong> Dados de treino e equipas diversas são essenciais. Um algoritmo não é neutro só porque é matemático.
            </p>
          </div>
          <div class="bg-green-500/5 p-5 rounded-xl border border-green-500/20">
            <h4 class="flex items-center gap-2 text-green-400 font-bold text-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Dependência Tecnológica (2020s)
            </h4>
            <p class="text-xs text-gray-400">
              O apagão informático da CrowdStrike (2024) paralisou aeroportos, hospitais e bancos em todo o mundo. A crescente dependência de sistemas interligados e fornecedores monopolistas cria pontos únicos de falha com consequências catastróficas.
            </p>
            <p class="text-[10px] text-green-400/70 mt-2">
              <strong>Lição:</strong> Diversificação, testes graduais de updates e planos de contingência são obrigações éticas.
            </p>
          </div>
        </div>

        <!-- PRINCÍPIOS ÉTICOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">3. Princípios Éticos para Engenheiros de Software</h3>
        
        <div class="space-y-4">
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-blue-400">Privacidade e Dados</p>
              <p class="text-xs text-gray-400">Recolhe apenas o necessário. Protege os dados como se fossem teus. GDPR, LGPD e outras leis são o mínimo — a ética exige mais.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-green-400">Transparência e Explicabilidade</p>
              <p class="text-xs text-gray-400">Utilizadores devem saber quando estão a interagir com IA. Decisões automatizadas que afetam vidas (crédito, justiça) devem ser explicáveis.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-yellow-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-yellow-400">Segurança e Robustez</p>
              <p class="text-xs text-gray-400">Testa exaustivamente. Não lances código que "parece funcionar". Falhas de software podem matar pessoas, destruir empresas e minar democracias.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-400"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 15v2a4 4 0 0 1-4 4h-2"/></svg>
            </div>
            <div>
              <p class="font-bold text-sm text-purple-400">Equidade e Inclusão</p>
              <p class="text-xs text-gray-400">Constrói sistemas acessíveis. Testa com utilizadores diversos. Um produto que só funciona para alguns não é um bom produto.</p>
            </div>
          </div>
        </div>

        <!-- DILEMAS MODERNOS -->
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 mt-8">4. Dilemas Éticos da Atualidade</h3>
        
        <div class="bg-gray-900 p-6 rounded-2xl border border-primary/20 shadow-inner">
          <div class="space-y-4">
            <div class="bg-black/40 p-4 rounded-lg">
              <h4 class="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
                IA Generativa e Deep Fakes
              </h4>
              <p class="text-xs text-gray-400">
                Modelos como GPT, DALL-E e Stable Diffusion levantam questões sobre direitos de autor (foram treinados com dados públicos sem consentimento), desinformação em massa, e o potencial de automatizar a criação de conteúdo fraudulento.
              </p>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h4 class="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Vigilância e Reconhecimento Facial
              </h4>
              <p class="text-xs text-gray-400">
                Tecnologias de vigilância em massa estão a ser usadas para perseguir minorias, controlar populações e eliminar o anonimato em espaços públicos. Onde traçamos a linha entre segurança e liberdade?
              </p>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h4 class="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/></svg>
                Automação e Desemprego Tecnológico
              </h4>
              <p class="text-xs text-gray-400">
                A IA está a automatizar empregos de colarinho branco a um ritmo sem precedentes. Engenheiros têm a responsabilidade de considerar o impacto social das suas criações e defender políticas de transição justa.
              </p>
            </div>
            <div class="bg-black/40 p-4 rounded-lg">
              <h4 class="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                Impacto Ambiental
              </h4>
              <p class="text-xs text-gray-400">
                Data centers consomem 1-2% da eletricidade global. Treinar um grande modelo de IA pode emitir tanto CO2 como 5 carros durante toda a sua vida útil. Eficiência energética é também uma obrigação ética.
              </p>
            </div>
          </div>
        </div>

        <!-- DICA PRÁTICA -->
        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            O Teu Papel como Engenheiro
          </h4>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Questiona sempre:</strong>
                <p class="text-xs text-gray-400">"Quem pode ser prejudicado por este sistema? Quem fica de fora?"</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Recusa-te a construir o que é errado:</strong>
                <p class="text-xs text-gray-400">Tens o direito — e o dever — de dizer não a projetos que violam princípios éticos fundamentais.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <strong class="text-green-400">Honra os pioneiros:</strong>
                <p class="text-xs text-gray-400">Aprender com a história de Turing, Hopper e outros inspira-nos a construir um futuro digital mais justo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q21"
};