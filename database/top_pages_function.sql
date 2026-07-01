-- Agrega visitas por path dentro de un rango de fechas, sin el límite de filas
-- que tiene el conteo hecho en JS (antes se traían hasta 2000 filas y se
-- agrupaban en memoria, lo que subestimaba el conteo en rangos grandes).
create or replace function public.get_top_pages(p_since timestamptz, p_until timestamptz default null)
returns table(path text, count bigint)
language sql
stable
as $$
  select
    path,
    count(*) as count
  from public.page_visits
  where created_at >= p_since
    and (p_until is null or created_at < p_until)
  group by path
  order by count desc
  limit 8;
$$;
