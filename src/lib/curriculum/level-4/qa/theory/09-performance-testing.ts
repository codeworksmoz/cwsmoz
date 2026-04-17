import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "qa-t9-performance-testing",
    title: "Testes de Performance",
    content: `
        <h2>O Sistema Aguenta a Carga?</h2>
        <p><strong>Testes de Performance</strong> são um tipo de teste não-funcional que foca em verificar como um sistema se comporta em termos de responsividade e estabilidade sob uma carga de trabalho específica. O objetivo é identificar e eliminar gargalos de performance.</p>
        
        <h3>Tipos Comuns de Testes de Performance:</h3>
        <ul>
            <li>
                <strong>Teste de Carga (Load Testing):</strong> Simula um número esperado de usuários simultâneos em um sistema para verificar seu comportamento sob a carga de trabalho normal e de pico. Ajuda a determinar a capacidade máxima do sistema.
            </li>
            <li>
                <strong>Teste de Estresse (Stress Testing):</strong> Testa o sistema além de seus limites normais de operação para observar como ele se comporta sob estresse extremo. O objetivo é encontrar o "ponto de quebra" e verificar se o sistema se recupera de forma graciosa.
            </li>
            <li>
                <strong>Teste de Resistência (Soak/Endurance Testing):</strong> Avalia como o sistema se comporta quando submetido a uma carga de trabalho significativa e contínua por um longo período de tempo. O objetivo é encontrar problemas como vazamentos de memória (memory leaks) que só se manifestam após horas ou dias de execução.
            </li>
            <li>
                <strong>Teste de Pico (Spike Testing):</strong> Verifica como o sistema reage a picos repentinos e massivos de carga.
            </li>
        </ul>
        
        <h3>Métricas Chave:</h3>
        <p>Durante os testes de performance, monitoramos métricas como:</p>
        <ul>
            <li><strong>Tempo de Resposta:</strong> Quanto tempo uma requisição leva para ser completada.</li>
            <li><strong>Throughput:</strong> Quantas requisições o sistema consegue processar por segundo.</li>
            <li><strong>Taxa de Erro:</strong> A porcentagem de requisições que resultam em erro.</li>
            <li><strong>Uso de CPU e Memória:</strong> O consumo de recursos dos servidores.</li>
        </ul>
        
        <h3>Ferramentas:</h3>
        <p>Ferramentas como <strong>JMeter</strong>, <strong>Gatling</strong>, e <strong>k6</strong> são usadas para gerar a carga de usuários virtuais e coletar as métricas de performance.</p>
    `
};
