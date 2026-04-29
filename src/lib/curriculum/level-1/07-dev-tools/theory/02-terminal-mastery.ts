import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t2",
  title: "Terminal Mastery: Bash, Zsh e Navegação Industrial",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🐚 A Linha de Comandos (CLI)
        </h2>
        <p class="text-lg leading-relaxed">O terminal é a interface mais poderosa para interagir com o sistema operativo. Um engenheiro profissional passa a maior parte do tempo no terminal porque ele permite automação, rapidez e acesso a ferramentas que não possuem interface gráfica.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Navegação e Manipulação de Ficheiros</h3>
        <p class="text-sm">Dominar estes comandos é como aprender a andar no mundo da engenharia:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs border border-white/5">
            <b class="text-accent">ls -la</b> : Listagem exaustiva (inclui ficheiros ocultos como .env).
          </li>
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs border border-white/5">
            <b class="text-accent">cd ~</b> : Salta para a pasta Home do utilizador.
          </li>
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs border border-white/5">
            <b class="text-accent">mkdir -p</b> : Cria uma estrutura de pastas completa de uma só vez.
          </li>
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs border border-white/5">
            <b class="text-accent">grep -r</b> : Procura por um texto dentro de todos os ficheiros da pasta.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">2. Gestão de Processos e Sinais</h3>
        <p class="text-sm">O terminal permite-te gerir o que o computador está a executar. O comando <code>top</code> ou <code>htop</code> mostra o consumo de CPU e RAM em tempo real.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Dica de Elite: Pipes e Redireccionamento</h4>
          <p class="text-sm leading-relaxed">
            O verdadeiro poder do Unix é o pipe (<code>|</code>). Ele permite que a saída de um comando seja a entrada de outro. <br/>
            <code>cat logs.txt | grep "ERROR" | wc -l</code> <br/>
            (Lê o ficheiro -> filtra erros -> conta quantas linhas de erro existem).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q2"
};