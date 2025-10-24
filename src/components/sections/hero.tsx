'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
              Trajes de noiva e festa com{' '}
              <span className="text-primary-500">curadoria premium</span>{' '}
              em Ribeirão Preto
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold text-primary-600">Trajes inesquecíveis para momentos únicos.</span>{' '}
              Atendimento personalizado, ajustes sob medida e conservação impecável para seu evento especial.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">Curadoria Premium</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">Ajustes Sob Medida</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium">Atendimento Personalizado</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://wa.me/5516991952586?text=Olá! Gostaria de conhecer os trajes disponíveis para aluguel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200 hover:scale-105"
              >
                Falar no WhatsApp (1)
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/5516991689938?text=Olá! Gostaria de conhecer os trajes disponíveis para aluguel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-500 bg-white px-8 py-4 text-base font-semibold text-primary-500 shadow-sm hover:bg-primary-50 hover:border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
              >
                Falar no WhatsApp (2)
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">4.9/5</span> baseado em{' '}
                <span className="font-semibold">200+</span> avaliações
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder image - substituir por imagem real */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300" />
              
              {/* Overlay com mosaico de trajes */}
              <div className="absolute inset-0 grid grid-cols-2 gap-1 p-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">👗</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Vestidos</p>
                  <p className="text-xs text-gray-600">Longos & Curtos</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🤵</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Ternos</p>
                  <p className="text-xs text-gray-600">& Smokings</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">👸</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Plus Size</p>
                  <p className="text-xs text-gray-600">Tamanhos especiais</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">👶</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Infantil</p>
                  <p className="text-xs text-gray-600">Daminhas & Pajens</p>
                </div>
              </div>

              {/* Badge de destaque */}
              <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Novo: Coleção 2025
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Prova Rápida</p>
                  <p className="text-xs text-gray-600">Agendamento em 24h</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 text-xs font-bold">✂️</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ajuste Grátis</p>
                  <p className="text-xs text-gray-600">1ª barra inclusa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}