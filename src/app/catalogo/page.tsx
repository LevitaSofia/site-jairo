'use client'

import * as React from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Filter, Grid3X3, List, Search, MessageCircle, Heart } from 'lucide-react'

// Dados fictícios para demonstração
const products = [
  {
    id: 1,
    name: 'Vestido de Noiva Clássico',
    category: 'noivas',
    image: '�',
    color: 'Branco Pérola',
    sizes: ['P', 'M', 'G'],
    fabric: 'Renda francesa',
    description: 'Elegante vestido de noiva com renda francesa e cauda removível'
  },
  {
    id: 2,
    name: 'Vestido Madrinha Azul Royal',
    category: 'madrinhas',
    image: '👗',
    color: 'Azul Royal',
    sizes: ['P', 'M', 'G', 'GG'],
    fabric: 'Crepe',
    description: 'Vestido longo em crepe com decote elegante, ideal para madrinhas'
  },
  {
    id: 3,
    name: 'Smoking Black Tie',
    category: 'black-tie',
    image: '🤵',
    color: 'Preto',
    sizes: ['P', 'M', 'G', 'GG'],
    fabric: 'Lã Premium',
    description: 'Smoking clássico com lapela em cetim para eventos formais'
  },
  {
    id: 4,
    name: 'Vestido Debutante Rosa',
    category: 'debutantes',
    image: '�',
    color: 'Rosa Antigo',
    sizes: ['PP', 'P', 'M'],
    fabric: 'Tule bordado',
    description: 'Vestido princesa com bordados delicados para festa de 15 anos'
  },
  {
    id: 5,
    name: 'Terno Noivo Cinza',
    category: 'noivos',
    image: '�',
    color: 'Cinza Chumbo',
    sizes: ['P', 'M', 'G', 'GG'],
    fabric: 'Lã Italiana',
    description: 'Terno slim fit em lã italiana, perfeito para noivos modernos'
  },
  {
    id: 6,
    name: 'Vestido Daminha Branco',
    category: 'infantil',
    image: '�',
    color: 'Branco',
    sizes: ['2', '4', '6', '8'],
    fabric: 'Organza',
    description: 'Delicado vestido de daminha com laço e saia de organza'
  }
]

const categories = [
  { id: 'todos', name: 'Todos os Trajes', count: 150 },
  { id: 'noivas', name: 'Noivas', count: 45 },
  { id: 'madrinhas', name: 'Madrinhas', count: 35 },
  { id: 'noivos', name: 'Noivos', count: 30 },
  { id: 'black-tie', name: 'Black Tie', count: 25 },
  { id: 'debutantes', name: 'Debutantes', count: 20 },
  { id: 'infantil', name: 'Infantil', count: 15 },
  { id: 'acessorios', name: 'Acessórios', count: 12 }
]

const colors = [
  'Todos', 'Azul', 'Preto', 'Vinho', 'Verde', 'Rosa', 'Dourado', 'Prata', 'Branco', 'Vermelho'
]

const sizes = [
  'PP', 'P', 'M', 'G', 'GG', 'XG', '46', '48', '50', '52', '54', '56'
]

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('todos')
  const [selectedColor, setSelectedColor] = React.useState('Todos')
  const [selectedSize, setSelectedSize] = React.useState('')
  const [searchTerm, setSearchTerm] = React.useState('')
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = React.useState(false)

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory === 'todos' || product.category === selectedCategory) &&
      (selectedColor === 'Todos' || product.color === selectedColor) &&
      (selectedSize === '' || product.sizes.includes(selectedSize)) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              Nosso Catálogo
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Descubra nossa coleção completa com mais de 500 peças para todos os tipos de evento. 
              Encontre o look perfeito para seu momento especial.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou cor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categoria</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-xs text-gray-500">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Cor</h4>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  {colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Tamanho</h4>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  <option value="">Todos os tamanhos</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('todos')
                  setSelectedColor('Todos')
                  setSelectedSize('')
                  setSearchTerm('')
                }}
                className="w-full text-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-xl shadow-sm border p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  Filtros
                </button>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'item encontrado' : 'itens encontrados'}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                      viewMode === 'list' ? 'flex items-center gap-4 p-4' : 'p-6'
                    }`}
                  >
                    {/* Image */}
                    <div className={`${viewMode === 'list' ? 'w-20 h-20' : 'w-full h-48'} bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 ${viewMode === 'list' ? 'mb-0' : ''}`}>
                      <span className="text-4xl">{product.image}</span>
                    </div>
                    
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      {/* Content */}
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Details */}
                      <div className={`${viewMode === 'list' ? 'flex items-center gap-4' : 'space-y-2'} mb-4`}>
                        <div className="text-xs">
                          <span className="text-gray-500">Cor: </span>
                          <span className="font-medium text-gray-700">{product.color}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-500">Tamanhos: </span>
                          <span className="font-medium text-gray-700">{product.sizes.join(', ')}</span>
                        </div>
                      </div>
                      
                      {/* Fabric and Actions */}
                      <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
                        <div className="text-sm text-primary-600 mb-3 font-medium">
                          {product.fabric}
                        </div>
                        
                        <div className={`${viewMode === 'list' ? 'flex gap-2' : 'space-y-2'}`}>
                          <a
                            href={`https://wa.me/5516991952586?text=Olá! Gostaria de alugar o ${product.name}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Alugar
                          </a>
                          <button className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4" />
                            Favoritar
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum item encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar os filtros ou entre em contato conosco.
                </p>
                <a
                  href="https://wa.me/5516991952586?text=Olá! Não encontrei o que procuro no catálogo online."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com Especialista
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}