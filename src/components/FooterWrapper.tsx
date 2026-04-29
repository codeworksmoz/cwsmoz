'use client';

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

/**
 * Componente de Cliente para gerir a visibilidade do Footer.
 * Evita que o layout.tsx precise de ser um Client Component.
 */
export function FooterWrapper() {
  const pathname = usePathname();
  
  // Esconde o footer na interface de aprendizagem para foco total
  const isLearnPage = pathname?.startsWith('/learn');
  
  if (isLearnPage) return null;
  
  return <Footer />;
}
