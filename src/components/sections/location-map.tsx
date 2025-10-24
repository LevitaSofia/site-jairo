'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export function LocationMap() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Visite Nossa Loja
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos localizados no coração de Ribeirão Preto, com fácil acesso e estacionamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-100"
          >
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <p className="text-primary-700 font-medium">
                  Mapa interativo será carregado aqui
                </p>
                <p className="text-sm text-primary-600 mt-2">
                  Integração com Google Maps
                </p>
              </div>
            </div>
            
            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-bounce-gentle">
                <MapPin className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-700 mb-3">
                    Rua das Flores, 123 - Centro<br />
                    Ribeirão Preto - SP, 14010-000
                  </p>
                  <a
                    href="https://maps.google.com/?q=Espaço+Festa+Ribeirão+Preto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Como Chegar
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Segunda à Sexta</span>
                      <span className="font-medium text-gray-900">9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábado</span>
                      <span className="font-medium text-gray-900">9h às 16h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingo</span>
                      <span className="font-medium text-red-600">Fechado</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700">
                      💡 <strong>Dica:</strong> Agendamentos pelo WhatsApp garantem atendimento exclusivo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Contato</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+551634567890"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(16) 3456-7890</span>
                    </a>
                    <a
                      href="https://wa.me/5516999999999?text=Olá! Gostaria de agendar uma visita à loja."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                    >
                      <div className="h-4 w-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">W</span>
                      </div>
                      <span>(16) 99999-9999</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5516999999999?text=Olá! Gostaria de agendar uma visita à loja para ver as opções disponíveis."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
              >
                Agendar Visita
              </a>
              <a
                href="https://maps.google.com/?q=Espaço+Festa+Ribeirão+Preto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                <Navigation className="h-4 w-4" />
                Ver no Mapa
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-2xl mb-3">🚗</div>
            <h4 className="font-semibold text-gray-900 mb-2">Estacionamento</h4>
            <p className="text-sm text-gray-600">
              Estacionamento gratuito em frente à loja
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-2xl mb-3">♿</div>
            <h4 className="font-semibold text-gray-900 mb-2">Acessibilidade</h4>
            <p className="text-sm text-gray-600">
              Loja com total acessibilidade
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-2xl mb-3">🏪</div>
            <h4 className="font-semibold text-gray-900 mb-2">Localização</h4>
            <p className="text-sm text-gray-600">
              Centro de Ribeirão Preto, fácil acesso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}