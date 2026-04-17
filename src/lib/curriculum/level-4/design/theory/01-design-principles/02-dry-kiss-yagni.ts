import type { TheoryLesson } from '../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-dry-kiss-yagni",
    title: "Princípios DRY, KISS e YAGNI",
    youtubeVideoId: "V0uW-2ELWjw",
    content: `
        <h2>Mecanismos para um Código Mais Simples</h2>
        <p>Além do SOLID, existem outros princípios importantes que guiam o desenvolvimento de software limpo e eficaz.</p>
        
        <h3>DRY - Don't Repeat Yourself (Não se Repita)</h3>
        <p><strong>"Toda peça de conhecimento deve ter uma representação única, inequívoca e autoritativa dentro de um sistema."</strong></p>
        <p>A essência do DRY é evitar a duplicação de código. Se você se encontrar copiando e colando código, é um sinal de que você deve abstrair essa lógica para uma função ou classe reutilizável. A repetição de código torna a manutenção um pesadelo: se você precisar corrigir um bug, terá que corrigi-lo em todos os lugares onde o código foi copiado.</p>
        
        <h3>KISS - Keep It Simple, Stupid (Mantenha Simples, Estúpido)</h3>
        <p>Este princípio defende que a maioria dos sistemas funciona melhor se for mantida simples em vez de complicada. A simplicidade deve ser um objetivo chave no design e a complexidade desnecessária deve ser evitada.</p>
        <p>Muitas vezes, a solução mais simples e direta é a melhor. Evite a superengenharia (over-engineering) e a adição de funcionalidades que não são imediatamente necessárias.</p>
        
        <h3>YAGNI - You Ain't Gonna Need It (Você Não Vai Precisar Disso)</h3>
        <p>Este princípio afirma que um programador não deve adicionar funcionalidade até que seja estritamente necessário. É uma prática do Extreme Programming (XP).</p>
        <p>É uma tentação comum adicionar código extra "para o futuro", pensando que será útil mais tarde. O YAGNI nos lembra que isso geralmente leva a um código mais complexo, inchado e difícil de manter. Implemente apenas o que é necessário para a tarefa atual.</p>
    `
};
