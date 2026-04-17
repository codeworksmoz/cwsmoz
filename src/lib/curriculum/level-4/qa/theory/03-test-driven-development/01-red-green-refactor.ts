import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t3-tdd-cycle",
    title: "TDD: O Ciclo Red-Green-Refactor",
    content: `
        <h2>Testes Guiando o Desenvolvimento</h2>
        <p><strong>Test-Driven Development (TDD)</strong>, ou Desenvolvimento Guiado por Testes, é uma prática de desenvolvimento de software que inverte o processo tradicional. Em vez de escrever o código de produção primeiro e os testes depois, no TDD você escreve os testes <em>antes</em> do código.</p>
        <p>O TDD segue um ciclo curto e repetitivo conhecido como <strong>"Red-Green-Refactor"</strong>.</p>
        
        <h3>O Ciclo:</h3>
        <ol>
            <li>
                <strong>🔴 Red (Vermelho):</strong>
                <ul>
                    <li>Escreva um teste pequeno e automatizado para uma nova funcionalidade ou melhoria.</li>
                    <li>Execute todos os testes e veja o novo teste falhar. Isso é importante para garantir que o teste está de fato testando algo e que ele não passa por acaso.</li>
                </ul>
            </li>
            <li>
                <strong>🟢 Green (Verde):</strong>
                <ul>
                    <li>Escreva a quantidade <em>mínima</em> de código de produção necessária para fazer o teste passar. Neste ponto, não se preocupe com a qualidade ou limpeza do código. O objetivo é apenas fazer a barra de testes ficar verde o mais rápido possível.</li>
                    <li>Execute todos os testes novamente e veja todos passarem.</li>
                </ul>
            </li>
            <li>
                <strong>🔵 Refactor (Refatorar):</strong>
                <ul>
                    <li>Agora que você tem a segurança de uma suíte de testes que passa, você pode limpar e melhorar o código que acabou de escrever. Remova duplicação, melhore nomes de variáveis, extraia métodos, etc.</li>
                    <li>Execute os testes novamente após cada pequena refatoração para garantir que você não quebrou nada.</li>
                </ul>
            </li>
        </ol>
        <p>Este ciclo é repetido para cada pequena peça de funcionalidade. O TDD resulta em um design de código mais simples, melhor cobertura de testes e alta confiança nas mudanças.</p>
    `
};
