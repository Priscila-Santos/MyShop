# 🛍️ MyShop . - Loja Virtual em React + TypeScript

Este projeto é uma aplicação de loja virtual simulada desenvolvida com **React** e **TypeScript**, que consome dados da API pública [Fake Store API](https://fakestoreapi.com/). A interface é responsiva e estilizada com **styled-components**, e a lógica de estado global é gerenciada com **Redux**. Os testes automatizados são implementados com **Jest** e **React Testing Library**.

> 🔗 Acesse o projeto em produção: [MyShop.](https://my-shop-zeta-navy.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React + TypeScript
- 🎨 styled-components (com suporte a TS)
- 📦 Redux
- 🔗 API: [FakeStoreAPI](https://fakestoreapi.com/)
- 🧪 Jest + React Testing Library
- 🌐 Deploy via [Vercel](https://vercel.com)

---

## 📦 Funcionalidades

- Listagem de produtos com imagens, nomes e preços.
- Visualização de avaliação com estrelas.
- Adição e remoção de produtos ao carrinho de compras.
- Layout responsivo.
- Integração com API REST.
- Testes unitários de componentes.

---

## 🛠️ Instalação e Execução Local

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```
## 📦 Scripts disponíveis
No diretório do projeto, você pode rodar:

**`yarn start`**
#### Roda a aplicação em modo desenvolvimento.
Acesse http://localhost:3000 no navegador.

**`yarn test`**
#### Inicia o test runner no modo interativo.
Utiliza Jest e React Testing Library.

**`yarn build`**
#### Cria uma versão de produção na pasta build.

**`yarn eject`**
#### Remove a configuração do CRA e expõe toda a configuração (não recomendado se você não precisa de customizações profundas).

## 🧪 Testes
Os testes cobrem componentes principais como ProductCard, Cart, Header, entre outros. Os testes são implementados com Jest e Testing Library.

## 📁 Estrutura do Projeto
```bash
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas principais (Home, Produto)
├── redux/             # Lógica de estado global (slices, store)
├── styles/            # Estilização com styled-components
└── tests/             # Testes unitários
```
## Aprendizado
- Este projeto serviu como prática de:

- Integração com APIs REST externas

- Uso de Redux com TypeScript

- Componentização e boas práticas com React

- Testes automatizados com Jest

- Deploy contínuo com Vercel

