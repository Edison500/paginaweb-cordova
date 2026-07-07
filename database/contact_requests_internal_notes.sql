-- Nota interna editable por el admin, sin relación con el mensaje original
-- del cliente. Columna nueva, nullable, no afecta filas existentes.
alter table public.contact_requests
add column if not exists internal_notes text;
