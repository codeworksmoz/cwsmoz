'use server';

import { createClient } from '@/lib/supabase/server';

/**
 * @fileOverview Serviço responsável exclusivamente pela persistência de progresso.
 * Aplica o princípio de Responsabilidade Única (SRP).
 */

export interface ProgressItem {
  user_id: string;
  lesson_id: string;
  level_id: number;
  ka_id: string;
  lesson_type: 'theory' | 'exercise';
  completed: boolean;
  last_code?: string;
  quiz_score?: number;
  quiz_passed?: boolean;
  completed_at: string;
}

/**
 * Envia o progresso para o Supabase e dispara a atualização de pontos.
 */
export async function syncProgressToDb(item: ProgressItem) {
  const supabase = createClient();
  
  // 1. Persistência com Upsert (Sincronização Ativa)
  const { data, error } = await supabase
    .from('user_lesson_progress')
    .upsert(item, { 
      onConflict: 'user_id,lesson_id' 
    })
    .select()
    .single();

  if (error) {
    console.error('ProgressService Error:', error.message);
    throw new Error(error.message);
  }

  // 2. Cálculo de Pontos via RPC (Redundância de Segurança)
  try {
    await supabase.rpc('calculate_total_points', { 
      p_user_id: item.user_id 
    });
  } catch (rpcError) {
    console.warn('RPC Points Warning:', rpcError);
  }

  return { success: true, data };
}

/**
 * Recupera todo o histórico do utilizador.
 */
export async function fetchUserProgress(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('user_lesson_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  
  // Normalização de booleanos para evitar falhas de tipagem no JS
  return (data || []).map(p => ({
    ...p,
    completed: p.completed === true || p.completed === 1 || String(p.completed) === "true"
  }));
}
