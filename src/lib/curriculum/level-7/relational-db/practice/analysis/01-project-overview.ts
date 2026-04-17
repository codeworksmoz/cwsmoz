import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-rdb-proj-1', 
    title: 'Análise de Projeto: Banco de Dados Celestial', 
    statement: 'Para a certificação de Bancos de Dados Relacionais, um dos projetos é construir um banco de dados de corpos celestes. Descreva o modelo de dados, identificando as tabelas principais e as relações entre elas.', 
    template: `// Modelo de Dados (Tabelas e Relações):

// Tabela 1: galaxy
// - Colunas: galaxy_id (PK), name (UNIQUE), ...

// Tabela 2: star
// - Colunas: star_id (PK), name (UNIQUE), galaxy_id (FK) ...

// Tabela 3: planet
// - Colunas: planet_id (PK), name (UNIQUE), star_id (FK) ...

// Tabela 4: moon
// - Colunas: moon_id (PK), name (UNIQUE), planet_id (FK) ...

// Relações:
// - Uma galáxia (galaxy) tem muitas estrelas (star). (1-N)
// - Uma estrela (star) tem muitos planetas (planet). (1-N)
// - Um planeta (planet) tem muitas luas (moon). (1-N)
`,
    youtubeVideoId: 'v_1zB1rV-bQ',
    detailedExplanation: `
        <h2>Modelando o Cosmos com SQL</h2>
        <p>A modelagem de dados é o primeiro passo para construir um banco de dados relacional. O objetivo é identificar as "entidades" principais do seu sistema e como elas se relacionam.</p>
        <h3>Passo a Passo da Modelagem</h3>
        <ol>
            <li><strong>Identificar Entidades:</strong> As principais entidades são galaxy, star, planet e moon. Cada uma se tornará uma tabela.</li>
            <li><strong>Definir Atributos (Colunas):</strong> Para cada entidade, defina as colunas necessárias, como nome, idade, tipo, etc., e seus tipos de dados (INT, VARCHAR, NUMERIC, BOOLEAN).</li>
            <li><strong>Estabelecer Chaves:</strong> Cada tabela precisa de uma Chave Primária (PRIMARY KEY) para identificar unicamente cada linha (ex: \'galaxy_id\'). Colunas como \'name\' devem ser únicas (UNIQUE).</li>
            <li><strong>Definir Relações (Chaves Estrangeiras):</strong> Conecte as tabelas. Uma estrela pertence a uma galáxia, então a tabela \'star\' precisa de uma Chave Estrangeira (FOREIGN KEY) \'galaxy_id\' que aponta para a tabela \'galaxy\'. Faça o mesmo para as outras relações.</li>
        </ol>
    `
};
