'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useAuth } from './AuthContext';

type ProgressContextType = {
  completedItems: Set<string>;
  markAsCompleted: (itemId: string, itemType: 'lesson' | 'exercise') => Promise<void>;
  isCompleted: (itemId: string) => boolean;
  completedLessons: number;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const { user, supabase } = useAuth();

  useEffect(() => {
    const fetchProgress = async () => {
      if (user && supabase) {
        try {
          const [lessonsRes, exercisesRes] = await Promise.all([
            supabase.from('user_progress').select('lesson_id').eq('user_id', user.id).eq('status', 'completed'),
            supabase.from('user_exercise_submissions').select('exercise_id').eq('user_id', user.id).eq('status', 'passed')
          ]);

          if (lessonsRes.error) console.error("Error fetching lesson progress:", lessonsRes.error.message);
          if (exercisesRes.error) console.error("Error fetching exercise progress:", exercisesRes.error.message);

          const lessonIds = lessonsRes.data?.map(item => item.lesson_id) || [];
          const exerciseIds = exercisesRes.data?.map(item => item.exercise_id) || [];

          setCompletedItems(new Set([...lessonIds, ...exerciseIds]));

        } catch (error) {
          console.error("Failed to fetch progress from Supabase", error);
          setCompletedItems(new Set());
        }
      } else {
        setCompletedItems(new Set());
      }
    };

    fetchProgress();
  }, [user, supabase]);

  const markAsCompleted = useCallback(async (itemId: string, itemType: 'lesson' | 'exercise') => {
    if (user && supabase && !completedItems.has(itemId)) {
      let error = null;
      let xpToAdd = 0;

      if (itemType === 'lesson') {
        xpToAdd = 10;
        ({ error } = await supabase.from('user_progress').insert({
          user_id: user.id,
          lesson_id: itemId,
          status: 'completed',
          completed_at: new Date().toISOString()
        }));
      } else if (itemType === 'exercise') {
        xpToAdd = 25;
        ({ error } = await supabase.from('user_exercise_submissions').insert({
          user_id: user.id,
          exercise_id: itemId,
          status: 'passed',
          code_submitted: 'N/A',
          test_results: { allPassed: true }
        }));
      }

      if (error) {
        console.error(`Error saving ${itemType} progress:`, error);
      } else {
        setCompletedItems(prev => new Set(prev).add(itemId));
         if (xpToAdd > 0) {
          const { error: rpcError } = await supabase.rpc('increment_xp', { user_id_param: user.id, xp_to_add: xpToAdd });
          if (rpcError) {
            console.error('Error updating XP:', rpcError);
          }
        }
      }
    }
  }, [completedItems, user, supabase]);

  const isCompleted = useCallback((itemId: string) => {
    return completedItems.has(itemId);
  }, [completedItems]);

  const value = {
    completedItems,
    markAsCompleted,
    isCompleted,
    completedLessons: completedItems.size,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
