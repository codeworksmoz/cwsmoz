import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t23-nextauth-authjs",
    title: "Autenticação Fácil com NextAuth.js (Auth.js)",
    youtubeVideoId: "1TewpSgMPcU",
    content: `
        <h2>Uma Solução Completa de Autenticação para Next.js</h2>
        <p><strong>NextAuth.js</strong> (agora chamado de <strong>Auth.js</strong>) é uma biblioteca de autenticação completa e flexível para aplicações Next.js. Ela simplifica enormemente a implementação de fluxos de login, incluindo login com credenciais (email/senha) e login social com provedores OAuth (Google, GitHub, etc.).</p>

        <h3>Configuração Principal</h3>
        <p>A configuração do NextAuth.js é feita em um único arquivo, geralmente <code>app/api/auth/[...nextauth]/route.ts</code>. Neste arquivo, você define os "providers" (estratégias de autenticação) que sua aplicação suportará.</p>
        <pre><code class="language-typescript">import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ... outros provedores
  ],
})

export { handler as GET, handler as POST }
</code></pre>

        <h3>Sessões e Callbacks</h3>
        <p>NextAuth.js gerencia as sessões para você. Ele pode usar JWT (padrão) ou sessões de banco de dados. Você pode usar hooks e componentes do lado do cliente (<code>useSession</code>) ou do servidor para acessar os dados da sessão.</p>
        <p>Os <strong>callbacks</strong> são funções poderosas que permitem personalizar o comportamento do NextAuth.js:</p>
        <ul>
            <li><strong>signIn:</strong> Permite controlar se um usuário pode ou não fazer login.</li>
            <li><strong>jwt:</strong> Permite personalizar o conteúdo do token JWT.</li>
            <li><strong>session:</strong> Permite estender o objeto de sessão com dados do seu banco de dados ou do token.</li>
        </ul>

        <h3>Protegendo Páginas</h3>
        <p>Você pode proteger rotas usando o middleware do NextAuth ou verificando a sessão no lado do servidor em Server Components, redirecionando o usuário se ele não estiver autenticado.</p>
    `
};
