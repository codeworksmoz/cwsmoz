import 'server-only';

import type { Level, KnowledgeArea } from './curriculum/types';
export type { Level, KnowledgeArea };

// Nível 1
import { level1KnowledgeAreas } from './curriculum/level-1';

// Nível 2
import { level2KnowledgeAreas } from './curriculum/level-2';

// Nível 3
import { level3KnowledgeAreas } from './curriculum/level-3';

// Nível 4
import { level4KnowledgeAreas } from './curriculum/level-4';

// Nível 5
import { level5KnowledgeAreas } from './curriculum/level-5';

// Nível 6
import { level6KnowledgeAreas } from './curriculum/level-6';

// Nível 7
import { level7KnowledgeAreas } from './curriculum/level-7';


const curriculumData: Level[] = [
  {
    id: 1,
    title: "Nível 1: Fundamentos (Core Foundations)",
    description: "A base para qualquer desenvolvedor, cobrindo os conceitos essenciais da ciência da computação, programação e da web.",
    knowledgeAreas: level1KnowledgeAreas
  },
  {
    id: 2,
    title: "Nível 2: Algoritmos e Estruturas de Dados",
    description: "O núcleo teórico da ciência da computação, focando em como resolver problemas de forma eficiente.",
    knowledgeAreas: level2KnowledgeAreas
  },
  {
    id: 3,
    title: "Nível 3: Sistemas e Infraestrutura",
    description: "Como os computadores e a internet funcionam por baixo dos panos, de sistemas operacionais a bancos de dados.",
    knowledgeAreas: level3KnowledgeAreas
  },
  {
    id: 4,
    title: "Nível 4: Engenharia de Software",
    description: "As práticas, processos e princípios para construir software de alta qualidade em equipe.",
    knowledgeAreas: level4KnowledgeAreas
  },
  {
    id: 5,
    title: "Nível 5: Especializações",
    description: "Mergulhe em áreas específicas do desenvolvimento de software, do desenvolvimento web avançado à inteligência artificial.",
    knowledgeAreas: level5KnowledgeAreas
  },
  {
    id: 6,
    title: "Nível 6: Desenvolvimento Profissional",
    description: "Habilidades essenciais para o sucesso na carreira, incluindo soft skills, ética e preparação para o mercado.",
    knowledgeAreas: level6KnowledgeAreas
  },
  {
    id: 7,
    title: "Nível 7: Certificações Full Stack (freeCodeCamp)",
    description: "Coloque suas habilidades em prática construindo 5 projetos para cada uma das principais certificações do freeCodeCamp.",
    knowledgeAreas: level7KnowledgeAreas
  }
];

export async function getCurriculumData(): Promise<Level[]> {
  // Simulate async operation if needed in the future, for now returns static data.
  return Promise.resolve(curriculumData);
}

export async function getKnowledgeAreaById(id: string): Promise<KnowledgeArea | null> {
  const data = await getCurriculumData();
  for (const level of data) {
    const found = level.knowledgeAreas.find(ka => ka.id === id);
    if (found) {
      return found;
    }
  }
  return null;
}
