import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface FileRecord {
  id: string;
  user_id: string;
  original_name: string;
  storage_path: string;
  original_size: number;
  compressed_size: number | null;
  was_compressed: boolean;
  mime_type: string | null;
  created_at: string;
}
