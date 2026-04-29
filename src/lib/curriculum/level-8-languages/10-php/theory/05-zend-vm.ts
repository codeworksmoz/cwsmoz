import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m5",
  title: "Fase 2: Zend Engine: Opcodes, AST e o Ciclo de Vida",
  enableInteractive: true,
  quizId: "php-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Por dentro da Zend Engine 3
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP não é apenas um script interpretado linha a linha. Ele é uma linguagem compilada para uma máquina virtual de pilha (Stack-based VM). No nível Master, entendemos que a performance de uma aplicação de alta escala depende de como otimizamos a geração e o armazenamento dos <button>Opcodes</button>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Pipeline de Execução Industrial</h3>
        <p class="text-sm leading-relaxed">
          Sempre que um ficheiro PHP é solicitado (e não está no cache), o motor <button>Zend Engine</button> executa quatro estágios críticos:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Estágio 1: Lexing & Parsing</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O código fonte é quebrado em <button>Tokens</button> (Lexing). Em seguida, o <button>Parser</button> organiza esses tokens numa <button>AST (Abstract Syntax Tree)</button>, uma representação em árvore que define a lógica gramatical do seu programa.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Estágio 2: Compilation</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               O compilador percorre a <button>AST</button> e gera uma sequência de instruções de baixo nível chamadas <button>Opcodes</button>. Estas instruções são armazenadas num objeto de memória chamado <button>OpArray</button>.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Anatomia de um Opcode</h3>
        <p class="text-sm leading-relaxed">
          Cada <button>Opcode</button> representa uma operação atómica da <button>Zend VM</button>. Ele é composto por um <button>Handler</button> (a função C que executa a lógica) e até dois operandos (<button>op1</button>, <button>op2</button>) e um resultado.
        </p>

        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Visualização Técnica (Exemplo: $a + $b)</h4>
           <table class="w-full text-[10px] font-mono text-accent">
             <thead>
               <tr class="border-b border-white/10">
                 <th class="p-2 text-left">OPCODE</th>
                 <th class="p-2 text-left">OP1</th>
                 <th class="p-2 text-left">OP2</th>
                 <th class="p-2 text-left">RESULT</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td class="p-2">ZEND_ADD</td>
                 <td class="p-2">CV1 ($a)</td>
                 <td class="p-2">CV2 ($b)</td>
                 <td class="p-2">TMP1</td>
               </tr>
             </tbody>
           </table>
           <p class="text-[9px] mt-4 text-muted-foreground italic">
             * CV (Compiled Variable) indica acesso ultra-rápido à stack de memória da VM.
           </p>
        </div>
      </section>

      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 O Triunfo do OpCache
        </h4>
        <p class="text-sm leading-relaxed">
          O maior custo do PHP é repetir o Lexing, Parsing e Compilação em cada request. O <button>OpCache</button> resolve isto armazenando o <button>OpArray</button> diretamente na memória RAM. Em servidores de elite, o <button>OpCache</button> também realiza o <button>Constant Folding</button>, calculando valores estáticos durante o build para que o código corra mais rápido em runtime.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Inspecionando o Invisível</h3>
        <p class="text-sm leading-relaxed">
          Como engenheiro master, podes usar a extensão <button>VLD (Vulcan Logic Dumper)</button> para auditar os Opcodes gerados. Isto permite identificar onde o seu código está a gerar instruções desnecessárias ou onde a <button>Zend VM</button> está a gastar mais tempo de processamento.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Baixo Nível</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Entender a <button>Zend VM</button> é o que separa quem escreve scripts de quem desenha infraestruturas resilientes. Ao otimizar o seu código para gerar menos <button>Opcodes</button> e tirar proveito do <button>OpCache</button>, você garante que o seu servidor suporte 10x mais tráfego com o mesmo hardware."
        </p>
      </section>
    </div>
  `,
};