'use client'

import * as React from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: "Vocês apenas alugam ou também vendem trajes?",
    answer: "Trabalhamos SOMENTE com locação de trajes. Nosso foco é oferecer peças de alta qualidade para locação, permitindo que você tenha o look perfeito sem o investimento de uma compra."
  },
  {
    question: "Com quanto tempo de antecedência devo reservar?",
    answer: "Recomendamos reservar com 30-60 dias de antecedência, principalmente para madrinhas e debutantes. Porém, também atendemos eventos de última hora, conforme disponibilidade do estoque."
  },
  {
    question: "Os ajustes estão inclusos no valor da locação?",
    answer: "Sim! A primeira barra e pequenos ajustes de caimento estão inclusos no valor da locação. Ajustes mais complexos podem ter custo adicional, que será informado previamente."
  },
  {
    question: "Tenho evento de última hora, vocês conseguem atender?",
    answer: "Fazemos o possível para atender eventos urgentes! Entre em contato pelo WhatsApp e verificaremos a disponibilidade. Muitas vezes conseguimos resolver em 24-48 horas."
  },
  {
    question: "Como funciona a limpeza das peças?",
    answer: "A limpeza básica está inclusa no valor da locação. Realizamos higienização completa entre cada uso. Manchas ou sujeiras extras podem ter custo adicional conforme nossa política."
  },
  {
    question: "É necessário deixar caução?",
    answer: "Sim, solicitamos uma caução que varia conforme o valor da peça. A caução é devolvida integralmente após a devolução da peça em perfeitas condições, dentro do prazo acordado."
  },
  {
    question: "O que devo levar na prova?",
    answer: "Traga a lingerie adequada (sutiã sem alça se necessário), sapato similar ao que usará no evento e acessórios que pretende usar. Para homens, traga sapato social e camisa social branca."
  },
  {
    question: "Trabalham com plus size?",
    answer: "Sim! Temos uma linha especial plus size com numeração do 46 ao 60. Nossa equipe tem experiência em ajustes para todos os tipos de corpo, garantindo o caimento perfeito."
  },
  {
    question: "Vocês alugam roupas para crianças?",
    answer: "Sim, temos uma coleção infantil completa para daminhas e pajens de 2 a 14 anos. Incluindo vestidos, ternos e acessórios apropriados para cada idade."
  },
  {
    question: "Posso ter outra pessoa para buscar/devolver por mim?",
    answer: "Sim, desde que seja previamente autorizado e a pessoa apresente documento de identidade. É importante que ela esteja ciente de todas as condições do contrato."
  },
  {
    question: "E se o evento for cancelado ou adiado por chuva?",
    answer: "Entendemos imprevistos! Em casos de cancelamento por força maior (clima, pandemia, etc.), trabalhamos com reagendamento sem taxas adicionais, conforme disponibilidade."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos dinheiro, PIX (com desconto), cartão de débito e crédito (parcelamos em até 3x sem juros). O sinal para reserva pode ser pago por PIX para maior comodidade."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Esclarecemos as principais dúvidas sobre nossos serviços de locação de trajes. 
              Não encontrou sua resposta? Fale conosco!
            </p>
            
            <a
              href="https://wa.me/5516999999999?text=Olá! Tenho uma dúvida que não encontrei no FAQ."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between group hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 group-hover:text-primary-600 transition-all flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-4 -mx-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe especializada está pronta para esclarecer todas as suas questões 
              e ajudar você a escolher o traje perfeito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5516999999999?text=Olá! Gostaria de tirar algumas dúvidas sobre locação de trajes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Conversar pelo WhatsApp
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                Outras Formas de Contato
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}