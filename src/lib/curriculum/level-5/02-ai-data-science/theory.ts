
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => ({
  id: `ai-t${i + 1}`,
  title: [
    "Introdução à IA e Inteligência Computacional", "Supervised Learning: Regressão",
    "Supervised Learning: Classificação", "Unsupervised Learning: Clustering",
    "Redes Neuronais & Deep Learning", "Visão Computacional",
    "Processamento de Linguagem Natural (NLP)", "LLMs & Transformers",
    "Engenharia de Prompts & RAG", "Ética na IA & IA Responsável",
    "Vector Databases & Embeddings", "AI Agents & Autonomous Loops",
    "Fine-tuning de Modelos", "MLOps: Ciclo de Vida do Modelo",
    "Análise Exploratória de Dados (EDA)", "Engenharia de Features",
    "Sistemas de Recomendação", "Reforcement Learning Basics",
    "IA Generativa além do Texto", "Matemática para ML: Álgebra & Cálculo",
    "O Futuro da Inteligência Geral (AGI)"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🤖 Inteligência Artificial</h2><p>Exploração técnica dos algoritmos que estão a moldar o futuro da tecnologia.</p></div>`,
  quizId: `ai-q${i + 1}`
}));
