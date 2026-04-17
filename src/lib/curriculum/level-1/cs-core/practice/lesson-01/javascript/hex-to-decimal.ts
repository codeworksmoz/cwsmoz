import type { PracticeExercise } from '../../../../../types';

export const hexToDecimal: PracticeExercise = {
    id: 'js-t4-hex-to-decimal',
    title: 'Conversor Hexadecimal → Decimal',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta um número hexadecimal (string) para decimal.',
    template: `/**
 * Converte um número hexadecimal para decimal.
 * @param {string} hex - Número hexadecimal como string
 * @returns {number} - Valor decimal
 * 
 * Exemplos:
 * hexToDecimal("0") -> 0
 * hexToDecimal("F") -> 15
 * hexToDecimal("2A") -> 42
 * hexToDecimal("FF") -> 255
 */
function hexToDecimal(hex) {
    // Implemente a conversão aqui
}`,
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Convertendo Hexadecimal para Decimal em JavaScript</h2>
        <h3>Método Manual:</h3>
        <pre><code>function hexToDecimal(hex) {
    const hexChars = "0123456789ABCDEF";
    let decimal = 0;
    
    for (let i = 0; i < hex.length; i++) {
        const char = hex[hex.length - 1 - i].toUpperCase();
        const value = hexChars.indexOf(char);
        decimal += value * Math.pow(16, i);
    }
    
    return decimal;
}</code></pre>
        <h3>Método Nativo:</h3>
        <pre><code>function hexToDecimal(hex) {
    return parseInt(hex, 16);
}</code></pre>
    `,
    tests: [
        { description: '"0" deve retornar 0', code: 'expect(hexToDecimal("0")).toBe(0);' },
        { description: '"F" deve retornar 15', code: 'expect(hexToDecimal("F")).toBe(15);' },
        { description: '"2A" deve retornar 42', code: 'expect(hexToDecimal("2A")).toBe(42);' },
        { description: '"FF" deve retornar 255', code: 'expect(hexToDecimal("FF")).toBe(255);' },
    ]
};