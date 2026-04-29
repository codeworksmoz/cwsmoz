import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t12-quiz",
  title: "Quiz: Resiliência e Gestão de Erros",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Para que serve o bloco 'catch' numa estrutura try-catch?",
      options: [
        "Para apagar o erro do sistema",
        "Para capturar e tratar a exceção, impedindo o crash da aplicação",
        "Para repetir o código até que ele funcione",
        "Para esconder o erro do utilizador"
      ],
      correctAnswer: 1,
      explanation: "O catch é a rede de segurança: ele entra em ação quando o código dentro do try falha."
    },
    {
      id: "q2",
      question: "Quando é que o código dentro de um bloco 'finally' é executado?",
      options: [
        "Apenas quando ocorre um erro",
        "Apenas quando o código funciona perfeitamente",
        "Sempre, independentemente de ter havido um erro ou não",
        "Apenas se o computador for reiniciado"
      ],
      correctAnswer: 2,
      explanation: "O finally é o bloco de 'limpeza garantida', ideal para fechar ficheiros ou conexões."
    },
    {
      id: "q3",
      question: "O que faz a instrução 'throw'?",
      options: [
        "Lança o computador pela janela",
        "Interrompe o fluxo normal e gera (lança) uma exceção manualmente",
        "Ignora o erro e continua a execução",
        "Envia o código para o servidor"
      ],
      correctAnswer: 1,
      explanation: "Usamos throw para sinalizar que algo proibido pela regra de negócio aconteceu (ex: idade negativa)."
    },
    {
      id: "q4",
      question: "Por que se diz que exceções são 'caras' em termos de performance?",
      options: [
        "Porque o programador tem de pagar uma taxa",
        "Porque o motor da linguagem tem de capturar todo o estado da pilha (stack trace) no momento do erro",
        "Porque as exceções usam muita internet",
        "Porque ocupam espaço no disco rígido"
      ],
      correctAnswer: 1,
      explanation: "Criar um objeto de erro com todo o rasto de onde ele veio exige processamento e memória extra."
    },
    {
      id: "q5",
      question: "O que acontece se um erro ocorre no 'try' e não houver um bloco 'catch'?",
      options: [
        "O programa ignora o erro",
        "A exceção sobe para o nível superior (bolha) até encontrar um catch ou crashar o programa",
        "O sistema operativo corrige o erro sozinho",
        "A variável muda de valor automaticamente"
      ],
      correctAnswer: 1,
      explanation: "Isto chama-se propagação de erro. Se ninguém capturar a 'batata quente', o programa morre."
    },
    {
      id: "q6",
      question: "Qual destas é uma boa prática de engenharia ao tratar erros?",
      options: [
        "Deixar o bloco catch vazio para silenciar todos os erros",
        "Capturar o erro e fornecer uma mensagem ou log útil para o diagnóstico",
        "Usar try-catch em todas as linhas de código",
        "Reiniciar a aplicação em cada erro"
      ],
      correctAnswer: 1,
      explanation: "Silenciar erros (swallowing exceptions) é perigoso, pois o sistema falha em silêncio e ninguém descobre porquê."
    }
  ]
};