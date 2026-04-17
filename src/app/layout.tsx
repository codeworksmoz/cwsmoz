import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from '@/context/AuthContext';
import { ProgressProvider } from '@/context/ProgressContext';
import { I18nProvider } from '@/context/I18nContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Codworks MOZ',
  description: 'Plataforma de educação em programação de código aberto para Moçambique.',
  icons: {
    icon: {
      url: "/icon.svg",
      type: "imge/svg+xml"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
            <I18nProvider>
              <ProgressProvider>
                  {children}
                  <Toaster />
              </ProgressProvider>
            </I18nProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
