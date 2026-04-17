import type { PracticeExercise } from '../../../../../types';

export const twosComplement: PracticeExercise = {
    id: 'py-t1-twos-complement',
    title: 'Complemento para Dois (8 bits)',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    statement: 'Crie uma função que retorne a representação em complemento para dois (8 bits) de um número inteiro.',
    template: `def complemento_para_dois(n: int) -> str:
    """
    Retorna a representação em complemento para dois (8 bits) de um número.
    
    Args:
        n: Número inteiro entre -128 e 127
        
    Returns:
        String de 8 caracteres com a representação binária
        
    Exemplos:
        >>> complemento_para_dois(0)
        '00000000'
        >>> complemento_para_dois(5)
        '00000101'
        >>> complemento_para_dois(-5)
        '11111011'
        >>> complemento_para_dois(127)
        '01111111'
        >>> complemento_para_dois(-128)
        '10000000'
    """
    # Implemente aqui
    pass`,
    tests: [
        { description: '0 → "00000000"', code: 'assert complemento_para_dois(0) == "00000000"' },
        { description: '1 → "00000001"', code: 'assert complemento_para_dois(1) == "00000001"' },
        { description: '5 → "00000101"', code: 'assert complemento_para_dois(5) == "00000101"' },
        { description: '-1 → "11111111"', code: 'assert complemento_para_dois(-1) == "11111111"' },
        { description: '-5 → "11111011"', code: 'assert complemento_para_dois(-5) == "11111011"' },
        { description: '127 → "01111111"', code: 'assert complemento_para_dois(127) == "01111111"' },
        { description: '-128 → "10000000"', code: 'assert complemento_para_dois(-128) == "10000000"' },
    ]
};