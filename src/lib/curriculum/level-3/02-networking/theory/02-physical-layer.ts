import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "net-t2",
  title: "Camada Física e Transmissão de Sinais",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📡 Bits no Meio Físico</h2>
      <p>A Camada Física lida com a transmissão de bits brutos através de um canal de comunicação.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Meios Guiados:</strong> Par trançado (UTP), Fibra ótica, Cabo coaxial.</li>
        <li><strong>Meios Não-Guiados:</strong> Ondas de rádio, Micro-ondas, Infravermelho.</li>
        <li><strong>Modulação:</strong> Técnica de variar propriedades de uma onda para transportar informação (AM, FM, QAM).</li>
      </ul>
    </div>
  `,
  quizId: "net-q2"
};