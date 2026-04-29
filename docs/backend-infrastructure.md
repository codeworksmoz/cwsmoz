# 🗄️ Manual de Infraestrutura de Dados - Codworks Moz

Este documento descreve a arquitetura de persistência, o esquema de dados e os protocolos de segurança do backend, gerido pelo **Supabase (PostgreSQL)**.

## 1. Modelo Híbrido de Dados
Diferente de plataformas tradicionais, a Codworks Moz utiliza um modelo de separação de responsabilidades para garantir performance de silício:
- **Dados Estáticos (Git):** O currículo (lições, exercícios e quizzes) reside no código-fonte em `src/lib/curriculum/`. Isto garante versionamento, code-review de conteúdo e leitura instantânea com zero latência de rede.
- **Dados Dinâmicos (Supabase):** O estado do utilizador (progresso, pontos, streaks) e as interações sociais residem na Cloud.

---

## 2. Esquema de Tabelas (ER Schema)

### 2.1. Tabela: `profiles`
Armazena a identidade do engenheiro e as suas métricas de gamificação.
- `id`: uuid (Primary Key, FK para `auth.users`).
- `display_name`: text (Nome visível no ranking).
- `email`: text (Sincronizado do Auth).
- `avatar_url`: text (URL da imagem de perfil).
- `total_points`: int8 (Default: 0. Atualizado via Trigger).
- `streak`: int4 (Dias consecutivos de atividade).
- `created_at`: timestamptz.

### 2.2. Tabela: `user_lesson_progress`
Registo atómico de cada lição concluída. É o coração do motor de herança do Nível 8.
- `id`: uuid (PK).
- `user_id`: uuid (FK para `profiles`).
- `level_id`: int4 (Nível da lição, ex: 1 a 8).
- `ka_id`: text (ID da Knowledge Area, ex: 'ka-cs-core').
- `lesson_id`: text (ID único da lição, ex: 'cs-p1').
- `lesson_type`: text (Enum: 'theory' ou 'exercise').
- `completed`: boolean (Default: true).
- `quiz_score`: int4 (Percentagem de acerto no quiz).
- `last_code`: text (O código final submetido - **Vital para a Herança do Nível 8**).
- `completed_at`: timestamptz.

### 2.3. Tabela: `certificates`
Credenciais verificáveis com hash único para validação externa.
- `id`: uuid (PK, UUID v4 aleatório para verificação externa).
- `user_id`: uuid (FK para `profiles`).
- `level_id`: int4 (Nível certificado).
- `level_title`: text (Nome do módulo certificado).
- `issued_at`: timestamptz.

### 2.4. Tabelas da Comunidade: `community_posts` e `community_comments`
Motor de fórum e pedidos de ajuda em exercícios. Ligam-se ao `lesson_id` para prover contexto.

---

## 3. Segurança: Row Level Security (RLS)
A segurança não é delegada apenas ao frontend; ela é aplicada no núcleo do banco de dados:
- **Perfis:** `(id == auth.uid())` permite escrita. A leitura é pública para permitir o funcionamento do Ranking Global.
- **Progresso:** `(user_id == auth.uid())` garante isolamento total. Um aluno nunca pode ver ou alterar o código/progresso de outro.
- **Certificados:** Escrita restrita ao sistema; leitura pública via ID de verificação.

---

## 4. Automação e Reatividade (Triggers)
O sistema utiliza funções internas do PostgreSQL para garantir que a gamificação seja infalível:

### 4.1. Cálculo de Pontos Automático
Sempre que uma lição é marcada como concluída, um Trigger soma os pontos base (Teoria: 50, Lab: 100) e atualiza o perfil do utilizador.

### 4.2. Gestão de Streaks
O banco verifica a data do último progresso. Se a diferença for de 1 dia, incrementa o streak; se for superior a 1 dia, reinicia para 0, incentivando a consistência diária.

---

## 5. Apêndice SQL: DDL de Produção
Execute o código abaixo no **SQL Editor** do Supabase para inicializar a infraestrutura:

```sql
-- Criar Tabela de Perfis
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  email text,
  avatar_url text,
  total_points bigint default 0,
  streak int default 0,
  created_at timestamptz default now()
);

-- Criar Tabela de Progresso
create table public.user_lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  level_id int,
  ka_id text,
  lesson_id text,
  lesson_type text,
  completed boolean default true,
  quiz_score int,
  last_code text,
  completed_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- Criar Tabela de Certificados
create table public.certificates (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  level_id int,
  level_title text,
  issued_at timestamptz default now()
);

-- Ativar RLS
alter table public.profiles enable row level security;
alter table public.user_lesson_progress enable row level security;

-- Políticas
create policy "Perfis são públicos para leitura." on public.profiles for select using (true);
create policy "Utilizadores editam o próprio perfil." on public.profiles for update using (auth.uid() = id);
create policy "Progresso é privado." on public.user_lesson_progress for select using (auth.uid() = user_id);
create policy "Utilizadores gravam o próprio progresso." on public.user_lesson_progress for insert with check (auth.uid() = user_id);
```

---
© 2024 Codworks Moz. Infraestrutura de Dados Master.