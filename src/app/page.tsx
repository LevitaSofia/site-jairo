import { Hero } from '@/components/sections/hero'
import { Categories } from '@/components/sections/categories'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Features } from '@/components/sections/features'
import { Testimonials } from '@/components/sections/testimonials'
import { WhatsAppCTA } from '@/components/sections/whatsapp-cta'
import { LocationMap } from '@/components/sections/location-map'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <Testimonials />
      <WhatsAppCTA />
      <LocationMap />
      <Footer />
    </main>
  )
}