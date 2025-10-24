'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Scissors, Sparkles } from 'lucide-react'

const steps = [
  {
    id: 1,
    name: 'Escolha e Prove',
    description: 'Navegue pelo nosso catálogo online ou visite nossa loja. Agende uma prova para garantir o caimento perfeito.',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
    details: [
      'Catálogo online com 500+ peças',
      'Agendamento rápido pelo WhatsApp',
      'Prova sem compromisso',
      'Orientação especializada'
    ]
  },
  {
    id: 2,
    name: 'Reserve e Ajuste',
    description: 'Confirme sua escolha com um sinal. Realizamos os ajustes necessários para o caimento ideal.',
    icon: Calendar,
    color: 'bg-green-100 text-green-600',
    details: [
      'Sinal de 50% para reservar',
      'Ajustes de barra inclusos',
      'Medidas profissionais',
      'Prazo de 7 dias para ajustes'
    ]
  },
  {
    id: 3,
    name: 'Retire',
    description: 'Retire sua peça ajustada até 2 dias antes do evento. Tudo limpo e pronto para usar.',
    icon: Scissors,
    color: 'bg-purple-100 text-purple-600',
    details: [
      'Retirada até 2 dias antes',
      'Peça higienizada e passada',
      'Kit de emergência incluso',
      'Orientações de cuidado'
    ]
  },
  {
    id: 4,
    name: 'Arrase e Devolva',
    description: 'Use com confiança no seu evento especial. Devolva em até 1 dia após o evento.',
    icon: Sparkles,
    color: 'bg-amber-100 text-amber-600',
    details: [
      'Devolução em até 24h',
      'Limpeza por nossa conta',
      'Sem taxas extras',
      'Avaliação do seu look'
    ]
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Como Funciona a Locação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um processo simples e transparente para você ter o look perfeito sem complicações.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="h-full bg-gradient-to-r from-primary-300 to-transparent w-3/4" />
                </div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${step.color} mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-primary-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.id}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-primary-400 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">⏰</div>
            <h4 className="font-semibold text-gray-900 mb-2">Prazos Flexíveis</h4>
            <p className="text-sm text-gray-600">
              Reserve com até 60 dias de antecedência ou para eventos de última hora
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="font-semibold text-gray-900 mb-2">Garantia de Qualidade</h4>
            <p className="text-sm text-gray-600">
              Todas as peças passam por rigoroso controle de qualidade e higienização
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">💳</div>
            <h4 className="font-semibold text-gray-900 mb-2">Pagamento Facilitado</h4>
            <p className="text-sm text-gray-600">
              Parcelamos em até 3x no cartão ou desconto à vista no PIX
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Pronto para começar?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco e vamos juntos encontrar o look perfeito para seu evento.
          </p>
          <a
            href="https://wa.me/5516999999999?text=Olá! Gostaria de saber mais sobre o processo de locação de trajes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Falar com Nossa Equipe
          </a>
        </motion.div>
      </div>
    </section>
  )
}