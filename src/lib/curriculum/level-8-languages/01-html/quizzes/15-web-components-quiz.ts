import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq15",
  title: "Quiz: Web Components e Templates Nativos",
  passingScore: 80,
  questions: [
    {
      id: "q15_1",
      question: "Qual o comportamento padrão do conteúdo dentro de uma tag <template>?",
      options: [
        "É renderizado imediatamente mas fica invisível.",
        "O browser verifica a sintaxe, mas não renderiza nem descarrega imagens até ser clonado.",
        "É removido do documento pelo Garbage Collector.",
        "Funciona apenas dentro de um iframe."
      ],
      correctAnswer: 1,
      explanation: "O elemento <template> é inerte; ele serve apenas como um armazém de código para ser instanciado via JavaScript."
    },
    {
      id: "q15_2",
      question: "Por que o nome de um Custom Element deve obrigatoriamente conter um hífen (ex: <my-tag>)?",
      options: [
        "Para o CSS reconhecer como um componente.",
        "Para evitar conflitos com tags HTML nativas presentes e futuras da especificação W3C.",
        "Porque o JavaScript não aceita nomes de classes sem traços.",
        "Para facilitar a tradução automática do Google."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_3",
      question: "Qual método do ciclo de vida deve ser usado para limpar event listeners quando um componente sai da tela?",
      options: [
        "constructor()",
        "attributeChangedCallback()",
        "disconnectedCallback()",
        "finalize()"
      ],
      correctAnswer: 2,
      explanation: "O disconnectedCallback é o local ideal para limpeza de recursos, prevenindo fugas de memória (memory leaks)."
    },
    {
      id: "q15_4",
      question: "Para que serve a tag <slot> num Web Component?",
      options: [
        "Para guardar a posição do cursor.",
        "Para permitir a projeção de conteúdo externo para dentro do template do componente.",
        "Para definir o espaço de anúncios do Google.",
        "Para ligar o componente a uma base de dados SQL."
      ],
      correctAnswer: 1
    },
    {
      id: "q15_5",
      question: "Qual o método correto para registar um componente no browser?",
      options: [
        "window.registerComponent()",
        "customElements.define('nome-tag', Classe)",
        "document.createElement('custom')",
        "browser.elements.add()"
      ],
      correctAnswer: 1
    },
    {
      id: "q15_6",
      question: "É possível usar Web Components dentro de um projeto React ou Next.js?",
      options: [
        "Não, são tecnologias incompatíveis.",
        "Sim, pois são padrões nativos do browser e qualquer framework consegue renderizá-los como tags comuns.",
        "Apenas se o React estiver na versão 15.",
        "Apenas no modo de desenvolvimento."
      ],
      correctAnswer: 1
    }
  ]
};
