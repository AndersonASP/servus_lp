const faqs = [
  {
    q: 'O Servus substitui o WhatsApp?',
    a: 'Não é “mais um grupo”. A ideia é concentrar escala, confirmações e avisos onde o time já trabalha — reduzindo ruído no WhatsApp, não eliminando relação humana.',
  },
  {
    q: 'Quem vê os dados dos voluntários?',
    a: 'Acesso é pensado por perfil (líder, equipe, etc.). Tratamos dados com cuidado e transparência; na fase piloto alinhamos políticas com sua igreja.',
  },
  {
    q: 'Funciona para ministérios pequenos?',
    a: 'Sim. Se você tem poucas pessoas, o ganho é clareza e histórico. Se tem muitas, o ganho é escala e menos retrabalho.',
  },
  {
    q: 'Quanto custa?',
    a: 'Na fase pioneiros definimos pacotes com condições especiais. Deixe seus dados no formulário e retornamos com proposta adequada ao tamanho do ministério.',
  },
  {
    q: 'Preciso instalar algo na igreja?',
    a: 'O líder usa o painel na web; voluntários usam o app no celular. Sem servidor complicado para a igreja manter.',
  },
  {
    q: 'E se eu quiser sair da lista?',
    a: 'Qualquer e-mail nosso terá link de descadastro. Na planilha interna removemos o contato sob solicitação.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-servus-surface scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-servus-text mb-4 text-center text-balance">Perguntas frequentes</h2>
        <p className="text-servus-muted text-center mb-12">Respostas diretas para decidir com tranquilidade.</p>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-servus-border bg-servus-bg open:bg-servus-surface open:shadow-sm transition-shadow"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 font-semibold text-servus-text marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-servus-blue shrink-0 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4 pt-0 text-servus-muted leading-relaxed border-t border-transparent group-open:border-servus-border/60">
                <p className="pt-3">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
