import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t7-state-management",
    title: "Gerenciamento de Estado: Redux, Zustand, Context API",
    youtubeVideoId: "tv9t_z9f_UQ",
    content: `
        <h2>Gerenciando o Estado da Aplicação</h2>
        <p>Em aplicações React grandes, gerenciar o estado que é compartilhado por muitos componentes pode se tornar complexo. Bibliotecas de gerenciamento de estado fornecem padrões e ferramentas para lidar com o "estado global".</p>
        
        <h3>Context API</h3>
        <p>A solução nativa do React para compartilhar estado. É ótima para dados que não mudam com frequência, como tema da UI ou informações de autenticação do usuário. Pode causar problemas de performance se o estado mudar muito, pois todos os componentes consumidores re-renderizam.</p>
        
        <h3>Redux</h3>
        <p>A biblioteca de gerenciamento de estado mais conhecida. Redux mantém o estado da sua aplicação em um único objeto chamado "store". As mudanças de estado são feitas despachando "ações", que são processadas por "reducers".</p>
        <ul>
            <li><strong>Prós:</strong> Ecossistema maduro, ferramentas de depuração poderosas (Redux DevTools), previsibilidade.</li>
            <li><strong>Contras:</strong> Muito "boilerplate" (código repetitivo), curva de aprendizado íngreme. O Redux Toolkit (RTK) resolve muitos desses problemas.</li>
        </ul>
        
        <h3>Zustand</h3>
        <p>Uma biblioteca de gerenciamento de estado pequena, rápida e escalável baseada em hooks. É considerada uma alternativa mais simples e moderna ao Redux.</p>
        <pre><code class="language-jsx">import { create } from 'zustand'

const useStore = create((set) => ({
  ursos: 0,
  aumentarPopulacao: () => set((state) => ({ ursos: state.ursos + 1 })),
  removerTodosOsUrsos: () => set({ ursos: 0 }),
}))

function ControleDeUrsos() {
  const aumentarPopulacao = useStore((state) => state.aumentarPopulacao)
  return <button onClick={aumentarPopulacao}>mais um urso</button>
}
        </code></pre>
        <ul>
            <li><strong>Prós:</strong> Simples de usar, pouco boilerplate, ótima performance.</li>
            <li><strong>Contras:</strong> Menos ferramentas de depuração que o Redux.</li>
        </ul>
    `
};
