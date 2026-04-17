import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
    id: 'sd-refactor-smells',
    title: 'Refatoração: Identificar e Remover Code Smells',
    statement: 'Analise o código abaixo, que contém vários "code smells" (maus cheiros). Identifique pelo menos três deles e descreva como você os refatoraria.',
    template: `// Código com vários Code Smells

class ProcessadorDePedidos {
    // Smell 1: Nomes de variáveis pouco claros
    public processar(d: any[]): void {
        // Smell 2: Número mágico
        for (let i = 0; i < d.length; i++) {
            if (d[i].status === 2) { // O que significa '2'?
                // ...
            }
        }
    }
}

// Smell 3: Classe grande / Falta de coesão
class Usuario {
    public nome: string;
    public email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    // ... outros métodos de usuário

    // Método que não pertence aqui
    public exportarUsuariosParaCSV(listaUsuarios: Usuario[]): string {
        let csv = "nome,email\\n";
        for (const u of listaUsuarios) {
            csv += \`\${u.nome},\${u.email}\\n\`;
        }
        return csv;
    }
}

// --- SUA ANÁLISE ABAIXO ---

// Smell 1:
// - Nome: ...
// - Refatoração: ...

// Smell 2:
// - Nome: ...
// - Refatoração: ...

// Smell 3:
// - Nome: ...
// - Refatoração: ...
`,
    youtubeVideoId: '8bYmm4hV_d4',
    detailedExplanation: `
        <h2>Limpando o Código</h2>
        <p>"Code Smells" são sintomas de um problema mais profundo no design. Aprender a identificá-los é uma habilidade essencial para manter um código saudável.</p>
        <h3>Analisando os Smells</h3>
        <ol>
            <li><strong>Variável 'd':</strong> O nome é completamente genérico. Isso é um smell chamado "Nomes Ruins" (Bad Names). A refatoração é simples: renomeie a variável para algo descritivo, como <code>pedidos</code> ou <code>dadosDosPedidos</code>.</li>
            <li><strong><code>status === 2</code>:</strong> O número <code>2</code> é um "Número Mágico" (Magic Number). Ninguém sabe o que ele significa sem procurar em outro lugar. A refatoração é criar uma constante ou um enum com um nome claro, por exemplo, <code>const STATUS_APROVADO = 2;</code> e usar <code>d[i].status === STATUS_APROVADO</code>.</li>
            <li><strong><code>exportarUsuariosParaCSV</code>:</strong> Este método está na classe <code>Usuario</code>, mas ele opera em uma *lista* de usuários e lida com formatação CSV. Ele não tem a ver com a responsabilidade de um único objeto <code>Usuario</code>. Isso viola o Princípio da Responsabilidade Única. A refatoração é "Extrair Classe": criar uma nova classe, como <code>ExportadorDeUsuariosCSV</code>, e mover o método para lá.</li>
        </ol>
    `
};
