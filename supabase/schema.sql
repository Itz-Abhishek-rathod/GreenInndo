-- Run this once in Supabase Dashboard > SQL Editor.

create table if not exists public.inquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  inquiry_type text,
  message text not null,
  agreed_to_terms boolean not null default true
);

create table if not exists public.proposal_requests (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  property_type text not null,
  monthly_bill numeric not null,
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  pincode text not null,
  estimated_system_kw numeric,
  estimated_annual_savings numeric,
  estimated_25yr_savings numeric,
  estimated_subsidy text
);

-- Website visitors (anon key) may only INSERT; nobody can read via the public key.
alter table public.inquiries enable row level security;
alter table public.proposal_requests enable row level security;

drop policy if exists "anon can insert inquiries" on public.inquiries;
create policy "anon can insert inquiries" on public.inquiries
  for insert to anon with check (true);

drop policy if exists "anon can insert proposal requests" on public.proposal_requests;
create policy "anon can insert proposal requests" on public.proposal_requests
  for insert to anon with check (true);

grant insert on public.inquiries, public.proposal_requests to anon;
