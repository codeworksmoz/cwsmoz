import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p10",
  language: "html",
  title: "Projeto Master: Processamento com Streams",
  description: "Processe grandes volumes de texto ou dados por partes (chunks).",
  statement: "Implemente um leitor de Stream para um corpo de resposta fetch.",
  isProjectPart: true,
  template: `async function processStream(response) {
    const reader = response.body.getReader();
    // Inicie o loop de leitura aqui
}`,
  detailedExplanation: `
    <h3>🌊 Fluxo Contínuo</h3>
    <p>As <strong>Streams API</strong> permitem processar dados enquanto eles ainda estão a ser descarregados. Isso é essencial para tratar ficheiros gigantes de logs ou vídeos sem esgotar a memória RAM do browser.</p>
  `,
  objectives: [
    {
      id: "get_reader",
      description: "Obtenha o leitor do stream via getReader().",
      test: "getReader()"
    },
    {
      id: "read_loop",
      description: "Use um loop while para ler o stream com reader.read().",
      test: "reader.read()"
    }
  ]
};
