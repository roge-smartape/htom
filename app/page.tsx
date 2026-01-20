import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { BeneficiosSection } from '@/components/beneficios-section'
import { ProcesoSection } from '@/components/proceso-section'
import { FinanciamientoSection } from '@/components/financiamiento-section'
import { ElegibilidadSection } from '@/components/elegibilidad-section'
import { RegistroSection } from '@/components/registro-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BeneficiosSection />
      <ProcesoSection />
      <FinanciamientoSection />
      <ElegibilidadSection />
      <RegistroSection />
      <Footer />
    </main>
  )
}
