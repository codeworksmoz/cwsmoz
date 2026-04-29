import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "db-t1",
  title: "Sistemas de Bases de Dados e o Modelo Relacional",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🗄️ A Gestão Profissional de Dados</h2>
        <p class="text-lg leading-relaxed">
          Um SGBD (Sistema de Gestão de Base de Dados) é um software que permite definir, criar, manter e controlar o acesso a dados.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>O Modelo Relacional (Codd)</h3>
        <p>Baseado na teoria dos conjuntos, organiza dados em <strong>Relações</strong> (Tabelas). Cada linha é um registo único (Tuplo) e cada coluna um atributo.</p>
        
        <h4>Conceitos Chave:</h4>
        <ul>
          <li><strong>Primary Key (PK):</strong> Identificador único da linha.</li>
          <li><strong>Foreign Key (FK):</strong> Referência para uma PK noutra tabela, criando ligações.</li>
          <li><strong>Esquema:</strong> A estrutura lógica da base de dados.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "db-q1"
};