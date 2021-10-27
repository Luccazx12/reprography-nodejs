# Back-End do Projeto de Reprografia

## Apresentação
Bem vindo(a), este projeto é o Trabalho de Conclusão de Curso (TCC) dos desenvolvedores **Daniel Santos Lopes Silva, João Otavio Ferraz Silva, Mario Lucca de Oliveira Padrão, Mauricio Alves Moreira, Oséias Farias de Jesus, Patrick de Almeida Borges e Tiago Soares Caetano**, alunos da **Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle**.

## Status do Projeto: ⚠️ Em Desenvolvimento ⚠️

# Sobre o Projeto
Esta aplicação foi requerida pela coordenadora da escola Senai Suiço-Brasileira, com o intuito de fazer o controle das impressões realizadas pelos diversos setores da escola (professores, funcionários, etc), podendo assim, administrar melhor gastos e desperdícios.

## 📌 Recursos usados neste projeto:


 **<a href="https://code.visualstudio.com/Download">:small_blue_diamond: Visual Studio Code </a>**<img align="center"  height="30" width="30" src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png" style="max-width:100%;"></img> 


**<a href="https://nodejs.org/en/">:small_blue_diamond: NodeJS </a>**<img align="center"  height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;"></img> 


**<a href="https://www.mysql.com">:small_blue_diamond: MySQL </a>**<img align="center"  height="50" width="60" src="https://pngimg.com/uploads/mysql/mysql_PNG29.png" style="max-width:100%;"></img> 


**<a href="https://swagger.io">:small_blue_diamond: Swagger </a>**<img align="center"  height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" style="max-width:100%;"></img> 

### 📃 Funcionalidades do Back-End
O banco de dados MySQL foi hospedado no MariaDB.
Rotas foram protegidas por meio de JWT em conjunto com Swagger.

### Usado durante o desevolvimento
- Nodejs
  * Express 4.17.1 - É um framework para Node.js que fornece recursos mínimos para construção de servidores web.
  * Swagger-autogen 2.11.2
  * Nodemon 2.0.13 - Para restartar o server sempre que houver uma alteração. 
  * Jwt - Para proteger rotas privadas.
  * Bcrypt 5.0.1 - Para Cryptografar as senhas de usuários antes de salvar no banco.
  * Cors 2.8.5 - É um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens
  * Multer 1.4.2 - É um middleware node.js para lidar com multipart, que é usado principalmente para fazer upload de arquivos.
  * Body-Parser 1.19.0 - Analisa os dados codificados JSON, buffer, string e URL enviados usando a solicitação HTTP POST.
  * MariaDB 2.5.4 - É o banco de dados que nos usamos. 
  * PostMan - Teste das funcionalidades da API criada.

#### Database Service

**<a href="https://mariadb.org">:small_blue_diamond: MariaDB</a>**<img align="center"  height="60" width="70" src="https://www.softizy.com/blog/wp-content/uploads/2014/05/mariadb.png" style="max-width:100%;"></img> 
 

## :arrow_forward: Como iniciar a aplicação:

#### Requerimentos

- Node.js (v14.18.1)
- NPM (6.14.15)

### Instalando os pacotes

Execute o comando abaixo para instalar as dependências:
``` bash
npm install
```

### Iniciando o servidor

Execute o comando abaixo para iniciar o Nodejs e conectar ao banco de dados:
``` bash
npm run
```

Aguarde a execução e estará rodando na URL  `http://localhost:3002`
<br>

E assim você terá sua aplicaçãco rodando localmente.

Documentação da API (Swagger) rodando em: `http://localhost:3002/v2/docs/`
