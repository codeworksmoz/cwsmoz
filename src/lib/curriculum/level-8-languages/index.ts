
/**
 * @fileOverview NÍVEL 8: DOMÍNIO DE LINGUAGENS (MASTERY)
 * 
 * Este é o nível de especialização profunda. Cada linguagem aqui é tratada 
 * como uma KnowledgeArea completa.
 * 
 * ESTRUTURA DE NAVEGAÇÃO:
 * A UI agrupa automaticamente estas lições em "Fases Profissionais" 
 * baseando-se no título da lição (ex: "Fase 1: ...").
 */

import type { Level } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';
import { pythonMaster } from './04-python/index';
import { javaMaster } from './05-java/index';
import { kotlinMaster } from './06-kotlin/index';
import { goMaster } from './07-go/index';
import { rustMaster } from './08-rust/index';
import { rubyMaster } from './09-ruby/index';
import { phpMaster } from './10-php/index';
import { phpEcosystem } from './11-php-ecosystem/index';

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens (Mastery)',
  description: 'Jornadas completas do Zero ao Avançado em 4-5 Fases. Torne-se parte do 1% dos engenheiros globais.',
  knowledgeAreas: [
    htmlKA, 
    cssKA, 
    javascriptKA, 
    pythonMaster, 
    javaMaster,
    kotlinMaster, 
    goMaster, 
    rustMaster, 
    rubyMaster, 
    phpMaster,
    phpEcosystem
  ]
};
