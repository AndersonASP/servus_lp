import { Quote } from 'lucide-react'

const depoimentos = [
  {
    text: 'A gente precisava parar de apagar incêndio na véspera do culto. Ter um lugar único para escala e avisos mudou o clima do time.',
    author: 'Líder de ministério',
    role: 'Piloto Servus',
  },
  {
    text: 'Voluntários pedindo menos “me manda de novo o horário”. Quando a informação está clara, o time confia mais no processo.',
    author: 'Coordenação',
    role: 'Equipe média',
  },
  {
    text: 'Queremos pastorear melhor, não virar central de logística. Ferramenta certa libera tempo para o que importa.',
    author: 'Pastor',
    role: 'Supervisão de ministérios',
  },
]

export function Depoimentos() {
  return (
    <section className="py-24 bg-gradient-to-b from-servus-blue/8 to-servus-surface">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-servus-text mb-4 leading-tight text-balance">
            O que líderes estão buscando
          </h2>
          <p className="text-lg text-servus-muted max-w-2xl mx-auto">
            Frases inspiradas em conversas reais com líderes — o Servus foi desenhado em cima dessas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-servus-surface p-8 rounded-2xl border border-servus-border hover:border-servus-blue/40 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="h-9 w-9 text-servus-blue mb-5" aria-hidden />
              <p className="text-servus-muted text-base leading-relaxed mb-8">&ldquo;{depoimento.text}&rdquo;</p>
              <div className="border-t border-servus-border pt-5">
                <p className="font-bold text-servus-text">{depoimento.author}</p>
                <p className="text-sm text-servus-muted mt-1">{depoimento.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
