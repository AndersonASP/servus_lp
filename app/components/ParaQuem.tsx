import { Users, Church, HeartHandshake } from 'lucide-react'

const personas = [
  {
    icon: Users,
    title: 'Líderes de ministério',
    text: 'Você coordena equipes, cultos e comunicação — e precisa de uma base única para decidir rápido.',
  },
  {
    icon: Church,
    title: 'Pastores e supervisores',
    text: 'Querem visibilidade saudável do que acontece nos ministérios, sem microgerenciar cada detalhe.',
  },
  {
    icon: HeartHandshake,
    title: 'Voluntários fiéis',
    text: 'Ganham clareza: onde servem, quando e o que mudou — sem se perder em dezenas de conversas.',
  },
]

export function ParaQuem() {
  return (
    <section id="para-quem" className="py-24 bg-servus-bg scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-servus-text mb-4 leading-tight text-balance">
            Para quem é o Servus
          </h2>
          <p className="text-lg text-servus-muted max-w-2xl mx-auto">
            Feito para ecossistemas de igreja que levam servir a sério — com organização e pastoreio andando juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {personas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-servus-surface rounded-2xl p-8 border border-servus-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-servus-blue/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-servus-blue" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-servus-text mb-3">{title}</h3>
              <p className="text-servus-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
