-- Habilitar extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela: profiles (estende auth.users)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    preferred_language TEXT DEFAULT 'pt',
    level INTEGER DEFAULT 1,
    total_xp INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: acm_curriculum
CREATE TABLE acm_curriculum (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 7),
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    ka_name_pt TEXT,
    description TEXT,
    order_index INTEGER,
    required_hours INTEGER,
    prerequisites JSONB DEFAULT '[]',
    UNIQUE(level, ka_code)
);

-- Tabela: lessons
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ka_id UUID REFERENCES acm_curriculum(id) ON DELETE CASCADE,
    module_number INTEGER,
    title TEXT NOT NULL,
    title_translations JSONB DEFAULT '{}',
    content_mdx TEXT,
    theory JSONB,
    video_url TEXT,
    duration_minutes INTEGER,
    order_index INTEGER
);

-- Tabela: exercises
CREATE TABLE exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
    ka_id UUID REFERENCES acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    language TEXT NOT NULL,
    difficulty TEXT DEFAULT 'beginner',
    template_code TEXT,
    solution_code TEXT,
    test_cases JSONB DEFAULT '[]',
    hints JSONB DEFAULT '[]',
    exercise_file TEXT,
    order_index INTEGER
);

-- Tabela: quizzes
CREATE TABLE quizzes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ka_id UUID REFERENCES acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    passing_score INTEGER DEFAULT 70,
    time_limit_minutes INTEGER,
    questions JSONB NOT NULL DEFAULT '[]'
);

-- Tabela: user_progress
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    status TEXT DEFAULT 'not_started',
    progress_percentage INTEGER DEFAULT 0,
    last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    UNIQUE(user_id, lesson_id)
);

-- Tabela: user_exercise_submissions
CREATE TABLE user_exercise_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT NOT NULL,
    code_submitted TEXT,
    test_results JSONB,
    status TEXT DEFAULT 'pending',
    attempts INTEGER DEFAULT 1,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: user_quiz_attempts
CREATE TABLE user_quiz_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    quiz_id TEXT NOT NULL,
    score INTEGER,
    passed BOOLEAN DEFAULT FALSE,
    answers JSONB,
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- Tabela: certificates
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    certificate_type TEXT NOT NULL,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
    metadata JSONB DEFAULT '{}'
);

-- Tabela: fcc_sync
CREATE TABLE fcc_sync (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    fcc_username TEXT,
    fcc_progress JSONB DEFAULT '{}',
    last_synced_at TIMESTAMPTZ,
    certifications_earned JSONB DEFAULT '[]'
);

-- Tabela: forum_comments
CREATE TABLE forum_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exercise_id TEXT,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    user_name TEXT,
    user_avatar_url TEXT,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Função para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para profiles
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger para criar perfil automaticamente
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO profiles (id, username, full_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'user_name', NEW.raw_user_meta_data->>'email', NEW.id::text),
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION handle_new_user();
    
-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_exercise_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE fcc_sync ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_comments ENABLE ROW LEVEL SECURITY;

-- Políticas: profiles
CREATE POLICY "Usuários podem ver todos os perfis"
    ON profiles FOR SELECT USING (true);

CREATE POLICY "Usuários podem editar seu próprio perfil"
    ON profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Políticas: acm_curriculum (público para leitura)
ALTER TABLE acm_curriculum ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Currículo visível para todos"
    ON acm_curriculum FOR SELECT USING (true);

-- Políticas: lessons (público para leitura)
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lições visíveis para todos"
    ON lessons FOR SELECT USING (true);

-- Políticas: exercises (público para leitura)
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Exercícios visíveis para todos"
    ON exercises FOR SELECT USING (true);

-- Políticas: user_progress
CREATE POLICY "Usuários veem seu próprio progresso"
    ON user_progress FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem inserir seu progresso"
    ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar seu progresso"
    ON user_progress FOR UPDATE USING (auth.uid() = user_id);

-- Políticas: user_exercise_submissions
CREATE POLICY "Usuários veem suas submissões"
    ON user_exercise_submissions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem submeter exercícios"
    ON user_exercise_submissions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas: user_quiz_attempts
CREATE POLICY "Usuários veem suas tentativas de quiz"
    ON user_quiz_attempts FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem fazer quizzes"
    ON user_quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas: certificates
CREATE POLICY "Certificados visíveis para todos"
    ON certificates FOR SELECT USING (true);

CREATE POLICY "Sistema pode gerar certificados"
    ON certificates FOR INSERT WITH CHECK (true);
    
-- Políticas: forum_comments
CREATE POLICY "Comentários do fórum são visíveis para todos"
    ON forum_comments FOR SELECT USING (true);

CREATE POLICY "Usuários podem inserir seus próprios comentários"
    ON forum_comments FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem deletar seus próprios comentários"
    ON forum_comments FOR DELETE USING (auth.uid() = user_id);

-- Função para incrementar XP de forma segura
CREATE OR REPLACE FUNCTION increment_xp(user_id_param UUID, xp_to_add INT)
RETURNS void AS $$
BEGIN
    UPDATE profiles
    SET total_xp = total_xp + xp_to_add
    WHERE id = user_id_param;
END;
$$ LANGUAGE plpgsql;
