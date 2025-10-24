# Deploy Instructions

Este projeto pode ser facilmente deployado em várias plataformas:

## 🚀 Deploy na Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente que é um projeto Next.js
3. Configure as variáveis de ambiente (baseado no .env.example)
4. Deploy automático!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/LevitaSofia/site-jairo)

## 📦 Deploy na Netlify

1. Conecte seu repositório ao Netlify
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Adicione as variáveis de ambiente
4. Deploy!

## ⚙️ Variáveis de Ambiente Obrigatórias

Copie o arquivo `.env.example` para `.env.local` e preencha:

```env
NEXT_PUBLIC_WHATSAPP=5516999999999
NEXT_PUBLIC_PHONE=551634567890
NEXT_PUBLIC_EMAIL=contato@espacofesta.com.br
NEXT_PUBLIC_ADDRESS="Rua das Flores, 123 - Centro"
# ... (ver .env.example para lista completa)
```

## 🌍 Domínio Personalizado

Após o deploy, configure seu domínio personalizado:
- `espacofesta.com.br`
- `www.espacofesta.com.br`

## 📈 Pós-Deploy

1. Configurar Google Analytics
2. Adicionar Google Search Console
3. Configurar Facebook Pixel (opcional)
4. Testar todos os links do WhatsApp
5. Verificar performance no PageSpeed Insights