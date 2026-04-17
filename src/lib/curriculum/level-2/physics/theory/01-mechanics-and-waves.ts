import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "phy-t1",
    title: "Física Aplicada",
    youtubeVideoId: "bWUq6bNewrA",
    content: `
        <h2>Simulando o Mundo Real</h2>
        <p>A física fornece os modelos para criar simulações realistas e interativas.</p>
        <h3>Aplicações na Computação:</h3>
        <ul>
            <li><strong>Mecânica Newtoniana:</strong> As leis do movimento de Newton são a base para quase todos os motores de física (game engines). Elas governam como os objetos se movem, aceleram e interagem através de forças. Essencial para jogos, simulações e robótica.</li>
            <li><strong>Óptica e Ondas:</strong> O estudo de como a luz se comporta (reflexão, refração) é fundamental para a computação gráfica e o "ray tracing", que simula raios de luz para criar imagens fotorrealistas. A física de ondas também se aplica à síntese e processamento de som.</li>
            <li><strong>Eletromagnetismo:</strong> Os princípios do eletromagnetismo são a base do funcionamento do hardware do computador, desde os transistores até o armazenamento magnético em discos rígidos e a transmissão de dados por Wi-Fi.</li>
        </ul>
    `
};
