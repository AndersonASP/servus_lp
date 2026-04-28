import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Servus — Plataforma para ministério e voluntários | Programa pioneiros',
  description:
    'Escalas, comunicação e app para o time. Entre na lista pioneiros: benefícios exclusivos para os primeiros ministérios no Servus.',
  keywords: ['voluntários', 'ministério', 'igreja', 'escalas', 'Servus', 'programa pioneiros', 'lista de espera'],
  openGraph: {
    title: 'Servus — Organize seu ministério. Lidere com mais paz.',
    description:
      'Cadastre interesse no programa pioneiros: condições especiais, onboarding prioritário e voz no produto.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servus — Programa pioneiros',
    description: 'Registre o interesse do seu ministério na primeira leva do Servus.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

