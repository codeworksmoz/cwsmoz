import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-mvc-mvp-mvvm",
    title: "Padrões de Arquitetura de UI: MVC, MVP e MVVM",
    content: `
        <h2>Organizando a Lógica da Interface do Usuário</h2>
        <p>Esses padrões ajudam a separar as preocupações na construção de interfaces de usuário, tornando o código mais organizado, testável e manutenível.</p>
        
        <h3>MVC (Model-View-Controller)</h3>
        <p>Um dos padrões mais antigos e influentes. Ele divide a aplicação em três partes interconectadas:</p>
        <ul>
            <li><strong>Model (Modelo):</strong> Representa os dados e a lógica de negócio da aplicação. É independente da UI.</li>
            <li><strong>View (Visão):</strong> A representação visual dos dados do modelo. É o que o usuário vê.</li>
            <li><strong>Controller (Controlador):</strong> Recebe a entrada do usuário, interage com o modelo e atualiza a visão. A Visão e o Modelo são conectados através do Controlador.</li>
        </ul>

        <h3>MVP (Model-View-Presenter)</h3>
        <p>Uma evolução do MVC, visando melhorar a testabilidade.</p>
        <ul>
            <li><strong>Model:</strong> O mesmo que no MVC.</li>
            <li><strong>View:</strong> Uma interface passiva que apenas exibe dados e delega todas as ações do usuário para o Presenter.</li>
            <li><strong>Presenter (Apresentador):</strong> Atua como o "homem do meio". Ele recupera dados do modelo e os formata para a visão. Não há nenhuma ligação direta entre a Visão e o Modelo. Isso torna a Visão e o Presenter mais fáceis de testar isoladamente.</li>
        </ul>

        <h3>MVVM (Model-View-ViewModel)</h3>
        <p>Muito popular em frameworks modernos de UI (como React, Vue, Angular).</p>
        <ul>
            <li><strong>Model:</strong> O mesmo que nos outros padrões.</li>
            <li><strong>View:</strong> A UI. No MVVM, a Visão está "ligada" (bound) ao ViewModel.</li>
            <li><strong>ViewModel:</strong> Expõe os dados do Modelo de uma forma que a Visão pode facilmente consumir. Ele usa um mecanismo de "data binding" para que as atualizações no ViewModel se reflitam automaticamente na Visão e vice-versa. O ViewModel não tem conhecimento direto da Visão.</li>
        </ul>
    `
};
