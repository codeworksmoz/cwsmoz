# 🏛️ Nível 1: Fundamentos (Core Foundations)

Este nível é a porta de entrada para a engenharia. Foca-se em conceitos universais e ferramentas de base.

## 📁 Estrutura de Pastas
Cada pasta numerada (ex: `01-cs-core`) representa uma **Knowledge Area (KA)**.

### Como adicionar conteúdo:
1. **Teoria:** Crie ficheiros `.ts` dentro da pasta `theory/` da KA.
2. **Quizzes:** Crie ficheiros `.ts` dentro da pasta `quizzes/` da KA.
3. **Prática:** Adicione exercícios no objeto `practice` dentro de `laboratory.ts`.
4. **Registro:** Certifique-se de que a KA está importada e listada no `index.ts` deste diretório.

## 🔗 Vinculação
- O `id` da lição teórica deve ser único (ex: `cs-t1`).
- O `quizId` na lição teórica deve corresponder ao `id` de um quiz existente.
- A ordem no `findOrderedLessons()` em `src/lib/curriculum/index.ts` define a navegação automática.
