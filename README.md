<p align="center">  
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> 
</p>


<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./src/assets/images/logo2.svg" /> 
</h1>


<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

 O Proffy é uma plataforma de estudos online que ajuda pessoas a encontrarem professores online.


Projeto desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/).


---

## ⚙️ Funcionalidades

- [x] Alunos e professores podem se cadastrar na plataforma web enviando:
  - [x] uma imagem como avatar
  - [x] nome  email e whatsapp uma bio matéria senha
  - [x] custo hora/aula disponibilidade no dia da semana  

- [x] Alunos podem buscar por um professor informando:
  - [x] matéria dia e horário
  - [x] entrar em contato com o proffessor através do WhatsApp
- [x] Alunos e professores tem o recurso de login e senha

---

## 😃 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/isnack/proffy-backend.git
# Acesse a pasta do projeto no terminal/cmd
$ cd proffy-backend

# Instale as dependências
$ npm install

# Execute as migrations
$ npm run knex:migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/isnack/nlw2.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw2

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**-   
-   **[Axios](https://github.com/axios/axios)**
-   **[React Paginate](https://github.com/AdeleD/react-paginate)**

> Veja o arquivo  [package.json](https://github.com/isnack/nlw2/blob/master/package.json)


-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[Knexpaginate](https://github.com/felixmosh/knex-paginate)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)**   
-   **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)**

> Veja o arquivo  [package.json](https://github.com/isnack/proffy-backend/blob/master/package.json)



## 🦸 Autor

<a href="https://github.com/isnack">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/10948210?s=460&u=95a587990c47263ed4843e0b773f5f680a4cf39f&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Isnack Souza</b></sub></a> <a href="https://github.com/isnack" title="Isnack">🚀</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Isnack-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://br.linkedin.com/in/isnack-souza-5654a255)](https://br.linkedin.com/in/isnack-souza-5654a255) 
[![Hotmail Badge](https://img.shields.io/badge/-Hotmail-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:isnack_yagami@hotmail.com)](mailto:isnack_yagami@hotmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
