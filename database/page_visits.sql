create table if not exists public.page_visits (
  id uuid primary key default gen_random_uuid(),

  path text not null,
  title text,
  visitor_id text,
  referrer text,
  user_agent text,
  ip_hash text,
  screen_width integer,
  language text,
  timezone text,

  created_at timestamptz not null default now()
);

alter table public.page_visits enable row level security;

create index if not exists page_visits_created_at_idx
on public.page_visits (created_at desc);

create index if not exists page_visits_path_idx
on public.page_visits (path);

create index if not exists page_visits_visitor_idx
on public.page_visits (visitor_id);

create index if not exists page_visits_ip_hash_idx
on public.page_visits (ip_hash);
