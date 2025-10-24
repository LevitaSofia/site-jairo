'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Users, 
  Scissors, 
  Clock, 
  Shield, 
  Heart,
  Sparkles,
  Award
} from 'lucide-react'

const features = [
  {
    name: 'Ajustes Inclusos',
    description: 'Primeira barra e pequenos ajustes inclusos no valor da locação.',
    icon: Scissors,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Variedade de Tamanhos',
    description: 'Do PP ao XG, incluindo linha plus size com numeração especial.',
    icon: Users,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Coleção Atualizada',
    description: 'Lançamentos constantes seguindo as últimas tendências da moda.',
    icon: Sparkles,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Atendimento Agendado',
    description: 'Prova com hora marcada, sem pressa e com atenção exclusiva.',
    icon: Clock,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Urgências Aceitas',
    description: 'Eventos de última hora? Fazemos o possível para atender!',
    icon: Zap,
    gradient: 'from-red-500 to-pink-500'
  },
  {
    name: 'Qualidade Garantida',
    description: 'Peças de alta qualidade, sempre limpas e bem conservadas.',
    icon: Shield,
    gradient: 'from-teal-500 to-blue-500'
  },
  {
    name: 'Atendimento Humanizado',
    description: 'Equipe experiente e apaixonada por fazer você se sentir especial.',
    icon: Heart,
    gradient: 'from-rose-500 to-red-500'
  },
  {
    name: 'Experiência de 15 Anos',
    description: 'Tradição e confiança no mercado de locação de trajes.',
    icon: Award,
    gradient: 'from-yellow-500 to-amber-500'
  }
]

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-white">
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
            Por que Escolher o Espaço Festa?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mais do que locação de trajes, oferecemos uma experiência completa para tornar seu evento ainda mais especial.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-sm border hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Peças no Acervo</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">2000+</div>
              <div className="text-sm text-gray-600 font-medium">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">15</div>
              <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium">Índice de Satisfação</div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-green-600" />
            </div>
            <span className="font-medium">Higienização Garantida</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-blue-600" />
            </div>
            <span className="font-medium">Qualidade Certificada</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Heart className="w-3 h-3 text-purple-600" />
            </div>
            <span className="font-medium">Atendimento Exclusivo</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-amber-600" />
            </div>
            <span className="font-medium">Urgências Aceitas</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}