'use server';

import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Note: this client is meant to be used for server-side operations that require
// elevated privileges, such as administrative tasks.
// It uses the SUPABASE_SERVICE_ROLE_KEY, which should be kept secret.

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Supabase URL or service role key is not defined in environment variables.');
}

export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
