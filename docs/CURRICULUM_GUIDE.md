# Guia de Expansão do Currículo Codworks MOZ

Este documento é o guia essencial para qualquer pessoa que queira contribuir com o conteúdo educacional da plataforma Codworks MOZ. Ele detalha a arquitetura do currículo e fornece um passo a passo para adicionar novas lições, exercícios e muito mais.

## Arquitetura do Conteúdo

O coração do nosso conteúdo reside em `src/lib/curriculum/`. A estrutura é modular e hierárquica, projetada para ser facilmente escalável.

A hierarquia principal é: `Level` -> `KnowledgeArea` -> (`TheoryLesson` | `PracticeExercise` | `Quiz`)

### Tipos de Dados Principais

Todos os tipos são definidos em `src/lib/curriculum/types.ts`.

-   **`Level`**: Representa um nível de proficiência (ex: Nível 1: Fundamentos). Contém uma lista de `KnowledgeArea`.
-   **`KnowledgeArea` (KA)**: Uma área de conhecimento específica dentro de um nível (ex: "Web Core", "Git & Version Control"). Cada KA contém:
    -   `theory`: Uma lista de `TheoryLesson`.
    -   `practice`: Um objeto onde cada chave é uma linguagem de programação (ex: `javascript`, `python`) e o valor é uma lista de `PracticeExercise`.
    -   `quizzes`: Uma lista de `Quiz`.
-   **`TheoryLesson`**: Uma única lição teórica. Pode incluir um ID de vídeo do YouTube e explicações detalhadas em HTML.
-   **`PracticeExercise`**: Um exercício prático de codificação. Inclui um enunciado, um template de código, e opcionalmente um vídeo, explicações detalhadas e um array de `tests` para validação automática.
-   **`Quiz`**: Um conjunto de perguntas de múltipla escolha para avaliar o conhecimento.

---

## Como Adicionar Conteúdo

Siga sempre a estrutura de pastas e arquivos existente. Use os arquivos atuais como modelo.

### 1. Adicionando uma Nova Lição de Teoria

Suponha que você queira adicionar uma lição sobre "Promises" em "Advanced Web Development" (Nível 5).

1.  **Crie o Arquivo da Lição:**
    -   Vá para a pasta correspondente: `src/lib/curriculum/level-5/web-advanced/theory/`.
    -   Crie um novo arquivo, por exemplo, `modern-web-development-promises.ts`.

2.  **Defina o Conteúdo da Lição:**
    -   Dentro do novo arquivo, exporte uma constante do tipo `TheoryLesson`:
    ```typescript
    import type { TheoryLesson } from '../../../types';

    export const lesson: TheoryLesson = {
        id: "webadv-t2", // Use um ID único!
        title: "Entendendo Promises",
        youtubeVideoId: "DHvZLI7Db8E", // ID do vídeo do YouTube
        content: `
            <h2>O que são Promises?</h2>
            <p>Promises são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona.</p>
            ...
        `
    };
    ```

3.  **Registre a Nova Lição:**
    -   Abra o arquivo "agregador" `src/lib/curriculum/level-5/web-advanced/theory.ts`.
    -   Importe sua nova lição e adicione-a ao array `theory`.

    ```typescript
    // ... outras importações
    import { lesson as lesson2 } from './modern-web-development-promises';

    export const theory: TheoryLesson[] = [
        lesson1,
        lesson2, // Adicione aqui
    ];
    ```

### 2. Adicionando um Novo Exercício Prático

Suponha que você queira adicionar um exercício de JavaScript sobre `Array.map`.

1.  **Crie o Arquivo do Exercício:**
    -   Vá para a pasta da linguagem correspondente: `src/lib/curriculum/level-1/programming-fundamentals/practice/javascript/`.
    -   Crie um novo arquivo, por exemplo, `array-map.ts`.

2.  **Defina o Exercício:**
    -   Dentro do arquivo, exporte uma constante do tipo `PracticeExercise`.
    -   **Para exercícios de JS:** Você pode adicionar um array `tests` para validação automática. Cada teste é uma string de código JS que deve retornar `true` para passar.

    ```typescript
    import type { PracticeExercise } from '../../../../types';

    export const exercise: PracticeExercise = { 
        id: 'js-array-map', // ID único
        title: 'Exercício: Usando .map()', 
        statement: 'Dada uma lista de números, retorne uma nova lista com cada número dobrado.', 
        template: 'const numeros = [1, 2, 3];\nfunction dobrarNumeros(arr) {\n  // seu código aqui\n}',
        detailedExplanation: `
            <h3>Passo a Passo</h3>
            <ol>
                <li>Use o método .map() no array recebido.</li>
                <li>A função de callback do .map() deve retornar cada elemento multiplicado por 2.</li>
            </ol>
        `,
        tests: [
            {
                description: "A função deve retornar [2, 4, 6] para a entrada [1, 2, 3]",
                code: "return JSON.stringify(dobrarNumeros([1, 2, 3])) === JSON.stringify([2, 4, 6]);"
            }
        ]
    };
    ```

3.  **Registre o Novo Exercício:**
    -   Abra o arquivo agregador da linguagem: `src/lib/curriculum/level-1/programming-fundamentals/practice/javascript.ts`.
    -   Importe e adicione seu novo exercício ao array `javascriptExercises`.

### 3. Adicionando uma Nova Área de Conhecimento (KA)

1.  **Crie a Estrutura de Pastas:**
    -   Dentro de um nível (ex: `src/lib/curriculum/level-1/`), crie uma nova pasta para sua KA (ex: `my-new-ka`).
    -   Dentro dela, crie as pastas `theory`, `practice`, e `quizzes`.

2.  **Crie o Arquivo Principal da KA:**
    -   Na pasta da KA (`my-new-ka/`), crie um arquivo `index.ts`.
    -   Defina e exporte sua KA, importando os arrays `theory`, `practice` e `quizzes` dos arquivos agregadores que você criará.

3.  **Registre a Nova KA no Nível:**
    -   Abra o arquivo agregador do nível (ex: `src/lib/curriculum/level-1/index.ts`).
    -   Importe sua nova KA e adicione-a ao array `level1KnowledgeAreas`.

---

Seguindo este guia, você pode ajudar a expandir o Codworks MOZ, garantindo que o projeto permaneça organizado, consistente e fácil de manter.
