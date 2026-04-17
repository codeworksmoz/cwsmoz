import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'net-ex-2', 
    title: 'Resolução de Nomes DNS', 
    statement: 'Descreva em ordem os passos básicos que ocorrem quando você digita "www.google.com" no seu navegador e pressiona Enter, focando no processo de resolução de DNS.', 
    template: `// 1. O navegador verifica seu cache local.
// 2. ...
// 3. ...
// 4. ...
`,
    youtubeVideoId: '01-6pkvyA-c',
    detailedExplanation: `
        <h2>Traduzindo Nomes em Endereços</h2>
        <p>O DNS (Domain Name System) é a "lista telefônica" da internet. Ele traduz nomes de domínio fáceis de lembrar em endereços IP numéricos.</p>
        <h3>Passos da Resolução</h3>
        <ol>
            <li><strong>Cache do Navegador/SO:</strong> O sistema primeiro verifica se já conhece o endereço IP para aquele domínio.</li>
            <li><strong>Resolvedor DNS (DNS Resolver):</strong> Se não estiver no cache, a requisição vai para o resolvedor do seu provedor de internet.</li>
            <li><strong>Servidores Raiz (Root Servers):</strong> O resolvedor pergunta a um servidor raiz, que sabe onde encontrar os servidores de TLD (Top-Level Domain).</li>
            <li><strong>Servidores TLD:</strong> O servidor raiz direciona para o servidor do TLD (.com, .org, etc.). O servidor .com sabe onde estão os servidores de nome autoritativos para "google.com".</li>
            <li><strong>Servidor de Nomes Autoritativo:</strong> Finalmente, o servidor de nomes do Google é consultado e retorna o endereço IP final para "www.google.com". O resolvedor então armazena essa informação em cache.</li>
        </ol>
    `
};
