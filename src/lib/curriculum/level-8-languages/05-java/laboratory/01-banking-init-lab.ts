import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p1",
  language: "java",
  title: "Projeto Master Java: Sistema de Core Banking Reativo",
  description: "Inicie a fundação de um sistema bancário de alta escala.",
  statement: "Crie a estrutura de dados imutável para uma Transação usando Java Records e configure o validador base.",
  isProjectPart: true,
  template: `// Defina o Record de Transação aqui
public record Transaction(String id, double amount) {
    // Adicione validação no construtor compacto
    public Transaction {
        if (amount < 0) throw new IllegalArgumentException();
    }
}`,
  detailedExplanation: `
    <h3>🏦 Arquitetura Bancária</h3>
    <p>Neste projeto, vais construir o núcleo de um banco digital. Começamos com <strong>Records</strong> para garantir que os dados financeiros sejam imutáveis por design, uma regra de ouro em engenharia financeira.</p>
  `,
  objectives: [
    {
      id: "record",
      description: "Defina o Record 'Transaction' com campos id (String) e amount (double).",
      hint: "public record Transaction(String id, double amount) { }",
      test: "record Transaction"
    },
    {
      id: "validation",
      description: "Implemente um construtor compacto que lance IllegalArgumentException se o valor for negativo.",
      hint: "public Transaction { ... }",
      test: "IllegalArgumentException"
    }
  ]
};