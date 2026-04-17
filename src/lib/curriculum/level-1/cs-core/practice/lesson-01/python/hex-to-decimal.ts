import type { PracticeExercise } from '../../../../../types';

export const hexToDecimal: PracticeExercise = {
    id: 'py-t1-hex-to-decimal',
    title: 'Conversor Hexadecimal → Decimal',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    statement: 'Crie uma função que converta uma string hexadecimal para decimal.',
    template: `def hexadecimal_para_decimal(hex_str: str) -> int:
    """
    Converte uma string hexadecimal para decimal.
    
    Args:
        hex_str: String hexadecimal (A-F podem ser maiúsculas ou minúsculas)
        
    Returns:
        Valor decimal correspondente
        
    Exemplos:
        >>> hexadecimal_para_decimal("A")
        10
        >>> hexadecimal_para_decimal("2A")
        42
        >>> hexadecimal_para_decimal("FF")
        255
    """
    # Implemente a conversão aqui
    pass`,
    tests: [
        { description: '"0" deve retornar 0', code: 'assert hexadecimal_para_decimal("0") == 0' },
        { description: '"A" deve retornar 10', code: 'assert hexadecimal_para_decimal("A") == 10' },
        { description: '"a" deve retornar 10', code: 'assert hexadecimal_para_decimal("a") == 10' },
        { description: '"F" deve retornar 15', code: 'assert hexadecimal_para_decimal("F") == 15' },
        { description: '"10" deve retornar 16', code: 'assert hexadecimal_para_decimal("10") == 16' },
        { description: '"2A" deve retornar 42', code: 'assert hexadecimal_para_decimal("2A") == 42' },
        { description: '"FF" deve retornar 255', code: 'assert hexadecimal_para_decimal("FF") == 255' },
    ]
};