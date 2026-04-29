import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq19",
  title: "Quiz Master: Segurança Avançada e RCE",
  passingScore: 85,
  questions: [
    {
      id: "q19_1",
      question: "Qual o perigo técnico imediato de utilizar a função unserialize() com dados vindos do utilizador?",
      options: [
        "A aplicação fica mais lenta devido ao parsing.",
        "Permite o ataque de 'PHP Object Injection', disparando métodos mágicos como __destruct() de classes arbitrárias.",
        "O banco de dados pode bloquear a conexão por excesso de caracteres.",
        "O PHP converte automaticamente todos os objetos para arrays."
      ],
      correctAnswer: 1,
      explanation: "A desserialização reconstrói objetos e ativa os seus métodos mágicos de ciclo de vida, o que pode ser abusado para apagar ficheiros ou executar código se existirem 'gadget chains' no projeto."
    },
    {
      id: "q19_2",
      question: "Por que se deve preferir json_decode() em vez de unserialize() para troca de dados?",
      options: [
        "O JSON suporta cores nos textos.",
        "O JSON é um formato de dados inerte; ele não consegue instanciar classes nem executar lógica durante o parsing.",
        "O JSON é uma exclusividade do PHP 8.",
        "O JSON encripta os dados automaticamente."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_3",
      question: "O que a flag de cookie 'HttpOnly' garante?",
      options: [
        "Que o site só abre em navegadores modernos.",
        "Que o cookie não pode ser acedido via JavaScript (document.cookie), mitigando roubo de sessão por XSS.",
        "Que o cookie é guardado apenas no servidor.",
        "Que o utilizador não pode apagar o cookie."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_4",
      question: "Como deves tratar argumentos passados para funções de sistema como exec() ou system()?",
      options: [
        "Usando aspas duplas em volta da variável.",
        "Utilizando a função escapeshellarg() para limpar e neutralizar caracteres especiais de shell.",
        "Convertendo o comando para base64.",
        "Não é necessário tratamento se o utilizador for admin."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_5",
      question: "O que o comando 'composer audit' verifica especificamente?",
      options: [
        "Se o código segue o padrão PSR-12.",
        "Se as dependências instaladas no projeto possuem vulnerabilidades conhecidas (CVEs) em bases de dados públicas.",
        "O tempo de execução de cada biblioteca.",
        "Se os ficheiros do projeto estão assinados digitalmente."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_6",
      question: "Qual a melhor prática para lidar com o uso de eval() num projeto de elite?",
      options: [
        "Usar apenas com strings curtas.",
        "Remover completamente o uso de eval(), substituindo-o por lógica estruturada, polimorfismo ou mapas de funções.",
        "Encriptar a string antes de passar ao eval().",
        "Usar apenas em servidores Windows."
      ],
      correctAnswer: 1,
      explanation: "eval() é considerado o 'buraco negro' da segurança. Quase qualquer uso de eval() pode ser substituído por um design pattern melhor (como Factory ou Strategy) que seja seguro e testável."
    }
  ]
};
