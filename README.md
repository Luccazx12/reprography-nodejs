# Projeto de Reprografia || Back-end

## Apresentação
Bem vindo(a), este projeto é o Trabalho de Conclusão de Curso (TCC) dos desenvolvedores **Daniel Santos Lopes Silva, João Otavio Ferraz Silva, Mario Lucca de Oliveira Padrão, Mauricio Alves Moreira, Oséias Farias de Jesus, Patrick de Almeida Borges e Tiago Soares Caetano**, alunos da **Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle**.

## Status do Projeto: ⚠️ Em Desenvolvimento ⚠️

# Sobre o Projeto
Esta aplicação foi requerida pela coordenadora da escola Senai Suiço-Brasileira, com o intuito de fazer o controle das impressões realizadas pelos diversos setores da escola (professores, funcionários, etc), podendo assim, administrar melhor gastos e desperdícios.

## 📌 Recursos usados neste projeto:


 **<a href="https://code.visualstudio.com/Download">:small_blue_diamond: Visual Studio Code </a>**<img align="center"  height="30" width="30" src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png" style="max-width:100%;"></img> 


**<a href="https://nodejs.org/en/">:small_blue_diamond: NodeJS </a>**<img align="center"  height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;"></img> 


<!-- **<a href="https://www.mysql.com">:small_blue_diamond: MySQL </a>**<img align="center"  height="50" width="60" src="https://pngimg.com/uploads/mysql/mysql_PNG29.png" style="max-width:100%;"></img>  -->


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

 * Primeiro baixe a pasta de Config zipada, em info_api/  <br>
 * Extraia ela no diretório da API (/src)
 * Altere as informações referente a conexão do banco de dados (db.config.json )<br>
 * Crie o database que inseriu nesse arquivo (exemplo: bdrepro)<br>
 * Altere as informações referentes ao envio de e-mail (mailer.config.json)

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
<br>

# Regras de negócio e classes: 
### USUARIO pode:

- Logar;
- Requisitar uma nova senha caso tenha esquecido (será enviado por e-mail);
- Vizualizar suas informações (Perfil de usuário);
- Atualizar suas informações (somente nome, email, telefone e sua imagem de perfil);
- Atualizar sua senha (inserindo sua senha antiga e a nova);
- Solicitar uma reprografia (será enviado para empresa responsável a solicitação com todas as escolhas desse usuário);
- Vizualizar todos os seus pedidos/solicitações de reprografia
- Enviar um FeedBack sobre a reprografia que solicitou (colocará se Atendeu ou Não Atendeu e suas observações);
- Deletar sua conta.

---------------------------------------------

### Gerente/ADMIN pode:

Todas as permissões de usuário 
+
- Registrar Usuários;
- Vizualizar todos os usuários;
- Vizualizar qualquer outro usuário por Nome, NIF...;
- Atualizar qualquer outro usuário por NIF
- Deletar qualquer outro usuário por NIF;
- Vizualizar todos os Pedidos;
- Vizualizar todos os pedidos por id do pedido, titulo do pedido, pelo nif do usuário que solicitou o pedido...

---------------------------------------------

### Regras de Negócio: 

- Um usuário só poderá solicitar uma reprografia se estiver autenticado (logado);
- Somente um usuário identificado como ADMIN poderá registrar usuários;
- Usuário que não são ADMIN só podem vizualizar as reprografias feitas pela sua própria conta;
- Todos os usuários (sendo ADMIN ou usuário Normal) só podem avaliar os pedidos feitos pela sua própria conta;
- Todos os serviços tem quantidades pré-estabelecidas e quando chegarem a 0, não será possível solicitar a reprografia que contém aquele serviço (exemplo: A3 & Preto e Branco);
- Só serão registrados usuários com NIFS e E-mails diferentes.
- Só poderá ser feito upload de arquivos cuja extensão seja de imagem (.jpeg, .jpg, .png...) para a imagem de perfil de usuário. E para o anexo só serão aceitos arquivos como:  .PDF, .DOCX e .XLSX.
- É preciso de dois Serviços da tabela "servicos" para realizar um pedido. E também é necessário que nenhum desses dois serviços estejam com a sua quantidade esgotada ( <= 0)
- Só poderá ser feito um pedido se a multiplicação do número de copias com o número de páginas inseridos pelo usuário for menor (<) que a quantidade dos dois serviços.
- Um pedido só poderá ser avaliado se ele existir e não tiver sido avaliado ainda.

---------------------------------------------


## :triangular_flag_on_post: Endpoints

Com nossa docmentação feita com o Swagger, conseguimos simplificar o desenvolvimento da noss API, através do conjunto e ferramentas que o próprio Swagger nos disponibiliza, ajudando a projetar e documentrar APIs em escala.

Documentação da API (Swagger) rodando em: `http://localhost:3002/v2/docs/`

![image](https://user-images.githubusercontent.com/71889159/139081009-8728042d-ac41-44a6-8fbf-f367099d3051.png)
