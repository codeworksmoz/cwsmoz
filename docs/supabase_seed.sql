-- Codworks Moz - Complete Curriculum Seed (Levels 1-8)
-- Limpa currículo antigo preservando usuários
TRUNCATE TABLE public.quizzes, public.exercises, public.lessons, public.acm_curriculum CASCADE;

-- ==========================================
-- NÍVEL 1: FUNDAMENTOS (CORE FOUNDATIONS)
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName, order_index) VALUES
('ka-cs-core', 'CS-101', 'Computer Science Core', 'Binário, Lógica Booleana e Arquitetura Von Neumann.', 1, '45h', 'Cpu', 1),
('ka-programming-f1', 'PF-1', 'Programming Fundamentals', 'Lógica, Variáveis, Loops e Funções.', 1, '40h', 'SquareTerminal', 2),
('ka-web-f1', 'WEB-1', 'Web Core (HTML/CSS)', 'Estrutura semântica e estilização moderna.', 1, '30h', 'Globe', 3),
('ka-git-f1', 'GIT-1', 'Git & Version Control', 'Controlo de versões e colaboração.', 1, '15h', 'GitBranch', 4);

-- Lições Nível 1
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('cs-t1', 'ka-cs-core', 'O Mundo Binário', '<p>Computadores funcionam com estados 0 e 1.</p>', 1),
('pf-t1', 'ka-programming-f1', 'Variáveis e Tipos', '<p>Caixas de memória para guardar dados.</p>', 1),
('web-t1', 'ka-web-f1', 'Estrutura HTML5', '<p>O esqueleto semântico da web.</p>', 1);

-- Exercícios Nível 1
INSERT INTO public.exercises (id, ka_id, lesson_id, title, language, test_cases) VALUES
('cs-p1', 'ka-cs-core', 'cs-t1', 'Conversão Binária', 'concept', '[{"test": "0101"}]'),
('pf-p1', 'ka-programming-f1', 'pf-t1', 'Declarando Variáveis', 'javascript', '[{"test": "let nome ="}]');

-- ==========================================
-- NÍVEIS 2 A 7: ESPECIALIZAÇÕES
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName, order_index) VALUES
('ka-alg-ds', 'ALG-2', 'Algorithms & Data Structures', 'Eficiência e organização de memória.', 2, '60h', 'Brain', 1),
('ka-os-net', 'SYS-3', 'Systems & Infrastructure', 'Sistemas Operativos e Redes.', 3, '50h', 'Settings', 1),
('ka-se-master', 'SE-4', 'Software Engineering', 'Design Patterns e Qualidade.', 4, '40h', 'Layers', 1),
('ka-ai-sec', 'ADV-5', 'AI & Cybersecurity', 'IA Generativa e Segurança.', 5, '60h', 'ShieldCheck', 1),
('ka-career', 'PRO-6', 'Professional Development', 'Carreira Global e Soft Skills.', 6, '20h', 'Briefcase', 1),
('ka-capstone', 'GRAD-7', 'Capstone Project', 'Projeto de Graduação Final.', 7, '100h', 'Trophy', 1);

-- ==========================================
-- NÍVEL 8: DOMÍNIO DE LINGUAGENS (MASTERY)
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName, order_index) VALUES
('lang-js', 'M-JS', 'JavaScript Master', 'Metaprogramação e Internals do V8.', 8, '80h', 'Zap', 1),
('lang-rust', 'M-RS', 'Rust Master', 'Ownership e Memory Safety.', 8, '90h', 'Shield', 2),
('lang-go', 'M-GO', 'Go Master', 'Concorrência nativa e Cloud.', 8, '70h', 'Cloud', 3),
('lang-python', 'M-PY', 'Python Master', 'AsyncIO e Ciência de Dados.', 8, '80h', 'Cpu', 4),
('lang-java', 'M-JV', 'Java Master', 'JVM Tuning e Enterprise.', 8, '80h', 'Coffee', 5),
('lang-kotlin', 'M-KT', 'Kotlin Master', 'Multiplatform e Coroutines.', 8, '60h', 'Smartphone', 6),
('lang-php', 'M-PHP', 'PHP Master', 'PHP 8.2 e Swoole Performance.', 8, '50h', 'Globe', 7),
('lang-ruby', 'M-RB', 'Ruby Master', 'Metaprogramação e Elegância.', 8, '50h', 'Gem', 8),
('lang-cpp', 'M-CPP', 'C++ Master', 'Gestão manual de memória.', 8, '100h', 'Terminal', 9),
('lang-swift', 'M-SW', 'Swift Master', 'iOS e Performance Nativa.', 8, '70h', 'Smartphone', 10);

-- Amostra de Lições Nível 8
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('js-m1', 'lang-js', 'Fase 1: V8 Engine e Call Stack', '<p>Como o motor do Chrome executa o teu código.</p>', 1),
('rs-m1', 'lang-rust', 'Fase 1: O Sistema de Ownership', '<p>A regra de ouro da memória em Rust.</p>', 1);

-- Amostra de Quizzes Nível 8
INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('quiz-js-m1', 'lang-js', 'Quiz: V8 Internals', '[{"question": "O que é a Call Stack?", "options": ["Uma pilha LIFO", "Uma fila FIFO"], "correctAnswer": 0}]');
