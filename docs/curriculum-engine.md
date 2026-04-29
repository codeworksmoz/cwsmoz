# 📖 Curriculum Engine - O Motor Pedagógico

O currículo é a peça central da plataforma, organizado de forma modular e cumulativa.

## 1. Organização dos Módulos (Levels 1-8)
O motor em `src/lib/curriculum/index.ts` orquestra a navegação:
- **Levels 1-7:** Focam em fundamentos e especializações isoladas.
- **Level 8 (Mastery):** Introduz a **Herança de Projeto**.

## 2. Herança de Projeto (Nível 8)
Se `isProjectPart: true` estiver ativo no exercício:
1. O motor procura o `last_code` da lição anterior do utilizador no Supabase.
2. Se não encontrar, busca no `localStorage`.
3. Injeta esse código no editor da aula atual.
Isto permite que o aluno construa uma aplicação real linha a linha ao longo de 21 lições.

## 3. Sistema de Validação (Audit Engine)
Cada laboratório possui um array de `objectives`. A validação é feita via:
- **String Matching:** Verifica se termos obrigatórios existem no código.
- **Regex Validation:** Valida padrões complexos de arquitetura.
- **Console Hijacking:** O motor interceta a saída do código para validar resultados lógicos.

## 4. Quizzes
Cada aula teórica está vinculada a um `quizId`. O progresso só é marcado como concluído se o aluno atingir o `passingScore` (geralmente 70-80%).
