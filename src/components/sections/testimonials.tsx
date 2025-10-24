'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marina Santos',
    role: 'madrinha • 2024',
    rating: 5,
    text: 'Perfeito! O vestido ficou lindo e os ajustes foram impecáveis. Atendimento nota 10, me senti uma princesa no casamento da minha melhor amiga.',
    avatar: '👰'
  },
  {
    id: 2,
    name: 'Carlos Eduardo',
    role: 'formatura • 2024',
    rating: 5,
    text: 'Smoking impecável para minha formatura! Processo muito simples e rápido. Recomendo para todos os colegas.',
    avatar: '🤵'
  },
  {
    id: 3,
    name: 'Ana Beatriz',
    role: 'debutante • 2024',
    rating: 5,
    text: 'Meus 15 anos ficaram perfeitos! A equipe me ajudou a escolher o vestido dos sonhos. Experiência maravilhosa.',
    avatar: '👸'
  },
  {
    id: 4,
    name: 'Roberta Lima',
    role: 'mãe da noiva • 2024',
    rating: 5,
    text: 'Encontrei o vestido perfeito para o casamento da minha filha. Plus size com caimento perfeito e ajustes inclusos!',
    avatar: '👩'
  },
  {
    id: 5,
    name: 'Felipe Souza',
    role: 'evento corporativo • 2024',
    rating: 5,
    text: 'Terno elegante para jantar da empresa. Locação muito mais prática que comprar. Voltarei sempre!',
    avatar: '💼'
  },
  {
    id: 6,
    name: 'Juliana Costa',
    role: 'convidada • 2024',
    rating: 5,
    text: 'Vestido lindo para festa de casamento! Preço justo e qualidade excelente. Economia que vale a pena.',
    avatar: '💃'
  },
  {
    id: 7,
    name: 'Ricardo Alves',
    role: 'pai do noivo • 2024',
    rating: 5,
    text: 'Traje completo e bem ajustado. Atendimento profissional e pontualidade na entrega. Recomendo!',
    avatar: '👨'
  },
  {
    id: 8,
    name: 'Camila Ferreira',
    role: 'madrinhas • 2025',
    rating: 5,
    text: 'Já aluguei para 3 casamentos diferentes. Sempre vestidos lindos e bem conservados. Sou cliente fiel!',
    avatar: '🌟'
  }
]

export function Testimonials() {
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
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de clientes que confiaram no Espaço Festa para momentos especiais.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              4.9/5.0
            </div>
            <div className="text-gray-600">
              (200+ avaliações)
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-5 w-5 text-primary-400" />
                <div className="text-2xl">{testimonial.avatar}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm border"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfação Geral</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Recomendariam</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Nota Média</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Clientes Recorrentes</div>
            </div>
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
            Seja Nosso Próximo Cliente Satisfeito!
          </h3>
          <p className="text-gray-600 mb-6">
            Junte-se a mais de 2.000 pessoas que já confiaram no Espaço Festa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5516999999999?text=Olá! Vi os depoimentos e gostaria de agendar uma prova."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Quero Minha Experiência
            </a>
            <a
              href="/depoimentos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              Ver Mais Depoimentos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}