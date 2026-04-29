# 💻 Engenharia de Frontend - Codworks Moz

A interface foi projetada com foco em desenvolvedores, priorizando a legibilidade do código e a fluidez da interatividade.

## 1. Componentização (ShadCN UI)
Utilizamos o **ShadCN UI** (Radix + Tailwind) para garantir acessibilidade (WAI-ARIA) e consistência visual. Todos os componentes são customizados com bordas arredondadas de `2.5rem` e efeitos de **Glassmorphism**.

## 2. O Motor de Edição
- **Editor:** `@monaco-editor/react` (o motor do VS Code).
- **Configuração:** Otimizado para mobile com `wordWrap: "on"` e `minimap: { enabled: false }`.
- **Lógica de Multi-abas:** Suporte a HTML, CSS e JS simultâneos com sincronização de estado.

## 3. Syntax Highlighting Customizado
Criámos um motor de realce de sintaxe modular em `src/lib/highlighters/` que suporta 12+ linguagens, incluindo:
- **Web:** HTML, CSS, JavaScript, TypeScript.
- **Sistemas:** Rust, Go, C++, Java, Kotlin.
- **Ferramentas:** Bash, SQL, PHP 8.4.

## 4. Preview em Tempo Real
O componente `InteractiveCodeBlock` utiliza um sistema de `iframe` dinâmico que:
1. Injeta o código do aluno num ambiente isolado.
2. Aplica estilos de base para visualização mobile vs desktop.
3. Captura logs do console para o terminal de debugging da interface.
