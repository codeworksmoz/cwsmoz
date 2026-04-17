import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'hci-ex-2', 
    title: 'Teste de Acessibilidade', 
    statement: 'Use um leitor de tela para navegar no site da sua universidade e anote as dificuldades.', 
    template: 'Site: ...\nDificuldades: ...',
    youtubeVideoId: 'f-qyIswy-pI',
    detailedExplanation: `
        <h2>Testando com Leitores de Tela</h2>
        <p>Testar com um leitor de tela é a melhor forma de entender a experiência de usuários com deficiência visual.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Ative o leitor de tela do seu sistema operacional (NVDA para Windows, VoiceOver para Mac).</li>
            <li>Feche os olhos ou desligue o monitor para simular a experiência.</li>
            <li>Tente navegar pelo site usando apenas o teclado (teclas Tab, Shift+Tab, Enter, Espaço, setas).</li>
            <li>Tente encontrar informações importantes, como o calendário acadêmico ou a página de um curso.</li>
            <li>Anote todas as dificuldades que encontrar. As imagens têm texto alternativo? Os links são descritivos?</li>
        </ol>
    `
};
