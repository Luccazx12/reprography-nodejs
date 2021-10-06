# Back-End do projeto de Repografia

## Apresentação
Bem vindo(a), este projeto é o Trabalho de Conclusão de Curso (TCC) dos desenvolvedores **Daniel Santos Lopes Silva, João Otavio Ferraz Silva, Mario Lucca de Oliveira Padrão, Mauricio Alves Moreira, Oséias Farias de Jesus, Patrick de Almeida Borges e Tiago Soares Caetano**, alunos da **Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle**.

⚠️ Projeto em desenvolvimento

# Sobre o Projeto
Esta aplicação foi requerida pela coordenadora da escola Senai Suiço-Brasileira, com o intuito de fazer o controle das impressões realizadas pelos diversos setores da escola (professores, funcionários, etc), podendo assim, administrar melhor gastos e desperdícios.

## 📌 Recursos usados neste projeto:

<img align="center"  height="20" width="30" src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png" style="max-width:100%;"></img> **Visual Studio Code -  (https://code.visualstudio.com/Download)**

<img align="center"  height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;"></img> **NodeJS - (https://nodejs.org/en/)**

<img align="center"  height="50" width="60" src="https://pngimg.com/uploads/mysql/mysql_PNG29.png" style="max-width:100%;"></img> **MySQL - (https://www.mysql.com/downloads/)**

### Funcionalidades do Back-End
O banco de dados MySQL foi hospedado no MariaDB.
Rotas foram protegidas por meio de JWT em conjunto com Swagger.

### Usado durante o desevolvimento
- Nodejs
  * Express ^4.17.1
  * Swagger-autogen ^2.11.2
  * Nodemon ^2.0.13 - Para restartar o server sempre que houver uma alteração.
  * Passport - Para proteger rotas privadas. 
  * Jwt - Para proteger rotas privadas.
  * Bcrypt ^5.0.1 - Para Cryptografar as senhas de usuários antes de salvar no banco.
  * PostMan - Teste das funcionalidades da API criada.

## Como iniciar a aplicação

#### Requerimentos

- Node.js
- NPM

### Instalando os pacotes

Execute o comando abaixo para instalar as dependências:
``` bash
npm install
```

### Iniciando o servidor

Execute o comando abaixo para iniciar o Nodejs e conectar ao banco de dados:
``` bash
npm run server
```

Aguarde a execução e estará rodando na Url  `http://localhost:3000`
<br>

E assim você terá sua aplicaçãco CRUD rodando localmente.



