import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-refactoring-safe",
    title: "Refatoração Segura",
    content: `
        <h2>A Rede de Segurança dos Testes</h2>
        <p>A premissa fundamental da refatoração é que ela <strong>não altera o comportamento observável</strong> do software. Como podemos ter certeza disso?</p>
        <p><strong>Com uma suíte de testes automatizados abrangente.</strong></p>
        <p>Os testes atuam como uma rede de segurança. Sem eles, qualquer refatoração é arriscada e pode ser chamada de "re-escrita" ou "re-arquitetura" imprudente.</p>
        
        <h3>O Ciclo de Refatoração Segura:</h3>
        <ol>
            <li>
                <strong>Tenha Testes:</strong> Certifique-se de que você tem uma boa cobertura de testes para a parte do código que pretende refatorar. Se não tiver, escreva os testes <em>antes</em> de começar a refatorar.
            </li>
            <li>
                <strong>Rode os Testes:</strong> Execute todos os testes e certifique-se de que todos estão passando. A barra deve estar "verde".
            </li>
            <li>
                <strong>Faça uma Pequena Mudança:</strong> Aplique uma única e pequena refatoração (ex: renomeie uma variável, extraia um método).
            </li>
            <li>
                <strong>Rode os Testes Novamente:</strong> Execute os testes novamente. Se todos passarem, você sabe que sua pequena mudança foi segura.
            </li>
            <li>
                <strong>Repita:</strong> Continue este ciclo de pequenas mudanças e testes frequentes.
            </li>
        </ol>
        <p>Se em algum momento um teste quebrar, você sabe que a última pequena mudança que você fez foi a causa. É muito mais fácil depurar uma pequena mudança do que uma grande reescrita. Este processo disciplinado e incremental é a chave para melhorar o design do código de forma sustentável e sem introduzir novos bugs.</p>
    `
};
