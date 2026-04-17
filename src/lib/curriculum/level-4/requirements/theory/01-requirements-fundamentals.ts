import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "req-t1-fundamentals",
    title: "Fundamentos de Requisitos",
    content: `
        <h2>Entendendo o "O Quê" e o "Porquê"</h2>
        <p><strong>Engenharia de Requisitos</strong> é o processo de definir, documentar e manter os requisitos de um sistema de software. É a disciplina para garantir que estamos construindo a coisa certa.</p>
        <p>Um requisito é uma condição ou capacidade que deve ser atendida por um sistema para satisfazer um contrato, padrão, especificação ou outro documento formalmente imposto.</p>
        
        <h3>Tipos de Requisitos:</h3>
        <dl>
            <dt class="font-bold mt-4">Requisitos Funcionais</dt>
            <dd class="ml-4">
                Descrevem o que o sistema <strong>deve fazer</strong>. São as funcionalidades do sistema, as ações que ele deve ser capaz de executar.
                <br/>
                <em>Exemplo: "O sistema deve permitir que o usuário faça login com email e senha."</em>
            </dd>

            <dt class="font-bold mt-4">Requisitos Não-Funcionais (RNFs)</dt>
            <dd class="ml-4">
                Descrevem como o sistema <strong>deve ser</strong>. São as qualidades do sistema, como restrições de performance, segurança, usabilidade e confiabilidade. Eles não descrevem uma funcionalidade, mas sim um critério de qualidade sobre ela.
                <br/>
                <em>Exemplo: "A página de login deve carregar em menos de 2 segundos."</em> ou <em>"A senha do usuário deve ser armazenada de forma criptografada."</em>
            </dd>
        </dl>
        
        <p class="mt-4">Ignorar requisitos não-funcionais é uma causa comum de falha em projetos de software. Um sistema pode fazer tudo o que foi pedido (requisitos funcionais), mas se for lento, inseguro ou difícil de usar, ele será um fracasso.</p>
    `
};
