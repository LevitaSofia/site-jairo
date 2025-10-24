'use client'

import * as React from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  className?: string
  phone?: string
  message?: string
}

export function WhatsAppButton({ 
  className,
  phone = "5516999999999", // Placeholder do WhatsApp
  message = "Olá! Gostaria de saber mais sobre a locação de trajes."
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110",
        className
      )}
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}