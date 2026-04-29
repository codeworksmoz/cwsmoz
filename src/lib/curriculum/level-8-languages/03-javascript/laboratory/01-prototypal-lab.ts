import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p1",
  language: "javascript",
  title: "Projeto Master: Engenharia de Protótipos",
  description: "Inicie o 'CWM Logic Engine' usando herança pura de baixo nível.",
  statement: "Implemente a herança entre 'BaseEntity' e 'User' utilizando Object.create e manipulação de protótipos.",
  isProjectPart: true,
  template: `// 1. Defina a Entidade Base
function BaseEntity(id) {
    this.id = id;
    this.createdAt = Date.now();
}

// 2. Adicione o método 'getInfo' ao protótipo da BaseEntity
BaseEntity.prototype.getInfo = function() {
    return "ID: " + this.id;
};

// 3. Implemente o User que herda de BaseEntity
function User(id, name) {
    // Chame o construtor pai aqui
    BaseEntity.call(this, id);
    this.name = name;
}

// 4. LIGUE OS PROTÓTIPOS (Ação Crítica)
// User.prototype deve herdar de BaseEntity.prototype
User.prototype = ;

// 5. Garanta que o construtor aponta para User
User.prototype.constructor = User;`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ Desmontando as Classes</h3>
      <p class="text-sm">Nesta fase, não vamos usar a keyword <code>class</code>. Vamos construir a herança "à mão" para entender como o motor funciona.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Instruções Técnicas:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Ligação:</strong> Use <code>Object.create(BaseEntity.prototype)</code> para criar o elo da cadeia.</li>
          <li><strong>Contexto:</strong> O <code>BaseEntity.call(this, id)</code> garante que as propriedades do pai sejam criadas no objeto filho.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    { id: "proto_link", description: "Vincular protótipos via Object.create.", test: "Object.create(BaseEntity.prototype)" },
    { id: "parent_call", description: "Invocar construtor pai com .call(this).", test: "BaseEntity.call(this" },
    { id: "constructor_fix", description: "Corrigir a referência do construtor.", test: "User.prototype.constructor = User" }
  ]
};
