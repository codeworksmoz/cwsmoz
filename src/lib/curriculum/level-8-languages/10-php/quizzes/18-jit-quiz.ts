import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq18",
  title: "Quiz Master: JIT (Just-In-Time) e Performance de Silício",
  passingScore: 85,
  questions: [
    {
      id: "q18_1",
      question: "Qual a função primordial do JIT Compiler no PHP 8?",
      options: [
        "Comprimir os ficheiros .php para poupar espaço no disco.",
        "Traduzir Opcodes em código de máquina nativo da CPU durante a execução.",
        "Substituir o MySQL por um banco de dados em memória.",
        "Validar a sintaxe do código antes do deploy."
      ],
      correctAnswer: 1,
      explanation: "O JIT pula a interpretação da VM e gera instruções binárias que o processador executa diretamente."
    },
    {
      id: "q18_2",
      question: "Onde é que o JIT armazena o código de máquina gerado?",
      options: [
        "Numa pasta temporária no SSD.",
        "Dentro de um buffer dedicado no espaço de memória do OpCache.",
        "Na cache L1 do processador permanentemente.",
        "No ficheiro .htaccess."
      ],
      correctAnswer: 1,
      explanation: "O JIT é uma extensão das capacidades do OpCache e reside no mesmo segmento de memória RAM reservada."
    },
    {
      id: "q18_3",
      question: "Por que uma aplicação web simples que apenas consulta o banco de dados (I/O Bound) pode não ver grandes ganhos com o JIT?",
      options: [
        "Porque o JIT não suporta SQL.",
        "Porque o tempo de espera pela rede e disco é muito maior que o tempo de execução do código PHP.",
        "Porque o JIT só funciona em modo CLI.",
        "Porque as bases de dados bloqueiam o compilador JIT."
      ],
      correctAnswer: 1,
      explanation: "Em aplicações I/O bound, o CPU passa a maior parte do tempo ocioso esperando por outros componentes; otimizar o cálculo não resolve o gargalo externo."
    },
    {
      id: "q18_4",
      question: "O que o 'Tracing JIT' faz de diferente do 'Function JIT'?",
      options: [
        "O Tracing JIT desenha gráficos de performance no ecrã.",
        "O Tracing JIT identifica e compila apenas os caminhos de execução (traces) mais frequentes dentro do código.",
        "O Tracing JIT apaga as variáveis não utilizadas.",
        "O Function JIT é 10x mais rápido que o Tracing."
      ],
      correctAnswer: 1,
      explanation: "O Tracing JIT é mais granular e eficiente, pois foca nos loops e fluxos que realmente consomem recursos."
    },
    {
      id: "q18_5",
      question: "O que indica o parâmetro 'opcache.jit_buffer_size = 0'?",
      options: [
        "Que o JIT usará toda a memória disponível.",
        "Que o JIT está desativado.",
        "Que o JIT está em modo de segurança máxima.",
        "Que o buffer é alocado dinamicamente pelo SO."
      ],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "Qual o impacto de um JIT mal configurado num servidor com pouco tráfego?",
      options: [
        "Pode aumentar o tempo de resposta inicial devido ao custo de compilação sem benefício real de repetição.",
        "O site muda de cor.",
        "Aumenta a velocidade da internet dos utilizadores.",
        "Nenhum impacto."
      ],
      correctAnswer: 0,
      explanation: "A compilação JIT consome CPU. Se o código não for executado milhares de vezes, o custo de o compilar pode ser superior ao ganho de execução."
    }
  ]
};
