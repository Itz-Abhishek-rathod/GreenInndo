// Lightweight Supabase REST client (no extra dependency needed).
// The publishable key is safe to expose in the browser; security is enforced
// by Row Level Security policies (see supabase/schema.sql).
const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  'https://knszinxcvssbkqfyatcg.supabase.co';
const SUPABASE_KEY =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ||
  'sb_publishable_bUVkiqVpPtFaYzFrYxCxtg_b8J2tl_5';

export async function insertRow(table: string, row: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Supabase insert into ${table} failed (${res.status}): ${detail}`);
  }
}

export const submitInquiry = (data: {
  name: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
  agreed_to_terms: boolean;
}) => insertRow('inquiries', data);

export const submitProposalRequest = (data: {
  property_type: string;
  monthly_bill: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  pincode: string;
  estimated_system_kw: number;
  estimated_annual_savings: number;
  estimated_25yr_savings: number;
  estimated_subsidy: string;
}) => insertRow('proposal_requests', data);
