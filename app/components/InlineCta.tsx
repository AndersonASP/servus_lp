'use client'

import { Button } from './ui/button'

export function InlineCta() {
  return (
    <section className="py-16 bg-servus-coral/15 border-y border-servus-coral/25">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-servus-text mb-2 text-balance">Pronto para liderar com mais leveza?</h2>
            <p className="text-servus-muted max-w-xl">
              Uma conversa rápida basta para avaliarmos fit — ou apenas deixe seus dados e entramos em contato.
            </p>
          </div>
          <Button
            type="button"
            size="lg"
            className="shrink-0 bg-servus-dark hover:bg-servus-dark/90 text-white font-semibold px-8 py-6 h-auto rounded-xl"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero ser pioneiro
          </Button>
        </div>
      </div>
    </section>
  )
}
