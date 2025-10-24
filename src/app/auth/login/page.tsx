'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Chrome, ArrowLeft, Shield, Zap, Users } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { 
        callbackUrl: '/minha-conta' 
      })
    } catch (error) {
      console.error('Erro no login:', error)
    }
    // Não definir como false aqui pois o usuário será redirecionado
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao site
              </Link>
              
              <div className="mb-6">
                <div className="h-16 w-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">EF</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Entre na sua conta
              </h1>
              <p className="text-gray-600 mb-8">
                Acesse sua área pessoal com sua conta Google
              </p>
            </motion.div>

            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-xl border border-gray-100 p-8"
            >
              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:border-primary-300 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary-600"></div>
                ) : (
                  <Chrome className="h-5 w-5" />
                )}
                {isLoading ? 'Conectando...' : 'Entrar com Google'}
              </button>

              {/* Benefits */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
                  Por que usar Google?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Seguro</p>
                      <p className="text-xs text-gray-500">Protegido pelo Google</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Rápido</p>
                      <p className="text-xs text-gray-500">Login em um clique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Confiável</p>
                      <p className="text-xs text-gray-500">Use sua conta existente</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 p-6 bg-primary-50 border border-primary-100 rounded-xl"
            >
              <h3 className="font-semibold text-primary-800 mb-2">
                🎉 Primeira vez aqui?
              </h3>
              <p className="text-sm text-primary-700">
                Sua conta será criada automaticamente no primeiro login com Google. 
                Simples, rápido e seguro!
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}