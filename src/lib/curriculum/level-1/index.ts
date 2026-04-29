
/**
 * @fileOverview NÍVEL 1: FUNDAMENTOS (CORE FOUNDATIONS)
 * 
 * Este nível foca na base essencial para qualquer engenheiro.
 * 
 * COMO ADICIONAR UMA NOVA KNOWLEDGE AREA (KA):
 * 1. Cria uma pasta em 'src/lib/curriculum/level-1/nome-da-ka/'
 * 2. Implementa o ficheiro 'index.ts' seguindo o tipo KnowledgeArea.
 * 3. Importa e adiciona ao array 'knowledgeAreas' abaixo.
 */

import type { Level } from '../types';
import { csCore } from './01-cs-core/index';
import { programmingFundamentals } from './02-programming-fundamentals/index';
import { webCore } from './03-web-core/index';
import { techEnglish } from './04-tech-english/index';
import { gitVC } from './05-git-vc/index';
import { hci } from './06-hci/index';
import { devTools } from './07-dev-tools/index';

export const level1: Level = {
  id: 1,
  title: 'Nível 1: Fundamentos (Core Foundations)',
  description: 'A base essencial para qualquer programador profissional.',
  knowledgeAreas: [
    csCore,
    programmingFundamentals,
    webCore,
    techEnglish,
    gitVC,
    hci,
    devTools
  ]
};
