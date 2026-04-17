import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-refactoring-code-smells",
    title: "Refatoração: Code Smells",
    content: `
        <h2>Sinais de que seu Código Precisa de um "Banho"</h2>
        <p><strong>Code Smells</strong> (maus cheiros no código) são sintomas de que há um problema mais profundo no design do seu software. Eles não são bugs, mas indicam fraquezas no design que podem levar a bugs ou dificultar a manutenção.</p>
        <p>Identificar code smells é o primeiro passo para a refatoração.</p>
        
        <h3>Categorias Comuns de Code Smells (por Martin Fowler):</h3>
        <ul>
            <li>
                <strong>Bloaters (Inchaços):</strong> Partes do código que cresceram tanto que se tornaram difíceis de trabalhar.
                <ul>
                    <li><strong>Long Method (Método Longo):</strong> Um método que faz coisas demais. Solução: Extrair partes para novos métodos.</li>
                    <li><strong>Large Class (Classe Grande):</strong> Uma classe com muitas responsabilidades, campos e métodos. Solução: Extrair funcionalidades para novas classes.</li>
                </ul>
            </li>
            <li>
                <strong>Object-Orientation Abusers (Abusadores de OO):</strong> Soluções que não utilizam plenamente as possibilidades da programação orientada a objetos.
                <ul>
                    <li><strong>Switch Statements:</strong> Múltiplos condicionais baseados no tipo de um objeto. Solução: Substituir por polimorfismo (padrão Strategy ou State).</li>
                </ul>
            </li>
            <li>
                <strong>Change Preventers (Prevenidores de Mudança):</strong> Dificultam a modificação do código.
                <ul>
                    <li><strong>Divergent Change (Mudança Divergente):</strong> Uma única classe que você precisa mudar por diferentes razões. Solução: Separar as responsabilidades (Princípio da Responsabilidade Única).</li>
                    <li><strong>Shotgun Surgery (Cirurgia de Espingarda):</strong> Uma única mudança que requer pequenas alterações em muitas classes diferentes. Solução: Mover a lógica para uma classe central.</li>
                </ul>
            </li>
            <li>
                <strong>Dispensables (Dispensáveis):</strong> Algo inútil que deve ser removido.
                <ul>
                    <li><strong>Comments (Comentários):</strong> Muitas vezes, comentários são usados para explicar um código confuso. A melhor solução é refatorar o código para que ele seja claro por si só.</li>
                    <li><strong>Duplicate Code (Código Duplicado):</strong> O mesmo código aparece em múltiplos lugares. Solução: Extrair para um método ou função comum.</li>
                </ul>
            </li>
        </ul>
    `
};
