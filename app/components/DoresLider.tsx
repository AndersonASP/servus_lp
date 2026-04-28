const dores = [
  {
    title: 'Escalas caóticas',
    description: 'Trocas de última hora, faltas e confirmações atrasadas toda semana.',
  },
  {
    title: 'Voluntários sobrecarregados',
    description: 'Os mesmos nomes aparecem sempre — e o cansaço aparece antes do culto.',
  },
  {
    title: 'Comunicação espalhada',
    description: 'Grupos, recados e listas diferentes. Ninguém sabe onde está a “verdade”.',
  },
  {
    title: 'Baixo engajamento',
    description: 'As pessoas querem servir, mas se perdem nos detalhes ou esquecem confirmações.',
  },
  {
    title: 'Sem visão do todo',
    description: 'Problemas só aparecem quando já viraram incêndio no sábado à noite.',
  },
  {
    title: 'Tensão na semana do culto',
    description: 'Energia que poderia ir para o pastoreio vai para apagar incêndios operacionais.',
  },
]

export function DoresLider() {
  return (
    <section id="dores" className="py-24 bg-servus-surface scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-servus-text mb-4 leading-tight text-balance">
            Se isso soa familiar, você não está sozinho
          </h2>
          <p className="text-lg text-servus-muted max-w-2xl mx-auto">
            Líderes de ministério costumam carregar essas dores em silêncio. O Servus existe para tirar esse peso do seu colo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {dores.map((dor, index) => (
            <div
              key={index}
              className="group bg-servus-bg p-6 rounded-xl border border-servus-border border-l-4 border-l-servus-coral hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-servus-text mb-2">{dor.title}</h3>
              <p className="text-servus-muted leading-relaxed">{dor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
