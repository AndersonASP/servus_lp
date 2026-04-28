'use client'

import { useState, useEffect } from 'react'

const features = [
  {
    id: 'painel',
    icon: '📌',
    title: 'Painel do ministério',
    subtitle: '(Web)',
    description:
      'Visão única de equipes, funções e cultos da semana — sem planilhas soltas nem cobrança manual em todo mundo.',
  },
  {
    id: 'escalas',
    icon: '📆',
    title: 'Escalas inteligentes',
    description:
      'Monte escalas em poucos passos, respeitando disponibilidade e evitando que as mesmas pessoas fiquem sobrecarregadas.',
  },
  {
    id: 'app',
    icon: '📱',
    title: 'App do voluntário',
    subtitle: '(Mobile)',
    description:
      'Função, horário, lembretes e avisos no celular — menos ruído no WhatsApp e mais clareza para quem serve.',
  },
  {
    id: 'comunicacao',
    icon: '💬',
    title: 'Comunicação integrada',
    description: 'Avisos e atualizações no mesmo lugar em que a escala vive, para líder e time alinhados.',
  },
  {
    id: 'espiritual',
    icon: '🌱',
    title: 'Cuidado com o time',
    description:
      'Acompanhe como o ministério está — de forma respeitosa — para pastorear melhor quem está na linha de frente.',
  },
]

export function DemoVisual() {
  const [activeTab, setActiveTab] = useState(features[0].id)
  const activeFeature = features.find((f) => f.id === activeTab) || features[0]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = features.findIndex((f) => f.id === current)
        const nextIndex = (currentIndex + 1) % features.length
        return features[nextIndex].id
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="produto" className="py-24 bg-gradient-to-b from-servus-dark to-[#1a2460] relative overflow-hidden -mt-1 scroll-mt-20">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance">
            Tudo o que o Servus reúne em um só lugar
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Um produto pensado para a rotina real de ministério: menos improviso, mais previsibilidade e time engajado.
          </p>
        </div>

        <div className="w-full mb-10">
          <div className="flex items-center gap-2 border-b border-white/15 pb-4 overflow-x-auto scrollbar-hide">
            {features.map((feature) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveTab(feature.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === feature.id
                    ? 'bg-white/15 backdrop-blur-sm text-white shadow-lg border border-white/25'
                    : 'text-white/75 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <span className="mr-2">{feature.icon}</span>
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/15 shadow-2xl">
            <div className="mb-6">
              <div className="flex flex-wrap items-baseline gap-2 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{activeFeature.title}</h3>
                {activeFeature.subtitle && (
                  <span className="text-sm text-white/65 font-medium">{activeFeature.subtitle}</span>
                )}
              </div>
              <p className="text-white/88 leading-relaxed text-lg">{activeFeature.description}</p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-white/15 to-white/5 rounded-xl border border-white/15 flex items-center justify-center shadow-inner">
              <div className="text-center px-4">
                <div className="text-5xl md:text-6xl mb-3">{activeFeature.icon}</div>
                <p className="text-white/55 text-sm">Prévia visual do módulo em breve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
