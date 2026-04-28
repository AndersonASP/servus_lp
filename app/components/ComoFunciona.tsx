const steps = [
  {
    number: '1',
    title: 'Configure ministério e equipes',
    description: 'Funções, cultos e voluntários no mesmo fluxo — do jeito que sua igreja já pensa.',
  },
  {
    number: '2',
    title: 'Monte a escala com apoio do Servus',
    description: 'Use disponibilidade e regras para sugerir encaixes e evitar sobrecarga.',
  },
  {
    number: '3',
    title: 'O time recebe no app',
    description: 'Confirmações, lembretes e comunicação centralizada no celular.',
  },
  {
    number: '4',
    title: 'Acompanhe a semana com clareza',
    description: 'Veja status, pendências e sinais de cuidado com o time antes do culto.',
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-servus-surface scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-servus-text mb-4 leading-tight text-balance">
            Como funciona
          </h2>
          <p className="text-lg text-servus-muted">Quatro passos. Do cadastro à semana tranquila.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative flex gap-5 md:gap-8">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-servus-blue to-servus-dark text-white rounded-full text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-[48px] bg-gradient-to-b from-servus-blue/35 to-transparent mt-3" />
                  )}
                </div>
                <div className="flex-1 pb-10 md:pb-12">
                  <h3 className="text-xl font-bold text-servus-text mb-2 leading-snug">{step.title}</h3>
                  <p className="text-servus-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
