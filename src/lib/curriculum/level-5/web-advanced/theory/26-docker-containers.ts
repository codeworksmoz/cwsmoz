import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t26-docker-containers",
    title: "Containerização com Docker",
    youtubeVideoId: "3c-iBn73dDE",
    content: `
        <h2>"Funciona na minha máquina" não é mais uma desculpa</h2>
        <p><strong>Docker</strong> é uma plataforma que permite desenvolver, enviar e executar aplicações dentro de <strong>contêineres</strong>. Um contêiner é uma unidade padrão de software que empacota o código e todas as suas dependências, garantindo que a aplicação rode de forma rápida e confiável de um ambiente de computação para outro.</p>
        
        <h3>Dockerfile</h3>
        <p>Um Dockerfile é um arquivo de texto que contém todas as instruções para construir uma imagem Docker. Cada instrução cria uma camada na imagem.</p>
        <pre><code class="language-dockerfile"># Usa uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "node", "server.js" ]
</code></pre>

        <h3>Imagem vs. Contêiner</h3>
        <ul>
            <li><strong>Imagem:</strong> Um modelo somente leitura com instruções para criar um contêiner. É como uma "classe" em POO.</li>
            <li><strong>Contêiner:</strong> Uma instância executável de uma imagem. É como um "objeto". Você pode ter múltiplos contêineres rodando a partir da mesma imagem.</li>
        </ul>
        
        <h3>Docker Compose</h3>
        <p>Para aplicações que consistem em múltiplos serviços (ex: um backend Node.js, um banco de dados PostgreSQL e um servidor Redis), o <strong>Docker Compose</strong> permite definir e executar todos os serviços com um único comando, usando um arquivo de configuração YAML.</p>
    `
};
