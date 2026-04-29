import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq6",
  title: "Quiz Master: Gestão de Memória e GC Internals",
  passingScore: 85,
  questions: [
    {
      id: "q6_1",
      question: "Qual o principal mecanismo de gestão de memória do PHP para objetos?",
      options: [
        "Garbage Collector geracional (como Java)",
        "Reference Counting (Contagem de Referências)",
        "Alocação manual de ponteiros (como C)",
        "Compactação de Heap em tempo real"
      ],
      correctAnswer: 1,
      explanation: "O PHP baseia-se na contagem de referências no zval; quando o contador chega a zero, a memória é libertada imediatamente."
    },
    {
      id: "q6_2",
      question: "O que é o 'Cycle Collector' do PHP e qual o seu objetivo?",
      options: [
        "Um temporizador de execução de scripts",
        "Um mecanismo que identifica e limpa referências circulares que o refcounting simples ignora",
        "Um limpador de ficheiros temporários do sistema",
        "Um plugin para acelerar o acesso ao disco"
      ],
      correctAnswer: 1,
      explanation: "O Cycle Collector resolve o problema de objetos que se referenciam mutuamente, impedindo que o seu refcount chegue a zero mesmo sem uso externo."
    },
    {
      id: "q6_3",
      question: "O que a técnica de 'Copy-on-Write' (COW) otimiza no motor Zend?",
      options: [
        "A velocidade de escrita em base de dados",
        "O uso de RAM ao passar variáveis (como arrays grandes) entre funções, duplicando dados apenas se houver modificação",
        "A compressão de ficheiros .php no disco",
        "A segurança das sessões do utilizador"
      ],
      correctAnswer: 1,
      explanation: "COW permite que múltiplas variáveis partilhem a mesma memória enquanto forem apenas lidas, poupando alocações massivas."
    },
    {
      id: "q6_4",
      question: "A função gc_collect_cycles() deve ser usada em quais cenários?",
      options: [
        "Em cada linha do código fonte",
        "Em scripts de longa duração (CLI/Workers) para libertar memória de ciclos antes do limite do buffer",
        "Apenas no final do carregamento do site",
        "Para acelerar o download de imagens"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "Por que o modelo 'Shared-Nothing' do PHP facilita a gestão de memória em servidores FPM?",
      options: [
        "Porque a RAM é global e nunca é limpa",
        "Porque cada pedido (request) tem o seu próprio espaço de memória isolado que é totalmente destruído ao terminar",
        "Porque os utilizadores partilham a mesma sessão",
        "Porque o PHP não usa memória RAM para renderizar HTML"
      ],
      correctAnswer: 1,
      explanation: "A limpeza total ao fim do request previne que memory leaks acumulados afetem o servidor de forma permanente."
    },
    {
      id: "q6_6",
      question: "O que acontece ao refcount de um zval quando passas uma variável por referência (&$var)?",
      options: [
        "O refcount aumenta em 1",
        "O refcount não muda, mas a flag 'is_ref' é ativada no zval",
        "O refcount é resetado para zero",
        "A variável é movida para o disco"
      ],
      correctAnswer: 1,
      explanation: "O motor do PHP utiliza a flag is_ref para tratar referências de forma diferente da atribuição comum (COW)."
    }
  ]
};
