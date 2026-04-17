import type { PracticeExercise } from '../../../../../types';

export const decimalToBinary: PracticeExercise = {
    id: 'js-t1-decimal-to-binary',
    title: 'Conversor Decimal → Binário',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta um número decimal inteiro positivo para a sua representação binária como string.',
    template: `/**
 * Converte um número decimal para binário.
 * @param {number} decimal - Número inteiro positivo
 * @returns {string} - Representação binária
 * 
 * Exemplos:
 * decimalToBinary(0) -> "0"
 * decimalToBinary(5) -> "101"
 * decimalToBinary(42) -> "101010"
 */
function decimalToBinary(decimal) {
    // Implemente a conversão aqui
}`,
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Convertendo Decimal para Binário em JavaScript</h2>
        <h3>Método Manual:</h3>
        <pre><code>function decimalToBinary(decimal) {
    if (decimal === 0) return "0";
    
    let binary = "";
    while (decimal > 0) {
        const remainder = decimal % 2;
        binary = remainder + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}</code></pre>
        <h3>Método Nativo:</h3>
        <pre><code>function decimalToBinary(decimal) {
    return decimal.toString(2);
}</code></pre>
    `,
    tests: [
        { description: '0 deve retornar "0"', code: 'expect(decimalToBinary(0)).toBe("0");' },
        { description: '5 deve retornar "101"', code: 'expect(decimalToBinary(5)).toBe("101");' },
        { description: '42 deve retornar "101010"', code: 'expect(decimalToBinary(42)).toBe("101010");' },
        { description: '255 deve retornar "11111111"', code: 'expect(decimalToBinary(255)).toBe("11111111");' },
    ]
};