import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rs-p12",
  language: "rust",
  title: "Projeto Master: Async e o Runtime Tokio",
  description: "Inicialize o motor assíncrono para I/O massivo.",
  statement: "Marque a função principal com #[tokio::main] e utilize await numa tarefa simulada de escrita em disco.",
  isProjectPart: true,
  template: `#[tokio::main]
async fn main() {
    println!("Motor CWM Ativo");
    // Aguarde uma tarefa assíncrona aqui
}`,
  detailedExplanation: `
    <h3>⚡ Concorrência de Próxima Geração</h3>
    <p>O modelo async do Rust é baseado em estados. O <strong>Tokio</strong> executa estas tarefas de forma ultra-eficiente, permitindo milhões de conexões simultâneas no seu motor.</p>
  `,
  objectives: [
    {
      id: "tokio_attr",
      description: "Adicione o atributo do runtime no topo do main.",
      test: "#[tokio::main]"
    },
    {
      id: "async_fn",
      description: "Declare a função como async.",
      test: "async fn main"
    }
  ]
};