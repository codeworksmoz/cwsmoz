
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "dt-q3",
  title: "Quiz: Browser DevTools Master",
  passingScore: 70,
  questions: [
    {
      id: "q3_1",
      question: "No painel Network, o que indica uma barra vermelha no carregamento de um arquivo?",
      options: ["Ficheiro muito pesado", "Erro de carregamento (404 ou 500)", "Apenas aviso de lentidão", "O ficheiro foi comprimido"],
      correctAnswer: 1
    },
    {
      id: "q3_2",
      question: "Qual ferramenta permite simular o rácio de CPU de um telemóvel antigo?",
      options: ["Elements", "Performance (CPU Throttling)", "Network", "Sources"],
      correctAnswer: 1
    },
    {
      id: "q3_3",
      question: "Onde podes forçar o estado de ':hover' num elemento para debugar o CSS?",
      options: ["Console", "Application", "Elements (Styles tab -> :hov)", "Sources"],
      correctAnswer: 2
    },
    {
      id: "q3_4",
      question: "Para que serve o 'Pretty Print' ({}) no painel Sources?",
      options: ["Mudar a cor do código", "Formatar ficheiros minificados para leitura humana", "Imprimir o código em PDF", "Eliminar comentários"],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "Qual painel monitoriza a saúde e registo de Service Workers?",
      options: ["Network", "Application", "Console", "Memory"],
      correctAnswer: 1
    },
    {
      id: "q3_6",
      question: "O comando 'Capture screenshot' na Command Palette do DevTools permite:",
      options: ["Tirar foto do código apenas", "Capturar a página inteira (Full size) em alta resolução", "Enviar foto para o WhatsApp", "Nada, é um comando fictício"],
      correctAnswer: 1
    }
  ]
};
