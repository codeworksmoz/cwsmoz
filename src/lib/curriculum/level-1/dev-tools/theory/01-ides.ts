import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: 'devtools-t1', 
    title: 'Ambientes de Desenvolvimento (IDEs)',
    youtubeVideoId: 'a_l648-wN3o',
    content: `
      <h2>O que é uma IDE?</h2>
      <p>Um <strong>Ambiente de Desenvolvimento Integrado (IDE)</strong> é um aplicativo de software que fornece aos desenvolvedores um conjunto abrangente de ferramentas para o desenvolvimento de software em um único lugar.</p>
      <p>IDEs aumentam a produtividade ao combinar atividades como edição de código, compilação, depuração e controle de versão em uma única interface.</p>
      
      <h2>IDE vs. Editor de Código</h2>
      <p>Um editor de código é mais simples, focado em escrever e editar texto (código). Uma IDE faz tudo que um editor faz, mas também inclui ferramentas mais poderosas como um depurador (debugger), um compilador, e integração com sistemas de automação (build automation).</p>
      
      <h3>Principais IDEs e Editores de Código</h3>
      <ul>
        <li>
            <strong>Visual Studio Code (VS Code):</strong> Um editor de código leve, mas extremamente poderoso e extensível. É o mais popular atualmente para desenvolvimento web e muitas outras linguagens.
            <ul><li><strong>Linguagens:</strong> Excelente para JavaScript, TypeScript, Python, Go, e muitas outras através de extensões.</li><li><strong>Onde Baixar:</strong> <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a></li></ul>
        </li>
        <li>
            <strong>JetBrains IDEs (IntelliJ, PyCharm, WebStorm):</strong> Uma família de IDEs muito poderosas e inteligentes, cada uma especializada em uma linguagem ou ecossistema.
            <ul><li><strong>IntelliJ IDEA:</strong> Padrão da indústria para Java e desenvolvimento JVM.</li><li><strong>PyCharm:</strong> Considerado o melhor IDE para Python.</li><li><strong>WebStorm:</strong> Focado em desenvolvimento JavaScript/TypeScript.</li><li><strong>Onde Baixar:</strong> <a href="https://www.jetbrains.com/products/" target="_blank" rel="noopener noreferrer">jetbrains.com</a></li></ul>
        </li>
        <li>
            <strong>Visual Studio:</strong> Uma IDE completa da Microsoft, focada principalmente no ecossistema .NET e desenvolvimento C++. Não confundir com o VS Code.
            <ul><li><strong>Linguagens:</strong> C#, F#, C++, .NET.</li><li><strong>Onde Baixar:</strong> <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer">visualstudio.microsoft.com</a></li></ul>
        </li>
      </ul>

      <h3>Qual escolher?</h3>
      <p>Para iniciantes, o <strong>Visual Studio Code</strong> é uma excelente escolha. É gratuito, fácil de usar, tem uma comunidade enorme e extensões para praticamente qualquer coisa que você queira fazer.</p>
    `
};
