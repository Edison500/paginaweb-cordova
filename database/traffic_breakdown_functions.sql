-- Desglose de tráfico por tipo de dispositivo
-- (aproximado por screen_width, ya que no se guarda un parseo de user_agent).

create or replace function public.get_device_breakdown(p_since timestamptz, p_until timestamptz default null)
returns table(device text, count bigint)
language sql
stable
as $$
  select
    case
      when screen_width is null then 'Desconocido'
      when screen_width < 768 then 'Móvil'
      when screen_width < 1100 then 'Tablet'
      else 'Escritorio'
    end as device,
    count(*) as count
  from public.page_visits
  where created_at >= p_since
    and (p_until is null or created_at < p_until)
  group by device
  order by count desc;
$$;
