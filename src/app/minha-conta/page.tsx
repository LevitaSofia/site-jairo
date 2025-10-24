'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Calendar, 
  Heart, 
  Settings, 
  LogOut, 
  Package,
  Clock,
  MessageCircle
} from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function MyAccountPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center">
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name || ''}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-primary-600" />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-display font-bold text-gray-900">
                    Olá, {session.user?.name}!
                  </h1>
                  <p className="text-gray-600">{session.user?.email}</p>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                Sair
              </button>
            </div>
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* My Bookings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Minhas Reservas</h3>
                  <p className="text-sm text-gray-600">Gerencie seus agendamentos</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Nenhuma reserva encontrada
                  </p>
                  <a
                    href="/catalogo"
                    className="block w-full mt-3 bg-primary-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Ver Catálogo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Favorites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Favoritos</h3>
                  <p className="text-sm text-gray-600">Trajes salvos</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Nenhum favorito salvo
                  </p>
                  <a
                    href="/catalogo"
                    className="block w-full mt-3 bg-primary-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Explorar Trajes
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Atividade Recente</h3>
                  <p className="text-sm text-gray-600">Suas ações recentes</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Bem-vindo ao Espaço Festa!
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Conta criada hoje
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 md:col-span-2 lg:col-span-3"
            >
              <h3 className="font-semibold text-gray-900 mb-6">Ações Rápidas</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href="/catalogo"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-colors group"
                >
                  <Package className="h-8 w-8 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-gray-900 mb-1">Ver Catálogo</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Explore nossa coleção
                  </p>
                </a>

                <a
                  href="https://wa.me/5516991952586?text=Olá! Gostaria de agendar uma prova."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-colors group"
                >
                  <MessageCircle className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-gray-900 mb-1">Agendar Prova</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Marque seu horário
                  </p>
                </a>

                <a
                  href="https://wa.me/5516991952586?text=Olá! Tenho dúvidas sobre os trajes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-colors group"
                >
                  <MessageCircle className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-gray-900 mb-1">Falar com Expert</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Tire suas dúvidas
                  </p>
                </a>

                <button className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-colors group">
                  <Settings className="h-8 w-8 text-gray-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-gray-900 mb-1">Configurações</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Editar perfil
                  </p>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}