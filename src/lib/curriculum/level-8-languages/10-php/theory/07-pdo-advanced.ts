import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m7",
  title: "Fase 2: PDO e Segurança: Prepared Statements e ACID",
  enableInteractive: true,
  quizId: "php-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💾 Persistência de Dados de Missão Crítica
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <button>PDO</button> é a camada de abstração definitiva do PHP para acesso a bases de dados. No nível Master, não apenas "conectamos ao banco"; nós desenhamos uma camada de persistência que respeita as propriedades <button>ACID</button> e utiliza o protocolo binário do servidor de dados para prevenir <button>SQL Injection</button> por design.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Prepared Statements: O Fim do SQLi</h3>
        <p class="text-sm leading-relaxed">
          A técnica de <button>Prepared Statements</button> obriga o servidor de base de dados a compilar a query ANTES de receber os dados. Isto transforma o input do utilizador em meros parâmetros literais, impossibilitando que um atacante altere a lógica da query injetando comandos maliciosos.
        </p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <h4 class="font-bold text-primary text-xs mb-4 uppercase">Exemplo de Auditoria: SQL Nativo</h4>
           <pre><code class="language-php">
// ✅ Abordagem Master: Separação total de lógica e dados
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email AND status = :status");

// Os dados são enviados num pacote separado pelo driver
$stmt->execute([
    'email' => $userInput,
    'status' => Status::Active->value // Usando Enums do PHP 8
]);
           </code></pre>
        </div>

        <div class="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
           <h4 class="font-bold text-yellow-500 text-xs mb-2">🚀 Performance: ATTR_EMULATE_PREPARES</h4>
           <p class="text-[10px] opacity-70 leading-relaxed">
             Desativar a emulação (<button>false</button>) obriga o PHP a usar o suporte nativo do motor do banco (ex: MySQL Binary Protocol). Isto é mais seguro e permite que o banco faça cache do plano de execução da query, aumentando a performance em pedidos repetitivos.
           </p>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Integridade Transacional e ACID</h3>
        <p class="text-sm leading-relaxed">
          Em sistemas financeiros, como o nosso **Event Server**, operações múltiplas devem ser tratadas como uma única unidade atómica. Se falhares em gravar o log do evento, deves reverter o incremento de saldo.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Controlo de Transação</h4>
             <ul class="text-[10px] space-y-2 opacity-80">
               <li><button>beginTransaction()</button>: Desativa o modo auto-commit do banco.</li>
               <li><button>commit()</button>: Grava todas as alterações permanentemente.</li>
               <li><button>rollBack()</button>: Descarta as alterações em caso de erro, voltando ao estado original.</li>
             </ul>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">O Contrato ACID</h4>
             <p class="text-[10px] leading-relaxed">
               As transações garantem: <strong>A</strong>tomicidade (tudo ou nada), <strong>C</strong>onsistência (regras validadas), <strong>I</strong>solamento (threads não se vêm) e <strong>D</strong>urabilidade (gravado em disco físico).
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Gestão de Erros de Baixo Nível</h3>
        <p class="text-sm leading-relaxed">
          Nunca permita que o <button>PDO</button> imprima erros diretamente no ecrã do utilizador. Isso pode expor o nome de tabelas e colunas, dando pistas valiosas a atacantes. Use <button>ERRMODE_EXCEPTION</button> e capture as falhas silenciosamente nos logs do sistema.
        </p>
        
        <pre><code class="language-php">
try {
    $pdo->beginTransaction();
    // Operações críticas...
    $pdo->commit();
} catch (PDOException $e) {
    $pdo->rollBack();
    // Logar o erro tecnicamente e mostrar mensagem genérica ao user
    error_log("DB Failure: " . $e->getMessage());
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Dados</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Dados são o ativo mais valioso de uma empresa. O <button>PDO</button> é a sua blindagem. Trate cada <button>INSERT</button> com o rigor de uma transação bancária e nunca, sob circunstância alguma, concatene variáveis em strings SQL."
        </p>
      </section>
    </div>
  `,
};
