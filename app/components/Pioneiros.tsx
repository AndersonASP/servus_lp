import Link from 'next/link'
import { Sparkles, Rocket, MessageCircle, BadgePercent } from 'lucide-react'

const perks = [
  {
    icon: BadgePercent,
    title: 'Condições de pioneiro',
    description: 'Condições comerciais diferenciadas para quem entrar na primeira leva (detalhes na conversa de onboarding).',
  },
  {
    icon: Rocket,
    title: 'Onboarding prioritário',
    description: 'Implementação acompanhada para colocar ministério e equipes no ar com confiança.',
  },
  {
    icon: MessageCircle,
    title: 'Voz no produto',
    description: 'Canal direto para feedback: o que dói no seu contexto ajuda a moldar o roadmap.',
  },
  {
    icon: Sparkles,
    title: 'Acesso antecipado',
    description: 'Experimente recursos antes do público geral e adapte o fluxo à sua realidade.',
  },
]

export function Pioneiros() {
  return (
    <section id="pioneiros" className="py-24 bg-gradient-to-b from-servus-dark to-[#1e2a6e] text-white scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-servus-coral font-semibold text-sm uppercase tracking-widest mb-3">Programa pioneiros</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
            Faça parte dos primeiros com benefícios exclusivos
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Estamos fechando um grupo inicial de ministérios para pilotar o Servus com proximidade. Vagas limitadas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {perks.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm hover:bg-white/[0.12] transition-colors"
            >
              <Icon className="w-8 h-8 text-servus-coral mb-4" aria-hidden />
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center bg-servus-coral hover:bg-servus-coral/90 text-servus-dark font-semibold text-lg px-10 py-4 rounded-xl shadow-lg transition-colors min-h-[52px]"
          >
            Registrar meu interesse
          </Link>
        </div>
      </div>
    </section>
  )
}
