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
    default: 'Espaço Festa – Aluguel de Trajes em Ribeirão Preto | Noivas, Madrinhas e Festas',
    template: '%s | Espaço Festa – Aluguel de Trajes'
  },
  description: 'Aluguel de vestidos de noiva, trajes de festa e black tie em Ribeirão Preto. Atendimento personalizado, ajustes e curadoria premium. Trajes inesquecíveis para momentos únicos.',
  keywords: [
    'aluguel de trajes',
    'vestidos de noiva',
    'aluguel vestido Ribeirão Preto',
    'trajes de festa',
    'madrinhas',
    'padrinhos',
    'debutantes',
    '15 anos',
    'formaturas',
    'black tie',
    'noivas Ribeirão Preto',
    'trajes inesquecíveis'
  ],
  authors: [{ name: 'Espaço Festa' }],
  creator: 'Espaço Festa',
  publisher: 'Espaço Festa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://espacofesta.com.br',
    siteName: 'Espaço Festa – Aluguel de Trajes',
    title: 'Espaço Festa – Aluguel de Trajes | Trajes inesquecíveis para momentos únicos',
    description: 'Aluguel de vestidos de noiva, trajes de festa e black tie em Ribeirão Preto. Atendimento personalizado, ajustes e curadoria premium.',
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
    title: 'Espaço Festa – Aluguel de Trajes',
    description: 'Trajes inesquecíveis para momentos únicos. Aluguel de vestidos de noiva e trajes em Ribeirão Preto.',
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Espaço Festa – Aluguel de Trajes",
                "description": "Aluguel de vestidos de noiva, trajes de festa e black tie em Ribeirão Preto",
                "url": "https://espacofesta.com.br",
                "telephone": "+55 16 3325-4734",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua São Paulo, 814",
                  "addressLocality": "Ribeirão Preto",
                  "addressRegion": "SP",
                  "addressCountry": "BR"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Ribeirão Preto"
                },
                "sameAs": [
                  "https://www.instagram.com/espacofestarp_/"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+55 16 3325-4734",
                    "contactType": "customer service"
                  },
                  {
                    "@type": "ContactPoint", 
                    "telephone": "+55 16 99195-2586",
                    "contactType": "customer service",
                    "availableLanguage": "Portuguese"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+55 16 99168-9938", 
                    "contactType": "customer service",
                    "availableLanguage": "Portuguese"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "RentalService",
                "name": "Espaço Festa – Aluguel de Trajes",
                "serviceType": "Aluguel de trajes",
                "description": "Aluguel de vestidos de noiva, madrinhas, trajes masculinos e vestidos de festa para eventos especiais",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Espaço Festa – Aluguel de Trajes"
                },
                "areaServed": "Ribeirão Preto, SP",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Catálogo de Trajes",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Vestidos de Noiva",
                        "category": "Noivas"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product", 
                        "name": "Vestidos de Madrinha",
                        "category": "Madrinhas"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Trajes Masculinos",
                        "category": "Noivos e Padrinhos"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Vestidos de Debutante", 
                        "category": "15 Anos"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Trajes Black Tie",
                        "category": "Formaturas e Festas"
                      }
                    }
                  ]
                }
              }
            ])
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