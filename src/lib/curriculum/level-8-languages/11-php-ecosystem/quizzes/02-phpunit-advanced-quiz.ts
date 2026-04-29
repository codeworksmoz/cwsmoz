import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq2",
  title: "Quiz Master: PHPUnit e Engenharia de Testes",
  passingScore: 85,
  questions: [
    {
      id: "q2_1",
      question: "Qual a diferença técnica fundamental entre um Mock e um Stub no PHPUnit?",
      options: [
        "Stub é para classes e Mock é para interfaces.",
        "Stub apenas fornece dados de retorno; Mock verifica se o comportamento (chamada do método) ocorreu como esperado.",
        "Mocks são mais lentos que Stubs.",
        "Stubs não podem ser usados em testes unitários."
      ],
      correctAnswer: 1,
      explanation: "Mocks focam em 'Expectations' (comportamento), enquanto Stubs focam apenas em fornecer o estado necessário para o teste prosseguir."
    },
    {
      id: "q2_2",
      question: "Para que serve a anotação ou atributo #[DataProvider]?",
      options: [
        "Para ligar o teste a uma base de dados SQL real.",
        "Para fornecer múltiplos conjuntos de argumentos a um único método de teste, evitando repetição de código.",
        "Para aumentar a prioridade de execução do teste.",
        "Para gerar documentação técnica automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "O que o método 'expects($this->once())' garante num teste?",
      options: [
        "Que o teste correrá apenas uma vez.",
        "Que o método mockado deve ser invocado exatamente uma vez, caso contrário o teste falha.",
        "Que o banco de dados tem apenas um registro.",
        "Que a memória RAM será limpa após o método."
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "Por que se deve evitar o uso de classes concretas em 'createMock()'?",
      options: [
        "Porque o PHP proíbe.",
        "Porque mockar implementações concretas pode ocultar dependências indesejadas e tornar o teste frágil perante mudanças internas.",
        "Porque Mocks de classes são 10x mais lentos que de interfaces.",
        "Porque interfaces não ocupam espaço no Heap."
      ],
      correctAnswer: 1,
      explanation: "Mockar interfaces garante que o teste foca apenas no contrato (API), respeitando o princípio da Inversão de Dependência."
    },
    {
      id: "q2_5",
      question: "O que o método 'willReturnSelf()' faz num Mock?",
      options: [
        "Retorna uma cópia do objeto original.",
        "Facilita o teste de APIs fluidas (Method Chaining), fazendo o mock retornar a si próprio.",
        "Reinicia o estado do mock.",
        "Encerra o teste com sucesso."
      ],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "Qual a função do método 'setUp()' numa classe de teste?",
      options: [
        "Configurar o ambiente (instanciar objetos, preparar dados) antes de CADA método de teste ser executado.",
        "Instalar as dependências do Composer.",
        "Executar uma única vez para toda a classe.",
        "Verificar se o servidor web está online."
      ],
      correctAnswer: 0
    }
  ]
};
