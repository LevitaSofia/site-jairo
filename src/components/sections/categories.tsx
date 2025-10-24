'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'vestidos-longos',
    name: 'Vestidos Longos',
    description: 'Para madrinhas, formaturas e eventos especiais',
    image: '👗',
    gradient: 'from-pink-500 to-rose-500',
    count: '150+ peças'
  },
  {
    id: 'madrinhas',
    name: 'Madrinhas',
    description: 'Coleção especial para o grande dia',
    image: '💒',
    gradient: 'from-purple-500 to-pink-500',
    count: '80+ opções'
  },
  {
    id: 'debutantes',
    name: 'Debutantes',
    description: 'Vestidos únicos para os 15 anos',
    image: '👸',
    gradient: 'from-blue-500 to-purple-500',
    count: '60+ modelos'
  },
  {
    id: 'plus-size',
    name: 'Plus Size',
    description: 'Tamanhos especiais do 46 ao 60',
    image: '✨',
    gradient: 'from-emerald-500 to-teal-500',
    count: '40+ peças'
  },
  {
    id: 'vestidos-curtos',
    name: 'Curto Cocktail',
    description: 'Para eventos descontraídos',
    image: '🥂',
    gradient: 'from-orange-500 to-amber-500',
    count: '70+ opções'
  },
  {
    id: 'infantil',
    name: 'Infantil',
    description: 'Daminhas e pajens de 2 a 14 anos',
    image: '👶',
    gradient: 'from-cyan-500 to-blue-500',
    count: '50+ peças'
  },
  {
    id: 'ternos',
    name: 'Ternos',
    description: 'Elegância masculina para todos os eventos',
    image: '🤵',
    gradient: 'from-gray-600 to-gray-800',
    count: '90+ opções'
  },
  {
    id: 'smoking',
    name: 'Smoking',
    description: 'Traje de gala para ocasiões especiais',
    image: '🎩',
    gradient: 'from-black to-gray-700',
    count: '30+ modelos'
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    description: 'Sapatos, bolsas e complementos',
    image: '👠',
    gradient: 'from-rose-500 to-pink-500',
    count: '100+ itens'
  }
]

export function Categories() {
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
            Explore Nosso Catálogo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra a peça perfeita para seu evento. Todas as categorias com numeração do PP ao XG.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/catalogo/${category.id}`}
                className="group relative block h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="text-4xl">{category.image}</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium">{category.count}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-3">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span>Ver coleção</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Não encontrou o que procura? Temos muito mais opções na loja!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Ver Catálogo Completo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/5516999999999?text=Olá! Gostaria de agendar uma visita para ver todas as opções disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              Agendar Visita
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}