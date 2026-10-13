-- Leads submitted through the website contact form.
-- Written only by the server (service role); never exposed to the anon key.
create table if not exists public.contact_leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  email         text not null,
  phone         text,
  language      text not null check (language in ('en', 'pt', 'es')),
  condition     text,
  insurance     text,
  request_type  text not null check (request_type in ('eval', 'discovery', 'telehealth', 'question')),
  message       text,
  page_locale   text not null default 'en',
  handled_at    timestamptz
);

create index if not exists contact_leads_created_at_idx on public.contact_leads (created_at desc);

alter table public.contact_leads enable row level security;
-- No policies on purpose: anon/authenticated roles get no access; service role bypasses RLS.
