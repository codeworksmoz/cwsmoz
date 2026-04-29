import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q9",
  title: "Quiz: Docker e Contentores",
  passingScore: 70,
  questions: [
    {
      id: "q9_1",
      question: "Qual a diferença entre Imagem e Contentor?",
      options: ["Nenhuma", "Imagem é o molde (estático); Contentor é a instância viva (em execução)", "Contentor é mais pesado que a Imagem", "Imagem é apenas para fotos"],
      correctAnswer: 1
    },
    {
      id: "q9_2",
      question: "O que o comando 'docker-compose up' faz?",
      options: ["Apaga todos os ficheiros", "Inicia todos os serviços definidos no ficheiro YAML em simultâneo", "Envia o código para a nuvem", "Aumenta a velocidade do processador"],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "Para que serve o ficheiro '.dockerignore'?",
      options: ["Para o Docker ignorar a internet", "Para evitar que ficheiros desnecessários (como node_modules) entrem na imagem, reduzindo o seu peso", "Para esconder o código do hacker", "Não tem utilidade real"],
      correctAnswer: 1
    },
    {
      id: "q9_4",
      question: "Um contentor Docker partilha o quê com o sistema operativo hospedeiro?",
      options: ["Toda a interface gráfica", "O Kernel (núcleo)", "As pastas pessoais do utilizador", "Nada, é 100% isolado até o hardware"],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "Qual a vantagem de usar Docker para uma Base de Dados?",
      options: ["Os dados ficam mais seguros", "Podes subir a versão exata do banco com um comando, sem instalar nada no teu Windows/Mac", "A base de dados fica infinita", "O Docker limpa os dados sozinho"],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "O que é um 'Volume' no Docker?",
      options: ["O nível do som", "Uma forma de persistir dados fora do contentor para que não se percam ao reiniciá-lo", "O tamanho do ficheiro", "A velocidade da rede"],
      correctAnswer: 1
    }
  ]
};