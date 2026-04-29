'use client';

import { toast as sonnerToast } from 'sonner';

/**
 * Hook de compatibilidade para manter a sintaxe do ShadCN UI
 * mas utilizando o motor de renderização do Sonner.
 */
export const useToast = () => {
  const toast = ({ title, description, variant }: { title?: string; description?: string; variant?: 'default' | 'destructive' }) => {
    if (variant === 'destructive') {
      return sonnerToast.error(title, {
        description: description,
      });
    }
    return sonnerToast.success(title, {
      description: description,
    });
  };

  return { toast };
};
