import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
    if (!_supabase) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
            throw new Error(
                'Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set.'
            );
        }

        _supabase = createClient(supabaseUrl, supabaseAnonKey);
    }
    return _supabase;
}

// Keep backward-compatible named export as a getter
export const supabase = new Proxy({} as SupabaseClient, {
    get(_target, prop) {
        return (getSupabaseClient() as unknown as Record<string | symbol, unknown>)[prop];
    },
});
