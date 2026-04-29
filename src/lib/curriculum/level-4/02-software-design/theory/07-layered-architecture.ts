
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "des-t7",
  title: "Arquitetura em Camadas: O Padrão N-Tier",
  quizId: "des-q7-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🥞 Organização Hierárquica
        </h2>
        <p class="text-lg leading-relaxed">
          A Arquitetura em Camadas é a forma mais comum de organizar aplicações. Ela baseia-se no princípio de que cada camada tem uma responsabilidade específica e só pode comunicar com a camada imediatamente inferior.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">O Stack Clássico de 4 Camadas</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-blue-600/10 border-l-4 border-blue-500 rounded-r-xl">
            <strong class="text-blue-400 block">1. Presentation (Interface):</strong> Lida com a interação do utilizador, controladores web ou APIs.
          </li>
          <li class="p-4 bg-green-600/10 border-l-4 border-green-500 rounded-r-xl">
            <strong class="text-green-400 block">2. Application/Service:</strong> Coordena as tarefas e orquestra a lógica de negócio sem conhecer detalhes de persistência.
          </li>
          <li class="p-4 bg-yellow-600/10 border-l-4 border-yellow-500 rounded-r-xl">
            <strong class="text-yellow-400 block">3. Domain:</strong> O coração do sistema. Contém as regras de negócio puras, entidades e lógica de validação.
          </li>
          <li class="p-4 bg-red-600/10 border-l-4 border-red-500 rounded-r-xl">
            <strong class="text-red-400 block">4. Infrastructure (Data Access):</strong> Onde vive a comunicação com bases de dados, sistemas de ficheiros e APIs externas.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">⚠️ O Risco do Acoplamento</h4>
          <p class="text-sm leading-relaxed">
            Muitas vezes a camada de domínio acaba a depender da infraestrutura (SQL). O Engenheiro Master inverte esta dependência usando o princípio <strong>DIP (SOLID)</strong>, garantindo que o coração do negócio seja testável sem uma base de dados real.
          </p>
        </div>
      </div>
    </div>
  `
};
