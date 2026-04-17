// D:\Mozkod\src\lib\curriculum\types.ts

// ============================================
// Ícones Profissionais (Lucide React)
// ============================================

/**
 * Nomes de ícones disponíveis na biblioteca Lucide React.
 * Estes são usados em toda a interface para manter consistência visual.
 * 
 * Documentação: https://lucide.dev/icons
 */
export type LucideIconName =
    // ===== Computação / Hardware =====
    | 'Cpu' | 'CircuitBoard' | 'Microchip' | 'MemoryStick' | 'Server' 
    | 'HardDrive' | 'Monitor' | 'Laptop' | 'Smartphone' | 'Tablet'
    | 'PcCase' | 'Fan' | 'Power' | 'Battery' | 'Usb'
    
    // ===== Redes / Comunicação =====
    | 'Wifi' | 'Bluetooth' | 'Router' | 'Network' | 'Globe' | 'Cloud'
    | 'Radio' | 'Antenna' | 'Satellite' | 'Signal' | 'SignalHigh'
    | 'SignalMedium' | 'SignalLow' | 'Broadcast' | 'Webhook'
    
    // ===== Programação / Código =====
    | 'Code' | 'Code2' | 'Braces' | 'Brackets' | 'FileCode' | 'FileCode2'
    | 'Terminal' | 'TerminalSquare' | 'Command' | 'ChevronRight'
    | 'Variable' | 'FunctionSquare' | 'Bug' | 'TestTube' | 'Flask'
    
    // ===== Banco de Dados =====
    | 'Database' | 'DatabaseBackup' | 'DatabaseZap' | 'Table' | 'Columns'
    | 'Rows' | 'Sheet'
    
    // ===== Matemática / Lógica =====
    | 'Binary' | 'Hash' | 'Sigma' | 'Divide' | 'Equal' | 'Infinity'
    | 'Pi' | 'Square' | 'Shapes' | 'Boxes' | 'Grid2x2' | 'Grid3x3'
    
    // ===== Estruturas de Dados / Algoritmos =====
    | 'GitGraph' | 'GitBranch' | 'GitMerge' | 'GitFork' | 'GitPullRequest'
    | 'GitCommit' | 'GitCompare' | 'Workflow' | 'TreePine' | 'TreeDeciduous'
    | 'Network' | 'Waypoints' | 'Route' | 'Map'
    
    // ===== Segurança =====
    | 'Shield' | 'ShieldCheck' | 'ShieldAlert' | 'ShieldQuestion' | 'ShieldClose'
    | 'Lock' | 'LockOpen' | 'Key' | 'KeyRound' | 'Fingerprint' | 'Scan'
    | 'Eye' | 'EyeOff' | 'ShieldBan'
    
    // ===== Engenharia de Software =====
    | 'Rocket' | 'Package' | 'PackageCheck' | 'PackagePlus' | 'PackageSearch'
    | 'Box' | 'Boxes' | 'Layers' | 'Puzzle' | 'Component' | 'Blocks'
    | 'Container' | 'Archive' | 'ArchiveRestore'
    
    // ===== Sistema Operativo / Configuração =====
    | 'Settings' | 'Settings2' | 'Wrench' | 'Cog' | 'Sliders'
    | 'Activity' | 'Gauge' | 'GaugeCircle' | 'Tachometer'
    | 'Clock' | 'Timer' | 'History'
    
    // ===== Ética / Profissional =====
    | 'Scale' | 'Gavel' | 'BookOpen' | 'BookMarked' | 'GraduationCap'
    | 'Award' | 'Medal' | 'Trophy' | 'Certificate'
    | 'FileText' | 'Clipboard' | 'ClipboardCheck' | 'ClipboardList'
    | 'ClipboardSignature' | 'Stamp'
    
    // ===== Interface / UI =====
    | 'User' | 'Users' | 'UserCheck' | 'UserCog' | 'UserPlus'
    | 'Search' | 'Filter' | 'Menu' | 'Home' | 'Layout' | 'PanelLeft'
    | 'PanelRight' | 'Sidebar' | 'Maximize' | 'Minimize'
    | 'Check' | 'CheckCircle' | 'CheckSquare' | 'X' | 'XCircle'
    | 'AlertCircle' | 'AlertTriangle' | 'Info' | 'HelpCircle'
    | 'Play' | 'Pause' | 'StopCircle' | 'RotateCcw' | 'RefreshCcw'
    | 'Download' | 'Upload' | 'Share' | 'Bookmark' | 'Star'
    | 'ThumbsUp' | 'ThumbsDown' | 'MessageCircle' | 'Mail'
    | 'Bell' | 'BellRing' | 'Calendar' | 'CreditCard' | 'DollarSign'
    
    // ===== Tópicos Avançados =====
    | 'Atom' | 'Brain' | 'BrainCircuit' | 'Zap' | 'Sparkles' | 'Bot'
    | 'Orbit' | 'Telescope' | 'Microscope' | 'Dna' | 'Cuboid'
    | 'BoxSelect' | 'ScanLine' | 'QrCode' | 'Barcode'
    
    // ===== Específicos para Áreas =====
    | 'Binary'        // Sistemas de Numeração
    | 'Sigma'         // Lógica Booleana
    | 'Database'      // Representação de Dados
    | 'Cpu'           // Arquitetura de Computadores
    | 'CircuitBoard'  // Circuitos Digitais
    | 'GitGraph'      // Algoritmos
    | 'Puzzle'        // Design Patterns
    | 'Microchip'     // Sistemas Embarcados
    | 'Server'        // Sistemas Operacionais
    | 'Network'       // Redes
    | 'ClipboardList' // Engenharia de Requisitos
    | 'Shield'        // Segurança
    | 'Scale'         // Ética
    | 'Rocket';       // Tópicos Avançados

// ============================================
// Tipos Principais do Currículo
// ============================================

export type TheoryLesson = {
    id: string;
    title: string;
    content: string;
    youtubeVideoId?: string;
    detailedExplanation?: string;
    estimatedMinutes?: number;      // Tempo estimado de leitura
    prerequisites?: string[];       // IDs de lições que devem ser completadas antes
};

export type PracticeExerciseTest = {
    description: string;
    code: string;
};

export type PracticeExercise = {
    id: string;
    title: string;
    statement: string;
    template: string;
    detailedExplanation?: string;
    youtubeVideoId?: string;
    tests?: PracticeExerciseTest[];
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    estimatedMinutes?: number;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
};

export type Quiz = {
    id: string;
    lessonId?: string;
    title: string;
    questions: QuizQuestion[];
    passingScore?: number;          // Percentagem mínima para passar (padrão: 70)
    estimatedMinutes?: number;
};

// ============================================
// Estrutura de Prática por Linguagem
// ============================================

/**
 * Mapa de exercícios organizados por linguagem de programação.
 * Cada chave é o identificador da linguagem (ex: 'python', 'javascript').
 * O valor é um array de exercícios disponíveis nessa linguagem.
 */
export type PracticeByLanguage = {
    python?: PracticeExercise[];
    javascript?: PracticeExercise[];
    typescript?: PracticeExercise[];
    java?: PracticeExercise[];
    cpp?: PracticeExercise[];
    csharp?: PracticeExercise[];
    go?: PracticeExercise[];
    rust?: PracticeExercise[];
    php?: PracticeExercise[];
    ruby?: PracticeExercise[];
    kotlin?: PracticeExercise[];
    swift?: PracticeExercise[];
    html?: PracticeExercise[];
    css?: PracticeExercise[];
    sql?: PracticeExercise[];
    bash?: PracticeExercise[];
    powershell?: PracticeExercise[];
    assembly?: PracticeExercise[];
    verilog?: PracticeExercise[];
    vhdl?: PracticeExercise[];
};

// ============================================
// Configuração de Linguagens com Ícones
// ============================================

export interface LanguageConfig {
    name: string;
    icon: LucideIconName;
    extension: string;
    monacoLanguage: string;
    category: 'backend' | 'frontend' | 'database' | 'shell' | 'hardware' | 'assembly';
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
    // Backend
    python: { 
        name: 'Python', 
        icon: 'Code2', 
        extension: '.py', 
        monacoLanguage: 'python',
        category: 'backend'
    },
    javascript: { 
        name: 'JavaScript', 
        icon: 'Braces', 
        extension: '.js', 
        monacoLanguage: 'javascript',
        category: 'backend'
    },
    typescript: { 
        name: 'TypeScript', 
        icon: 'FileCode2', 
        extension: '.ts', 
        monacoLanguage: 'typescript',
        category: 'backend'
    },
    java: { 
        name: 'Java', 
        icon: 'FileCode', 
        extension: '.java', 
        monacoLanguage: 'java',
        category: 'backend'
    },
    cpp: { 
        name: 'C++', 
        icon: 'Terminal', 
        extension: '.cpp', 
        monacoLanguage: 'cpp',
        category: 'backend'
    },
    csharp: { 
        name: 'C#', 
        icon: 'Hash', 
        extension: '.cs', 
        monacoLanguage: 'csharp',
        category: 'backend'
    },
    go: { 
        name: 'Go', 
        icon: 'Play', 
        extension: '.go', 
        monacoLanguage: 'go',
        category: 'backend'
    },
    rust: { 
        name: 'Rust', 
        icon: 'Cog', 
        extension: '.rs', 
        monacoLanguage: 'rust',
        category: 'backend'
    },
    php: { 
        name: 'PHP', 
        icon: 'FileCode', 
        extension: '.php', 
        monacoLanguage: 'php',
        category: 'backend'
    },
    ruby: { 
        name: 'Ruby', 
        icon: 'Gem', 
        extension: '.rb', 
        monacoLanguage: 'ruby',
        category: 'backend'
    },
    kotlin: { 
        name: 'Kotlin', 
        icon: 'Smartphone', 
        extension: '.kt', 
        monacoLanguage: 'kotlin',
        category: 'backend'
    },
    swift: { 
        name: 'Swift', 
        icon: 'Apple', 
        extension: '.swift', 
        monacoLanguage: 'swift',
        category: 'backend'
    },
    
    // Frontend
    html: { 
        name: 'HTML', 
        icon: 'FileCode', 
        extension: '.html', 
        monacoLanguage: 'html',
        category: 'frontend'
    },
    css: { 
        name: 'CSS', 
        icon: 'Palette', 
        extension: '.css', 
        monacoLanguage: 'css',
        category: 'frontend'
    },
    
    // Banco de Dados
    sql: { 
        name: 'SQL', 
        icon: 'Database', 
        extension: '.sql', 
        monacoLanguage: 'sql',
        category: 'database'
    },
    
    // Shell
    bash: { 
        name: 'Bash', 
        icon: 'TerminalSquare', 
        extension: '.sh', 
        monacoLanguage: 'shell',
        category: 'shell'
    },
    powershell: { 
        name: 'PowerShell', 
        icon: 'Terminal', 
        extension: '.ps1', 
        monacoLanguage: 'powershell',
        category: 'shell'
    },
    
    // Assembly
    assembly: { 
        name: 'Assembly', 
        icon: 'Cpu', 
        extension: '.asm', 
        monacoLanguage: 'asm',
        category: 'assembly'
    },
    
    // Hardware Description
    verilog: { 
        name: 'Verilog', 
        icon: 'CircuitBoard', 
        extension: '.v', 
        monacoLanguage: 'verilog',
        category: 'hardware'
    },
    vhdl: { 
        name: 'VHDL', 
        icon: 'Workflow', 
        extension: '.vhd', 
        monacoLanguage: 'vhdl',
        category: 'hardware'
    },
};

export type LanguageKey = keyof typeof SUPPORTED_LANGUAGES;

// ============================================
// Área de Conhecimento
// ============================================

export type KnowledgeArea = {
    id: string;
    title: string;
    description: string;
    load: string;
    iconName: LucideIconName;           // Ícone profissional Lucide
    theory: TheoryLesson[];
    practice: PracticeByLanguage;
    quizzes: Quiz[];
    color?: string;                      // Cor da área (Tailwind: 'blue', 'green', etc.)
};

// ============================================
// Nível
// ============================================

export type Level = {
    id: number;
    title: string;
    description: string;
    knowledgeAreas: KnowledgeArea[];
    iconName?: LucideIconName;           // Ícone do nível
    requiredLevels?: number[];           // Níveis que devem ser completados antes
};

// ============================================
// Tipos Auxiliares para o Sistema de Progresso
// ============================================

export type LessonProgress = {
    lessonId: string;
    completed: boolean;
    lastAccessedAt?: Date;
    quizScore?: number;
    quizCompletedAt?: Date;
    exercisesCompleted?: string[];
    timeSpentMinutes?: number;
};

export type KnowledgeAreaProgress = {
    areaId: string;
    completedLessons: string[];
    averageQuizScore: number;
    totalTimeSpent: number;
    lastActivityAt?: Date;
};

export type LevelProgress = {
    levelId: number;
    completedAreas: string[];
    unlockedAt?: Date;
    completedAt?: Date;
};

export type UserProgress = {
    userId: string;
    levels: Record<number, LevelProgress>;
    knowledgeAreas: Record<string, KnowledgeAreaProgress>;
    lessons: Record<string, LessonProgress>;
    currentLevel: number;
    currentArea: string;
    currentLesson: string;
    preferredLanguage: LanguageKey;
};

// ============================================
// Tipos para o Sistema de Navegação
// ============================================

export type BreadcrumbItem = {
    label: string;
    path: string;
    icon?: LucideIconName;
};

export type NavigationState = {
    currentLevel: Level | null;
    currentArea: KnowledgeArea | null;
    currentLesson: TheoryLesson | null;
    currentQuiz: Quiz | null;
    currentExercise: PracticeExercise | null;
    breadcrumbs: BreadcrumbItem[];
};

// ============================================
// Tipos para Componentes de Quiz
// ============================================

export type QuizAttempt = {
    quizId: string;
    startedAt: Date;
    completedAt?: Date;
    answers: Record<string, number>;
    score: number;
    correctCount: number;
    totalQuestions: number;
};

export type QuizResult = {
    attempt: QuizAttempt;
    quiz: Quiz;
    questionsWithResults: {
        question: QuizQuestion;
        selectedAnswer: number;
        isCorrect: boolean;
    }[];
};

// ============================================
// Tipos para Estatísticas e Analytics
// ============================================

export type CourseStats = {
    totalLevels: number;
    totalAreas: number;
    totalLessons: number;
    totalQuizzes: number;
    totalExercises: number;
    estimatedTotalHours: number;
};

export type UserStats = {
    completedLevels: number;
    completedAreas: number;
    completedLessons: number;
    completedQuizzes: number;
    averageScore: number;
    totalTimeSpent: number;
    streak: number;
    lastStudyDate?: Date;
};

// ============================================
// Tipos para Certificados
// ============================================

export type Certificate = {
    id: string;
    userId: string;
    levelId?: number;
    areaId?: string;
    issuedAt: Date;
    title: string;
    description: string;
    score?: number;
    verificationCode: string;
    iconName?: LucideIconName;
};

// ============================================
// Tipos para Feedback e Avaliações
// ============================================

export type LessonFeedback = {
    lessonId: string;
    userId: string;
    rating: 1 | 2 | 3 | 4 | 5;
    difficulty: 'too-easy' | 'just-right' | 'too-hard';
    comment?: string;
    submittedAt: Date;
};

export type QuizFeedback = {
    quizId: string;
    userId: string;
    rating: 1 | 2 | 3 | 4 | 5;
    reportedIssues?: {
        questionId: string;
        issue: 'incorrect-answer' | 'unclear-question' | 'typo' | 'other';
        comment?: string;
    }[];
    submittedAt: Date;
};

// ============================================
// Tipos para Pesquisa e Filtros
// ============================================

export type SearchResult = {
    type: 'level' | 'area' | 'lesson' | 'quiz' | 'exercise';
    id: string;
    title: string;
    description: string;
    path: string;
    matches: string[];
    iconName?: LucideIconName;
};

export type FilterOptions = {
    levels?: number[];
    areas?: string[];
    status?: 'all' | 'completed' | 'in-progress' | 'not-started';
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    hasQuiz?: boolean;
    hasExercises?: boolean;
    language?: LanguageKey;
};

// ============================================
// Tipos para Bookmarks e Favoritos
// ============================================

export type Bookmark = {
    id: string;
    userId: string;
    type: 'level' | 'area' | 'lesson' | 'quiz' | 'exercise';
    itemId: string;
    title: string;
    path: string;
    iconName?: LucideIconName;
    createdAt: Date;
    notes?: string;
};

// ============================================
// Tipos para Notas do Utilizador
// ============================================

export type UserNote = {
    id: string;
    userId: string;
    lessonId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    position?: number;
};

// ============================================
// Tipo para Configurações da Plataforma
// ============================================

export type PlatformSettings = {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
    codeTheme: string;
    autoplayVideos: boolean;
    showQuizExplanations: boolean;
    emailNotifications: boolean;
    language: 'pt' | 'en';
    preferredLanguages: LanguageKey[];
    editorFontSize: number;
    editorTabSize: 2 | 4;
};