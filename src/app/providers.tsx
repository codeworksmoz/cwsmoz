'use client';

import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { LanguageProvider } from "@/components/LanguageContext";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <AuthProvider>
          <ProgressProvider>
            {children}
            <Toaster 
              richColors 
              position="top-right" 
              closeButton
              theme="dark"
            />
          </ProgressProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
