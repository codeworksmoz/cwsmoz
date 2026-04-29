-- Tabela de Perfis de Utilizadores (Seguro)
-- Armazena dados públicos e específicos da aplicação para cada utilizador.
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  total_points INT DEFAULT 0,
  streak INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Comentários para a tabela de Perfis
COMMENT ON TABLE public.profiles IS 'Armazena perfis de utilizadores, estendendo a tabela auth.users.';
COMMENT ON COLUMN public.profiles.id IS 'Referência ao ID do utilizador em auth.users.';

-- Tabela de Progresso (Seguro)
-- Rastreia o progresso de cada utilizador em cada lição.
CREATE TABLE IF NOT EXISTS public.progress (
  id SERIAL PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id VARCHAR(255) NOT NULL,
  level_id INT,
  ka_id VARCHAR(255),
  type VARCHAR(50) NOT NULL, -- 'theory', 'exercise', 'quiz'
  completed BOOLEAN DEFAULT FALSE,
  score INT DEFAULT 0,
  last_code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, lesson_id)
);

-- Comentários para a tabela de Progresso
COMMENT ON TABLE public.progress IS 'Rastreia o progresso do utilizador nas lições e exercícios.';

-- 1. PRIMEIRO, remove o trigger para evitar erros de dependência.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- 2. DEPOIS, cria ou substitui a função.
-- Usar CREATE OR REPLACE é seguro e garante que a função esteja sempre atualizada.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'display_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Comentário para a função
COMMENT ON FUNCTION public.handle_new_user() IS 'Cria um perfil de utilizador automaticamente no registo.';

-- 3. POR FIM, recria o trigger para usar a versão mais recente da função.
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Habilitar RLS (Row-Level Security) para as tabelas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

-- Políticas de Segurança para a tabela `profiles` (Seguro)
DROP POLICY IF EXISTS "Utilizadores podem ver perfis públicos" ON public.profiles;
CREATE POLICY "Utilizadores podem ver perfis públicos"
  ON public.profiles FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Utilizadores editam próprio perfil" ON public.profiles;
CREATE POLICY "Utilizadores editam próprio perfil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Políticas de Segurança para a tabela `progress` (Seguro)
DROP POLICY IF EXISTS "Donos podem ver, inserir, e atualizar o seu progresso" ON public.progress;
CREATE POLICY "Donos podem ver, inserir, e atualizar o seu progresso"
  ON public.progress FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
