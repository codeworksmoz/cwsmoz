import type { PracticeExercise } from '../../../../../types';

export const binaryAddition: PracticeExercise = {
    id: 'js-t5-binary-addition',
    title: 'Soma de Números Binários',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    statement: 'Crie uma função que some dois números binários (representados como strings) e retorne o resultado em binário.',
    template: `/**
 * Soma dois números binários.
 * @param {string} a - Primeiro número binário
 * @param {string} b - Segundo número binário
 * @returns {string} - Soma em binário
 * 
 * Exemplos:
 * binaryAddition("0", "0") -> "0"
 * binaryAddition("10", "1") -> "11"
 * binaryAddition("11", "1") -> "100"
 * binaryAddition("1010", "1011") -> "10101"
 */
function binaryAddition(a, b) {
    // Implemente a soma aqui
}`,
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Somando Números Binários em JavaScript</h2>
        <h3>Método Manual (bit a bit):</h3>
        <pre><code>function binaryAddition(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;
        
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        
        i--;
        j--;
    }
    
    return result || "0";
}</code></pre>
        <h3>Método com Conversão:</h3>
        <pre><code>function binaryAddition(a, b) {
    const decimalSum = parseInt(a, 2) + parseInt(b, 2);
    return decimalSum.toString(2);
}</code></pre>
    `,
    tests: [
        { description: '"0" + "0" = "0"', code: 'expect(binaryAddition("0", "0")).toBe("0");' },
        { description: '"10" + "1" = "11"', code: 'expect(binaryAddition("10", "1")).toBe("11");' },
        { description: '"11" + "1" = "100"', code: 'expect(binaryAddition("11", "1")).toBe("100");' },
        { description: '"1010" + "1011" = "10101"', code: 'expect(binaryAddition("1010", "1011")).toBe("10101");' },
    ]
};