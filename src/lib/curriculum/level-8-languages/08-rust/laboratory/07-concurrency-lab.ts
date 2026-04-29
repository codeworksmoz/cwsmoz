import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p7",
  language: "rust",
  title: "Projeto Master: Shared State com Arc e Mutex",
  description: "Sincronize o motor para acesso multi-thread.",
  statement: "Proteja o acesso a um contador de transações usando um Mutex envolto num Arc (Atomic Reference Counting).",
  isProjectPart: true,
  template: `use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_ref = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            // Incremente o contador de forma segura
        });
        handles.push(handle);
    }
}`,
  detailedExplanation: `
    <h3>☢️ Atomicidade e Sincronização</h3>
    <p>Para partilhar dados entre threads com segurança, usamos <code>Arc</code> para gerir a posse partilhada e <code>Mutex</code> para garantir que apenas uma thread escreve por vez.</p>
  `,
  objectives: [
    {
      id: "arc_clone",
      description: "Utilize Arc::clone() para passar a referência para a thread.",
      test: "Arc::clone"
    },
    {
      id: "mutex_lock",
      description: "Chame .lock().unwrap() para aceder ao valor.",
      test: ".lock().unwrap()"
    }
  ]
};