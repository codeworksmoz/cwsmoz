import type { PracticeExercise } from '../../../../../types';

export const decimalToHex: PracticeExercise = {
    id: 'js-t3-decimal-to-hex',
    title: 'Conversor Decimal → Hexadecimal',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta um número decimal para hexadecimal (string).',
    template: `/**
 * Converte um número decimal para hexadecimal.
 * @param {number} decimal - Número inteiro positivo
 * @returns {string} - Representação hexadecimal (maiúscula)
 * 
 * Exemplos:
 * decimalToHex(0) -> "0"
 * decimalToHex(15) -> "F"
 * decimalToHex(42) -> "2A"
 * decimalToHex(255) -> "FF"
 */
function decimalToHex(decimal) {
    // Implemente a conversão aqui
}`,
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Convertendo Decimal para Hexadecimal em JavaScript</h2>
        <h3>Método Manual:</h3>
        <pre><code>function decimalToHex(decimal) {
    if (decimal === 0) return "0";
    
    const hexChars = "0123456789ABCDEF";
    let hex = "";
    
    while (decimal > 0) {
        const remainder = decimal % 16;
        hex = hexChars[remainder] + hex;
        decimal = Math.floor(decimal / 16);
    }
    
    return hex;
}</code></pre>
        <h3>Método Nativo:</h3>
        <pre><code>function decimalToHex(decimal) {
    return decimal.toString(16).toUpperCase();
}</code></pre>
    `,
    tests: [
        { description: '0 deve retornar "0"', code: 'expect(decimalToHex(0)).toBe("0");' },
        { description: '15 deve retornar "F"', code: 'expect(decimalToHex(15)).toBe("F");' },
        { description: '42 deve retornar "2A"', code: 'expect(decimalToHex(42)).toBe("2A");' },
        { description: '255 deve retornar "FF"', code: 'expect(decimalToHex(255)).toBe("FF");' },
    ]
};