# Basic CRUD RESTful API built with JavaScript, Sequelize and PostgreSQL ⚙

[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) [![Node.JS](https://img.shields.io/badge/-Node.JS-339933?logo=node.js&logoColor=white)](https://nodejs.org/en/) [![Sequelize](https://img.shields.io/badge/-Sequelize-03AFEF?logo=sequelize&logoColor=black)](https://sequelize.org/master/)

Simple CRUD of Users, Addresses and Techs applying the techs JavaScript, Sequelize, Node.JS and PostgreSQL.


## After cloning the repository

Execute the following command to install all of the project's dependencys:

```bash
yarn
```

## Creating the DB with Docker 🐳

Execute the following commando on your terminal to create a new image with the PostgreSQL DB:

```bash
docker-compose -f docker-compose.yml up -d
```

> After the execution an image called a execução a imagem backend-sequelize-nodejs will be generated on your Docker 

## Creating the basic structure of the DB 🐘

Para criar as tabelas no banco de dados, execute o seguinte comando:

```bash
yarn sequelize db:migrate
```

## Structure of the DB 🗃

![DB UML](.github/media/UML.png)


# Executing the project ▶

To execute the project, run the following command on your terminal:

```bash
yarn dev
```

> If things are running smoothily you should get a message: Back-end started on port 3333! 🚀

# Access the documentation with all the API endpoints 🐱‍🚀
[![Postman](https://img.shields.io/badge/-POSTMAN-FF6C37?logo=postman&logoColor=white)](https://tinyurl.com/backend-api-sequelize)