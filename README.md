# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação de agentes inteligentes.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento da aplicação
- **TanStack Query** - Gerenciamento de estado e cache de dados

### Styling & UI
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Class Variance Authority** - Utilitário para variantes de componentes
- **Tailwind Merge** - Merge de classes CSS

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter
- **Ultracite** - Configuração de linting

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes baseados em shadcn/ui
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── app.tsx          # Componente principal
```

## 🛠️ Padrões de Projeto

- **Componentes Reutilizáveis** - Utilizando shadcn/ui para componentes base
- **Roteamento** - React Router para navegação entre páginas
- **Gerenciamento de Estado** - TanStack Query para cache e sincronização
- **TypeScript** - Tipagem estática em todo o projeto
- **CSS-in-JS** - Tailwind CSS com utilitários

## ⚡ Setup e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🎯 Funcionalidades

- Criação de salas para agentes
- Navegação entre páginas
- Interface responsiva e acessível
- Componentes reutilizáveis

---

Desenvolvido com 💜 durante o NLW da Rocketseat 