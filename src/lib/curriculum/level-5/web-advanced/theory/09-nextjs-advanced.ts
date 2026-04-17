import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t9-nextjs-advanced",
    title: "Next.js Avançado: Server Components e Server Actions",
    youtubeVideoId: "Nl4gg6s-b4Q",
    content: `
        <h2>Revolucionando a Arquitetura Full-Stack</h2>
        <p>O App Router do Next.js introduziu conceitos poderosos que mudam a forma como construímos aplicações React.</p>

        <h3>React Server Components (RSC)</h3>
        <p>Por padrão, no App Router, todos os componentes são Componentes de Servidor. Eles rodam <strong>exclusivamente no servidor</strong>. Isso tem vantagens enormes:</p>
        <ul>
            <li><strong>Zero JavaScript no Bundle:</strong> O código dos RSCs não é enviado para o cliente, reduzindo o tamanho do bundle e melhorando o tempo de carregamento inicial.</li>
            <li><strong>Acesso Direto ao Back-end:</strong> Podem acessar diretamente recursos do servidor, como bancos de dados ou APIs internas, sem a necessidade de uma chamada de API explícita pelo cliente.</li>
            <li><strong>Segurança:</strong> Chaves de API e tokens secretos podem ser usados com segurança, pois o código nunca sai do servidor.</li>
        </ul>
        <p>Para adicionar interatividade (como usar <code>useState</code> ou <code>useEffect</code>), você precisa optar por um Componente de Cliente, adicionando a diretiva <code>'use client';</code> no topo do arquivo.</p>
        
        <h3>Server Actions</h3>
        <p>Server Actions permitem que você execute código do lado do servidor diretamente a partir de um evento no cliente, como o envio de um formulário. Elas eliminam a necessidade de criar rotas de API manuais para mutações de dados.</p>
        <p>Você pode definir uma Server Action dentro de um Componente de Servidor ou em um arquivo separado com a diretiva <code>'use server';</code>.</p>
        <pre><code class="language-jsx">// app/page.tsx (Server Component)
export default function Page() {
  async function criarItem(data: FormData) {
    'use server';
    // Lógica para salvar no banco de dados
  }
 
  return (
    <form action={criarItem}>
      <button type="submit">Adicionar Item</button>
    </form>
  );
}
        </code></pre>
    `
};
