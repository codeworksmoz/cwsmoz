import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p6",
  language: "rust",
  title: "Projeto Master: Interior Mutability com RefCell",
  description: "Contorne o Borrow Checker de forma segura em runtime.",
  statement: "Utilize RefCell para permitir a modificação de um log interno mesmo quando o objeto é guardado via referência imutável.",
  isProjectPart: true,
  template: `use std::cell::RefCell;

struct Engine {
    logs: RefCell<Vec<String>>,
}

impl Engine {
    fn add_log(&self, msg: String) {
        // Obtenha a referência mutável aqui
    }
}`,
  detailedExplanation: `
    <h3>🎭 Flexibilidade em Runtime</h3>
    <p>Às vezes as regras rígidas do Rust impedem padrões úteis. <code>RefCell</code> move a verificação de empréstimo para o tempo de execução, permitindo mutabilidade interior.</p>
  `,
  objectives: [
    {
      id: "borrow_mut",
      description: "Utilize o método .borrow_mut() para adicionar à lista.",
      test: "borrow_mut()"
    }
  ]
};