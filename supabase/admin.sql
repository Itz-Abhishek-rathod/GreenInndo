-- Run this once in Supabase Dashboard > SQL Editor (after schema.sql).
-- Creates a SINGLE admin slot: the first account that signs up becomes the admin,
-- and every later sign-up attempt is rejected by the database itself.

create table if not exists public.admins (
  singleton boolean primary key default true check (singleton),  -- only one row can ever exist
  user_id uuid not null unique references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;  -- no policies = no direct access

create or replace function public.register_first_admin()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.admins (user_id) values (new.id);  -- fails if the slot is taken
  return new;
end $$;

drop trigger if exists on_auth_user_created_admin on auth.users;
create trigger on_auth_user_created_admin
  after insert on auth.users
  for each row execute function public.register_first_admin();

create or replace function public.admin_exists()
returns boolean language sql security definer stable set search_path = public as
$$ select exists (select 1 from public.admins) $$;

create or replace function public.is_admin()
returns boolean language sql security definer stable set search_path = public as
$$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

grant execute on function public.admin_exists() to anon, authenticated;
grant execute on function public.is_admin() to authenticated;

-- Only the admin can read bookings.
grant select on public.inquiries, public.proposal_requests to authenticated;

drop policy if exists "admin can read inquiries" on public.inquiries;
create policy "admin can read inquiries" on public.inquiries
  for select to authenticated using (public.is_admin());

drop policy if exists "admin can read proposal requests" on public.proposal_requests;
create policy "admin can read proposal requests" on public.proposal_requests
  for select to authenticated using (public.is_admin());
