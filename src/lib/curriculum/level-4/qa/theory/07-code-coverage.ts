import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t7-code-coverage",
    title: "Cobertura de Código (Code Coverage)",
    content: `
        <h2>Quanto do seu Código está sendo Testado?</h2>
        <p><strong>Cobertura de Código (Code Coverage)</strong> é uma métrica que descreve o grau em que o código-fonte de um programa é executado quando uma suíte de testes específica é executada.</p>
        <p>Ferramentas como Jest e Vitest podem gerar relatórios de cobertura que mostram, linha por linha, quais partes do seu código foram e não foram executadas durante os testes.</p>
        
        <h3>Tipos Comuns de Cobertura:</h3>
        <ul>
            <li>
                <strong>Statement Coverage (Cobertura de Declaração):</strong> Qual porcentagem de declarações (linhas de código executáveis) no seu código foi executada?
            </li>
            <li>
                <strong>Branch Coverage (Cobertura de Ramificação):</strong> Para cada estrutura de controle (como um <code>if</code> ou <code>switch</code>), quantos dos possíveis "ramos" (ex: o bloco <code>if</code> e o bloco <code>else</code>) foram executados? Esta é uma métrica mais forte que a cobertura de declaração.
            </li>
            <li>
                <strong>Function Coverage (Cobertura de Função):</strong> Qual porcentagem das funções no seu código foi chamada?
            </li>
        </ul>
        
        <h3>Como Interpretar a Métrica?</h3>
        <p>A cobertura de código é uma ferramenta útil, mas deve ser usada com cuidado.</p>
        <ul>
            <li><strong>100% de cobertura não significa ausência de bugs.</strong> Significa apenas que o código foi executado, não que ele foi testado corretamente ou que todas as asserções estão corretas.</li>
            <li><strong>Baixa cobertura é um sinal de alerta.</strong> Uma cobertura muito baixa (ex: <50%) é um forte indicativo de que partes significativas do seu sistema não estão sendo testadas e podem conter bugs.</li>
        </ul>
        <p>Muitas equipes estabelecem um limiar mínimo de cobertura (ex: 80% de cobertura de ramificação) que deve ser mantido para que um build passe no pipeline de CI/CD. O objetivo da cobertura de código não é atingir 100%, mas sim identificar as partes do seu código que estão completamente sem testes e que, portanto, representam um maior risco.</p>
    `
};
