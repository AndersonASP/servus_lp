'use client'

import { useState, useEffect } from 'react'
import { submitPioneerInterest } from '@/app/actions'
import { Button } from './ui/button'
import { CheckCircle2, Loader2 } from 'lucide-react'

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailField, setEmailField] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = sessionStorage.getItem('heroEmail')
    if (stored) setEmailField(stored)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await submitPioneerInterest(formData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      e.currentTarget.reset()
      if (typeof window !== 'undefined') sessionStorage.removeItem('heroEmail')
      setEmailField('')
      setTimeout(() => setIsSuccess(false), 8000)
    } else {
      setError(result.error || 'Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-br from-servus-blue via-servus-blue to-servus-dark text-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-servus-coral rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
            Registre seu interesse — programa pioneiros
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conte-nos sobre você e seu ministério. Entraremos em contato com próximos passos e benefícios exclusivos da primeira leva.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left">
          <input type="hidden" name="source" value="servus_lp" />

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="sm:col-span-2">
              <label htmlFor="cta-name" className="block text-sm font-medium text-white/90 mb-1.5">
                Nome completo
              </label>
              <input
                id="cta-name"
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-xl text-servus-text placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral"
              />
            </div>
            <div>
              <label htmlFor="cta-email" className="block text-sm font-medium text-white/90 mb-1.5">
                E-mail
              </label>
              <input
                id="cta-email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                value={emailField}
                onChange={(e) => setEmailField(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-servus-text placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral"
              />
            </div>
            <div>
              <label htmlFor="cta-phone" className="block text-sm font-medium text-white/90 mb-1.5">
                WhatsApp <span className="text-white/60 font-normal">(opcional)</span>
              </label>
              <input
                id="cta-phone"
                type="tel"
                name="phone"
                placeholder="DDD + número"
                className="w-full px-4 py-3 rounded-xl text-servus-text placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cta-church" className="block text-sm font-medium text-white/90 mb-1.5">
                Igreja ou ministério
              </label>
              <input
                id="cta-church"
                type="text"
                name="church"
                placeholder="Ex.: Igreja X — ministério de louvor"
                className="w-full px-4 py-3 rounded-xl text-servus-text placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral"
              />
            </div>
            <div>
              <label htmlFor="cta-role" className="block text-sm font-medium text-white/90 mb-1.5">
                Seu papel
              </label>
              <select
                id="cta-role"
                name="role"
                required
                className="w-full px-4 py-3 rounded-xl text-servus-text bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="lider_ministerio">Líder de ministério</option>
                <option value="pastor">Pastor(a) / supervisão</option>
                <option value="voluntario">Voluntário(a)</option>
                <option value="staff">Staff / administração</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label htmlFor="cta-size" className="block text-sm font-medium text-white/90 mb-1.5">
                Tamanho aproximado do time
              </label>
              <select
                id="cta-size"
                name="church_size"
                required
                className="w-full px-4 py-3 rounded-xl text-servus-text bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="1-15">1 a 15 voluntários</option>
                <option value="16-40">16 a 40</option>
                <option value="41-100">41 a 100</option>
                <option value="100+">Mais de 100</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cta-message" className="block text-sm font-medium text-white/90 mb-1.5">
                Mensagem <span className="text-white/60 font-normal">(opcional)</span>
              </label>
              <textarea
                id="cta-message"
                name="message"
                rows={3}
                placeholder="Conte em uma frase o que mais gostaria de resolver com o Servus."
                className="w-full px-4 py-3 rounded-xl text-servus-text placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-servus-coral resize-y min-h-[96px]"
              />
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-start gap-3 cursor-pointer text-white/90 text-sm">
              <input type="checkbox" name="wants_pioneer_benefits" defaultChecked className="mt-1 h-4 w-4 rounded border-white/40 text-servus-blue focus:ring-servus-coral" />
              <span>Quero participar como pioneiro e receber informações sobre benefícios exclusivos da primeira leva.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer text-white/90 text-sm">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-white/40 text-servus-blue focus:ring-servus-coral" />
              <span>
                Autorizo o Servus a usar estes dados para entrar em contato sobre o programa pioneiros, conforme a{' '}
                <a href="/privacidade" className="underline text-servus-coral hover:text-white">
                  política de privacidade
                </a>
                .
              </span>
            </label>
          </div>

          {isSuccess && (
            <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-400/60 rounded-xl flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-200 shrink-0" />
              <p className="text-emerald-50 font-medium">Recebemos seu interesse. Em breve falamos com você.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/60 rounded-xl">
              <p className="text-red-100 font-medium">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full sm:w-auto bg-servus-coral hover:bg-servus-coral/90 text-servus-dark text-lg px-10 py-6 h-auto rounded-xl font-semibold shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar meu interesse'
            )}
          </Button>

          <p className="mt-6 text-sm text-white/75 text-center sm:text-left">
            Sem spam. Usamos seus dados apenas para este contato, salvo obrigação legal.
          </p>
        </form>
      </div>
    </section>
  )
}
