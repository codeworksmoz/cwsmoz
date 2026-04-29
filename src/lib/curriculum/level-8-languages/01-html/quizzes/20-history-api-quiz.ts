import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq20",
  title: "Quiz: History API e Roteamento",
  passingScore: 80,
  questions: [
    {
      id: "q20_1",
      question: "Qual método da History API adiciona uma nova entrada no histórico sem recarregar a página?",
      options: [
        "history.add()",
        "history.pushState()",
        "history.navigate()",
        "location.href = url"
      ],
      correctAnswer: 1,
      explanation: "pushState altera a URL e o histórico de forma programática sem disparar um pedido de rede ao servidor."
    },
    {
      id: "q20_2",
      question: "O evento 'popstate' é disparado quando:",
      options: [
        "A página acaba de carregar pela primeira vez.",
        "O utilizador clica num link <a>.",
        "O utilizador navega pelo histórico usando os botões 'Retroceder' ou 'Avançar' do browser.",
        "A base de dados é atualizada."
      ],
      correctAnswer: 2
    },
    {
      id: "q20_3",
      question: "Para que serve o objeto 'state' (primeiro argumento) no pushState?",
      options: [
        "Para mudar a cor do site.",
        "Para armazenar dados arbitrários associados àquela entrada do histórico (ex: ID da página).",
        "Para definir a password de segurança da página.",
        "Não tem utilidade em browsers modernos."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "Qual a diferença entre pushState() e replaceState()?",
      options: [
        "Nenhuma, são sinónimos.",
        "pushState cria uma nova entrada; replaceState substitui a entrada atual no histórico.",
        "replaceState é mais rápido que pushState.",
        "pushState só funciona em mobile."
      ],
      correctAnswer: 1,
      explanation: "replaceState é útil para atualizar a URL com filtros de busca ou estados temporários sem 'poluir' o botão de voltar do utilizador."
    },
    {
      id: "q20_5",
      question: "Por que deves chamar e.preventDefault() ao interceptar um clique num link numa SPA?",
      options: [
        "Para o link ficar mais bonito.",
        "Para impedir que o browser faça o pedido HTTP e recarregue a página inteira.",
        "Para acelerar o processamento do CSS.",
        "Para esconder a URL do utilizador."
      ],
      correctAnswer: 1
    }
  ]
};
