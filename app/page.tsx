import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { DemoVisual } from './components/DemoVisual'
import { DoresLider } from './components/DoresLider'
import { Beneficios } from './components/Beneficios'
import { ParaQuem } from './components/ParaQuem'
import { Depoimentos } from './components/Depoimentos'
import { ComoFunciona } from './components/ComoFunciona'
import { Pioneiros } from './components/Pioneiros'
import { InlineCta } from './components/InlineCta'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DemoVisual />
      <DoresLider />
      <Beneficios />
      <ParaQuem />
      <Depoimentos />
      <ComoFunciona />
      <Pioneiros />
      <InlineCta />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
