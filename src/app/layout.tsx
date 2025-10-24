import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0b647',
}

export const metadata: Metadata = {
  title: {
    default: 'Espaço Festa - Locação de Trajes | Ribeirão Preto',
    template: '%s | Espaço Festa - Locação de Trajes'
  },
  description: 'Alugue vestidos, ternos e smokings para seu evento em Ribeirão Preto. Ajustes inclusos, numerações do PP ao XG. Somente locação. O look perfeito, sem comprar.',
  keywords: [
    'locação de vestidos',
    'aluguel de trajes',
    'vestidos de festa',
    'ternos',
    'smokings',
    'Ribeirão Preto',
    'madrinhas',
    'debutantes',
    'formatura',
    'casamento',
    'plus size'
  ],
  authors: [{ name: 'Espaço Festa' }],
  creator: 'Espaço Festa',
  publisher: 'Espaço Festa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://espacofesta.com.br',
    siteName: 'Espaço Festa - Locação de Trajes',
    title: 'Espaço Festa - Locação de Trajes | O look perfeito, sem comprar',
    description: 'Alugue vestidos, ternos e smokings para seu evento em Ribeirão Preto. Ajustes inclusos, numerações do PP ao XG.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Espaço Festa - Locação de Trajes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espaço Festa - Locação de Trajes',
    description: 'O look perfeito, sem comprar. Locação de vestidos e trajes em Ribeirão Preto.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Espaço Festa - Locação de Trajes",
              "description": "Locação de vestidos, ternos e smokings para eventos em Ribeirão Preto",
              "url": "https://espacofesta.com.br",
              "telephone": "{{TELEFONE_FIXO}}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "{{ENDERECO_COMPLETO}}",
                "addressLocality": "Ribeirão Preto",
                "addressRegion": "SP",
                "postalCode": "{{CEP}}",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "{{LATITUDE}}",
                "longitude": "{{LONGITUDE}}"
              },
              "openingHours": "{{HORARIO_FUNCIONAMENTO}}",
              "sameAs": [
                "https://instagram.com/espacofestarp_",
                "https://wa.me/{{WHATSAPP}}"
              ],
              "serviceArea": {
                "@type": "City",
                "name": "Ribeirão Preto"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Locação de Trajes",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Vestidos de Festa"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Ternos e Smokings"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}