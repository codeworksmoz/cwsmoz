import type { PracticeExercise } from '../../types';

// JavaScript Variants
import { exercise as p1js } from './laboratory/javascript/01-variaveis';
import { exercise as p2js } from './laboratory/javascript/02-operadores';
import { exercise as p3js } from './laboratory/javascript/03-strings-io';
import { exercise as p4js } from './laboratory/javascript/04-condicionais';
import { exercise as p5js } from './laboratory/javascript/05-loops';
import { exercise as p6js } from './laboratory/javascript/06-funcoes';
import { exercise as p7js } from './laboratory/javascript/07-arrays';
import { exercise as p8js } from './laboratory/javascript/08-objetos';
import { exercise as p9js } from './laboratory/javascript/09-recursao';
import { exercise as p10js } from './laboratory/javascript/10-poo';
import { exercise as p11js } from './laboratory/javascript/11-debugging-lab';
import { exercise as p12js } from './laboratory/javascript/12-exceptions-lab';
import { exercise as p13js } from './laboratory/javascript/13-regex-lab';
import { exercise as p14js } from './laboratory/javascript/14-memory-stack-lab';
import { exercise as p15js } from './laboratory/javascript/15-clean-code-lab';
import { exercise as p16js } from './laboratory/javascript/16-async-lab';
import { exercise as p17js } from './laboratory/javascript/17-json-lab';
import { exercise as p18js } from './laboratory/javascript/18-functional-lab';
import { exercise as p19js } from './laboratory/javascript/19-package-lab';
import { exercise as p20js } from './laboratory/javascript/20-gc-lab';
import { exercise as p21js } from './laboratory/javascript/21-clean-code-final-lab';

// Python Variants
import { exercise as p1py } from './laboratory/python/01-variaveis';
import { exercise as p2py } from './laboratory/python/02-operadores';
import { exercise as p3py } from './laboratory/python/03-strings-io';
import { exercise as p4py } from './laboratory/python/04-condicionais';
import { exercise as p5py } from './laboratory/python/05-loops';
import { exercise as p6py } from './laboratory/python/06-funcoes';
import { exercise as p7py } from './laboratory/python/07-arrays';
import { exercise as p8py } from './laboratory/python/08-dicionarios';
import { exercise as p9py } from './laboratory/python/09-recursao';
import { exercise as p10py } from './laboratory/python/10-poo';
import { exercise as p14py } from './laboratory/python/14-memory-stack-lab';
import { exercise as p15py } from './laboratory/python/15-clean-code-lab';
import { exercise as p16py } from './laboratory/python/16-async-lab';
import { exercise as p17py } from './laboratory/python/17-json-lab';
import { exercise as p18py } from './laboratory/python/18-functional-lab';

// Java Variants
import { exercise as p1jv } from './laboratory/java/01-variaveis';
import { exercise as p2jv } from './laboratory/java/02-operadores';

// C++ Variants
import { exercise as p1cp } from './laboratory/cpp/01-variaveis';
import { exercise as p2cp } from './laboratory/cpp/02-operadores';

export const practice = {
  javascript: [
    p1js, p2js, p3js, p4js, p5js, p6js, p7js, p8js, p9js, p10js, 
    p11js, p12js, p13js, p14js, p15js, p16js, p17js, p18js, p19js, p20js, p21js
  ],
  python: [
    p1py, p2py, p3py, p4py, p5py, p6py, p7py, p8py, p9py, p10py, 
    p14py, p15py, p16py, p17py, p18py
  ],
  java: [
    p1jv, p2jv
  ],
  cpp: [
    p1cp, p2cp
  ]
};
