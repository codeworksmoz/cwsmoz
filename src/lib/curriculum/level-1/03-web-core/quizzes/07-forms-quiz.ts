import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-q7",
  title: "Quiz: Engenharia de Formulários",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a forma correcta e acessível de ligar uma legenda a um campo de input?",
      options: [
        "Usar uma div com texto acima do input",
        "Usar a tag <label> com o atributo 'for' igual ao 'id' do input",
        "Colocar o texto dentro do atributo 'placeholder'",
        "Usar um ID igual para a label e para o input"
      ],
      correctAnswer: 1,
      explanation: "O atributo 'for' cria uma ligação programática. Clicar na label foca o input automaticamente."
    },
    {
      id: "q2",
      question: "Qual atributo HTML5 permite validar o formato de um campo usando uma Expressão Regular (Regex)?",
      options: ["validate", "check", "pattern", "regex"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Para que serve o atributo 'inputmode'?",
      options: [
        "Para mudar a cor do texto no mobile",
        "Para sugerir ao browser qual teclado virtual exibir (ex: numérico)",
        "Para impedir a escrita no campo",
        "Para enviar o formulário automaticamente"
      ],
      correctAnswer: 1,
      explanation: "O inputmode='numeric' é vital para UX móvel, pois exibe apenas números para o utilizador."
    },
    {
      id: "q4",
      question: "Qual a diferença entre o método GET e POST num formulário?",
      options: [
        "Nenhuma, são iguais",
        "GET envia os dados na URL (visível); POST envia no corpo do pedido (mais seguro para senhas)",
        "POST é apenas para imagens",
        "GET é mais rápido que POST"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que o atributo 'required' faz?",
      options: [
        "Traduz o campo para Português",
        "Impede o envio do formulário se o campo estiver vazio",
        "Muda a borda do campo para vermelho",
        "Torna o campo apenas de leitura"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Por que o 'placeholder' NÃO deve substituir a 'label'?",
      options: [
        "Porque gasta mais bateria",
        "Porque o placeholder desaparece quando o utilizador escreve, causando perda de contexto e quebrando a acessibilidade",
        "Porque o Google não lê placeholders",
        "Porque o placeholder é limitado a 10 caracteres"
      ],
      correctAnswer: 1,
      explanation: "Uma label visível é essencial para que o utilizador saiba o que está a preencher, mesmo após o campo ter conteúdo."
    }
  ]
};
