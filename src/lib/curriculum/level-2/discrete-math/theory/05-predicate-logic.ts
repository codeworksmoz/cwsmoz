import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "dm-t-predicate-logic",
    title: "Lógica de Predicados",
    content: `
        <h2>Analisando a Estrutura Interna das Proposições</h2>
        <p>A lógica proposicional é limitada porque trata proposições inteiras como unidades indivisíveis. A <strong>lógica de predicados</strong> (ou lógica de primeira ordem) nos permite analisar a estrutura interna das proposições, introduzindo predicados, variáveis e quantificadores.</p>

        <h3>Predicados e Quantificadores:</h3>
        <ul>
            <li><strong>Predicado:</strong> Uma propriedade que o sujeito de uma declaração pode ter. Ex: "é maior que 5". Representamos como P(x).</li>
            <li><strong>Quantificador Universal (∀):</strong> "Para todo" ou "Para cada". A declaração ∀x P(x) é verdadeira se P(x) for verdadeiro para cada x no domínio.</li>
            <li><strong>Quantificador Existencial (∃):</strong> "Existe um" ou "Para algum". A declaração ∃x P(x) é verdadeira se houver pelo menos um x no domínio para o qual P(x) é verdadeiro.</li>
        </ul>
        
        <h3>Exemplos:</h3>
        <ul>
            <li>Seja P(x) a declaração "x > 0" e o domínio seja os inteiros.
                <ul>
                    <li><strong>∀x P(x):</strong> Falso (existem inteiros negativos).</li>
                    <li><strong>∃x P(x):</strong> Verdadeiro (ex: x=1).</li>
                </ul>
            </li>
        </ul>
        
        <h3>Negação de Quantificadores:</h3>
        <p>As regras de De Morgan para quantificadores são cruciais:</p>
        <ul>
            <li>¬(∀x P(x)) ≡ ∃x ¬P(x) ("Não é verdade que todos são P" é o mesmo que "Existe um que não é P").</li>
            <li>¬(∃x P(x)) ≡ ∀x ¬P(x) ("Não é verdade que existe um P" é o mesmo que "Todos não são P").</li>
        </ul>
    `
};
