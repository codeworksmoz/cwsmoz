// D:\Mozkod\src\lib\curriculum\areas\cs-core\theory.ts

// ===== Nível 1: Fundamentos da Computação =====

// Área: Sistemas de Numeração e Lógica Digital
import { lesson as lesson1 } from './theory/01-binary-systems';
import { lesson as lesson2 } from './theory/02-boolean-logic';
import { lesson as lesson3 } from './theory/03-data-representation';

// Área: Arquitetura de Computadores
import { lesson as lesson4 } from './theory/04-computer-architecture';
import { lesson as lesson7 } from './theory/07-microarchitecture';
import { lesson as lesson8 } from './theory/08-memory-hierarchy';
import { lesson as lesson9 } from './theory/09-isa-assembly';

// Área: Circuitos Digitais e Eletrónica
import { lesson as lesson5 } from './theory/05-combinational-circuits';
import { lesson as lesson6 } from './theory/06-sequential-circuits';
import { lesson as lesson10 } from './theory/10-analog-electronics';
import { lesson as lesson11 } from './theory/11-signals-systems';
import { lesson as lesson12 } from './theory/12-digital-synthesis';

// ===== Nível 2: Software e Algoritmos =====

// Área: Algoritmos e Estruturas de Dados
import { lesson as lesson13 } from './theory/13-data-structures';

// Área: Design de Software
import { lesson as lesson14 } from './theory/14-software-design';

// Área: Sistemas Operacionais
import { lesson as lesson16 } from './theory/16-operating-systems';

// ===== Nível 3: Sistemas e Redes =====

// Área: Redes de Computadores
import { lesson as lesson17 } from './theory/17-computer-networks';

// Área: Sistemas Embarcados
import { lesson as lesson15 } from './theory/15-embedded-systems';

// Área: Segurança da Informação
import { lesson as lesson19 } from './theory/19-cryptography-security';

// ===== Nível 4: Engenharia e Prática Profissional =====

// Área: Engenharia de Software
import { lesson as lesson18 } from './theory/18-requirements-engineering';

// Área: Ética e Prática Profissional
import { lesson as lesson20 } from './theory/20-ethics-professional-practice';

// Área: Tópicos Avançados
import { lesson as lesson21 } from './theory/21-advanced-topics';

// ============================================
// Exportação do Array de Lições
// ============================================

export const theory = [
    // Nível 1 - Fundamentos (Lições 1-12)
    lesson1,    // Sistemas Binários e de Numeração
    lesson2,    // Lógica Booleana e Álgebra de Boole
    lesson3,    // Representação de Dados em Sistemas Digitais
    lesson4,    // Arquitetura de Computadores (Von Neumann)
    lesson5,    // Circuitos Lógicos Combinacionais
    lesson6,    // Circuitos Lógicos Sequenciais
    lesson7,    // Microarquitetura e Unidade de Controlo
    lesson8,    // Hierarquia de Memória (Caches e Memória Virtual)
    lesson9,    // Conjunto de Instruções (ISA) e Linguagem Assembly
    lesson10,   // Análise de Circuitos Elétricos e Eletrónica Analógica
    lesson11,   // Sinais e Sistemas Contínuos e Discretos
    lesson12,   // Projeto e Síntese de Sistemas Digitais
    
    // Nível 2 - Software (Lições 13-16)
    lesson13,   // Estruturas de Dados e Análise de Algoritmos
    lesson14,   // Paradigmas e Padrões de Design de Software
    lesson16,   // Sistemas Operacionais: Gestão de Processos e Concorrência
    
    // Nível 3 - Sistemas (Lições 15, 17, 19)
    lesson15,   // Introdução aos Sistemas Embarcados e Microcontroladores
    lesson17,   // Redes de Computadores: Modelo TCP/IP e Protocolos
    lesson19,   // Fundamentos de Criptografia e Segurança da Informação
    
    // Nível 4 - Engenharia (Lições 18, 20-21)
    lesson18,   // Engenharia de Requisitos e Especificação de Sistemas
    lesson20,   // Ética, Propriedade Intelectual e Prática Profissional
    lesson21,   // Tópicos Avançados e Tendências Emergentes
];

// ============================================
// Mapa de Lições por ID (para acesso rápido)
// ============================================

export const theoryMap: Record<string, typeof lesson1> = {
    'cs-t1': lesson1,
    'cs-t2': lesson2,
    'cs-t3': lesson3,
    'cs-t4': lesson4,
    'cs-t5': lesson5,
    'cs-t6': lesson6,
    'cs-t7': lesson7,
    'cs-t8': lesson8,
    'cs-t9': lesson9,
    'cs-t10': lesson10,
    'cs-t11': lesson11,
    'cs-t12': lesson12,
    'cs-t13': lesson13,
    'cs-t14': lesson14,
    'cs-t15': lesson15,
    'cs-t16': lesson16,
    'cs-t17': lesson17,
    'cs-t18': lesson18,
    'cs-t19': lesson19,
    'cs-t20': lesson20,
    'cs-t21': lesson21,
};

// ============================================
// Agrupamento por Nível (para UI)
// ============================================

export const theoryByLevel = {
    1: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, lesson11, lesson12],
    2: [lesson13, lesson14, lesson16],
    3: [lesson15, lesson17, lesson19],
    4: [lesson18, lesson20, lesson21],
};

// ============================================
// Agrupamento por Área de Conhecimento
// ============================================

export const theoryByArea = {
    'numeration-logic': [lesson1, lesson2, lesson3],
    'computer-architecture': [lesson4, lesson7, lesson8, lesson9],
    'digital-circuits': [lesson5, lesson6, lesson10, lesson11, lesson12],
    'algorithms': [lesson13],
    'software-design': [lesson14],
    'operating-systems': [lesson16],
    'networks': [lesson17],
    'embedded-systems': [lesson15],
    'security': [lesson19],
    'software-engineering': [lesson18],
    'ethics': [lesson20],
    'advanced-topics': [lesson21],
};

// ============================================
// Metadados das Lições (para UI)
// ============================================

export const lessonMetadata: Record<string, {
    number: number;
    level: number;
    area: string;
    estimatedMinutes: number;
    hasQuiz: boolean;
    hasExercises: boolean;
    iconName: import('../../types').LucideIconName;
}> = {
    'cs-t1': { number: 1, level: 1, area: 'numeration-logic', estimatedMinutes: 60, hasQuiz: true, hasExercises: true, iconName: 'Binary' },
    'cs-t2': { number: 2, level: 1, area: 'numeration-logic', estimatedMinutes: 45, hasQuiz: true, hasExercises: true, iconName: 'Sigma' },
    'cs-t3': { number: 3, level: 1, area: 'numeration-logic', estimatedMinutes: 50, hasQuiz: true, hasExercises: true, iconName: 'Database' },
    'cs-t4': { number: 4, level: 1, area: 'computer-architecture', estimatedMinutes: 60, hasQuiz: true, hasExercises: true, iconName: 'Cpu' },
    'cs-t5': { number: 5, level: 1, area: 'digital-circuits', estimatedMinutes: 55, hasQuiz: true, hasExercises: true, iconName: 'CircuitBoard' },
    'cs-t6': { number: 6, level: 1, area: 'digital-circuits', estimatedMinutes: 50, hasQuiz: true, hasExercises: true, iconName: 'Clock' },
    'cs-t7': { number: 7, level: 1, area: 'computer-architecture', estimatedMinutes: 65, hasQuiz: true, hasExercises: true, iconName: 'Workflow' },
    'cs-t8': { number: 8, level: 1, area: 'computer-architecture', estimatedMinutes: 55, hasQuiz: true, hasExercises: true, iconName: 'MemoryStick' },
    'cs-t9': { number: 9, level: 1, area: 'computer-architecture', estimatedMinutes: 60, hasQuiz: true, hasExercises: true, iconName: 'FileCode' },
    'cs-t10': { number: 10, level: 1, area: 'digital-circuits', estimatedMinutes: 50, hasQuiz: true, hasExercises: true, iconName: 'Activity' },
    'cs-t11': { number: 11, level: 1, area: 'digital-circuits', estimatedMinutes: 55, hasQuiz: true, hasExercises: true, iconName: 'Radio' },
    'cs-t12': { number: 12, level: 1, area: 'digital-circuits', estimatedMinutes: 60, hasQuiz: true, hasExercises: true, iconName: 'Microchip' },
    'cs-t13': { number: 13, level: 2, area: 'algorithms', estimatedMinutes: 70, hasQuiz: true, hasExercises: true, iconName: 'GitGraph' },
    'cs-t14': { number: 14, level: 2, area: 'software-design', estimatedMinutes: 55, hasQuiz: true, hasExercises: true, iconName: 'Puzzle' },
    'cs-t15': { number: 15, level: 3, area: 'embedded-systems', estimatedMinutes: 50, hasQuiz: true, hasExercises: true, iconName: 'Microchip' },
    'cs-t16': { number: 16, level: 2, area: 'operating-systems', estimatedMinutes: 65, hasQuiz: true, hasExercises: true, iconName: 'Server' },
    'cs-t17': { number: 17, level: 3, area: 'networks', estimatedMinutes: 60, hasQuiz: true, hasExercises: true, iconName: 'Network' },
    'cs-t18': { number: 18, level: 4, area: 'software-engineering', estimatedMinutes: 45, hasQuiz: true, hasExercises: false, iconName: 'ClipboardList' },
    'cs-t19': { number: 19, level: 3, area: 'security', estimatedMinutes: 55, hasQuiz: true, hasExercises: true, iconName: 'Shield' },
    'cs-t20': { number: 20, level: 4, area: 'ethics', estimatedMinutes: 40, hasQuiz: true, hasExercises: false, iconName: 'Scale' },
    'cs-t21': { number: 21, level: 4, area: 'advanced-topics', estimatedMinutes: 60, hasQuiz: true, hasExercises: true, iconName: 'Rocket' },
};

// ============================================
// Funções Utilitárias
// ============================================

export function getLessonById(id: string) {
    return theoryMap[id] || null;
}

export function getLessonsByLevel(level: number) {
    return theoryByLevel[level as keyof typeof theoryByLevel] || [];
}

export function getLessonsByArea(areaId: string) {
    return theoryByArea[areaId as keyof typeof theoryByArea] || [];
}

export function getNextLesson(currentLessonId: string) {
    const index = theory.findIndex(l => l.id === currentLessonId);
    return index >= 0 && index < theory.length - 1 ? theory[index + 1] : null;
}

export function getPreviousLesson(currentLessonId: string) {
    const index = theory.findIndex(l => l.id === currentLessonId);
    return index > 0 ? theory[index - 1] : null;
}

export function getLessonProgress(lessonId: string, userProgress?: import('../../types').UserProgress) {
    if (!userProgress) return null;
    return userProgress.lessons[lessonId] || null;
}