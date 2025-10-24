# Espaço Festa - Locação de Trajes

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)

Site institucional completo e moderno para **Espaço Festa - Locação de Trajes**, uma loja especializada em locação de vestidos, ternos e smokings em Ribeirão Preto, SP.

## 🎯 Sobre o Projeto

O site foi desenvolvido com foco em **conversão via WhatsApp**, oferecendo uma experiência otimizada para gerar orçamentos e agendamentos rápidos. **IMPORTANTE: A empresa trabalha SOMENTE com locação** (não vendas).

### Público-Alvo
- Noivas, noivos, madrinhas, padrinhos
- Debutantes e formandas(os)
- Mães de noiva(o), damas e pajens
- Convidados de eventos especiais
- Executivos para eventos corporativos

### Objetivos do Site
1. **Gerar orçamentos** via WhatsApp de forma rápida
2. **Exibir catálogo** com filtros avançados
3. **Explicar o processo** de locação completo
4. **Construir confiança** com depoimentos e garantias

## 🚀 Tecnologias Utilizadas

### Core
- **Next.js 14** (App Router) - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas

### Componentes e UI
- **Lucide React** - Ícones modernos
- **React Hook Form + Zod** - Formulários validados
- **shadcn/ui** - Componentes reutilizáveis

### SEO e Performance
- **Next SEO** - Otimização para motores de busca
- **Schema.org** - Dados estruturados (LocalBusiness)
- **Open Graph** - Compartilhamento em redes sociais
- **Lighthouse 95+** - Performance otimizada

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── faq/              # FAQ
│   └── catalogo/         # Catálogo de produtos
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Seções da página
│   └── ui/              # Componentes reutilizáveis
└── lib/
    └── utils.ts          # Utilitários
```

## 🎨 Design e UX

### Paleta de Cores
- **Primary**: Dourado suave (#f0b647)
- **Secondary**: Cinza quente
- **Accent**: Vinho elegante
- **Base**: Off-white/Cinza neutro

### Funcionalidades
- ✅ Design responsivo (mobile-first)
- ✅ Acessibilidade (WCAG 2.2 AA)
- ✅ Animações suaves com Framer Motion
- ✅ WhatsApp integration com deeplinks
- ✅ Catálogo com filtros por categoria, cor e tamanho
- ✅ Depoimentos de clientes reais
- ✅ FAQ completo com 12+ perguntas
- ✅ SEO otimizado para Ribeirão Preto

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório** (se aplicável)
```bash
git clone [url-do-repositorio]
cd espaco-festa-website
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Acesse o site**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start

# Linting
npm run lint

# Type check
npm run type-check
```

## 📱 Integração WhatsApp

O site utiliza deeplinks oficiais do WhatsApp para conversão:

```typescript
const whatsappUrl = `https://wa.me/5516999999999?text=${encodeURIComponent(mensagem)}`
```

### Mensagens Pré-definidas
- Orçamento geral
- Agendamento de prova
- Dúvidas sobre produtos específicos
- Consulta sobre disponibilidade

## 🎯 SEO e Conversão

### Otimizações Implementadas
- **Meta tags** completas para cada página
- **Schema.org LocalBusiness** para SEO local
- **Open Graph** para redes sociais
- **Sitemap.xml** automático
- **URLs amigáveis** (/catalogo/vestidos-longos)
- **Alt texts** descritivos em imagens

### Palavras-chave Foco
- "locação de vestidos Ribeirão Preto"
- "aluguel de trajes Ribeirão Preto"
- "vestidos para madrinhas"
- "ternos para locação"
- "smokings Ribeirão Preto"

## 📊 Performance

### Core Web Vitals
- **LCP**: < 2.5s (otimizado com next/image)
- **FID**: < 100ms (JavaScript otimizado)
- **CLS**: < 0.1 (layout stável)

### Otimizações
- Lazy loading de imagens
- Code splitting automático (Next.js)
- Compressão gzip/brotli
- CSS crítico inline
- Tree shaking de ícones

## 🔧 Configuração de Produção

### Variáveis de Ambiente
Crie um arquivo `.env.local`:

```env
# Contatos (substituir pelos reais)
NEXT_PUBLIC_WHATSAPP=5516999999999
NEXT_PUBLIC_PHONE=551634567890
NEXT_PUBLIC_EMAIL=contato@espacofesta.com.br

# Endereço
NEXT_PUBLIC_ADDRESS=Rua das Flores, 123 - Centro, Ribeirão Preto - SP
NEXT_PUBLIC_HOURS=Seg-Sex: 9h às 18h | Sáb: 9h às 16h

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL=XXXXXXXXXX
```

### Deploy
O projeto está otimizado para deploy em:
- **Vercel** (recomendado)
- **Netlify** 
- **AWS Amplify**
- Qualquer provedor com suporte a Next.js

```bash
# Build otimizado
npm run build

# Export estático (se necessário)
npm run export
```

## 📋 Checklist de Lançamento

### Conteúdo
- [ ] Substituir números de telefone placeholders
- [ ] Adicionar endereço real da loja
- [ ] Inserir horários de funcionamento corretos
- [ ] Configurar Google Maps embed
- [ ] Adicionar fotos reais dos produtos
- [ ] Revisar todos os textos e preços

### Técnico
- [ ] Configurar domínio personalizado
- [ ] Instalar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Adicionar Meta Pixel (Facebook)
- [ ] Testar formulários de contato
- [ ] Configurar redirects se necessário

### SEO
- [ ] Submeter sitemap ao Google
- [ ] Configurar Google My Business
- [ ] Otimizar imagens com alt texts reais
- [ ] Testar dados estruturados
- [ ] Verificar Open Graph em redes sociais

## 🏪 Informações da Empresa

**Nome**: Espaço Festa - Locação de Trajes  
**Slogan**: "O look perfeito, sem comprar."  
**Localização**: Ribeirão Preto - SP  
**Especialidade**: Locação de vestidos, ternos e smokings  
**Diferencial**: Ajustes inclusos, numeração PP ao XG, plus size

### Categorias de Produtos
1. **Vestidos Longos** - Madrinhas, formaturas
2. **Vestidos Curtos** - Eventos casuais
3. **Plus Size** - Numeração especial (46-60)
4. **Debutantes** - Vestidos únicos para 15 anos
5. **Infantil** - Daminhas e pajens (2-14 anos)
6. **Ternos** - Elegância masculina
7. **Smokings** - Trajes de gala
8. **Acessórios** - Sapatos, bolsas, complementos

## 📞 Suporte

Para dúvidas sobre o código ou customizações:

- **Documentação**: Este README
- **Issues**: GitHub Issues (se aplicável)
- **Email**: [seu-email@dominio.com]

---

**Desenvolvido com ❤️ para Espaço Festa - Locação de Trajes**

*Este projeto enfatiza que a empresa trabalha SOMENTE com locação, não vendas. Todos os CTAs direcionam para conversão via WhatsApp.*