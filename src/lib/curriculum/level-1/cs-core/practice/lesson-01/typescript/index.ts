// D:\Mozkod\src\lib\curriculum\areas\cs-core\practice\lesson-01\typescript\index.ts
import type { PracticeExercise } from '../../../../../types';
import { decimalToBinary } from './decimal-to-binary';
//import { binaryToDecimal } from './binary-to-decimal';
import { decimalToHex } from './decimal-to-hex';
import { hexToDecimal } from './hex-to-decimal';
import { binaryAddition } from './binary-addition';
import { twosComplement } from './twos-complement';

export const typescriptExercises: PracticeExercise[] = [
    decimalToBinary,
    //binaryToDecimal,
    decimalToHex,
    hexToDecimal,
    binaryAddition,
    twosComplement,
];