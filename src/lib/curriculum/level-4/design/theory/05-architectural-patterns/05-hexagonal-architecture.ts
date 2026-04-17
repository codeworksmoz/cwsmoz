import type { TheoryLesson } from '../../../../../types';

export const lesson: TheoryLesson = {
    id: "sd-t-hexagonal",
    title: "Arquitetura Hexagonal (Portas e Adaptadores)",
    content: `
        <h2>Isolando a Lógica de Negócio</h2>
        <p>A Arquitetura Hexagonal, também conhecida como Portas e Adaptadores (Ports and Adapters), é um padrão arquitetural que visa isolar a lógica de domínio (o coração da sua aplicação) de preocupações externas, como UI, bancos de dados ou APIs de terceiros.</p>
        
        <h3>A Estrutura:</h3>
        <ul>
            <li><strong>O Hexágono (Dentro):</strong> Contém a lógica de negócio pura, as entidades e as regras de domínio. Ele não sabe nada sobre o mundo exterior.</li>
            <li><strong>Portas (Ports):</strong> São interfaces definidas pelo domínio que especificam como ele quer interagir com o mundo exterior (ex: uma porta <code>RepositorioDeUsuarios</code> com um método <code>salvar(usuario)</code>). As portas são parte do hexágono.</li>
            <li><strong>Adaptadores (Adapters):</strong> Ficam do lado de fora do hexágono. Eles implementam as portas para uma tecnologia específica.
                <ul>
                    <li><strong>Adaptadores Primários (Driving Adapters):</strong> Conduzem a aplicação. Ex: um controlador de API REST que chama um serviço de aplicação.</li>
                    <li><strong>Adaptadores Secundários (Driven Adapters):</strong> São conduzidos pela aplicação. Ex: um adaptador que implementa a porta <code>RepositorioDeUsuarios</code> usando PostgreSQL.</li>
                </ul>
            </li>
        </ul>
        <p>A principal regra é que as dependências sempre apontam para dentro. O código de infraestrutura (adaptadores) depende do código de domínio (portas), e não o contrário. Isso torna a lógica de negócio totalmente testável e independente de tecnologia.</p>
    `
};
