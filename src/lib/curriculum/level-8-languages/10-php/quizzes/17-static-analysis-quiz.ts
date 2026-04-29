import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq17",
  title: "Quiz Master: Análise Estática de Alta Fidelidade",
  passingScore: 85,
  questions: [
    {
      id: "q17_1",
      question: "Qual o comportamento obrigatório do PHPStan no Nível 9 (Level 9)?",
      options: [
        "Apenas verifica se as classes existem.",
        "Proíbe qualquer operação ou acesso de propriedade sobre o tipo 'mixed', exigindo narrowing explícito.",
        "Obriga o uso de aspas duplas em strings.",
        "Desativa o uso de arrays associativos."
      ],
      correctAnswer: 1,
      explanation: "O Nível 9 foca na segurança total; como 'mixed' pode ser qualquer coisa, o motor exige que proves o tipo real antes de o usar."
    },
    {
      id: "q17_2",
      question: "O que permite o uso da anotação '@template' em PHPDoc?",
      options: [
        "Criar ficheiros de template HTML.",
        "Implementar Generics em tempo de análise estática, garantindo segurança de tipos em coleções.",
        "Mudar o tema do editor visualmente.",
        "Definir variáveis globais."
      ],
      correctAnswer: 1
    },
    {
      id: "q17_3",
      question: "No contexto do Psalm, o que é a 'Taint Analysis'?",
      options: [
        "Uma análise de performance de loops.",
        "O rastreamento de fluxo de dados desde fontes inseguras (inputs) até sumidouros sensíveis (outputs/DB), prevenindo ataques como XSS.",
        "A limpeza automática de ficheiros temporários.",
        "Uma técnica para encontrar variáveis não utilizadas."
      ],
      correctAnswer: 1
    },
    {
      id: "q17_4",
      question: "O que caracteriza o 'Type Narrowing' (Estreitamento de Tipo)?",
      options: [
        "Reduzir o tamanho do ficheiro PHP.",
        "A capacidade das ferramentas de análise estática reduzirem o tipo possível de uma variável após uma verificação (ex: instanceof ou is_string).",
        "Converter floats para integers para poupar RAM.",
        "Eliminar classes do projeto."
      ],
      correctAnswer: 1
    },
    {
      id: "q17_5",
      question: "Por que se recomenda integrar o PHPStan no pipeline de CI (GitHub Actions)?",
      options: [
        "Para formatar o código automaticamente.",
        "Para garantir que nenhum código que contenha inconsistências de tipos ou bugs lógicos detetáveis seja publicado em produção.",
        "Para traduzir o código para outras línguas.",
        "Para aumentar o número de linhas do projeto."
      ],
      correctAnswer: 1
    },
    {
      id: "q17_6",
      question: "Qual a diferença entre um erro detetado pelo Linter e um erro detetado pelo PHPStan Nível 9?",
      options: [
        "Nenhuma, são iguais.",
        "O Linter deteta apenas erros de sintaxe (código que não roda); o PHPStan deteta erros de lógica e tipos (código que roda, mas está errado).",
        "O PHPStan é mais lento.",
        "O Linter só funciona em HTML."
      ],
      correctAnswer: 1
    }
  ]
};
