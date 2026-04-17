import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "mobile-t1",
    title: "Construindo para a Palma da Mão",
    youtubeVideoId: "0-S5a0eXPoc",
    content: `
        <h2>Nativo vs. Híbrido</h2>
        <p>O desenvolvimento mobile pode ser abordado de duas formas principais:</p>
        <ul>
            <li><strong>Nativo (iOS/Android):</strong> Desenvolver separadamente para cada plataforma usando suas linguagens e ferramentas oficiais (Swift/Kotlin). Oferece o melhor desempenho e acesso a todos os recursos do dispositivo.</li>
            <li><strong>Híbrido/Multiplataforma:</strong> Escrever um único código-base que funciona em ambas as plataformas. Frameworks como React Native e Flutter são populares. Economiza tempo e recursos, mas pode ter limitações de desempenho.</li>
        </ul>
    `
};
