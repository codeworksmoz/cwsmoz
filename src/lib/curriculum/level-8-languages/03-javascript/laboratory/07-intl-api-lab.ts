import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p7",
  language: "html",
  title: "Projeto Master: Internacionalização com Intl",
  description: "Formate moedas e datas para o mercado moçambicano sem bibliotecas externas.",
  statement: "Utilize Intl.NumberFormat para formatar o valor 1500.50 como Meticais (MZN).",
  isProjectPart: true,
  template: `const valor = 1500.50;
// Formate para 'pt-MZ' com a moeda 'MZN'
const formatador = ;
console.log(formatador.format(valor));`,
  detailedExplanation: `
    <h3>🌍 Localização Nativa</h3>
    <p>A API <code>Intl</code> é extremamente poderosa e leve. Ela substitui bibliotecas pesadas como Moment.js ou numeral.js, garantindo que o seu projeto Master respeite as normas culturais de cada país.</p>
  `,
  objectives: [
    {
      id: "intl_number",
      description: "Instancie Intl.NumberFormat para a moeda MZN.",
      hint: "new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' })",
      test: "currency: 'MZN'"
    }
  ]
};
