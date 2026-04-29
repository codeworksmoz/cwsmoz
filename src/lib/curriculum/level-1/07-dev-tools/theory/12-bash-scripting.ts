import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t12",
  title: "Bash Scripting: Automatizando a Rotina do Engenheiro",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🐚 O Poder do Shell
        </h2>
        <p class="text-lg">Se tens de fazer a mesma sequência de 5 comandos todos os dias, estás a perder tempo. Um Engenheiro de Elite cria um <strong>Bash Script</strong> para automatizar a tarefa.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Anatomia do Script</h3>
        <p class="text-sm">Tudo começa com o <i>Shebang</i> (#!/bin/bash), que diz ao sistema qual interpretador usar.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-green-400">
          #!/bin/bash <br/>
          echo "A iniciar backup..." <br/>
          tar -czf backup.tar.gz ./src <br/>
          echo "Backup concluído!"
        </div>

        <h3 class="text-xl font-bold font-headline">2. Variáveis e Loops no Shell</h3>
        <p class="text-sm">Podes usar loops <code>for</code> para processar centenas de ficheiros ou <code>if</code> para verificar se um servidor está online antes de continuar a execução.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Onde Usar?</h4>
          <p class="text-sm leading-relaxed">Configuração de ambientes (setup.sh), limpeza de logs, deploys manuais e integração com cronjobs para tarefas agendadas no servidor Linux.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q12"
};