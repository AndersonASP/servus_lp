import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-servus-dark text-white/85 py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-white text-lg font-semibold mb-6">
                We Are Servus — ministérios organizados, equipes pastoreadas e culto com mais paz.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm mb-8">
                <Link href="/privacidade" className="hover:text-white transition-colors">
                  Privacidade
                </Link>
                <span aria-hidden>•</span>
                <span className="cursor-default">Contato via formulário pioneiros</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/70 text-base italic mb-6 max-w-2xl mx-auto">
              &ldquo;Tudo o que fizerem, façam de todo o coração&hellip;&rdquo; — Colossenses 3:23
            </p>
            <p className="text-center text-white/50 text-sm">© {new Date().getFullYear()} Servus.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
