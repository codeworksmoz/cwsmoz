import type {Metadata} from 'next';
import './globals.css';
import { Providers } from "./providers";
import { FooterWrapper } from "@/components/FooterWrapper";

export const metadata: Metadata = {
  title: 'Codworks Moz | Engenharia de Software de Elite',
  description: 'Domine a programação com módulos interactivos, execução de código em tempo real e trilhas de aprendizagem localizadas.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="white" stroke="%23FF6B00" stroke-width="2"/><text x="16" y="21" font-family="Segoe UI, sans-serif" font-size="14" font-weight="900" fill="%23FF6B00" text-anchor="middle">&lt;/&gt;</text></svg>',
        type: 'image/svg+xml',
      }
    ],
    shortcut: 'data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="white" stroke="%23FF6B00" stroke-width="2"/><text x="16" y="21" font-family="Segoe UI, sans-serif" font-size="14" font-weight="900" fill="%23FF6B00" text-anchor="middle">&lt;/&gt;</text></svg>',
    apple: 'data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="14" fill="white" stroke="%23FF6B00" stroke-width="2"/><text x="16" y="21" font-family="Segoe UI, sans-serif" font-size="14" font-weight="900" fill="%23FF6B00" text-anchor="middle">&lt;/&gt;</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <FooterWrapper />
          </div>
        </Providers>
      </body>
    </html>
  );
}
