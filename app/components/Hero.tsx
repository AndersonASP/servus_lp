'use client'

import { useState } from 'react'
import { Button } from './ui/button'

export function Hero() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido')
      return
    }

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('heroEmail', email)
    }

    scrollTo('waitlist')
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-servus-dark via-[#2a3a8f] to-servus-dark pt-16"
      aria-label="Seção principal"
    >
      <div className="illumination-blob illumination-blob-1" aria-hidden="true" />
      <div className="illumination-blob illumination-blob-2" aria-hidden="true" />
      <div className="illumination-blob illumination-blob-3" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden w-full h-full z-[2]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
          <line x1="10%" y1="10%" x2="30%" y2="30%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '0s' }} />
          <line x1="30%" y1="30%" x2="50%" y2="20%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '0.5s' }} />
          <line x1="50%" y1="20%" x2="70%" y2="40%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '1s' }} />
          <line x1="70%" y1="40%" x2="90%" y2="60%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '1.5s' }} />
          <line x1="20%" y1="80%" x2="40%" y2="60%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '2s' }} />
          <line x1="40%" y1="60%" x2="60%" y2="80%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '2.5s' }} />
          <line x1="60%" y1="80%" x2="80%" y2="90%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '3s' }} />
        </svg>
        <div className="absolute top-[10%] left-[10%] w-4 h-4 bg-white rounded-full blur-sm opacity-70 animate-connection-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[40%] left-[70%] w-5 h-5 bg-servus-coral/80 rounded-full blur-sm opacity-75 animate-connection-pulse" style={{ animationDelay: '0.9s' }} />
        <div className="absolute top-[80%] left-[40%] w-4 h-4 bg-white rounded-full blur-sm opacity-70 animate-connection-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-servus-coral/95">
            Programa pioneiros Servus
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] text-white text-balance">
            Organize voluntários, escalas e comunicação — e recupere a paz antes do culto.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            O Servus é a plataforma feita para líderes de ministério: um painel para você, um app para o time, e benefícios exclusivos para quem entrar na primeira leva.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              type="button"
              size="lg"
              onClick={() => scrollTo('waitlist')}
              className="bg-servus-coral hover:bg-servus-coral/90 text-servus-dark text-lg px-8 py-4 rounded-xl font-semibold shadow-lg h-auto min-h-[52px]"
            >
              Quero ser pioneiro
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => scrollTo('como-funciona')}
              className="border-white/40 bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl h-auto min-h-[52px]"
            >
              Ver como funciona
            </Button>
          </div>

          <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto mb-8">
            <p className="text-white/80 text-sm mb-3">Deixe seu e-mail e abrimos o formulário completo na hora.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError(null)
                }}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/55 focus:outline-none focus:ring-2 focus:ring-servus-coral focus:border-servus-coral text-lg transition-all"
                aria-label="Seu e-mail"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'email-error' : undefined}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-servus-blue hover:bg-servus-blue/90 text-white text-lg px-8 py-4 rounded-xl font-semibold h-auto min-h-[56px] whitespace-nowrap border border-white/10"
              >
                Continuar
              </Button>
            </div>
            {error && (
              <p id="email-error" className="mt-3 text-sm text-red-200 text-center" role="alert">
                {error}
              </p>
            )}
          </form>

          <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto">
            Vagas limitadas na fase piloto. Pioneiros recebem condições especiais e voz ativa no roadmap.
          </p>
        </div>
      </div>
    </section>
  )
}
