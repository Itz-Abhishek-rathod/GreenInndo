import React, { useEffect, useState, useCallback } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';

type Row = Record<string, any>;

const INQUIRY_COLS: [string, string][] = [
  ['created_at', 'Date'], ['name', 'Name'], ['email', 'Email'], ['phone', 'Phone'],
  ['inquiry_type', 'Topic'], ['message', 'Message'],
];
const PROPOSAL_COLS: [string, string][] = [
  ['created_at', 'Date'], ['name', 'Name'], ['email', 'Email'], ['phone', 'Phone'],
  ['city', 'City'], ['pincode', 'PIN'], ['property_type', 'Type'], ['monthly_bill', 'Bill (₹/mo)'],
  ['estimated_system_kw', 'Size (kW)'], ['estimated_annual_savings', 'Yr-1 Savings (₹)'],
  ['estimated_25yr_savings', '25-Yr Savings (₹)'], ['estimated_subsidy', 'Subsidy'],
];

const fmt = (k: string, v: any) =>
  v == null ? '' : k === 'created_at' ? new Date(v).toLocaleString('en-IN') : String(v);

function downloadCsv(name: string, cols: [string, string][], rows: Row[]) {
  const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
  const lines = [cols.map(c => esc(c[1])).join(',')].concat(
    rows.map(r => cols.map(([k]) => esc(fmt(k, r[k]))).join(','))
  );
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/csv' }));
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}

const input = 'w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]';
const btn = 'w-full bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 text-white py-3 rounded-full font-semibold';

function AuthCard({ slotOpen }: { slotOpen: boolean }) {
  const [mode, setMode] = useState<'login' | 'signup'>(slotOpen ? 'signup' : 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setMsg('');
    const { data, error } =
      mode === 'signup'
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else if (mode === 'signup' && !data.session)
      setMsg('Account created. Email confirmation is enabled in Supabase — confirm the email or turn "Confirm email" off, then log in.');
    setBusy(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-md border border-slate-100 space-y-4">
        <h1 className="text-2xl font-extrabold text-slate-900">
          {mode === 'signup' ? 'Create Admin Account' : 'Admin Login'}
        </h1>
        {mode === 'signup' && (
          <p className="text-xs text-slate-500">One-time setup. Once this account exists, no other admin can ever be created.</p>
        )}
        <input className={input} type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className={input} type="password" required minLength={6} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {msg && <p className="text-sm text-red-600">{msg}</p>}
        <button className={btn} disabled={busy}>{busy ? 'Please wait...' : mode === 'signup' ? 'Create Admin Account' : 'Log In'}</button>
        {slotOpen && (
          <button type="button" className="w-full text-xs text-[#16A34A] underline"
            onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setMsg(''); }}>
            {mode === 'signup' ? 'Already have an account? Log in' : 'Create the admin account'}
          </button>
        )}
      </form>
    </div>
  );
}

function Dashboard({ session }: { session: Session }) {
  const [tab, setTab] = useState<'proposal_requests' | 'inquiries'>('proposal_requests');
  const [data, setData] = useState<Record<string, Row[]>>({ proposal_requests: [], inquiries: [] });
  const [q, setQ] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true); setErr('');
    const [p, i] = await Promise.all([
      supabase.from('proposal_requests').select('*').order('created_at', { ascending: false }),
      supabase.from('inquiries').select('*').order('created_at', { ascending: false }),
    ]);
    if (p.error || i.error) setErr((p.error || i.error)!.message);
    setData({ proposal_requests: p.data ?? [], inquiries: i.data ?? [] });
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  const cols = tab === 'proposal_requests' ? PROPOSAL_COLS : INQUIRY_COLS;
  const rows = data[tab].filter(r => !q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Admin Panel</h1>
          <p className="text-xs text-slate-500">{session.user.email}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={load} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold">Refresh</button>
          <button onClick={() => supabase.auth.signOut()} className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold">Log out</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
        {([['proposal_requests', 'Proposal Requests'], ['inquiries', 'Inquiries']] as const).map(([k, label]) => (
          <button key={k} onClick={() => setTab(k)}
            className={`p-4 rounded-2xl border text-left ${tab === k ? 'border-[#16A34A] bg-emerald-50' : 'border-slate-200 bg-white'}`}>
            <div className="text-2xl font-extrabold">{data[k].length}</div>
            <div className="text-xs text-slate-500">{label}</div>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <input className={input + ' max-w-xs'} placeholder="Search..." value={q} onChange={e => setQ(e.target.value)} />
        <button onClick={() => downloadCsv(`${tab}.csv`, cols, rows)} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold">Export CSV</button>
      </div>

      {err && <p className="text-sm text-red-600 mb-3">{err}</p>}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>{cols.map(([k, l]) => <th key={k} className="text-left px-4 py-3 whitespace-nowrap">{l}</th>)}</tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td className="px-4 py-6 text-slate-400" colSpan={cols.length}>Loading...</td></tr>
            ) : rows.length === 0 ? (
              <tr><td className="px-4 py-6 text-slate-400" colSpan={cols.length}>No records yet.</td></tr>
            ) : rows.map(r => (
              <tr key={r.id} className="border-t border-slate-100 align-top">
                {cols.map(([k]) => (
                  <td key={k} className={`px-4 py-3 ${k === 'message' ? 'min-w-[260px]' : 'whitespace-nowrap'}`}>{fmt(k, r[k])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [slotOpen, setSlotOpen] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      supabase.rpc('admin_exists').then(({ data }) => setSlotOpen(data === false));
    } else {
      supabase.rpc('is_admin').then(({ data }) => setIsAdmin(data === true));
    }
  }, [session]);

  if (!ready || (session && isAdmin === null) || (!session && slotOpen === null))
    return <div className="p-8 text-slate-400">Loading...</div>;
  if (!session) return <AuthCard slotOpen={!!slotOpen} />;
  if (!isAdmin)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <p className="text-slate-700">This account is not an admin.</p>
        <button onClick={() => supabase.auth.signOut()} className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm">Log out</button>
      </div>
    );
  return <Dashboard session={session} />;
}
