'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { SupabaseClient, User as SupabaseUser, AuthError } from '@supabase/supabase-js';

type User = {
  id: string;
  full_name: string | null;
  email: string | undefined;
  avatar_url: string | null;
  bio: string | null;
  username: string | null;
};

type AuthContextType = {
  supabase: SupabaseClient;
  user: User | null;
  loading: boolean;
  signInWithPassword: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signInWithGithub: () => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<{ error: AuthError | null }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

        setUser({
            id: session.user.id,
            email: session.user.email,
            full_name: profile?.full_name ?? session.user.user_metadata.full_name ?? session.user.email?.split('@')[0],
            avatar_url: profile?.avatar_url ?? session.user.user_metadata.avatar_url,
            bio: profile?.bio,
            username: profile?.username,
        });

      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      const redirectPath = searchParams.get('redirect');
      router.push(redirectPath || '/dashboard');
      router.refresh();
    }
    return { error };
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  
  const signUp = async (name: string, email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  const sendPasswordResetEmail = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/callback?next=/update-password`,
    });
    return { error };
  };

  const value = useMemo(() => ({
    supabase,
    user,
    loading,
    signInWithPassword,
    signInWithGithub,
    signUp,
    signOut,
    sendPasswordResetEmail,
  }), [user, loading, supabase]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
