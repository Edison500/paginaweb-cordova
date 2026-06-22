create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),

  service_needed text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  property_address text,
  message text not null,

  source_page text default 'website',
  status text not null default 'new'
    check (status in ('new', 'viewed', 'contacted', 'closed')),

  email_sent boolean not null default false,
  email_sent_at timestamptz,
  email_error text,

  user_agent text,
  referrer text,

  created_at timestamptz not null default now()
);

alter table public.contact_requests enable row level security;

create index if not exists contact_requests_created_at_idx
on public.contact_requests (created_at desc);

create index if not exists contact_requests_status_idx
on public.contact_requests (status);

create index if not exists contact_requests_service_idx
on public.contact_requests (service_needed);
