-- Cruza page_visits (tráfico anónimo) con contact_requests (leads) por path,
-- para calcular cuántas visitas a cada página terminaron en una solicitud.
create or replace function public.get_conversion_by_page(p_since timestamptz, p_until timestamptz default null)
returns table(path text, visits bigint, leads bigint)
language sql
stable
as $$
  select
    v.path,
    v.visits,
    coalesce(l.leads, 0) as leads
  from (
    select path, count(*) as visits
    from public.page_visits
    where created_at >= p_since
      and (p_until is null or created_at < p_until)
    group by path
  ) v
  left join (
    select source_page as path, count(*) as leads
    from public.contact_requests
    where created_at >= p_since
      and (p_until is null or created_at < p_until)
    group by source_page
  ) l on l.path = v.path
  order by v.visits desc
  limit 8;
$$;
