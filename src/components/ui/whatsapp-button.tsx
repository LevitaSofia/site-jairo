'use client'

import * as React from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  className?: string
}

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const [showMenu, setShowMenu] = React.useState(false)
  
  const phones = [
    {
      number: "5516991952586",
      label: "WhatsApp (1)",
      message: "Olá! Gostaria de conhecer os trajes disponíveis para aluguel."
    },
    {
      number: "5516991689938", 
      label: "WhatsApp (2)",
      message: "Olá! Gostaria de conhecer os trajes disponíveis para aluguel."
    }
  ]

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      {/* Menu de opções */}
      {showMenu && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border p-2 min-w-48 animate-slide-in">
          {phones.map((phone) => (
            <a
              key={phone.number}
              href={`https://wa.me/${phone.number}?text=${encodeURIComponent(phone.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setShowMenu(false)}
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900">{phone.label}</span>
            </a>
          ))}
        </div>
      )}
      
      {/* Botão principal */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110"
        aria-label="Contatar via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}