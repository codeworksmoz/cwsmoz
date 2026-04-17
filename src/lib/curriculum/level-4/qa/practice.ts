import type { KnowledgeArea, PracticeExercise } from '../../types';

// Unit Tests
import { exercise as jsCalc } from './practice/unit-tests/javascript/01-calculator.test';
import { exercise as jsString } from './practice/unit-tests/javascript/02-string-utils.test';
import { exercise as jsArray } from './practice/unit-tests/javascript/03-array-methods.test';
import { exercise as jsAsync } from './practice/unit-tests/javascript/04-async-functions.test';


// Integration Tests
import { exercise as intApi } from './practice/integration-tests/01-api-integration.test';
import { exercise as intDb } from './practice/integration-tests/02-database-integration.test';
import { exercise as intExternal } from './practice/integration-tests/03-external-service.test';


// E2E Tests
import { exercise as e2eLogin } from './practice/e2e-tests/01-login-flow.spec';
import { exercise as e2eCart } from './practice/e2e-tests/02-shopping-cart.spec';
import { exercise as e2eRegister } from './practice/e2e-tests/03-user-registration.spec';


// TDD Katas
import { exercise as tddFizz } from './practice/tdd-katas/01-fizzbuzz-tdd';
import { exercise as tddRoman } from './practice/tdd-katas/02-roman-numerals-tdd';
import { exercise as tddBowling } from './practice/tdd-katas/03-bowling-game-tdd';
import { exercise as tddStringCalc } from './practice/tdd-katas/04-string-calculator-tdd';


// Mocking
import { exercise as mockApi } from './practice/mocking/01-mock-api-calls';
import { exercise as mockDb } from './practice/mocking/02-mock-database';
import { exercise as mockTime } from './practice/mocking/03-mock-time';



const jsUnitTests: PracticeExercise[] = [jsCalc, jsString, jsArray, jsAsync];
const integrationTests: PracticeExercise[] = [intApi, intDb, intExternal];
const e2eTests: PracticeExercise[] = [e2eLogin, e2eCart, e2eRegister];
const tddKatas: PracticeExercise[] = [tddFizz, tddRoman, tddBowling, tddStringCalc];
const mockingExercises: PracticeExercise[] = [mockApi, mockDb, mockTime];


export const practice: KnowledgeArea['practice'] = {
    "javascript-unit-tests": jsUnitTests,
    "integration-tests": integrationTests,
    "e2e-tests": e2eTests,
    "tdd-katas": tddKatas,
    "mocking": mockingExercises,
    // Other language tests can be added here
    "typescript-unit-tests": [],
    "python-unit-tests": [],
};
