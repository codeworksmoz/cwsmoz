import type { PracticeExercise } from '../../../../../types';

export const decimalToHex: PracticeExercise = {
    id: 'py-t1-decimal-to-hex',
    title: 'Conversor Decimal → Hexadecimal',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta um número decimal para hexadecimal (string em maiúsculas).',
    template: `def decimal_para_hexadecimal(n: int) -> str:
    """
    Converte um número decimal para hexadecimal.
    
    Args:
        n: Número inteiro positivo
        
    Returns:
        String com a representação hexadecimal (A-F em maiúsculas)
        
    Exemplos:
        >>> decimal_para_hexadecimal(10)
        'A'
        >>> decimal_para_hexadecimal(42)
        '2A'
        >>> decimal_para_hexadecimal(255)
        'FF'
    """
    # Implemente a conversão aqui
    pass`,
    tests: [
        { description: '0 deve retornar "0"', code: 'assert decimal_para_hexadecimal(0) == "0"' },
        { description: '10 deve retornar "A"', code: 'assert decimal_para_hexadecimal(10) == "A"' },
        { description: '15 deve retornar "F"', code: 'assert decimal_para_hexadecimal(15) == "F"' },
        { description: '16 deve retornar "10"', code: 'assert decimal_para_hexadecimal(16) == "10"' },
        { description: '42 deve retornar "2A"', code: 'assert decimal_para_hexadecimal(42) == "2A"' },
        { description: '255 deve retornar "FF"', code: 'assert decimal_para_hexadecimal(255) == "FF"' },
    ]
};