'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Catálogo', href: '/catalogo' },
  { name: 'Como Funciona', href: '/como-funciona' },
  { name: 'Tamanhos', href: '/tamanhos-e-ajustes' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contato', href: '/contato' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Info Bar */}
      <div className="bg-primary-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Rua São Paulo, 814 - Ribeirão Preto - SP</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Segunda a Sábado - Atendimento com agendamento</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span className="font-medium">(16) 3325-4734</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Espaço Festa</span>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EF</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-display font-semibold text-gray-900">
                    Espaço Festa
                  </h1>
                  <p className="text-xs text-gray-600">Locação de Trajes</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <Link
              href="/agendar"
              className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-700 transition-colors"
            >
              Agendar Prova
            </Link>
            <Link
              href="https://wa.me/5516991952586?text=Olá! Gostaria de conhecer os trajes disponíveis para aluguel."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Falar no WhatsApp
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden",
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        )}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Espaço Festa</span>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EF</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-display font-semibold text-gray-900">
                      Espaço Festa
                    </h1>
                    <p className="text-xs text-gray-600">Aluguel de Trajes</p>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="/agendar"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Agendar Prova
                  </Link>
                  <Link
                    href="https://wa.me/5516999999999?text=Olá! Gostaria de saber mais sobre a locação de trajes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md bg-primary-600 px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Orçar no WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}