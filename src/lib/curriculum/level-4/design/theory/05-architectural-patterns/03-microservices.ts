import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-microservices",
    title: "Arquitetura de Microserviços",
    content: `
        <h2>Decompondo um Monólito</h2>
        <p>A arquitetura de microserviços é uma abordagem onde uma única aplicação é composta por um conjunto de pequenos serviços independentes. Cada serviço roda em seu próprio processo e se comunica com os outros através de mecanismos leves, geralmente uma API HTTP/REST.</p>
        
        <h3>Características:</h3>
        <ul>
            <li><strong>Altamente Manuteníveis e Testáveis:</strong> Permite que as equipes se concentrem em serviços menores e bem definidos.</li>
            <li><strong>Acoplamento Fraco:</strong> Os serviços são independentes.</li>
            <li><strong>Implantação Independente:</strong> Cada serviço pode ser implantado de forma autônoma.</li>
            <li><strong>Organizados em Torno de Capacidades de Negócio:</strong> Cada serviço é responsável por uma funcionalidade de negócio específica.</li>
            <li><strong>Flexibilidade Tecnológica:</strong> É possível usar diferentes tecnologias (linguagens, bancos de dados) para diferentes serviços.</li>
        </ul>

        <h3>Desafios:</h3>
        <ul>
            <li><strong>Complexidade Operacional:</strong> Gerenciar e monitorar dezenas ou centenas de serviços é muito mais complexo do que um único monólito.</li>
            <li><strong>Comunicação de Rede:</strong> A comunicação entre serviços pela rede introduz latência e a possibilidade de falhas.</li>
            <li><strong>Consistência de Dados:</strong> Manter a consistência dos dados entre múltiplos serviços pode ser desafiador (requer padrões como Sagas).</li>
        </ul>
    `
};
