const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '*Edu3107#', {
    host: "localhost",
    dialect: "mysql"
});

const Postagem = sequelize.define('postagens', { // postagem fica azul pq ele é um modelo. define - define uma tabela
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//inserção de dados
Postagem.create({
    titulo: "Qualquer titulo",
    conteudo: "conteudo qualquer"
})

const Usuario = sequelize.define('usuarios', {// criando tabela
    nome: {
        type: Sequelize.STRING
    },
    sobrenome : {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Carlos",
    sobrenome: "Eduardo",
    idade: 17,
    email: "carlos@gmail.com"
})
//Usuario.sync({force: true})