import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t1",
  title: "Princípios SOLID: As Leis da Manutenibilidade",
  quizId: "des-q1-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏗️ A Fundação do Código Robusto
        </h2>
        <p class="text-lg leading-relaxed">
          Introduzidos por Robert C. Martin (Uncle Bob), os princípios <strong>SOLID</strong> são um conjunto de cinco diretrizes de design que ajudam a criar software mais compreensível, flexível e fácil de manter. Ignorar estes princípios leva à <b>podridão do software</b>: código que quebra em locais inesperados a cada pequena mudança.
        </p>
      </div>

      <div class="space-y-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h3 class="text-xl font-bold text-accent mb-2">S - Single Responsibility (SRP)</h3>
          <p class="text-sm">"Uma classe deve ter apenas um motivo para mudar."</p>
          <p class="text-xs mt-2 text-muted-foreground">Se uma classe <code>User</code> gera o PDF do relatório e também salva no banco, ela viola o SRP. Se o formato do PDF mudar, corres o risco de quebrar o salvamento. <b>Solução:</b> Separa as responsabilidades em classes distintas.</p>
        </div>

        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h3 class="text-xl font-bold text-accent mb-2">O - Open/Closed (OCP)</h3>
          <p class="text-sm">"Software deve ser aberto para extensão, mas fechado para modificação."</p>
          <p class="text-xs mt-2 text-muted-foreground">Nunca alteres uma classe existente para adicionar uma funcionalidade. Usa polimorfismo ou interfaces para estender o comportamento. Isto evita que o código estável seja corrompido.</p>
        </div>

        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h3 class="text-xl font-bold text-accent mb-2">L - Liskov Substitution (LSP)</h3>
          <p class="text-sm">"Subclasses devem ser substituíveis pelas suas classes base."</p>
          <p class="text-xs mt-2 text-muted-foreground">Se uma função aceita uma <code>Bird</code>, ela deve funcionar com um <code>Ostrich</code> (Avestruz). Se a Avestruz lança um erro <code>FlyException</code>, violaste o LSP. Subclasses não devem quebrar o contrato da base.</p>
        </div>

        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h3 class="text-xl font-bold text-accent mb-2">I - Interface Segregation (ISP)</h3>
          <p class="text-sm">"Muitas interfaces específicas são melhores que uma interface genérica."</p>
          <p class="text-xs mt-2 text-muted-foreground">Não forces um cliente a implementar métodos que ele não usa. Em vez de uma interface <code>Worker</code> com <code>work()</code> e <code>eat()</code>, cria <code>Workable</code> e <code>Eatable</code> separadamente.</p>
        </div>

        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-lg">
          <h3 class="text-xl font-bold text-accent mb-2">D - Dependency Inversion (DIP)</h3>
          <p class="text-sm">"Depende de abstrações, não de implementações concretas."</p>
          <p class="text-xs mt-2 text-muted-foreground">O módulo de alto nível não deve depender do baixo nível. O teu serviço de email não deve depender da classe <code>MailgunSender</code>, mas sim de uma interface <code>EmailSender</code>. Isto permite trocar o fornecedor sem mexer na lógica de negócio.</p>
        </div>
      </div>
    </div>
  `
};