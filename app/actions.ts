'use server'

import { appendPioneerRow, normalizePayload } from './lib/sheets'

export async function submitPioneerInterest(formData: FormData) {
  const consent = formData.get('consent') === 'on'
  if (!consent) {
    return { success: false, error: 'É necessário aceitar o contato para continuar.' }
  }

  const name = ((formData.get('name') as string) || '').trim()
  const email = ((formData.get('email') as string) || '').trim()
  const role = ((formData.get('role') as string) || '').trim()
  const church_size = ((formData.get('church_size') as string) || '').trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name || !email) {
    return { success: false, error: 'Nome e e-mail são obrigatórios.' }
  }
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Por favor, insira um e-mail válido.' }
  }
  if (!role) {
    return { success: false, error: 'Selecione seu papel no ministério.' }
  }
  if (!church_size) {
    return { success: false, error: 'Selecione o tamanho aproximado do time.' }
  }

  const wantsPioneer = formData.get('wants_pioneer_benefits') === 'on'

  const payload = normalizePayload({
    name,
    email,
    phone: (formData.get('phone') as string) || '',
    church: (formData.get('church') as string) || '',
    role,
    church_size,
    message: (formData.get('message') as string) || '',
    wants_pioneer_benefits: wantsPioneer,
    consent: true,
    source: (formData.get('source') as string) || 'servus_lp',
  })

  const result = await appendPioneerRow(payload)
  if (!result.ok) {
    return { success: false, error: result.error }
  }
  return { success: true }
}
