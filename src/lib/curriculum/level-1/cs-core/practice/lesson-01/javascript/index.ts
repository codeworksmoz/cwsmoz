import type { PracticeExercise } from '../../../../../types';
import { decimalToBinary } from './decimal-to-binary';
// import { binaryToDecimal } from './binary-to-decimal'; // Remova - não existe
import { decimalToHex } from './decimal-to-hex';
import { hexToDecimal } from './hex-to-decimal';
import { binaryAddition } from './binary-addition';
import { twosComplement } from './twos-complement';

export const javascriptExercises: PracticeExercise[] = [
    decimalToBinary,
    // binaryToDecimal, // Remova - não existe
    decimalToHex,
    hexToDecimal,
    binaryAddition,
    twosComplement,
];