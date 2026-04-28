import Link from 'next/link'

export const metadata = {
  title: 'Política de privacidade | Servus',
  description: 'Como tratamos dados na landing page e no programa pioneiros Servus.',
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-servus-bg text-servus-text">
      <div className="container max-w-3xl py-16 px-4 sm:px-6">
        <Link href="/" className="text-servus-blue hover:underline text-sm font-medium">
          ← Voltar à página inicial
        </Link>
        <h1 className="text-3xl font-bold mt-8 mb-6">Política de privacidade (resumo)</h1>
        <div className="text-servus-muted space-y-4 leading-relaxed">
          <p>
            Os dados enviados pelo formulário de interesse na landing Servus são usados para contato comercial e
            convites relacionados ao programa pioneiros. Armazenamento pode ocorrer em planilhas internas (Google
            Sheets) operadas pela equipe Servus, com acesso restrito.
          </p>
          <p>
            Você pode solicitar correção ou exclusão dos seus dados entrando em contato pelo mesmo canal em que
            recebeu nossa mensagem, ou respondendo a qualquer e-mail nosso.
          </p>
          <p>
            Esta página é um resumo informativo. Versões futuras podem detalhar cookies, terceiros e bases legais (LGPD)
            conforme o produto evoluir.
          </p>
        </div>
      </div>
    </main>
  )
}
