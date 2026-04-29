
# 🏗️ Manual do Arquiteto de Currículo - Codworks Moz

Este documento é o guia definitivo para engenheiros e pedagogos que desejam expandir, editar ou auditar o currículo da plataforma Codworks Moz. O sistema foi desenhado para ser **modular**, **tipado** e **cumulativo**.

---

## 📁 Estrutura de Pastas e Hierarquia

O currículo reside em `src/lib/curriculum/`. A estrutura varia ligeiramente entre os Níveis de Fundamentos (1-7) e os de Domínio (8).

### 🏛️ Níveis 1 a 7 (Fundamentos e Especializações)
Cada nível possui pastas para as suas **Knowledge Areas (KA)**:
- `level-X/ka-name/theory/`: Lições teóricas (.ts).
- `level-X/ka-name/quizzes/`: Questionários (.ts).
- `level-X/ka-name/laboratory/`: Exercícios conceituais ou práticos (.ts).
- `level-X/ka-name/index.ts`: O arquivo de registro que exporta a `KnowledgeArea`.

### 🎓 Nível 8 (Domínio de Linguagens)
As linguagens são tratadas como KAs de alta complexidade, divididas em **Fases**:
- `level-8-languages/language-name/theory.ts`: Registro central de lições agrupadas por Fase (ex: "Fase 1: ...").
- `level-8-languages/language-name/quizzes.ts`: Registro central de quizzes.
- `level-8-languages/language-name/laboratory/`: Ficheiros individuais para cada etapa do **Projeto Master**.

---

## 🛠️ Como Adicionar Conteúdo (Passo a Passo)

### 1. Criar a Teoria (`TheoryLesson`)
Local: `.../theory/minha-aula.ts`
```typescript
import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "id-unico-t1",           // Obrigatório: Identificador único global
  title: "Fase 1: Título",     // Use o prefixo 'Fase X:' para agrupamento no Nível 8
  content: "<div>...</div>",   // HTML seguro para renderização
  youtubeVideoId: "...",       // Opcional
  quizId: "id-unico-q1"        // Deve corresponder ao ID de um Quiz existente
};
```

### 2. Criar o Quiz (`Quiz`)
Local: `.../quizzes/meu-quiz.ts`
```typescript
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "id-unico-q1",           // Deve bater com o quizId da lição teórica
  title: "Validação Técnica",
  passingScore: 70,            // % mínima para aprovação
  questions: [
    {
      id: "q1",
      question: "Pergunta?",
      options: ["A", "B", "C"],
      correctAnswer: 0,        // Índice da opção correta
      explanation: "Dica..."   // Exibida após a resposta
    }
  ]
};
```

### 3. Criar a Prática (`PracticeExercise`)
Local: `.../laboratory/meu-lab.ts`
```typescript
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "id-unico-p1",
  language: "javascript",      // Define o highlight do editor e o runner
  isProjectPart: true,         // CRÍTICO: Se true, herda o código das aulas anteriores
  title: "Lab Master",
  statement: "Missão curta",
  detailedExplanation: "...",  // Briefing da missão (HTML)
  template: "// Início",       // Código inicial no editor
  // Templates de suporte (Opcional):
  htmlTemplate: "<div></div>", // HTML fixo para aulas de CSS/JS
  objectives: [
    {
      id: "obj1",
      description: "Fazer X",
      test: "código_esperado"  // String ou Regex para validação automática
    }
  ]
};
```

---

## 🔗 Regras de Integração e "O Cérebro"

Para que uma lição apareça na UI, ela **deve** ser registrada nos arquivos de agrupamento (barrels):

1.  **Registro na KA:** Em `index.ts` da Knowledge Area, importe e adicione aos arrays `theory`, `quizzes` ou `practice`.
2.  **Registro no Nível:** No `index.ts` do Nível (ex: `level-1/index.ts`), adicione a KA ao array `knowledgeAreas`.
3.  **Registro Global:** No `src/lib/curriculum/index.ts`, certifique-se de que o nível está no array `modules`.

### 🚀 Automação de Navegação
O motor utiliza a função `findOrderedLessons()` para criar a trilha de aprendizado automática. A ordem no Dashboard e os botões "Próxima Aula" seguem a ordem em que as lições são inseridas nos arrays de registro.

---

## ⚠️ Regras de Ouro para o Arquiteto

1.  **IDs Únicos:** O progresso do aluno no banco de dados Supabase é indexado pelo `lessonId`. Mudar um ID faz o aluno perder o progresso naquela aula.
2.  **Concorrência de IDs:** Nunca use o mesmo ID para uma Teoria e uma Prática. Use prefixos (ex: `js-t1` para teoria, `js-p1` para prática).
3.  **Herança de Projeto:** Ao usar `isProjectPart: true`, o sistema busca o progresso anterior. Se a aula anterior não tiver código salvo, o editor iniciará vazio ou com o template padrão.
4.  **HTML Seguro:** No campo `content`, utilize classes do Tailwind e tags semânticas. O CSS do site aplicará o tema Dark/Light automaticamente.

---

## 🧪 Validação de Laboratórios
O campo `test` do objetivo é o coração da validação. 
- Se for uma string simples: O validador verifica se `código.includes(test)`.
- Se for complexo: Pode ser uma expressão regular para validar padrões de sintaxe.
