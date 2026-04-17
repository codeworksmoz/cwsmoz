'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function NiveisRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/curriculo');
  }, [router]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-muted-foreground" />
        <p className="mt-4 text-muted-foreground">Redirecionando para o Currículo...</p>
      </div>
    </div>
  );
}
