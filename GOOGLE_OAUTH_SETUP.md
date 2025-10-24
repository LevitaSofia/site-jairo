# 🔧 Configuração Google OAuth - Passo a Passo

## ⚠️ PROBLEMA ATUAL
O erro `invalid_client (Unauthorized)` indica que as URLs no Google Cloud Console não estão configuradas corretamente.

## 📋 SOLUÇÃO - Configure no Google Cloud Console:

### 1. Acesse o Google Cloud Console
- URL: https://console.cloud.google.com
- Faça login com sua conta Google

### 2. Selecione o Projeto
- Se não tem projeto, crie um novo
- Se já tem, selecione o projeto existente

### 3. Ative a API do Google+
- Vá em: **APIs & Services** > **Library**
- Pesquise: "Google+ API" ou "People API"
- Clique em **ENABLE**

### 4. Configure as Credenciais OAuth
- Vá em: **APIs & Services** > **Credentials**
- Clique em: **+ CREATE CREDENTIALS** > **OAuth client ID**
- Tipo: **Web application**
- Nome: **Espaço Festa Website**

### 5. Configure as URLs (CRÍTICO!)

**Authorized JavaScript origins:**
```
http://localhost:3001
```

**Authorized redirect URIs:**
```
http://localhost:3001/api/auth/callback/google
```

### 6. Salve e Copie as Credenciais
- Após criar, copie:
  - **Client ID**: 320245281973-jrm5a4rhl9dplntcu5rkoaumfsihvud7.apps.googleusercontent.com
  - **Client Secret**: GOCSPX-iWxEOAt1qQ_bBYKGYsjyc4fbxO

### 7. Verifique se as URLs estão EXATAMENTE assim:
- ✅ Origins: `http://localhost:3001` (SEM barra no final)
- ✅ Redirect: `http://localhost:3001/api/auth/callback/google`
- ❌ NÃO use: `localhost:3000`, `https://`, ou qualquer outra variação

## 🔍 VERIFICAÇÃO
Após configurar, espere alguns minutos (pode demorar até 5 minutos para propagar) e teste novamente.

## 📞 CONTATOS PARA SUPORTE
Se precisar de ajuda com o Google Cloud Console:
- Google Cloud Support
- Documentação: https://developers.google.com/identity/protocols/oauth2