import type { PracticeExercise } from '../../../../../types';

export const exercise: PracticeExercise = { 
    id: 'js-bin-converter', 
    title: 'Conversor Binário', 
    statement: 'Crie uma função que converte um número decimal para binário.',
    
    template: `function decimalToBinary(decimal) {
    // Seu código vai aqui
    // Exemplo: se decimal = 5, deve retornar "101"
}`,

    youtubeVideoId: 'Qdw4iA1p2so',
    
    detailedExplanation: `
        <div class="explanation-container">
            <h2>🧠 O que é o sistema binário?</h2>
            <p>Imagine que você só tem dois dedos 🖐️. Como você contaria? Seria diferente, né?</p>
            <p>O computador é assim: ele só entende <strong>dois símbolos</strong>: 0 e 1. É o que chamamos de <strong>sistema binário</strong>.</p>
            <p>Enquanto nós humanos usamos 10 dígitos (0,1,2,3,4,5,6,7,8,9), o computador usa apenas 2 dígitos (0 e 1).</p>
            
            <h2>🎯 O que vamos fazer?</h2>
            <p>Vamos criar uma função que pega um número que você entende (como 5, 10 ou 42) e transforma ele em binário, que é como o computador entende.</p>
            <p><strong>Exemplo prático:</strong></p>
            <ul>
                <li>Número decimal 5 = Binário <strong>101</strong></li>
                <li>Número decimal 10 = Binário <strong>1010</strong></li>
                <li>Número decimal 42 = Binário <strong>101010</strong></li>
            </ul>
            
            <h2>📚 Como fazer essa conversão?</h2>
            <p>Vamos aprender um método simples chamado <strong>"divisões sucessivas por 2"</strong>. É como dividir o número até não sobrar nada!</p>
            
            <h3>🔢 Exemplo passo a passo: Convertendo 13 para binário</h3>
            
            <table class="step-table">
                <tr>
                    <th>Passo</th>
                    <th>Conta</th>
                    <th>Resultado</th>
                    <th>Resto</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>13 ÷ 2</td>
                    <td>6</td>
                    <td style="color: blue; font-weight: bold;">1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>6 ÷ 2</td>
                    <td>3</td>
                    <td style="color: blue; font-weight: bold;">0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3 ÷ 2</td>
                    <td>1</td>
                    <td style="color: blue; font-weight: bold;">1</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>1 ÷ 2</td>
                    <td>0</td>
                    <td style="color: blue; font-weight: bold;">1</td>
                </tr>
            </table>
            
            <p><strong>✨ Agora leia os restos de <span style="color: blue;">BAIXO para CIMA</span> (do último para o primeiro):</strong> 1 1 0 1</p>
            <p>🎉 <strong>Resultado:</strong> 13 em decimal = <strong>1101</strong> em binário!</p>
            
            <h2>💻 Como fazer isso em JavaScript?</h2>
            <p>Existem duas formas. A forma fácil (para aprender) e a forma mágica (para usar no dia a dia).</p>
            
            <h3>📝 Forma manual (aprendendo o conceito):</h3>
            <pre><code>
function decimalToBinary(decimal) {
    if (decimal === 0) return "0";
    
    let binario = "";
    
    while (decimal > 0) {
        let resto = decimal % 2;  // % significa "resto da divisão"
        binario = resto + binario; // adiciona o resto no começo
        decimal = Math.floor(decimal / 2); // divide e arredonda para baixo
    }
    
    return binario;
}
            </code></pre>
            
            <h3>⚡ Forma mágica (atalho do JavaScript):</h3>
            <pre><code>
function decimalToBinary(decimal) {
    return decimal.toString(2);
}
            </code></pre>
            <p>O <code>.toString(2)</code> é um método especial que já faz toda a conversão para você! O número "2" significa "quero em binário".</p>
            
            <h2>🎮 Vamos praticar?</h2>
            <p>Tente completar o código no template acima. Use a forma manual primeiro para entender, depois experimente o atalho!</p>
            
            <h2>💡 Dicas para iniciantes:</h2>
            <ul>
                <li><strong>% (módulo):</strong> Esse operador dá o resto da divisão. Ex: 5 % 2 = 1 (resto da divisão de 5 por 2)</li>
                <li><strong>Math.floor():</strong> Arredonda um número para baixo. Ex: Math.floor(7.9) = 7</li>
                <li><strong>while:</strong> Repete um bloco de código ENQUANTO uma condição for verdadeira</li>
                <li><strong>Concatenação:</strong> "1" + "0" + "1" = "101"</li>
            </ul>
            
            <h2>✅ Teste seu código:</h2>
            <ul>
                <li>decimalToBinary(0) deve retornar "0"</li>
                <li>decimalToBinary(1) deve retornar "1"</li>
                <li>decimalToBinary(2) deve retornar "10"</li>
                <li>decimalToBinary(5) deve retornar "101"</li>
                <li>decimalToBinary(13) deve retornar "1101"</li>
            </ul>
            
            <div class="tip-box">
                <strong>🎯 Dica de ouro:</strong> Não se preocupe se não entender tudo de primeira! 
                Programar é como aprender um novo idioma - leva tempo e prática. 
                Tente, erre, tente de novo. Cada erro te ensina algo novo!
            </div>
        </div>
        
        <style>
            .explanation-container {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
            }
            .step-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            .step-table th, .step-table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }
            .step-table th {
                background-color: #f2f2f2;
            }
            pre {
                background-color: #f4f4f4;
                padding: 15px;
                border-radius: 5px;
                overflow-x: auto;
            }
            code {
                background-color: #f4f4f4;
                padding: 2px 5px;
                border-radius: 3px;
                font-family: 'Courier New', monospace;
            }
            .tip-box {
                background-color: #e8f4f8;
                border-left: 4px solid #2196F3;
                padding: 15px;
                margin: 20px 0;
                border-radius: 5px;
            }
        </style>
    `
}; 