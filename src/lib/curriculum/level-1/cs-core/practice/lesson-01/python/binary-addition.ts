import type { PracticeExercise } from '../../../../../types';

export const binaryAddition: PracticeExercise = {
    id: 'py-t1-binary-addition',
    title: 'Adição Binária',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    statement: 'Crie uma função que some duas strings binárias e retorne o resultado como string binária.',
    template: `def adicionar_binarios(a: str, b: str) -> str:
    """
    Soma dois números binários representados como strings.
    
    Args:
        a: Primeiro número binário
        b: Segundo número binário
        
    Returns:
        String com a soma binária
        
    Exemplos:
        >>> adicionar_binarios("0", "0")
        '0'
        >>> adicionar_binarios("1", "1")
        '10'
        >>> adicionar_binarios("101", "11")
        '1000'
    """
    # Implemente a adição binária aqui
    pass`,
    tests: [
        { description: '"0" + "0" = "0"', code: 'assert adicionar_binarios("0", "0") == "0"' },
        { description: '"1" + "0" = "1"', code: 'assert adicionar_binarios("1", "0") == "1"' },
        { description: '"1" + "1" = "10"', code: 'assert adicionar_binarios("1", "1") == "10"' },
        { description: '"101" + "11" = "1000"', code: 'assert adicionar_binarios("101", "11") == "1000"' },
        { description: '"1010" + "1010" = "10100"', code: 'assert adicionar_binarios("1010", "1010") == "10100"' },
        { description: '"1111" + "1" = "10000"', code: 'assert adicionar_binarios("1111", "1") == "10000"' },
    ]
};