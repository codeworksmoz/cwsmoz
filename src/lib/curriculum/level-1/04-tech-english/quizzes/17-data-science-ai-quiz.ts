
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q17",
  title: "Quiz: Data Science & AI Terms",
  passingScore: 70,
  questions: [
    {
      id: "q17_1",
      question: "The process of teaching an AI model using data is:",
      options: ["Coding", "Training", "Deploying", "Scripting"],
      correctAnswer: 1
    },
    {
      id: "q17_2",
      question: "Unfair prejudice in data or algorithms is called:",
      options: ["Error", "Bias", "Noise", "Weight"],
      correctAnswer: 1
    },
    {
      id: "q17_3",
      question: "An AI model making a prediction is called:",
      options: ["Inference", "Training", "Input", "Loop"],
      correctAnswer: 0
    },
    {
      id: "q17_4",
      question: "A collection of data used for training is a:",
      options: ["Database", "Dataset", "Log", "List"],
      correctAnswer: 1
    },
    {
      id: "q17_5",
      question: "AI that generates new content (text, image) is:",
      options: ["Predictive AI", "Generative AI", "Analytical AI", "Basic AI"],
      correctAnswer: 1
    },
    {
      id: "q17_6",
      question: "Removing 'dirty' or incorrect data from a set is:",
      options: ["Data Scraping", "Data Cleaning", "Data Mining", "Data Loading"],
      correctAnswer: 1
    }
  ]
};
