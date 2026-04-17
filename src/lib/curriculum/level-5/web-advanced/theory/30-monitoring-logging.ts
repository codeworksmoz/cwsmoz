import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t30-monitoring-logging",
    title: "Monitoramento e Logging",
    youtubeVideoId: "Sgzw2e-W-0s",
    content: `
        <h2>O Que Acontece Depois do Deploy?</h2>
        <p>Uma vez que sua aplicação está em produção, é crucial monitorar sua saúde e registrar informações importantes para depurar problemas que ocorrem no ambiente real.</p>
        
        <h3>Logging (Registro de Logs)</h3>
        <p>Logging é o ato de registrar eventos, erros e outras informações relevantes sobre a execução da sua aplicação. Logs são essenciais para entender o que deu errado quando um bug ocorre em produção.</p>
        <p>Em vez de apenas usar <code>console.log</code>, é melhor usar bibliotecas de logging estruturado (como Pino ou Winston para Node.js) que adicionam contexto (como timestamps e níveis de severidade) e podem enviar logs para serviços centralizados.</p>

        <h3>Monitoramento de Erros</h3>
        <p>Serviços de monitoramento de erros capturam exceções não tratadas na sua aplicação (tanto no frontend quanto no backend) em tempo real, agrupam-nas e notificam sua equipe. Eles fornecem o stack trace completo e o contexto para ajudar a depurar rapidamente.</p>
        <ul>
            <li><strong>Sentry:</strong> Uma das ferramentas mais populares de monitoramento de erros e performance.</li>
            <li><strong>LogRocket:</strong> Vai além, gravando sessões de usuário como um vídeo, permitindo que você veja exatamente o que o usuário fez para acionar um erro.</li>
        </ul>

        <h3>Monitoramento de Performance (APM)</h3>
        <p>Application Performance Monitoring (APM) foca em medir e otimizar a performance da sua aplicação. Ferramentas de APM ajudam a identificar gargalos, como consultas lentas ao banco de dados ou chamadas de API demoradas.</p>
        <ul>
            <li><strong>Datadog:</strong> Uma plataforma de observabilidade completa que combina logs, métricas e APM.</li>
            <li><strong>OpenTelemetry:</strong> Um padrão de código aberto para instrumentar seu código para coletar "traces", métricas e logs, que podem ser enviados para qualquer backend compatível.</li>
        </ul>
    `
};
