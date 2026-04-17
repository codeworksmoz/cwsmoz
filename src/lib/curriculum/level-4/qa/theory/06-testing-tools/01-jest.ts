import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t6-jest",
    title: "Ferramentas: Jest",
    content: `
        <h2>Um Framework de Testes JavaScript "Tudo em Um"</h2>
        <p><strong>Jest</strong> é um popular framework de testes JavaScript criado e mantido pelo Facebook, com foco em simplicidade. Ele é a escolha padrão para testar aplicações React (incluído no Create React App) e é amplamente utilizado em todo o ecossistema Node.js.</p>
        
        <h3>Filosofia "Baterias Inclusas"</h3>
        <p>A grande vantagem do Jest é que ele vem com tudo que você precisa pronto para usar, sem necessidade de configuração complexa:</p>
        <ul>
            <li><strong>Test Runner:</strong> Encontra e executa seus testes, geralmente em paralelo para máxima velocidade.</li>
            <li><strong>Biblioteca de Asserções (Assertions):</strong> Fornece a função <code>expect()</code> com um grande conjunto de "matchers" para verificar valores (ex: <code>.toBe()</code>, <code>.toEqual()</code>, <code>.toHaveBeenCalled()</code>).</li>
            <li><strong>Mocks e Spies:</strong> Funcionalidades integradas para criar dublês de teste (<code>jest.fn()</code>, <code>jest.mock()</code>, <code>jest.spyOn()</code>).</li>
            <li><strong>Relatórios de Cobertura de Código:</strong> Pode gerar relatórios detalhados sobre a porcentagem do seu código que está sendo coberta pelos testes.</li>
        </ul>
        
        <h3>Exemplo de Teste com Jest:</h3>
        <pre><code class="language-javascript">// Funcao a ser testada
const somar = (a, b) => a + b;

// Arquivo de teste (ex: somar.test.js)
describe('somar', () => {
    it('deve retornar a soma de dois números', () => {
        expect(somar(2, 3)).toBe(5);
    });

    it('deve funcionar com números negativos', () => {
        expect(somar(-1, -1)).toBe(-2);
    });
});
</code></pre>
        <ul>
            <li><code>describe()</code> agrupa testes relacionados.</li>
            <li><code>it()</code> ou <code>test()</code> define um caso de teste individual.</li>
        </ul>
        <p>Jest é conhecido por sua excelente experiência de desenvolvedor, seus relatórios de erro claros e seu "watch mode" interativo, que executa automaticamente os testes relacionados aos arquivos que você modifica.</p>
    `
};
