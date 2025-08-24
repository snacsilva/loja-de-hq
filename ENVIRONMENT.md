# Configuração de Variáveis de Ambiente

Este projeto usa variáveis de ambiente para configurar a API da Marvel de forma segura.

## 🚀 Configuração Rápida

### 1. Criar arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env` com o seguinte conteúdo:

```bash
# API da Marvel
REACT_APP_MARVEL_API_KEY=sua_chave_publica_aqui
REACT_APP_MARVEL_API_BASE_URL=https://gateway.marvel.com:443/v1/public
REACT_APP_MARVEL_PRIVATE_KEY=sua_chave_privada_aqui
REACT_APP_MARVEL_HASH=sua_hash_aqui
REACT_APP_MARVEL_TS=sua_timestamp_aqui
```

### 2. Obter Chaves da API da Marvel

1. Acesse [https://developer.marvel.com/](https://developer.marvel.com/)
2. Faça login ou crie uma conta
3. Vá para "Get a Key"
4. Obtenha sua chave pública e privada

## 🔑 Variáveis de Ambiente

| Variável | Descrição | Obrigatória | Padrão |
|----------|-----------|-------------|---------|
| `REACT_APP_MARVEL_API_KEY` | Chave pública da API | ✅ Sim | - |
| `REACT_APP_MARVEL_API_BASE_URL` | URL base da API | ❌ Não | `https://gateway.marvel.com:443/v1/public` |
| `REACT_APP_MARVEL_PRIVATE_KEY` | Chave privada para autenticação avançada | ❌ Não | - |
| `REACT_APP_MARVEL_HASH` | Hash de autenticação | ❌ Não | - |
| `REACT_APP_MARVEL_TS` | Timestamp para autenticação | ❌ Não | - |

## 🔐 Autenticação

### Autenticação Básica (Recomendada para desenvolvimento)
```bash
REACT_APP_MARVEL_API_KEY=sua_chave_publica
```

### Autenticação Avançada (Para produção)
```bash
REACT_APP_MARVEL_API_KEY=sua_chave_publica
REACT_APP_MARVEL_PRIVATE_KEY=sua_chave_privada
REACT_APP_MARVEL_HASH=sua_hash
REACT_APP_MARVEL_TS=sua_timestamp
```

## ⚠️ Importante

- **NUNCA** commite o arquivo `.env` no Git
- O arquivo `.env` já está no `.gitignore`
- Use `.env.example` como template
- Reinicie o servidor após alterar as variáveis

## 🚫 Arquivos Bloqueados

Os seguintes arquivos estão bloqueados pelo sistema e não podem ser editados:
- `.env`
- `.gitignore`

## 🔄 Reiniciar Servidor

Após criar/modificar o arquivo `.env`:

```bash
# Parar o servidor
Ctrl + C

# Reiniciar
npm start
```

## 📝 Exemplo de Uso

```typescript
import { environment } from './config/environment';

console.log('API Key:', environment.MARVEL_API_KEY);
console.log('Base URL:', environment.MARVEL_API_BASE_URL);
```

## 🆘 Suporte

Se tiver problemas com a configuração:
1. Verifique se o arquivo `.env` está na raiz do projeto
2. Confirme se as variáveis começam com `REACT_APP_`
3. Reinicie o servidor de desenvolvimento
4. Verifique o console do navegador para erros
