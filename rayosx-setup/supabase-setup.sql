-- =====================================================================
-- Diagnóstico Rayos X — Base de datos (FASE 2: test vendible con claves)
-- Proyecto Supabase: bunker-diagnostico (pddxpbbtksvwasxcfhux)
-- Pega TODO esto en Supabase → SQL Editor → RUN. Es re-ejecutable.
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------- Tabla de prospectos (respuestas del test) ----------
create table if not exists public.rayos_x_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  nombre text,
  correo text,
  telefono text,
  producto text,
  factura_actual_monto numeric,
  factura_actual_moneda text,
  meta_monto numeric,
  meta_moneda text,
  nivel_implementacion text,
  prioridad_sistema text,
  promedio_habilidades numeric,
  porcentaje_sistema int,
  canal text,
  transformacion text,
  nicho text,
  oferta_precio text,
  respuestas jsonb,
  resultado jsonb,
  code text
);
-- Por si la tabla ya existía sin la columna code:
alter table public.rayos_x_leads add column if not exists code text;

-- ---------- Tabla de claves de acceso (una por comprador / cortesía) ----------
create table if not exists public.access_codes (
  code text primary key,
  used boolean default false,
  used_at timestamptz,
  lead_id uuid,
  tipo text default 'pago',   -- 'pago' | 'cortesia' (gratis)
  nota text,                  -- a quién se le dio / campaña (opcional)
  created_at timestamptz default now()
);

-- ---------- Seguridad: el público (anon) NO lee ni escribe directo ----------
alter table public.rayos_x_leads enable row level security;
alter table public.access_codes  enable row level security;

-- ---------- Validar una clave antes de mostrar el test ----------
create or replace function public.validar_clave(p_code text)
returns text language plpgsql security definer set search_path = public as $$
declare r public.access_codes;
begin
  select * into r from public.access_codes where code = p_code;
  if not found then return 'invalida'; end if;
  if r.used then return 'usada'; end if;
  return 'ok';
end; $$;

-- ---------- Enviar el diagnóstico: valida + guarda + marca la clave usada (atómico) ----------
create or replace function public.enviar_rayosx(p_code text, p_data jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r public.access_codes; new_id uuid;
begin
  select * into r from public.access_codes where code = p_code for update;
  if not found then return jsonb_build_object('ok',false,'motivo','invalida'); end if;
  if r.used then return jsonb_build_object('ok',false,'motivo','usada'); end if;

  insert into public.rayos_x_leads(
    nombre,correo,telefono,producto,
    factura_actual_monto,factura_actual_moneda,meta_monto,meta_moneda,
    nivel_implementacion,prioridad_sistema,promedio_habilidades,porcentaje_sistema,
    canal,transformacion,nicho,oferta_precio,respuestas,resultado,code)
  values(
    p_data->>'nombre',p_data->>'correo',p_data->>'telefono',p_data->>'producto',
    (p_data->>'factura_actual_monto')::numeric,p_data->>'factura_actual_moneda',
    (p_data->>'meta_monto')::numeric,p_data->>'meta_moneda',
    p_data->>'nivel_implementacion',p_data->>'prioridad_sistema',
    (p_data->>'promedio_habilidades')::numeric,(p_data->>'porcentaje_sistema')::int,
    p_data->>'canal',p_data->>'transformacion',p_data->>'nicho',p_data->>'oferta_precio',
    p_data->'respuestas',p_data->'resultado',p_code)
  returning id into new_id;

  update public.access_codes set used=true, used_at=now(), lead_id=new_id where code=p_code;
  return jsonb_build_object('ok',true,'id',new_id);
end; $$;

-- ---------- El público solo puede EJECUTAR estas dos funciones ----------
grant execute on function public.validar_clave(text)      to anon;
grant execute on function public.enviar_rayosx(text, jsonb) to anon;

-- ---------- La administradora (autenticada) lee todo y administra claves ----------
drop policy if exists "admin_lee_leads"  on public.rayos_x_leads;
drop policy if exists "admin_todo_codes" on public.access_codes;
create policy "admin_lee_leads"  on public.rayos_x_leads for select to authenticated using (true);
create policy "admin_todo_codes" on public.access_codes for all    to authenticated using (true) with check (true);

-- ---------- (OPCIONAL) Clave de prueba para test de punta a punta ----------
-- Descomenta esta línea si quieres una clave lista para probar ahora mismo.
-- Luego puedes borrarla o resetearla desde el panel.
-- insert into public.access_codes(code, tipo, nota) values ('PRUEBA-RAYOSX-001', 'cortesia', 'clave de prueba') on conflict (code) do nothing;
