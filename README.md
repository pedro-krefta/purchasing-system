# 🛒 Purchasing System

Sistema Web de Gerenciamento de Compras desenvolvido para cadastro de usuários, produtos e movimentações de estoque, permitindo controlar entradas e saídas de produtos, consultar relatórios e acompanhar informações do estoque através de uma interface web integrada a uma API REST.

---

# 📖 Sobre o projeto

O Purchasing System foi desenvolvido com o objetivo de facilitar o gerenciamento de produtos e movimentações de estoque.

O sistema permite cadastrar usuários e produtos, registrar movimentações de entrada e saída, atualizar automaticamente o estoque e gerar consultas através de Views do banco de dados.

A aplicação foi desenvolvida utilizando arquitetura cliente-servidor, com frontend em HTML, CSS e JavaScript, backend em Node.js utilizando Express e Sequelize e banco de dados MySQL.

---

# ✨ Funcionalidades

- 👤 Cadastro de usuários
- 📦 Cadastro de produtos
- ✏️ Atualização de produtos
- 🗑 Exclusão de produtos
- 🔍 Consulta de produtos
- 📋 Listagem de produtos
- 📥 Registro de entradas de estoque
- 📤 Registro de saídas de estoque
- 📊 Relatórios de movimentações
- 📈 Visualização de produtos críticos
- 📂 Consulta de totais por categoria

---

# 🛠 Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js
- Sequelize ORM
- CORS

## Banco de Dados

- MySQL

---

# 📂 Estrutura do Projeto

```text
purchasing-system/

├── backend/
│   ├── controller/
│   ├── db/
│   ├── models/
│   ├── criarViews.js
│   ├── sync.js
│   └── index.js
│
├── frontend/
│   ├── css/
│   ├── html/
│   ├── js/
│   └── index.html
│
└── diagramas_uml/
```

---

# 🚀 Como executar

## Clone o projeto

```bash
git clone https://github.com/SEU-USUARIO/purchasing-system.git
```

## Instale as dependências

```bash
cd backend
npm install
```

## Configure o banco de dados

Altere as configurações de conexão no arquivo:

```
backend/db/conn.js
```

informando:

- Host
- Usuário
- Senha
- Banco de dados

## Execute a sincronização

```bash
node sync.js
```

## Crie as Views

```bash
node criarViews.js
```

## Inicie o servidor

```bash
node index.js
```

Abra o frontend através do arquivo:

```
frontend/index.html
```

ou utilize a extensão **Live Server** do Visual Studio Code.

---

# 📊 Relatórios

O sistema possui consultas para:

- Produtos críticos
- Total por categoria
- Histórico de saídas

---

# 📚 Conceitos Aplicados

- Arquitetura Cliente-Servidor
- API REST
- CRUD
- Programação Orientada a Objetos
- Sequelize ORM
- Modelo MVC
- Relacionamento entre tabelas
- Views SQL
- Organização em módulos

---

# 🚀 Melhorias Futuras

- Login e autenticação
- Controle de permissões
- Dashboard com gráficos
- Exportação em PDF
- Exportação em Excel
- Histórico de auditoria
- Responsividade completa
- Paginação das consultas

---

# 👨‍💻 Desenvolvedor

- Pedro Henrique Krefta Duarte

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos e de aprendizagem em Desenvolvimento Web.