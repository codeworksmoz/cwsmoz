import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t9-quiz",
  title: "Quiz: Precisão Numérica e IEEE 754",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Por que razão a conta 0.1 + 0.2 nem sempre resulta em 0.3 exactos no computador?",
      options: [
        "Porque o hardware é fabricado com margem de erro",
        "Porque certas frações decimais resultam em dízimas infinitas em binário",
        "Porque o sistema operativo consome bits da operação",
        "Porque o compilador ignora as casas decimais"
      ],
      correctAnswer: 1,
      explanation: "Tal como 1/3 não tem fim em base 10, o 0.1 não tem fim em base 2. O computador trunca o número, gerando um pequeno erro de arredondamento."
    },
    {
      id: "q2",
      question: "Num número de dupla precisão (64 bits), qual a função da Mantissa?",
      options: [
        "Definir se o número é par ou ímpar",
        "Guardar o sinal (positivo ou negativo)",
        "Armazenar a precisão e os algarismos significativos do número",
        "Controlar a velocidade de processamento da conta"
      ],
      correctAnswer: 2,
      explanation: "A Mantissa (ou fração) ocupa 52 bits e é responsável pela precisão do valor real que está a ser representado."
    },
    {
      id: "q3",
      question: "Como deve um engenheiro de elite guardar valores monetários (dinheiro) numa base de dados?",
      options: [
        "Usando o tipo Float para permitir cêntimos",
        "Usando Strings para evitar arredondamentos",
        "Usando Inteiros representando a menor unidade (ex: cêntimos)",
        "Depende da moeda do país"
      ],
      correctAnswer: 2,
      explanation: "Ao usar inteiros (ex: 1050 em vez de 10.50), eliminamos completamente o risco de erros de ponto flutuante em cálculos financeiros."
    },
    {
      id: "q4",
      question: "O que representa o valor 'NaN' no padrão IEEE 754?",
      options: [
        "Novo Alinhamento Numérico",
        "Not a Number (Resultado de uma operação matemática inválida)",
        "Número Altamente Negativo",
        "Null and None"
      ],
      correctAnswer: 1,
      explanation: "NaN ocorre quando tentas fazer algo impossível, como 0 dividido por 0 ou a raiz quadrada de um número negativo."
    },
    {
      id: "q5",
      question: "Qual o impacto de comparar dois números decimais usando '==' em sistemas críticos?",
      options: [
        "Nenhum, o computador resolve o arredondamento",
        "É seguro se o número for pequeno",
        "É perigoso, pois a comparação pode falhar devido a micro-imprecisões de bits",
        "O código corre mais depressa"
      ],
      correctAnswer: 2,
      explanation: "Devido à imprecisão, 0.1 + 0.2 == 0.3 retornará 'Falso'. Engenheiros usam uma margem de erro (epsilon) ou comparam a diferença absoluta."
    }
  ]
};
