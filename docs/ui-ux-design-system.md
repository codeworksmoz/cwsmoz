# 🎨 Design System Master - Codworks Moz

Uma linguagem visual futurista desenhada para foco total e ergonomia visual.

## 1. Cores e Espaços (OKLCH)
Abandonamos o RGB/HEX para usar o padrão **OKLCH**, garantindo contraste perfeito e cores vibrantes em monitores HDR.
- **Primary:** `oklch(60% 0.15 250)` (Azul Elétrico).
- **Accent:** `oklch(70% 0.2 150)` (Verde Neon).
- **Background:** `oklch(15% 0.02 250)` (Deep Navy).

## 2. Tipografia
- **Headlines:** *Space Grotesk* (Geometria moderna).
- **Body:** *Inter* (Legibilidade máxima).
- **Code:** *Source Code Pro* (Largura fixa para engenharia).

## 3. Componentes Master
- **Bordas:** `radius: 2.5rem` para um visual orgânico e amigável.
- **Glassmorphism:** Uso de `backdrop-filter: blur(12px)` em modais e headers.
- **Animações:** Transições suaves de `0.3s` processadas pela GPU para evitar "jank".

## 4. Acessibilidade
- **Contrast Ratio:** Mínimo de 4.5:1 em todos os textos.
- **Keyboard Navigation:** Suporte total a navegação via TAB e `focus-visible`.
- **Aria Labels:** Descrição semântica em todos os botões de ícone.
