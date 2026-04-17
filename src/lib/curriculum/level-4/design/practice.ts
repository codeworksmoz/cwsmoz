import type { KnowledgeArea, PracticeExercise } from '../../types';

// SOLID
import { exercise as srpEx } from './practice/solid/01-srp-refactoring';
import { exercise as ocpEx } from './practice/solid/02-ocp-example';
import { exercise as lspEx } from './practice/solid/03-lsp-violation';
import { exercise as ispEx } from './practice/solid/04-isp-segregation';
import { exercise as dipEx } from './practice/solid/05-dip-implementation';

// Design Patterns - TS
import { exercise as tsSingleton } from './practice/design-patterns/typescript/01-singleton';
import { exercise as tsFactory } from './practice/design-patterns/typescript/02-factory';
import { exercise as tsObserver } from './practice/design-patterns/typescript/03-observer';
import { exercise as tsStrategy } from './practice/design-patterns/typescript/04-strategy';
import { exercise as tsDecorator } from './practice/design-patterns/typescript/05-decorator';
import { exercise as tsAdapter } from './practice/design-patterns/typescript/06-adapter';
import { exercise as tsCommand } from './practice/design-patterns/typescript/07-command';

// Refactoring
import { exercise as refactorExtractMethod } from './practice/refactoring/01-extract-method';
import { exercise as refactorExtractClass } from './practice/refactoring/02-extract-class';
import { exercise as refactorReplaceConditional } from './practice/refactoring/03-replace-conditional-with-polymorphism';
import { exercise as refactorRemoveSmells } from './practice/refactoring/04-remove-code-smells';

// Projects
import { exercise as projectLib } from './practice/projects/01-design-patterns-library';
import { exercise as projectApi } from './practice/projects/02-api-design-project';


const solidExercises: PracticeExercise[] = [srpEx, ocpEx, lspEx, ispEx, dipEx];
const tsDesignPatterns: PracticeExercise[] = [tsSingleton, tsFactory, tsObserver, tsStrategy, tsDecorator, tsAdapter, tsCommand];
const refactoringExercises: PracticeExercise[] = [refactorExtractMethod, refactorExtractClass, refactorReplaceConditional, refactorRemoveSmells];
const projectExercises: PracticeExercise[] = [projectLib, projectApi];


export const practice: KnowledgeArea['practice'] = {
    "solid": solidExercises,
    "typescript-design-patterns": tsDesignPatterns,
    "refactoring": refactoringExercises,
    "projects": projectExercises,
    // Python and Java exercises can be added here following the same pattern
    "python-design-patterns": [],
    "java-design-patterns": [],
};
