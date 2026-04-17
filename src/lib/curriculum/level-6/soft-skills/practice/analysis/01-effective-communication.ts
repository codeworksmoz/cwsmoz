import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'soft-ex-1',
    title: 'Comunicação Efetiva',
    statement: 'Você precisa explicar um bug complexo para dois públicos diferentes: seu colega de equipe (outro dev) e o Product Owner (não-técnico). Descreva como você adaptaria sua comunicação para cada um.',
    template: `// Comunicação para o Colega Dev:
// ...

// Comunicação para o Product Owner:
// ...
`,
    youtubeVideoId: 'm_nOAo-Lajw',
    detailedExplanation: `
        <h2>Adaptando sua Mensagem ao Público</h2>
        <p>A habilidade de ajustar sua comunicação é uma das soft skills mais valiosas para um desenvolvedor.</p>
        <h3>Analisando a Comunicação</h3>
        <ol>
            <li><strong>Para o Colega Dev:</strong> Você pode ser técnico. Descreva o problema em termos de código, incluindo o stack trace, a linha específica que está causando o bug, e suas hipóteses sobre a causa raiz (ex: "Acredito que é uma condição de corrida no serviço X quando o método Y é chamado").</li>
            <li><strong>Para o Product Owner:</strong> Foque no impacto para o usuário e para o negócio. Evite jargão técnico. Descreva o problema em termos de funcionalidade. Ex: "Encontramos um problema onde, em certas condições, os usuários não conseguem salvar suas alterações no perfil. O impacto é que X% dos usuários estão sendo afetados. Nossa prioridade é corrigir isso."</li>
        </ol>
    `
};
