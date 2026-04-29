import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq14",
  title: "Quiz Master: Generators e Iteração de Performance",
  passingScore: 85,
  questions: [
    {
      id: "q14_1",
      question: "Qual a complexidade de espaço (memória) de um gerador ao processar uma lista de 1 bilhão de itens?",
      options: [
        "O(n) - A memória cresce com a lista.",
        "O(1) - A memória permanece constante e mínima.",
        "O(log n) - A memória cresce de forma logarítmica.",
        "Depende da velocidade do processador."
      ],
      correctAnswer: 1,
      explanation: "Geradores não armazenam a lista completa na RAM; eles geram um item de cada vez sob demanda."
    },
    {
      id: "q14_2",
      question: "O que acontece com as variáveis locais de uma função quando a instrução 'yield' é executada?",
      options: [
        "São apagadas para libertar memória.",
        "São preservadas pelo motor Zend para que a função possa retomar do mesmo estado.",
        "São convertidas em variáveis globais.",
        "O motor faz o commit delas na base de dados."
      ],
      correctAnswer: 1
    },
    {
      id: "q14_3",
      question: "Qual o comportamento do método 'rewind()' num objeto Generator após a iteração ter começado?",
      options: [
        "Recomeça a lista do início.",
        "Lança uma Exception, pois geradores são iteradores de sentido único (forward-only).",
        "Apaga o gerador da memória.",
        "Reinicia o servidor PHP."
      ],
      correctAnswer: 1,
      explanation: "Uma vez que o estado é consumido e não armazenado, não é possível voltar atrás num gerador nativo sem o instanciar novamente."
    },
    {
      id: "q14_4",
      question: "Para que serve o método 'send($valor)' de um gerador?",
      options: [
        "Para enviar um email automático.",
        "Para injetar um valor de volta na função geradora, que será o resultado da expressão 'yield' atual.",
        "Para mudar a cor do terminal.",
        "Para apagar o último item gerado."
      ],
      correctAnswer: 1
    },
    {
      id: "q14_5",
      question: "O que permite a instrução 'yield from'?",
      options: [
        "Finalizar a execução do gerador.",
        "Delegar a iteração para outro gerador ou array de forma eficiente.",
        "Pular um item da lista.",
        "Repetir o último item infinitamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q14_6",
      question: "Um gerador pode retornar um valor final usando a palavra-chave 'return'?",
      options: [
        "Não, causará um erro de sintaxe.",
        "Sim, e o valor pode ser obtido através do método getReturn() após o fim da iteração.",
        "Sim, mas o valor de retorno substitui o último yield.",
        "Apenas se o gerador for do tipo string."
      ],
      correctAnswer: 1,
      explanation: "Desde o PHP 7.0, geradores podem retornar um valor final que serve como um resumo ou status do processamento."
    }
  ]
};