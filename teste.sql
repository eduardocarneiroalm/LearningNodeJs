insert into usuarios(nome, email, idade) values(
    "Roberto Oliveira",
    "13@gmail.com",
    8
);
const sequelize = new Sequelize('test', 'root', '*Edu3107#', {
    host: "localhost",
    dialect: "mysql"
});