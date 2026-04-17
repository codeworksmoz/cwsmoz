import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t4-use-case-format",
    title: "Casos de Uso: Formato e Componentes",
    content: `
        <h2>Descrevendo Interações Detalhadas</h2>
        <p>Um <strong>Caso de Uso (Use Case)</strong> é uma técnica de engenharia de requisitos que descreve a interação passo a passo entre um ator (usuário ou sistema externo) e o sistema para atingir um objetivo específico. Ao contrário de uma história de usuário, que é um lembrete para uma conversa, um caso de uso é um documento mais formal e detalhado.</p>
        
        <h3>Componentes de um Caso de Uso (Formato Detalhado):</h3>
        <p>Embora existam vários templates, um caso de uso detalhado geralmente inclui as seguintes seções:</p>
        <dl>
            <dt class="font-bold mt-2">1. ID e Nome do Caso de Uso:</dt>
            <dd class="ml-4">Um identificador único e um nome de ação conciso (ex: "UC-01: Fazer Login").</dd>
            
            <dt class="font-bold mt-2">2. Atores:</dt>
            <dd class="ml-4">Quem está interagindo com o sistema (ex: "Cliente", "Administrador").</dd>
            
            <dt class="font-bold mt-2">3. Descrição:</dt>
            <dd class="ml-4">Um breve resumo do objetivo do caso de uso.</dd>
            
            <dt class="font-bold mt-2">4. Pré-condições:</dt>
            <dd class="ml-4">O que deve ser verdadeiro antes que o caso de uso possa começar (ex: "O usuário deve estar na página de login").</dd>
            
            <dt class="font-bold mt-2">5. Pós-condições:</dt>
            <dd class="ml-4">O que será verdadeiro após a conclusão bem-sucedida do caso de uso (ex: "O usuário está autenticado no sistema e é redirecionado para o painel").</dd>
            
            <dt class="font-bold mt-2">6. Fluxo Principal (ou Fluxo Básico):</dt>
            <dd class="ml-4">A sequência de passos do "caminho feliz", onde tudo ocorre como esperado, do início ao fim.</dd>
            
            <dt class="font-bold mt-2">7. Fluxos Alternativos:</dt>
            <dd class="ml-4">Outros cenários que também levam ao sucesso, mas por um caminho diferente.</dd>
            
            <dt class="font-bold mt-2">8. Fluxos de Exceção:</dt>
            <dd class="ml-4">Cenários que resultam em falha (ex: "Senha inválida", "Sistema offline").</dd>
        </dl>
        <p>Casos de uso são excelentes para capturar os requisitos funcionais de forma detalhada e são uma ótima fonte para a criação de cenários de teste.</p>
    `
};
