import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p6",
  language: "java",
  title: "Projeto Master Java: NIO Socket Server",
  description: "Construa um canal de comunicação de baixa latência para ATMs.",
  statement: "Utilize ServerSocketChannel e Selector para gerir múltiplas conexões sem bloquear a execução.",
  isProjectPart: true,
  template: `import java.nio.channels.*;
import java.net.InetSocketAddress;

public class AtmServer {
    public void start() throws Exception {
        ServerSocketChannel serverChannel = ServerSocketChannel.open();
        serverChannel.configureBlocking(false);
        // Configure o seletor aqui
    }
}`,
  detailedExplanation: `
    <h3>🔌 I/O Não-Bloqueante</h3>
    <p>O Java NIO permite que um único servidor lide com milhares de conexões de ATMs simultâneas usando um único thread (Reactor Pattern), maximizando a throughput do banco.</p>
  `,
  objectives: [
    {
      id: "non_blocking",
      description: "Configure o canal como não-bloqueante.",
      test: "configureBlocking(false)"
    },
    {
      id: "selector",
      description: "Abra um Selector para monitorizar canais.",
      test: "Selector.open()"
    }
  ]
};