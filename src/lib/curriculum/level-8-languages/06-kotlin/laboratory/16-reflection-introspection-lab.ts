import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "kt-p16",
  language: "kotlin",
  title: "Projeto Master: KClass e Introspecção",
  description: "Descubra propriedades de objetos em tempo de execução.",
  statement: "Utilize a propriedade '::class' para obter a referência de KClass de um objeto e listar os seus membros.",
  isProjectPart: true,
  template: `import kotlin.reflect.full.*

fun inspect(obj: Any) {
    val kClass = obj::class
    // Acesse kClass.members para listar funções e propriedades
}`,
  detailedExplanation: `
    <h3>🔍 Olhando para dentro do Código</h3>
    <p>A reflexão em Kotlin (kotlin-reflect) é mais amigável que a do Java, fornecendo acesso a conceitos nativos como parâmetros nomeados e nulabilidade de tipos em runtime.</p>
  `,
  objectives: [
    {
      id: "kclass_ref",
      description: "Obtenha a KClass usando a sintaxe de referência dupla.",
      test: "::class"
    }
  ]
};