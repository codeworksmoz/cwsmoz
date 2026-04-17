import type { PracticeExercise } from '../../../../../types';

export const twosComplement: PracticeExercise = {
    id: 'js-t6-twos-complement',
    title: 'Complemento de Dois',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    statement: 'Crie uma função que converta um número decimal negativo para sua representação binária em complemento de dois (8 bits).',
    template: `/**
 * Converte um número decimal para complemento de dois (8 bits).
 * @param {number} decimal - Número inteiro entre -128 e 127
 * @returns {string} - Representação binária em complemento de dois (8 bits)
 * 
 * Exemplos:
 * twosComplement(0) -> "00000000"
 * twosComplement(5) -> "00000101"
 * twosComplement(-5) -> "11111011"
 * twosComplement(-128) -> "10000000"
 * twosComplement(127) -> "01111111"
 */
function twosComplement(decimal) {
    // Implemente a conversão aqui
}`,
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Complemento de Dois em JavaScript</h2>
        <h3>Método Manual (8 bits):</h3>
        <pre><code>function twosComplement(decimal) {
    if (decimal < -128 || decimal > 127) {
        throw new Error("Número fora do intervalo de 8 bits (-128 a 127)");
    }
    
    if (decimal >= 0) {
        return decimal.toString(2).padStart(8, '0');
    }
    
    // Para números negativos
    const positiveBinary = Math.abs(decimal).toString(2).padStart(8, '0');
    
    // Inverte os bits
    let inverted = "";
    for (let bit of positiveBinary) {
        inverted += bit === '0' ? '1' : '0';
    }
    
    // Adiciona 1
    let carry = 1;
    let result = "";
    for (let i = 7; i >= 0; i--) {
        const sum = parseInt(inverted[i]) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    
    return result;
}</code></pre>
        <h3>Método com Operadores Bitwise:</h3>
        <pre><code>function twosComplement(decimal) {
    // Converte para 8 bits usando operadores bitwise
    const eightBit = decimal & 0xFF;
    return eightBit.toString(2).padStart(8, '0');
}</code></pre>
    `,
    tests: [
        { description: '0 deve retornar "00000000"', code: 'expect(twosComplement(0)).toBe("00000000");' },
        { description: '5 deve retornar "00000101"', code: 'expect(twosComplement(5)).toBe("00000101");' },
        { description: '-5 deve retornar "11111011"', code: 'expect(twosComplement(-5)).toBe("11111011");' },
        { description: '-128 deve retornar "10000000"', code: 'expect(twosComplement(-128)).toBe("10000000");' },
        { description: '127 deve retornar "01111111"', code: 'expect(twosComplement(127)).toBe("01111111");' },
    ]
};