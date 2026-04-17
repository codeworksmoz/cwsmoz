import type { PracticeExercise } from '../../../../../types';

export const binaryToDecimal: PracticeExercise = {
    id: 'py-t1-binary-to-decimal',
    title: 'Conversor Binário → Decimal',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta uma string binária para o seu valor decimal.',
    template: `def binario_para_decimal(binario: str) -> int:
    """
    Converte uma string binária para decimal.
    
    Args:
        binario: String contendo apenas '0' e '1'
        
    Returns:
        Valor decimal correspondente
        
    Exemplos:
        >>> binario_para_decimal("0")
        0
        >>> binario_para_decimal("101")
        5
        >>> binario_para_decimal("101010")
        42
    """
    # Implemente a conversão aqui
    pass`,
    tests: [
        { description: '"0" deve retornar 0', code: 'assert binario_para_decimal("0") == 0' },
        { description: '"1" deve retornar 1', code: 'assert binario_para_decimal("1") == 1' },
        { description: '"10" deve retornar 2', code: 'assert binario_para_decimal("10") == 2' },
        { description: '"101" deve retornar 5', code: 'assert binario_para_decimal("101") == 5' },
        { description: '"1101" deve retornar 13', code: 'assert binario_para_decimal("1101") == 13' },
        { description: '"101010" deve retornar 42', code: 'assert binario_para_decimal("101010") == 42' },
        { description: '"11111111" deve retornar 255', code: 'assert binario_para_decimal("11111111") == 255' },
    ]
};