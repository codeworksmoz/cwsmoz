import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t40-micro-frontends",
    title: "Arquitetura: Micro-frontends",
    youtubeVideoId: "Wum8aCjI53g",
    content: `
        <h2>Quebrando o Monólito do Frontend</h2>
        <p><strong>Micro-frontends</strong> é uma abordagem arquitetural onde uma aplicação frontend é decomposta em "micro-aplicações" menores e semi-independentes. Cada micro-frontend pode ser desenvolvido, testado e implantado de forma autônoma por equipes diferentes.</p>
        <p>Assim como os microserviços fizeram para o backend, os micro-frontends visam resolver os desafios de escalar o desenvolvimento frontend em grandes organizações.</p>
        
        <h3>Benefícios:</h3>
        <ul>
            <li><strong>Equipes Autônomas:</strong> Cada equipe é dona de uma parte da aplicação do início ao fim (end-to-end).</li>
            <li><strong>Implantações Independentes:</strong> Uma equipe pode fazer deploy de uma nova funcionalidade sem precisar coordenar com todas as outras equipes.</li>
            <li><strong>Flexibilidade Tecnológica:</strong> É possível que diferentes micro-frontends sejam escritos com frameworks diferentes (ex: um em React, outro em Vue), embora isso deva ser feito com cautela.</li>
        </ul>

        <h3>Desafios:</h3>
        <ul>
            <li><strong>Complexidade:</strong> A orquestração dos micro-frontends, o compartilhamento de estado e a manutenção de uma experiência de usuário consistente podem ser complexos.</li>
            <li><strong>Tamanho do Bundle:</strong> Se não for gerenciado corretamente, o usuário pode acabar baixando dependências duplicadas (ex: múltiplas versões do React).</li>
        </ul>
        
        <h3>Module Federation</h3>
        <p><strong>Module Federation</strong> é uma funcionalidade do Webpack 5 que se tornou a tecnologia padrão para implementar micro-frontends. Ela permite que uma aplicação JavaScript carregue dinamicamente código de outra aplicação em tempo de execução, enquanto compartilha dependências de forma eficiente. Isso permite que diferentes builds de aplicações independentes se comportem como uma única aplicação coesa.</p>
    `
};
