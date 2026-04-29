import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq19",
  title: "Quiz: Gestão de Dependências com Poetry",
  passingScore: 80,
  questions: [
    {
      id: "q19_1",
      question: "Para que serve o ficheiro 'poetry.lock'?",
      options: [
        "Para bloquear o acesso de outros utilizadores ao código",
        "Para garantir versões exatas e imutáveis de todas as dependências (reprodutibilidade)",
        "Para encriptar as senhas do banco de dados",
        "É apenas um ficheiro temporário que pode ser apagado"
      ],
      correctAnswer: 1
    },
    {
      id: "q19_2",
      question: "Qual a vantagem do resolver de dependências do Poetry sobre o pip tradicional?",
      options: [
        "O Poetry é mais colorido",
        "O Poetry resolve conflitos recursivos de dependências de forma exaustiva",
        "O pip não consegue instalar pacotes do PyPI",
        "Não existe diferença técnica"
      ],
      correctAnswer: 1
    }
  ]
};