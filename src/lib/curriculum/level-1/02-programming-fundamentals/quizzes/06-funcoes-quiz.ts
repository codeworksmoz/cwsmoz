import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t6-quiz",
  title: "Quiz: Arquitetura de Funções e Escopos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal objetivo técnico de utilizar funções no desenvolvimento de software?",
      options: [
        "Aumentar o número de linhas de código do projeto",
        "Promover a reutilização de lógica e a organização modular (DRY)",
        "Garantir que o programa use mais memória RAM",
        "Impedir que o utilizador veja o código fonte"
      ],
      correctAnswer: 1,
      explanation: "O princípio DRY (Don't Repeat Yourself) foca em escrever a lógica uma vez e reutilizá-la, facilitando a manutenção e reduzindo erros."
    },
    {
      id: "q2",
      question: "O que acontece ao fluxo de execução do programa quando a palavra-chave 'return' é atingida?",
      options: [
        "O programa pausa por 1 segundo",
        "A função é encerrada imediatamente e devolve o valor para quem a chamou",
        "A função reinicia do topo automaticamente",
        "O compilador ignora as linhas acima do return"
      ],
      correctAnswer: 1,
      explanation: "O return é o ponto final de uma função. Qualquer código escrito abaixo dele, dentro do mesmo bloco, nunca será executado."
    },
    {
      id: "q3",
      question: "Se uma variável é definida dentro de uma função, ela pode ser acedida de fora dessa função? Porquê?",
      options: [
        "Sim, variáveis são sempre globais",
        "Não, devido ao Escopo Local que restringe a visibilidade ao bloco da função",
        "Sim, mas apenas se a função for exportada",
        "Não, porque o computador apaga o ficheiro após a execução"
      ],
      correctAnswer: 1,
      explanation: "O escopo local protege as variáveis internas, garantindo que elas não interfiram com o resto do programa (encapsulamento)."
    },
    {
      id: "q4",
      question: "Qual a definição correta de um 'Parâmetro' de uma função?",
      options: [
        "É o nome final que a função recebe no sistema",
        "É uma variável de entrada que a função utiliza para processar dados",
        "É o erro que ocorre quando a função falha",
        "É a velocidade com que a função executa"
      ],
      correctAnswer: 1,
      explanation: "Parâmetros são os dados que passas para dentro da 'máquina' (função) para que ela possa realizar o seu trabalho."
    },
    {
      id: "q5",
      question: "O que caracteriza uma 'Função Pura' na engenharia de software?",
      options: [
        "Uma função que não possui parâmetros",
        "Uma função que sempre retorna o mesmo resultado para a mesma entrada e não causa efeitos secundários",
        "Uma função que foi escrita sem erros de sintaxe",
        "Uma função que só trabalha com números inteiros"
      ],
      correctAnswer: 1,
      explanation: "Funções puras são previsíveis e fundamentais para a criação de sistemas robustos e fáceis de testar."
    },
    {
      id: "q6",
      question: "O que acontece se uma função for declarada sem um comando 'return' explícito?",
      options: [
        "O programa lança um erro fatal",
        "A função retorna um valor padrão (como 'undefined' em JS ou 'None' em Python)",
        "O computador reinicia para limpar o erro",
        "A função apaga o valor de todos os parâmetros"
      ],
      correctAnswer: 1,
      explanation: "Muitas linguagens retornam um valor nulo por padrão se não especificares um return. A função realiza a tarefa, mas não entrega um resultado útil."
    }
  ]
};
