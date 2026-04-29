import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "rb-p1",
  language: "ruby",
  title: "Projeto Master Ruby: Expressive DSL Engine",
  description: "Inicie a construção de uma linguagem interna (DSL) de elite.",
  statement: "Utilize blocos e a classe Proc para criar um método 'config' que aceite um bloco de configuração.",
  isProjectPart: true,
  template: `class DSLEngine
  attr_reader :settings

  def initialize
    @settings = {}
  end

  def config(&block)
    # Implemente a execução do bloco aqui
  end
end`,
  detailedExplanation: `
    <h3>💎 A Arte do DSL</h3>
    <p>O Ruby é famoso pela sua capacidade de criar linguagens específicas de domínio (DSL) que parecem inglês natural. O primeiro passo é dominar a passagem de <strong>blocos</strong> (closures) para métodos.</p>
  `,
  objectives: [
    {
      id: "block_exec",
      description: "Chame o bloco dentro do método config usando block.call ou yield.",
      hint: "yield self if block_given?",
      test: "yield"
    }
  ]
};
