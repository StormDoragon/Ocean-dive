-- Beyond Signal — accounts schema
-- Run this in the Supabase SQL editor (or `supabase db push`) after creating
-- a project. Auth users are managed by Supabase Auth (auth.users); these
-- tables hold per-user saved discoveries, collections, and notes. Row-Level
-- Security ensures each user can only read/write their own rows.

-- ── Saved discoveries ──────────────────────────────────────────────────────
create table if not exists public.saved_discoveries (
  user_id        uuid not null references auth.users (id) on delete cascade,
  discovery_slug text not null,
  created_at     timestamptz not null default now(),
  primary key (user_id, discovery_slug)
);

alter table public.saved_discoveries enable row level security;

create policy "own saves are visible"
  on public.saved_discoveries for select
  using (auth.uid() = user_id);

create policy "insert own saves"
  on public.saved_discoveries for insert
  with check (auth.uid() = user_id);

create policy "delete own saves"
  on public.saved_discoveries for delete
  using (auth.uid() = user_id);

-- ── Collections (schema ready; UI can layer in later) ──────────────────────
create table if not exists public.collections (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  name       text not null,
  created_at timestamptz not null default now()
);

alter table public.collections enable row level security;

create policy "own collections"
  on public.collections for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.collection_items (
  collection_id  uuid not null references public.collections (id) on delete cascade,
  discovery_slug text not null,
  note           text,
  created_at     timestamptz not null default now(),
  primary key (collection_id, discovery_slug)
);

alter table public.collection_items enable row level security;

-- Items are visible/editable when the parent collection belongs to the user.
create policy "own collection items"
  on public.collection_items for all
  using (
    exists (
      select 1 from public.collections c
      where c.id = collection_id and c.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.collections c
      where c.id = collection_id and c.user_id = auth.uid()
    )
  );
