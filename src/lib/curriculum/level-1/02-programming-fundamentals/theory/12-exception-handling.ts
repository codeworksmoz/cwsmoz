import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t12",
  title: "Fase 3: Tratamento de Exceções - A Arte da Resiliência",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🛡️ Programação Defensiva
        </h2>
        <p class="text-lg leading-relaxed">
          No mundo real, as coisas falham. A internet cai, ficheiros desaparecem, utilizadores digitam letras onde deviam estar números. Um <strong>Engenheiro Master</strong> não espera que tudo corra bem; ele prepara o sistema para sobreviver ao erro.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Bloco TRY / CATCH</h3>
        <p>A estrutura padrão para lidar com o inesperado. O "Try" tenta executar o código perigoso; se algo falhar, o "Catch" captura o erro e impede que a aplicação inteira crash.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner space-y-2">
          <p><span class="text-accent">try</span> {</p>
          <p>&nbsp;&nbsp;<span class="text-muted-foreground">// Código que pode falhar (ex: ler base de dados)</span></p>
          <p>&nbsp;&nbsp;<span class="text-primary">processarDados</span>();</p>
          <p>} <span class="text-accent">catch</span> (erro) {</p>
          <p>&nbsp;&nbsp;<span class="text-muted-foreground">// O que fazer se falhar</span></p>
          <p>&nbsp;&nbsp;<span class="text-primary">console.log</span>("Erro detectado:", erro.message);</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Lançando Erros (THROW)</h3>
        <p>Tu também podes criar as tuas próprias regras. Se um utilizador tentar levantar mais dinheiro do que tem, tu deves "lançar" uma exceção manualmente.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-red-400">
          if (saldo < saque) { <span class="text-accent">throw</span> new Error("Saldo Insuficiente"); }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">3. O Bloco FINALLY</h3>
        <p>O código dentro do <code>finally</code> corre <strong>SEMPRE</strong>, quer tenha havido erro ou não. É o local ideal para tarefas de limpeza, como fechar uma conexão de base de dados ou parar um spinner de carregamento.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💡 Por que não usar Try/Catch em tudo?</h4>
          <p class="text-sm leading-relaxed">
            Exceções são caras para o processador. Use-as para situações <strong>excecionais</strong> (erros de rede, hardware, permissões). Para validações simples (ex: campo vazio), use estruturas <code>if/else</code> normais, que são muito mais leves.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t12-quiz"
};