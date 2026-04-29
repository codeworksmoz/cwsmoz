import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq17",
  title: "Quiz: Drag and Drop API Master",
  passingScore: 80,
  questions: [
    {
      id: "q17_1",
      question: "Qual atributo deve ser adicionado a uma <div> para que o utilizador possa arrastá-la?",
      options: [
        "moveable='true'",
        "draggable='true'",
        "allow-drag='yes'",
        "role='draggable'"
      ],
      correctAnswer: 1
    },
    {
      id: "q17_2",
      question: "O que deve ser feito obrigatoriamente no evento 'dragover' para que o evento 'drop' possa ocorrer?",
      options: [
        "Chamar o método e.stopImmediatePropagation()",
        "Executar o comando e.preventDefault()",
        "Mudar o cursor do rato manualmente",
        "Não é necessário fazer nada"
      ],
      correctAnswer: 1,
      explanation: "Por padrão, os browsers não permitem a largada de dados em outros elementos. e.preventDefault() cancela esse bloqueio."
    },
    {
      id: "q17_3",
      question: "Qual objeto é responsável por armazenar e recuperar os dados transferidos durante o arrasto?",
      options: [
        "event.payload",
        "event.dataTransfer",
        "event.storage",
        "event.dragData"
      ],
      correctAnswer: 1
    },
    {
      id: "q17_4",
      question: "Qual método do dataTransfer é usado para definir a informação enviada no início do movimento?",
      options: [
        "sendData()",
        "setData(format, data)",
        "write(data)",
        "push(data)"
      ],
      correctAnswer: 1
    },
    {
      id: "q17_5",
      question: "O evento 'dragenter' dispara quando:",
      options: [
        "O utilizador clica no elemento",
        "O elemento arrastado entra no perímetro da zona de destino",
        "O elemento termina o movimento",
        "O browser detecta um erro de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q17_6",
      question: "Podemos arrastar ficheiros reais do sistema operativo para dentro do browser usando esta API?",
      options: [
        "Sim, os ficheiros ficam disponíveis na propriedade e.dataTransfer.files",
        "Não, por razões de segurança do Kernel",
        "Apenas se o site estiver em HTTPS",
        "Apenas em sistemas Linux"
      ],
      correctAnswer: 0,
      explanation: "Esta é uma funcionalidade poderosa que permite criar áreas de upload de ficheiros de alta fidelidade no browser."
    }
  ]
};
