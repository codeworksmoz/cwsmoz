import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t17-quiz",
  title: "Quiz: Domínio de JSON e Serialização",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual a diferença sintática obrigatória entre um Objeto JS e uma String JSON?",
      options: [
        "O JSON usa aspas simples",
        "No JSON, as chaves DEVEM estar entre aspas duplas",
        "O JSON não aceita números",
        "Objetos JS não podem ter chaves"
      ],
      correctAnswer: 1,
      explanation: "No formato JSON, tanto as chaves como os valores de texto têm de usar aspas duplas obrigatoriamente."
    },
    {
      id: "q2",
      question: "Para que serve o método 'JSON.stringify()'?",
      options: [
        "Para converter uma string num objeto",
        "Para transformar um objeto de memória numa string de texto para envio",
        "Para validar se o código tem erros",
        "Para apagar o objeto da memória"
      ],
      correctAnswer: 1,
      explanation: "Serializar (stringify) é preparar o dado para 'viagem', transformando-o em texto."
    },
    {
      id: "q3",
      question: "O que acontece se tentares incluir uma Função dentro de um ficheiro JSON?",
      options: [
        "A função corre no servidor",
        "O JSON é invalidado, pois o formato não suporta tipos executáveis",
        "A função é convertida para texto automaticamente",
        "O browser ignora e continua"
      ],
      correctAnswer: 1,
      explanation: "JSON é um formato de DADOS puro. Ele não guarda lógica, apenas valores estáticos."
    },
    {
      id: "q4",
      question: "Qual o erro comum ao usar 'JSON.parse()'?",
      options: [
        "Passar um objeto em vez de uma string",
        "Tentar converter uma string mal formatada, o que lança um erro fatal",
        "Esquecer de importar a biblioteca JSON",
        "Ambas as opções A e B"
      ],
      correctAnswer: 3,
      explanation: "JSON.parse() espera uma string. Se a string tiver um erro (ex: aspa a menos), o programa crasha se não houver um try/catch."
    },
    {
      id: "q5",
      question: "Como o Python lida nativamente com JSON?",
      options: [
        "Usa os métodos json.dumps() e json.loads()",
        "Usa os mesmos métodos que o JavaScript",
        "Não suporta JSON nativamente",
        "Usa a biblioteca pandas obrigatoriamente"
      ],
      correctAnswer: 0,
      explanation: "Em Python, o módulo 'json' é padrão. dumps (dump string) serializa e loads (load string) desserializa."
    },
    {
      id: "q6",
      question: "Qual o impacto de segurança ao receber JSON de uma API externa?",
      options: [
        "Nenhum, JSON é sempre seguro",
        "O perigo de ataques de negação de serviço (DoS) se a string for massiva e travar o parser",
        "O perigo de o JSON apagar a BIOS do computador",
        "O JSON pode conter vírus que executam sozinhos"
      ],
      correctAnswer: 1,
      explanation: "Processar strings gigantescas de JSON consome muita CPU e memória. Engenheiros devem limitar o tamanho dos payloads recebidos."
    }
  ]
};