export type PioneerSheetPayload = {
  created_at: string
  name: string
  email: string
  phone: string
  church: string
  role: string
  church_size: string
  message: string
  wants_pioneer_benefits: boolean
  consent: boolean
  source: string
}

const MAX = {
  name: 120,
  email: 254,
  phone: 40,
  church: 200,
  role: 80,
  church_size: 40,
  message: 2000,
  source: 120,
} as const

export function normalizePayload(raw: Record<string, string | boolean>): PioneerSheetPayload {
  const clip = (s: string, max: number) => (s || '').trim().slice(0, max)

  return {
    created_at: new Date().toISOString(),
    name: clip(String(raw.name ?? ''), MAX.name),
    email: clip(String(raw.email ?? ''), MAX.email).toLowerCase(),
    phone: clip(String(raw.phone ?? ''), MAX.phone),
    church: clip(String(raw.church ?? ''), MAX.church),
    role: clip(String(raw.role ?? ''), MAX.role),
    church_size: clip(String(raw.church_size ?? ''), MAX.church_size),
    message: clip(String(raw.message ?? ''), MAX.message),
    wants_pioneer_benefits: Boolean(raw.wants_pioneer_benefits),
    consent: Boolean(raw.consent),
    source: clip(String(raw.source ?? 'servus_lp'), MAX.source),
  }
}

export async function appendPioneerRow(payload: PioneerSheetPayload): Promise<{ ok: true } | { ok: false; error: string }> {
  const skip =
    process.env.SKIP_SHEETS === '1' ||
    process.env.SKIP_SHEETS === 'true' ||
    (process.env.NODE_ENV === 'development' && !process.env.GOOGLE_APPS_SCRIPT_URL)

  if (skip) {
    console.info('[servus_lp] Lead (modo sem Google Sheets):', JSON.stringify(payload))
    return { ok: true }
  }

  const url = process.env.GOOGLE_APPS_SCRIPT_URL
  if (!url) {
    console.error('GOOGLE_APPS_SCRIPT_URL is not set')
    return { ok: false, error: 'Configuração do servidor incompleta. Tente mais tarde.' }
  }

  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET
  const body = { ...payload, ...(secret ? { secret } : {}) }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('Apps Script response', res.status, await res.text().catch(() => ''))
      return { ok: false, error: 'Não foi possível registrar agora. Tente novamente.' }
    }

    let json: { ok?: boolean; error?: string } = {}
    try {
      json = (await res.json()) as { ok?: boolean; error?: string }
    } catch {
      /* script pode responder texto vazio */
    }

    if (json && json.ok === false) {
      return { ok: false, error: json.error || 'Erro ao registrar.' }
    }

    return { ok: true }
  } catch (e) {
    console.error('appendPioneerRow', e)
    return { ok: false, error: 'Erro de rede. Tente novamente.' }
  }
}
