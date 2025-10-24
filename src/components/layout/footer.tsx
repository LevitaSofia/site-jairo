'use client'

import * as React from 'react'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook,
  MessageCircle
} from 'lucide-react'

const navigation = {
  main: [
    { name: 'Início', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Tamanhos e Ajustes', href: '/tamanhos-e-ajustes' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato', href: '/contato' }
  ],
  categories: [
    { name: 'Vestidos Longos', href: '/catalogo/vestidos-longos' },
    { name: 'Vestidos Curtos', href: '/catalogo/vestidos-curtos' },
    { name: 'Plus Size', href: '/catalogo/plus-size' },
    { name: 'Debutantes', href: '/catalogo/debutantes' },
    { name: 'Infantil', href: '/catalogo/infantil' },
    { name: 'Ternos', href: '/catalogo/ternos' },
    { name: 'Smokings', href: '/catalogo/smoking' },
    { name: 'Acessórios', href: '/catalogo/acessorios' }
  ],
  legal: [
    { name: 'Políticas', href: '/politicas' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'LGPD', href: '/lgpd' }
  ]
}

const socialMedia = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/espacofestarp_',
    icon: Instagram
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/espacofestarp',
    icon: Facebook
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5516999999999?text=Olá! Vim pelo site e gostaria de saber mais sobre os trajes.',
    icon: MessageCircle
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold">EF</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">Espaço Festa</h3>
                  <p className="text-sm text-gray-400">Locação de Trajes</p>
                </div>
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                O look perfeito, sem comprar. Há 15 anos oferecendo as melhores opções 
                em locação de trajes para seus momentos especiais.
              </p>

              {/* Social Media */}
              <div className="flex gap-4">
                {socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navegação</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Categorias</h3>
              <ul className="space-y-3">
                {navigation.categories.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">
                      Rua das Flores, 123 - Centro<br />
                      Ribeirão Preto - SP, 14010-000
                    </p>
                  </div>
                </li>
                
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+551634567890"
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      (16) 3456-7890
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <a
                      href="https://wa.me/5516999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      (16) 99999-9999
                    </a>
                  </div>
                </li>
                
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:contato@espacofesta.com.br"
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      contato@espacofesta.com.br
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Seg - Sex: 9h às 18h</p>
                    <p>Sáb: 9h às 16h</p>
                    <p>Dom: Fechado</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Receba Novidades da Nossa Coleção
              </h3>
              <p className="text-gray-400 text-sm">
                Fique por dentro dos lançamentos e promoções exclusivas.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Espaço Festa - Locação de Trajes. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: 12.345.678/0001-90 | Somente Locação
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              Pronto para encontrar o look perfeito?
            </p>
            <a
              href="https://wa.me/5516999999999?text=Olá! Gostaria de agendar uma prova para meu evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar Prova Agora
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}