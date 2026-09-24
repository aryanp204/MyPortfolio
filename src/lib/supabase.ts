import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co' &&
  !supabaseUrl.includes('placeholder')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContactMessage(payload: ContactMessagePayload): Promise<{ success: boolean; fallback?: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      fallback: true,
      error: 'Supabase credentials are not configured in environment variables.',
    };
  }

  try {
    const { error } = await supabase
      .from('messages')
      .insert([
        {
          name: payload.name.trim(),
          email: payload.email.trim(),
          message: payload.message.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase submission error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error during submission:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown network failure',
    };
  }
}
