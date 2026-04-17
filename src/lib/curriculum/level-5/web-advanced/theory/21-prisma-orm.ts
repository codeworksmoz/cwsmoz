import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t21-prisma-orm",
    title: "Prisma: O ORM TypeScript da Próxima Geração",
    youtubeVideoId: "mUe_s23-t4g",
    content: `
        <h2>Interagindo com seu Banco de Dados de Forma Segura e Intuitiva</h2>
        <p>Prisma é um ORM (Object-Relational Mapper) de código aberto para Node.js e TypeScript. Ele facilita a interação com seu banco de dados, permitindo que você escreva consultas de forma programática e com total segurança de tipos.</p>

        <h3>Os 3 Pilares do Prisma:</h3>
        <ol>
            <li><strong>Prisma Client:</strong> Um construtor de consultas (query builder) gerado automaticamente e com tipagem segura para sua aplicação. Você escreve JavaScript/TypeScript, e ele gera as consultas SQL otimizadas.</li>
            <li><strong>Prisma Migrate:</strong> Um sistema declarativo de migração de banco de dados. Você define seu schema, e o Prisma gera e aplica as migrações SQL para manter seu banco de dados sincronizado.</li>
            <li><strong>Prisma Studio:</strong> Uma interface gráfica moderna para visualizar e editar os dados no seu banco.</li>
        </ol>

        <h3>O Schema do Prisma</h3>
        <p>Você define os modelos do seu banco de dados em um arquivo <code>schema.prisma</code>, usando uma linguagem simples e intuitiva.</p>
        <pre><code class="language-prisma">datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Usuario {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  nome    String?
  posts   Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  titulo    String
  conteudo  String?
  publicado Boolean  @default(false)
  autor     Usuario  @relation(fields: [autorId], references: [id])
  autorId   Int
}
</code></pre>
        <p>Após definir o schema, você roda <code>prisma generate</code> para que o Prisma Client seja atualizado com métodos e tipos baseados nos seus modelos, garantindo um autocompletar e segurança de tipos de ponta a ponta.</p>
    `
};
