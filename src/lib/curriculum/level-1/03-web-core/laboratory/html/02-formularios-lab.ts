import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p7-html",
  language: "html",
  title: "Laboratório Master: Formulários e Validação Nativa",
  description: "Construa um ponto de entrada de dados resiliente e acessível.",
  statement: "Crie um formulário de contacto com campos validados para Nome, Email e Telefone (apenas números).",
  isProjectPart: true,
  template: `<!-- Arquiteto: Construa o formulário do zero abaixo -->\n`,
  youtubeVideoId: "u044iM9xsTM",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Manual do Arquiteto: Formulários</h3>
      <p>A tua missão é construir um formulário que siga as normas internacionais de acessibilidade e performance móvel. Não uses bibliotecas externas, confia no motor nativo do HTML5.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold">Requisitos Técnicos:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Semântica:</strong> Cada campo deve ter a sua <code>&lt;label&gt;</code> correctamente ligada.</li>
          <li><strong>Validação:</strong> Todos os campos são obrigatórios.</li>
          <li><strong>Mobile UX:</strong> O campo de telefone deve exibir o teclado numérico automaticamente.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "form_tag",
      description: "Abrir a tag <form> com o método POST.",
      test: "<form method=\"POST\""
    },
    {
      id: "name_field",
      description: "Criar campo de Nome com label e atributo required.",
      test: "<label for=\"nome\""
    },
    {
      id: "email_field",
      description: "Criar campo de Email usando o type='email'.",
      test: "type=\"email\""
    },
    {
      id: "tel_field",
      description: "Criar campo de Telefone com inputmode='numeric'.",
      test: "inputmode=\"numeric\""
    },
    {
      id: "submit_btn",
      description: "Adicionar o botão de submissão.",
      test: "<button type=\"submit\""
    }
  ]
};
