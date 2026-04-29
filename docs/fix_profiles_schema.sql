-- Script de Correção: Adição de colunas em falta na tabela 'profiles'
-- Execute este bloco no SQL Editor do Supabase

ALTER TABLE IF EXISTS public.profiles 
ADD COLUMN IF NOT EXISTS display_name TEXT,
ADD COLUMN IF NOT EXISTS avatar_url TEXT,
ADD COLUMN IF NOT EXISTS total_points INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS streak INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS preferred_language TEXT DEFAULT 'pt';

-- Garante que o trigger de pontos tenha a coluna correta para somar
-- (Opcional se já tiveres a função calculate_total_points)
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE public.profiles
    SET total_points = (
        SELECT COALESCE(SUM(10), 0)
        FROM public.user_lesson_progress
        WHERE user_id = p_user_id AND completed = true
    )
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
