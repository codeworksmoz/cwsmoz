
import type { Level } from '../types';
import { os } from './01-os/index';
import { networking } from './02-networking/index';
import { databases } from './03-databases/index';

export const level3: Level = {
  id: 3,
  title: 'Nível 3: Sistemas e Infraestrutura',
  description: 'Entenda como os computadores comunicam e gerem recursos.',
  knowledgeAreas: [
    os,
    networking,
    databases
  ]
};
