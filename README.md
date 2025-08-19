# Loja de HQ

## Single Page Application de uma loja de quadrinhos utilizando a API da Marvel para todos os consumos de dados.

App consiste em:
1. Uma tela de lista de quadrinhos de forma paginada ou infinite loading;
2. Uma tela de detalhe do quadrinho; e
3. Uma funcionalidade de checkout dos quadrinhos (_ex: adicionar itens ao carrinho e fazer checkout_).

Os dados dos quadrinhos serão recuperados da API: [https://developer.marvel.com](https://developer.marvel.com)

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **React Router** - Roteamento para aplicações React
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Estilização moderna e responsiva

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Chave da API da Marvel

## 🔑 Configuração da API

**IMPORTANTE:** Antes de executar o projeto, você precisa configurar suas chaves da API da Marvel.

### 1. Obter Chaves da API
1. Acesse [https://developer.marvel.com/](https://developer.marvel.com/)
2. Faça login ou crie uma conta
3. Vá para "Get a Key"
4. Obtenha sua chave pública

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```bash
REACT_APP_MARVEL_API_KEY=sua_chave_publica_aqui
```

**📖 Para mais detalhes sobre configuração, veja [ENVIRONMENT.md](ENVIRONMENT.md)**

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd loja-de-hq
```

2. Configure suas chaves da API (veja seção acima)

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🏗️ Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejetar configurações do Create React App

## 🏛️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   └── Comics.tsx      # Componente principal de quadrinhos
├── config/             # Configurações de ambiente
│   └── environment.ts  # Variáveis de ambiente da API
├── hooks/              # Hooks personalizados
│   └── useComics.ts    # Hook para gerenciar estado dos comics
├── services/           # Serviços de API
│   ├── base.ts         # Configuração base do Axios
│   └── comics.ts       # Serviços específicos de quadrinhos
├── types/              # Definições de tipos TypeScript
│   └── index.ts        # Interfaces e tipos
├── App.tsx             # Componente principal da aplicação
├── index.tsx           # Ponto de entrada da aplicação
└── index.css           # Estilos globais
```

## 🔌 API

A aplicação consome a API da Marvel para obter dados sobre quadrinhos, personagens, criadores e eventos.

**⚠️ Lembre-se de configurar suas chaves da API antes de executar!**

## 🎨 Funcionalidades

- ✅ Listagem de quadrinhos da Marvel
- ✅ Navegação responsiva com drawer lateral
- ✅ Painel de favoritos
- ✅ Interface moderna e intuitiva
- ✅ Tratamento de erros
- ✅ Estados de carregamento
- ✅ Configuração segura de chaves da API

## 🔄 Migração de Vue para React

Este projeto foi convertido de Vue.js para React com TypeScript, mantendo:

- A mesma funcionalidade e interface
- Integração com a API da Marvel
- Estrutura de dados similar
- Experiência do usuário consistente

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em dispositivos móveis e desktop.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Configure suas chaves da API (veja seção de configuração)
4. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
