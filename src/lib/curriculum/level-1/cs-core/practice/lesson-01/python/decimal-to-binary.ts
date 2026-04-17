// D:\Mozkod\src\lib\curriculum\areas\cs-core\practice\lesson-01\python\decimal-to-binary.ts
import type { PracticeExercise } from '../../../../../types';

export const decimalToBinary: PracticeExercise = {
    id: 'py-t1-decimal-to-binary',
    title: 'Conversor Decimal → Binário',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta um número decimal inteiro positivo para a sua representação binária como string.',
    template: `def decimal_para_binario(n: int) -> str:
    """
    Converte um número decimal para binário.
    
    Args:
        n: Número inteiro positivo
        
    Returns:
        String com a representação binária
        
    Exemplos:
        >>> decimal_para_binario(0)
        '0'
        >>> decimal_para_binario(5)
        '101'
        >>> decimal_para_binario(42)
        '101010'
    """
    # Implemente a conversão aqui
    pass`,
    youtubeVideoId: '8ELie_3a2jM',
    detailedExplanation: `
        <h2>Convertendo Decimal para Binário em Python</h2>
        <p>A conversão de decimal para binário pode ser feita através de <strong>divisões sucessivas por 2</strong>.</p>
        
        <h3>Algoritmo:</h3>
        <ol>
            <li>Divida o número por 2</li>
            <li>Guarde o resto (0 ou 1)</li>
            <li>Repita com o quociente até que seja 0</li>
            <li>Leia os restos de baixo para cima</li>
        </ol>
        
        <h3>Exemplo: Convertendo 13 para binário</h3>
        <table>
            <tr><th>Divisão</th><th>Quociente</th><th>Resto</th></tr>
            <tr><td>13 ÷ 2</td><td>6</td><td>1</td></tr>
            <tr><td>6 ÷ 2</td><td>3</td><td>0</td></tr>
            <tr><td>3 ÷ 2</td><td>1</td><td>1</td></tr>
            <tr><td>1 ÷ 2</td><td>0</td><td>1</td></tr>
        </table>
        <p>Restos de baixo para cima: <strong>1101</strong></p>
        
        <h3>Implementação Manual:</h3>
        <pre><code>def decimal_para_binario(n: int) -> str:
    if n == 0:
        return "0"
    
    binario = ""
    while n > 0:
        resto = n % 2
        binario = str(resto) + binario
        n = n // 2
    
    return binario</code></pre>
        
        <h3>Método Nativo (Python):</h3>
        <pre><code>def decimal_para_binario(n: int) -> str:
    return bin(n)[2:]  # Remove o prefixo '0b'</code></pre>
    `,
    tests: [
        { description: '0 deve retornar "0"', code: 'assert decimal_para_binario(0) == "0"' },
        { description: '1 deve retornar "1"', code: 'assert decimal_para_binario(1) == "1"' },
        { description: '2 deve retornar "10"', code: 'assert decimal_para_binario(2) == "10"' },
        { description: '5 deve retornar "101"', code: 'assert decimal_para_binario(5) == "101"' },
        { description: '13 deve retornar "1101"', code: 'assert decimal_para_binario(13) == "1101"' },
        { description: '42 deve retornar "101010"', code: 'assert decimal_para_binario(42) == "101010"' },
        { description: '255 deve retornar "11111111"', code: 'assert decimal_para_binario(255) == "11111111"' },
    ]
};