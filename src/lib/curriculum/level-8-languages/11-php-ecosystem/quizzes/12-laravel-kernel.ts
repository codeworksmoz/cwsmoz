import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq12",
  title: "Quiz Master: Internals do Laravel",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual é o ponto de entrada principal de todas as requisições no Laravel?",
      options: ["app/Kernel.php", "public/index.php", "routes/web.php", "bootstrap/app.php"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Onde ocorre o registro oficial de serviços e ligações no Service Container?",
      options: ["Nos Controllers", "Nos Service Providers", "Nos Middlewares", "No ficheiro .env"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que o método handle() do HTTP Kernel faz?",
      options: ["Ligar ao MySQL.", "Transformar o Request em Response através da execução de rotas e middlewares.", "Enviar e-mails.", "Limpar o cache do blade."],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual o benefício de usar o Service Container para instanciar classes?",
      options: ["Aumentar a segurança do servidor.", "Facilitar o Autowiring e a Injeção de Dependência automática.", "Reduzir o tamanho das imagens.", "Traduzir o site."],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que caracteriza o padrão 'Pipeline' usado nos Middlewares do Laravel?",
      options: ["Uma lista linear de comandos.", "O pedido atravessa várias camadas e a resposta volta pelas mesmas camadas no sentido inverso.", "Uma base de dados em tempo real.", "Um tipo de erro de rede."],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "As 'Facades' no Laravel são tecnicamente o quê?",
      options: ["Classes estáticas puras.", "Proxies estáticos para objetos resolvidos dentro do Service Container.", "Um erro de design.", "Funções globais escondidas."],
      correctAnswer: 1
    }
  ]
};
