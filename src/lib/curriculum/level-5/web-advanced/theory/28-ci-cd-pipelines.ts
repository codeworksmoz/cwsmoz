import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t28-ci-cd-pipelines",
    title: "Pipelines de CI/CD: GitHub Actions",
    youtubeVideoId: "R8_veQiY-ag",
    content: `
        <h2>Automatizando o Ciclo de Vida do Software</h2>
        <p><strong>CI/CD</strong> é uma prática que visa automatizar as etapas do ciclo de vida de desenvolvimento de software, desde a integração do código até a entrega em produção.</p>
        <ul>
            <li><strong>Integração Contínua (CI):</strong> A prática de mesclar automaticamente o código de vários desenvolvedores em um repositório central. Cada integração é verificada por um build automatizado (que pode incluir testes), permitindo detectar erros de integração o mais cedo possível.</li>
            <li><strong>Entrega/Implantação Contínua (CD):</strong> Após a etapa de CI, o código é automaticamente implantado em um ambiente (teste, homologação ou produção).</li>
        </ul>

        <h3>GitHub Actions</h3>
        <p>GitHub Actions é uma plataforma de CI/CD integrada diretamente ao GitHub. Ela permite automatizar seu fluxo de trabalho de desenvolvimento, teste e implantação. Você define seus fluxos de trabalho (workflows) em arquivos YAML na pasta <code>.github/workflows</code> do seu repositório.</p>

        <h3>Exemplo de Workflow:</h3>
        <p>Um workflow típico para uma aplicação Node.js pode ter os seguintes passos:</p>
        <ol>
            <li><strong>Gatilho (Trigger):</strong> O workflow é acionado em cada <code>push</code> para o branch <code>main</code>.</li>
            <li><strong>Job:</strong> Um conjunto de passos que são executados em um corredor (runner).</li>
            <li><strong>Passos (Steps):</strong>
                <ul>
                    <li>Fazer checkout do código do repositório.</li>
                    <li>Configurar o ambiente Node.js.</li>
                    <li>Instalar as dependências (<code>npm install</code>).</li>
                    <li>Rodar os testes (<code>npm test</code>).</li>
                    <li>Fazer o build da aplicação (<code>npm run build</code>).</li>
                    <li>Se tudo passar, fazer o deploy para um serviço de hospedagem.</li>
                </ul>
            </li>
        </ol>
        <p>Outras ferramentas populares incluem GitLab CI, Jenkins e CircleCI.</p>
    `
};
