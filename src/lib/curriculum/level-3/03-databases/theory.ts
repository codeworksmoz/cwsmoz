import { lesson as l1 } from './theory/01-database-systems';
import { lesson as l2 } from './theory/02-er-modeling';
import { lesson as l3 } from './theory/03-relational-algebra';
import { lesson as l4 } from './theory/04-sql-ddl';
import { lesson as l5 } from './theory/05-sql-joins';
import { lesson as l6 } from './theory/06-transactions-acid-deep';
import { lesson as l7 } from './theory/07-normalization';
import { lesson as l8 } from './theory/08-indexing-optimization';
import { lesson as l9 } from './theory/09-query-optimization';
import { lesson as l10 } from './theory/10-data-warehousing';

const titles = [
  "LSM Trees vs B-Trees", "Concurrency Control & Isolation Levels",
  "Sharding & Partitioning", "Replication & High Availability",
  "CAP Theorem & Distributed Databases", "Consensus Algorithms (Raft/Paxos)",
  "In-Memory Databases (Redis)", "Vector Databases for AI",
  "Columnar Storage & Big Data", "Database Security & Data Masking",
  "Graph Databases & Relational Theory"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...titles.map((title, i) => ({
    id: `db-t${i + 11}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🗄️ Database Master: ${title}</h2><p>Arquitetura interna e estratégias avançadas de armazenamento e recuperação de dados em larga escala.</p></div>`,
    quizId: `db-q${i + 11}`
  }))
];
