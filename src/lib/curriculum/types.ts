/**
 * @fileOverview Definições de tipos para o motor do currículo.
 * Use estes tipos para garantir que as novas lições sejam compatíveis com a UI.
 */

export type TheoryLesson = {
  id: string;             // ID único (ex: 'cs-t1')
  title: string;          // Título da aula
  content: string;        // Conteúdo em HTML (suporta tags de estilo)
  youtubeVideoId?: string; // ID do vídeo do Youtube (opcional)
  quizId: string;         // ID do quiz vinculado a esta aula
  enableInteractive?: boolean; // Se true, ativa o motor de preview de código
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;  // Índice da opção correta (0, 1, 2...)
  explanation?: string;   // Dica exibida após a resposta (opcional)
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;   // Percentagem mínima (ex: 70)
};

export type Objective = {
  id: string;
  description: string;    // O que o aluno deve fazer
  hint?: string;          // Dica técnica
  test: string;           // String ou Regex que o código do aluno deve conter para validar
};

export type PracticeExercise = {
  id: string;
  language: string;       // 'html', 'css', 'javascript', 'python', 'java', etc.
  title: string;
  description: string;
  statement: string;      // Instrução curta
  template: string;       // Código inicial no editor
  htmlTemplate?: string;  // HTML de suporte para aulas de CSS/JS
  cssTemplate?: string;   // CSS de suporte para aulas de JS
  jsTemplate?: string;    // JS de suporte para aulas de CSS
  detailedExplanation: string; // Briefing da missão (HTML)
  objectives: Objective[];
  isProjectPart?: boolean; // Se true, o motor procura o código das aulas anteriores
  youtubeVideoId?: string; // ID do vídeo para laboratórios que possuem aula gravada
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  load: string;           // Carga horária (ex: '20h')
  iconName: string;       // Nome do ícone da Lucide-React
  theory: TheoryLesson[];
  practice: {
    [key: string]: PracticeExercise[]; // Chave é a linguagem (ex: 'python')
  };
  quizzes: Quiz[];
};

export type Level = {
  id: number;
  title: string;
  description: string;
  knowledgeAreas: KnowledgeArea[];
};
