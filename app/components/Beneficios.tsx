const beneficios = [
  {
    title: 'Escalas justas e ajustáveis',
    description: 'Funções claras, distribuição equilibrada e mudanças rápidas quando a vida acontece.',
  },
  {
    title: 'Um canal para o time',
    description: 'Menos ruído: avisos e atualizações onde a escala já está.',
  },
  {
    title: 'Lembretes e confirmações',
    description: 'Reduza o “esqueci” sem virar cobrança manual o dia inteiro.',
  },
  {
    title: 'Disponibilidade visível',
    description: 'Cada voluntário indica quando pode servir — você decide com dados.',
  },
  {
    title: 'Pastoreio com leveza',
    description: 'Ferramentas para acompanhar o time de forma respeitosa, sem invadir.',
  },
  {
    title: 'Semana de culto mais calma',
    description: 'Você lidera o ministério; o Servus organiza a operação.',
  },
]

export function Beneficios() {
  return (
    <section id="recursos" className="py-24 bg-servus-bg scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-servus-text mb-4 leading-tight text-balance">
            O que muda quando o Servus entra no ministério
          </h2>
          <p className="text-lg text-servus-muted max-w-2xl mx-auto">
            Foco em resultado: menos atrito operacional, mais espaço para o que só você pode fazer como líder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group bg-servus-surface p-6 rounded-xl border border-servus-border border-l-4 border-l-servus-blue hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-servus-text mb-2">{beneficio.title}</h3>
              <p className="text-servus-muted leading-relaxed">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
