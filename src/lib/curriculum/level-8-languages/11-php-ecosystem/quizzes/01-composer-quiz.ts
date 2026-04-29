import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq1",
  title: "Quiz Master: Composer e Otimização Industrial",
  passingScore: 85,
  questions: [
    {
      id: "q1",
      question: "Qual comando gera um mapa de classes estático para eliminar buscas em disco no PHP?",
      options: [
        "composer update --no-dev",
        "composer dump-autoload -o",
        "composer install",
        "composer refresh-map"
      ],
      correctAnswer: 1,
      explanation: "O parâmetro -o (optimize) converte as regras PSR-4 num classmap estático para performance máxima."
    },
    {
      id: "q2",
      question: "O que acontece ao ativar a flag 'classmap-authoritative'?",
      options: [
        "O PHP ignora todas as classes de terceiros.",
        "O motor do PHP deixa de procurar ficheiros no disco se a classe não estiver no mapa gerado.",
        "Aumenta a segurança das variáveis globais.",
        "O composer.lock é apagado automaticamente."
      ],
      correctAnswer: 1,
      explanation: "Isto impede que o PHP perca tempo olhando para o sistema de ficheiros, garantindo o menor TTFB possível."
    },
    {
      id: "q3",
      question: "Para que serve o ficheiro 'composer.lock' num ambiente de produção?",
      options: [
        "Para guardar as senhas da base de dados.",
        "Para garantir a instalação de versões exatas e imutáveis das dependências.",
        "Para acelerar o download de novas bibliotecas.",
        "É um ficheiro temporário que pode ser ignorado."
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual a função do comando 'composer audit'?",
      options: [
        "Verificar erros de sintaxe no código.",
        "Auditar o ficheiro lock contra bases de dados de vulnerabilidades conhecidas (CVEs).",
        "Contar o número de linhas de código.",
        "Validar o licenciamento dos pacotes."
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Na versão '^1.2.3', o que o símbolo '^' (circunflexo) representa no SemVer?",
      options: [
        "Permite atualizar apenas para versões de Patch.",
        "Permite qualquer atualização que não quebre a compatibilidade (não muda o Major).",
        "Impede qualquer atualização automática.",
        "Obriga o uso de versões Beta."
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Onde devem ser definidos os scripts de automação de qualidade do projeto?",
      options: [
        "No ficheiro php.ini.",
        "Na seção 'scripts' do composer.json.",
        "No .htaccess do servidor Apache.",
        "Dentro da pasta vendor."
      ],
      correctAnswer: 1
    }
  ]
};
