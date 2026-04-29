import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p9",
  language: "rust",
  title: "Projeto Master: Pattern Matching Exaustivo",
  description: "Desmonte estruturas de dados com segurança total.",
  statement: "Utilize o bloco 'match' para tratar todas as variantes de um Option vindo do motor de cache.",
  isProjectPart: true,
  template: `fn handle_cache_result(res: Option<i32>) {
    match res {
        // Implemente os casos Some e None
    }
}`,
  detailedExplanation: `
    <h3>🧩 Exaustividade de Lógica</h3>
    <p>O compilador garante que não esqueces nenhum caso. Se adicionares um novo estado ao motor, o código não compilará até que o trates explicitamente.</p>
  `,
  objectives: [
    {
      id: "match_some",
      description: "Trate o caso Some(val).",
      test: "Some("
    },
    {
      id: "match_none",
      description: "Trate o caso None.",
      test: "None =>"
    }
  ]
};