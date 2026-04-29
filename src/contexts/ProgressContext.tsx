'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';
import { syncProgressToDb, fetchUserProgress, ProgressItem } from '@/services/progressService';

/**
 * @fileOverview Orquestrador de Estado de Aprendizagem.
 * Gere a reatividade da interface após ações do serviço de persistência.
 */

type ProgressContextType = {
  isCompleted: (id: string) => boolean;
  markAsCompleted: (id: string, levelId: number, kaId: string, type: 'theory' | 'exercise', score?: number, code?: string) => Promise<void>;
  syncPoints: () => Promise<void>;
  progress: any[];
  loading: boolean;
  refreshProgress: () => Promise<void>;
};

const ProgressContext = createContext<ProgressContextType>({} as ProgressContextType);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, refreshProfile } = useAuth();
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregamento inicial de dados
  const refreshProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      const data = await fetchUserProgress(user.id);
      setProgress(data);
    } catch (err: any) {
      console.error('Falha ao carregar histórico:', err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  // Verificação de conclusão universal (IDs únicos garantem precisão)
  const isCompleted = useCallback((id: string) => {
    return progress.some(p => p.lesson_id === id && p.completed);
  }, [progress]);

  const syncPoints = async () => {
    if (!user) return;
    try {
      await refreshProfile();
    } catch (err) {
      console.error('Sync Points Error:', err);
    }
  };

  /**
   * Ponto de entrada para qualquer conclusão em todos os níveis (1 a 8).
   * Delega a tarefa para o ProgressService.
   */
  const markAsCompleted = async (
    id: string, 
    levelId: number, 
    kaId: string, 
    type: 'theory' | 'exercise', 
    score: number = 100, 
    code?: string
  ) => {
    if (!user) {
      toast.error("Autenticação necessária para salvar progresso.");
      return;
    }

    const newItem: ProgressItem = { 
      user_id: user.id, 
      lesson_id: id, 
      completed: true, 
      level_id: levelId,
      ka_id: kaId, 
      lesson_type: type, 
      last_code: code || '', 
      completed_at: new Date().toISOString(),
      quiz_score: score, 
      quiz_passed: score >= 70
    };

    // UI Otimista: Feedback visual instantâneo
    const oldProgress = [...progress];
    setProgress(prev => {
      const existing = prev.findIndex(p => p.lesson_id === id);
      const updated = [...prev];
      if (existing > -1) updated[existing] = { ...updated[existing], ...newItem };
      else updated.push(newItem);
      return updated;
    });

    try {
      // 1. Persistência via Serviço
      await syncProgressToDb(newItem);
      
      // 2. Sincronização de Perfil (Pontos)
      // Pequeno delay para garantir que o DB processou o trigger de pontos
      setTimeout(async () => {
        await refreshProfile();
        toast.success("Progresso sincronizado na nuvem! ✨");
      }, 300);

    } catch (err: any) {
      console.error('Falha crítica de sincronização:', err);
      setProgress(oldProgress); // Reversão em caso de erro real
      toast.error('Erro de conexão ao salvar progresso.');
    }
  };

  return (
    <ProgressContext.Provider value={{ isCompleted, markAsCompleted, syncPoints, progress, loading, refreshProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
