import { level1 } from './level-1/index';
import { level2 } from './level-2/index';
import { level3 } from './level-3/index';
import { level4 } from './level-4/index';
import { level5 } from './level-5/index';
import { level6 } from './level-6/index';
import { level7 } from './level-7/index';
import { level8 } from './level-8-languages/index';
import type { Level, TheoryLesson, PracticeExercise, Quiz } from './types';

export * from './types';

export const modules: Level[] = [
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8
];

export function findKnowledgeAreaByLessonId(lessonId: string) {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      if (ka.theory && ka.theory.some(l => l.id === lessonId)) {
        return { ka, level };
      }
      if (ka.practice) {
        for (const lang in ka.practice) {
          if (ka.practice[lang].some(p => p.id === lessonId)) {
            return { ka, level };
          }
        }
      }
    }
  }
  return null;
}

export function findTheoryLesson(id: string): TheoryLesson | null {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      if (ka.theory) {
        const lesson = ka.theory.find(l => l.id === id);
        if (lesson) return lesson;
      }
    }
  }
  return null;
}

export function findPracticeExercise(id: string): PracticeExercise | null {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      if (ka.practice) {
        for (const lang in ka.practice) {
          const ex = ka.practice[lang].find(p => p.id === id);
          if (ex) return ex;
        }
      }
    }
  }
  return null;
}

export function findQuizById(quizId: string): Quiz | null {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      if (ka.quizzes) {
        const quiz = ka.quizzes.find(q => q.id === quizId);
        if (quiz) return quiz;
      }
    }
  }
  return null;
}

export function findOrderedLessons(): string[] {
  const allLessons: string[] = [];
  
  modules.forEach(level => {
    level.knowledgeAreas.forEach(ka => {
      const theory = ka.theory || [];
      const practiceMap = ka.practice || {};
      
      // Coleta todas as práticas de todas as linguagens disponíveis nesta KA
      const practiceList: PracticeExercise[] = [];
      Object.values(practiceMap).forEach(list => {
        list.forEach(p => {
          if (!practiceList.some(existing => existing.id === p.id)) {
            practiceList.push(p);
          }
        });
      });
      
      // Intercalação inteligente: T1, P1, T2, P2...
      const max = Math.max(theory.length, practiceList.length);
      for (let i = 0; i < max; i++) {
        if (theory[i]) allLessons.push(theory[i].id);
        if (practiceList[i]) allLessons.push(practiceList[i].id);
      }
    });
  });
  
  return allLessons;
}

export function findNextLessonId(currentId: string): string | null {
  const allLessons = findOrderedLessons();
  const currentIndex = allLessons.indexOf(currentId);
  if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
    return allLessons[currentIndex + 1];
  }
  return null;
}

export function findPreviousLessonId(currentId: string): string | null {
  const allLessons = findOrderedLessons();
  const currentIndex = allLessons.indexOf(currentId);
  if (currentIndex > 0) {
    return allLessons[currentIndex - 1];
  }
  return null;
}