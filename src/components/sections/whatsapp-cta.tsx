'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Clock, Users, ArrowRight } from 'lucide-react'

export function WhatsAppCTA() {
  return (
    <section className="py-16 lg:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                <span>Atendimento pelo WhatsApp</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                Atendimento Rápido e{' '}
                <span className="text-green-600">Personalizado</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe especializada está pronta para te ajudar a encontrar o look perfeito. 
                Tire suas dúvidas, agende provações e faça orçamentos diretamente pelo WhatsApp.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm">Resposta em até 15 minutos no horário comercial</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm">Consultoria especializada em moda e eventos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm">Catálogo exclusivo via mensagem</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/5516999999999?text=Olá! Gostaria de falar com um especialista sobre locação de trajes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                Falar com Especialista
                <ArrowRight className="h-5 w-5" />
              </a>

              {/* Phone Number */}
              <div className="mt-4 text-center lg:text-left">
                <p className="text-sm text-gray-600">
                  Ou ligue para:{' '}
                  <a
                    href="tel:+5516999999999"
                    className="font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    (16) 99999-9999
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-green-500 rounded-t-3xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">EF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Espaço Festa</div>
                    <div className="text-xs text-green-100">online</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 space-y-3 min-h-[300px] rounded-b-3xl">
                {/* Messages */}
                <div className="bg-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Olá! Como posso ajudar com a locação do seu traje? 😊
                  </p>
                  <div className="text-xs text-gray-500 mt-1">10:30</div>
                </div>
                
                <div className="bg-green-500 text-white rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">
                    Preciso de um vestido para madrinhas
                  </p>
                  <div className="text-xs text-green-100 mt-1">10:31</div>
                </div>
                
                <div className="bg-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Perfeito! Temos uma coleção linda de vestidos para madrinhas. 
                    Qual a data do evento?
                  </p>
                  <div className="text-xs text-gray-500 mt-1">10:32</div>
                </div>
                
                <div className="bg-white rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Vou te enviar algumas opções disponíveis na sua numeração! 📸
                  </p>
                  <div className="text-xs text-gray-500 mt-1">10:32</div>
                </div>

                {/* Typing indicator */}
                <div className="bg-white rounded-lg p-3 max-w-[60px]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-gray-900">Horário de atendimento:</span>{' '}
              Segunda a Sexta das 9h às 18h • Sábado das 9h às 16h
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}