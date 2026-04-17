import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'webadv-ex-2', 
    title: 'Next.js: Formulário com Server Action', 
    statement: 'Crie um formulário simples em um Server Component do Next.js que usa uma Server Action para adicionar um item a uma lista (simulada).', 
    template: `// Este é um Server Component

// Simulação de um banco de dados
let items = ['Item 1', 'Item 2'];

export default function PaginaDeAcao() {

  async function adicionarItem(dadosDoFormulario: FormData) {
    'use server'
    const novoItem = dadosDoFormulario.get('item');
    if (typeof novoItem === 'string') {
      // 1. Adicione o novo item ao array 'items'
      
      // 2. Chame a função para revalidar o caminho
      //    e atualizar a UI (em uma app real)
    }
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      {/* 3. Crie um formulário que chame a Server Action */}
      <form>
        <input type="text" name="item" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
`,
    youtubeVideoId: 'Nl4gg6s-b4Q',
    detailedExplanation: `
        <h2>Simplificando Mutações de Dados</h2>
        <p>Server Actions eliminam a necessidade de criar rotas de API para mutações de formulários, permitindo que você chame funções do servidor diretamente do seu componente.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li><strong>Adicionar ao Array:</strong> Dentro da função <code>adicionarItem</code>, use <code>items.push(novoItem)</code> para adicionar o novo item.</li>
            <li><strong>Revalidação:</strong> Em uma aplicação real, você chamaria <code>revalidatePath('/')</code> para dizer ao Next.js para re-renderizar a página com os dados atualizados. Para este exercício, você pode apenas comentar onde isso aconteceria.</li>
            <li><strong>Formulário:</strong> No elemento <code><form></code>, adicione o atributo <code>action={adicionarItem}</code>. É isso! O Next.js cuidará de invocar a função no servidor quando o formulário for submetido.</li>
        </ol>
    `
};
