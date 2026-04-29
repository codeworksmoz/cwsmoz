
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "eng-q20",
  title: "Quiz: Effective Remote Communication",
  passingScore: 70,
  questions: [
    {
      id: "q20_1",
      question: "Communication that doesn't happen in real-time is:",
      options: ["Live", "Async (Asynchronous)", "Delayed", "Slow"],
      correctAnswer: 1
    },
    {
      id: "q20_2",
      question: "Managing the time difference between teams involves checking:",
      options: ["Calendars", "Timezones", "Clock-speeds", "Latencies"],
      correctAnswer: 1
    },
    {
      id: "q20_3",
      question: "A quick call to align on a specific topic is a:",
      options: ["Seminar", "Sync-up", "Lecture", "Workshop"],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "To finish or conclude a meeting is to:",
      options: ["Exit", "Wrap up", "Shut down", "Kill"],
      correctAnswer: 1
    },
    {
      id: "q20_5",
      question: "Working from home or another location is:",
      options: ["Outside work", "Remote work", "Distant work", "Cloud work"],
      correctAnswer: 1
    },
    {
      id: "q20_6",
      question: "Speaking without audio because your mic is off is being on:",
      options: ["Silence", "Mute", "Blank", "Ghost"],
      correctAnswer: 1
    }
  ]
};
