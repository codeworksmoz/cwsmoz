import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t19-quiz",
  title: "Quiz: Ecossistema e Gestão de Pacotes",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o papel principal de um Gestor de Pacotes (ex: NPM, Pip)?",
      options: [
        "Aumentar a velocidade da CPU",
        "Automatizar o download e a gestão de versões de bibliotecas externas",
        "Criptografar os ficheiros do disco",
        "Substituir o compilador da linguagem"
      ],
      correctAnswer: 1,
      explanation: "Gestores de pacotes permitem que instales e atualizes código de terceiros de forma organizada e segura."
    },
    {
      id: "q2",
      question: "Na versão '2.5.4', o que representa o número '2'?",
      options: ["Bug fix (Patch)", "Nova funcionalidade (Minor)", "Versão Principal (Major) com quebras de compatibilidade", "O número de programadores no projeto"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Para que serve o ficheiro 'lock' (ex: package-lock.json)?",
      options: [
        "Para impedir que outras pessoas leiam o código",
        "Para garantir que todos instalam as mesmas versões exatas das dependências",
        "Para guardar as senhas do banco de dados",
        "É um ficheiro temporário que deve ser apagado sempre"
      ],
      correctAnswer: 1,
      explanation: "O lock file 'congela' a árvore de dependências, garantindo reprodutibilidade absoluta do ambiente."
    },
    {
      id: "q4",
      question: "O que o símbolo '^' (circunflexo) significa numa versão (ex: ^1.2.0)?",
      options: [
        "Permite atualizar apenas patches",
        "Permite atualizar para qualquer versão minor ou patch superior, mas nunca muda o Major",
        "Impede qualquer atualização",
        "Obriga o uso de uma versão beta"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual o perigo de ter uma 'Dependência Circular'?",
      options: [
        "O código fica muito curto",
        "Cria um loop infinito de carregamento que pode travar o build ou a execução",
        "O computador desliga sozinho",
        "Não existe perigo em dependências circulares"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Onde ficam guardados fisicamente os pacotes descarregados no JavaScript/Node?",
      options: ["No disco C: geral", "Na pasta node_modules do projeto", "Dentro do ficheiro HTML", "Na memória RAM apenas"],
      correctAnswer: 1
    }
  ]
};
