import { createClient } from '@supabase/supabase-js';

const url =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  'https://knszinxcvssbkqfyatcg.supabase.co';
const key =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ||
  'sb_publishable_bUVkiqVpPtFaYzFrYxCxtg_b8J2tl_5';

export const supabase = createClient(url, key);
