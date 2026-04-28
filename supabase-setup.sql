-- Script SQL para configurar a tabela waitlist no Supabase
-- Execute este script no SQL Editor do Supabase

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para email (opcional, mas recomendado)
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Criar índice para created_at (para ordenação)
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

