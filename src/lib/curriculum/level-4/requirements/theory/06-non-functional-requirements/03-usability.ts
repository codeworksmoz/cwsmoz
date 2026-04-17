import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "req-t6-nfr-usability",
    title: "RNFs: Usabilidade",
    content: `
        <h2>Quão Fácil de Usar o Sistema Deve Ser?</h2>
        <p><strong>Requisitos Não-Funcionais (RNFs) de Usabilidade</strong> (ou Facilidade de Uso) definem o quão fácil e agradável é para os usuários interagirem com o sistema para atingir seus objetivos.</p>
        <p>Um sistema pode ser tecnicamente perfeito, mas se os usuários não conseguirem descobrir como usá-lo, ele falhará.</p>
        
        <h3>Aspectos da Usabilidade:</h3>
        <ul>
            <li>
                <strong>Facilidade de Aprendizagem (Learnability):</strong> Quão fácil é para novos usuários realizarem tarefas básicas na primeira vez que usam o sistema?
                <br/><em>Exemplo: "Um novo usuário deve ser capaz de criar uma conta e postar sua primeira mensagem em menos de 5 minutos, sem precisar de ajuda externa."</em>
            </li>
            <li>
                <strong>Eficiência:</strong> Uma vez que um usuário aprendeu o sistema, quão rápido ele consegue realizar as tarefas?
                <br/><em>Exemplo: "Um usuário experiente deve ser capaz de completar o processo de checkout em menos de 60 segundos."</em>
            </li>
            <li>
                <strong>Memorabilidade (Memorability):</strong> Após um período sem usar o sistema, quão fácil é para o usuário restabelecer sua proficiência?
            </li>
            <li>
                <strong>Erros:</strong> Quantos erros os usuários cometem, quão severos são esses erros e quão facilmente eles podem se recuperar dos erros?
                <br/><em>Exemplo: "A taxa de erro na conclusão do formulário de cadastro não deve exceder 5%."</em>
            </li>
            <li>
                <strong>Satisfação:</strong> Quão agradável é usar o sistema? Isso é frequentemente medido através de pesquisas de satisfação do usuário.
            </li>
        </ul>

        <h3>Acessibilidade (a11y) como um RNF:</h3>
        <p>A acessibilidade é uma parte crucial da usabilidade. Requisitos de acessibilidade garantem que o sistema possa ser usado por pessoas com deficiências.</p>
        <p><em>Exemplo: "Toda a aplicação deve estar em conformidade com as diretrizes WCAG 2.1 nível AA."</em></p>
    `
};
