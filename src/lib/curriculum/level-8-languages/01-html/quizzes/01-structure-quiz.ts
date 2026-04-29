import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq1",
  title: "Quiz: Arquitetura de Documentos",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o impacto de omitir o <!DOCTYPE html> num site moderno?",
      options: [
        "O site não carrega",
        "O browser entra em 'Quirks Mode', podendo quebrar o layout e performance",
        "O JavaScript para de funcionar",
        "Nenhum, o browser resolve sozinho sem perdas"
      ],
      correctAnswer: 1,
      explanation: "Sem o Doctype, o navegador assume que o site é muito antigo e usa regras de renderização obsoletas da década de 90."
    },
    {
      id: "q2",
      question: "Por que devemos definir o atributo 'lang' na tag <html>?",
      options: [
        "Apenas para tradução automática",
        "Para mudar a cor do site",
        "Para auxiliar tecnologias assistivas e motores de busca no processamento linguístico",
        "É um requisito opcional sem impacto técnico"
      ],
      correctAnswer: 2,
      explanation: "O atributo lang ajuda leitores de ecrã a usar a pronúncia correta e o Google a indexar o site no mercado certo."
    }
  ]
};
