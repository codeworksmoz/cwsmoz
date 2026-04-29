import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p1",
  language: "java",
  title: "Laboratório: Modelagem com Records",
  description: "Crie estruturas de dados imutáveis.",
  statement: "Converta uma classe POJO simples para um Record chamado 'Product' com 'id' e 'price'.",
  template: "public record Product(Long id, double price) { }",
  detailedExplanation: "<h3>📦 Records em Ação</h3><p>Records eliminam a necessidade de getters, setters e construtores manuais para classes que servem apenas como contentores de dados.</p>",
  objectives: [
    { id: "obj1", description: "Definir record Product", test: "record Product" }
  ]
};