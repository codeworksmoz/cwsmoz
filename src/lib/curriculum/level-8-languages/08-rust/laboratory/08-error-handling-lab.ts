import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p8",
  language: "rust",
  title: "Projeto Master: Gestão de Erros Robusta",
  description: "Trate falhas de disco sem pânico.",
  statement: "Implemente uma função que retorne Result<String, String> e utilize o operador '?' para propagar falhas de leitura.",
  isProjectPart: true,
  template: `fn read_block() -> Result<String, String> {
    Ok(String::from("DATA_BLOCK"))
}

fn process_storage() -> Result<(), String> {
    // Utilize o operador ? aqui
    let content = ;
    Ok(())
}`,
  detailedExplanation: `
    <h3>🛡️ O Operador Interrogação</h3>
    <p>Rust não usa exceções. O operador <code>?</code> é açúcar sintático para propagação de erros, forçando o tratamento de falhas e mantendo o código do motor limpo.</p>
  `,
  objectives: [
    {
      id: "propagate",
      description: "Propague o erro da função read_block() usando ?.",
      test: "read_block()?"
    }
  ]
};