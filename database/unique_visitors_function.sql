-- Cuenta visitantes únicos (por visitor_id, con fallback a ip_hash) dentro de
-- un rango de fechas, contando en Postgres en vez de traer hasta 5000 filas
-- y deduplicar en JS (mismo tipo de límite que tenía get_top_pages antes).
create or replace function public.get_unique_visitor_count(p_since timestamptz, p_until timestamptz default null)
returns bigint
language sql
stable
as $$
  select count(distinct coalesce(visitor_id, ip_hash))
  from public.page_visits
  where created_at >= p_since
    and (p_until is null or created_at < p_until)
    and coalesce(visitor_id, ip_hash) is not null;
$$;
