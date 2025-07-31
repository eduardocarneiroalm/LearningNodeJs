//forma tradicional de se utilizar o protocolo http

// import http from "http";
import express from "express";

// const server = http.createServer((req, res) => {
//     res.end("Olá, sou do servidor!")
// }).listen(8080) // serve para informar em qual porta de rede quer abrir o servidor

// console.log("Servidor está rodando...")

const app = express();

app.get("/", (req, res) => {
    res.send("Seja bem-vindo ao meu app!") // .send - vai enviar uma mensagem na rota, uma resposta(RESPONSE)
});

app.get("/sobre", (req, res) => {// req - é o que você recebe; res - objeto que você manda mensagem para o cliente.
    res.send("minha pagina sobre");
})

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog")
})

app.get("/ola/:nome/:cargo", (req, res) => { ///:nome/:cargo - isso é um parametro. Nele, eu posso colocar qualquer nome e cargo, não precisa colocar nome e cargo
    //você coloca desse jeito: http://localhost:8080/ola/carlos/dev - por exemplo
    res.send("<h1>Olá " + req.params.nome+ "</h1>"); // req - responsavel de receber dados de uma requisição

})

app.listen(8080, () => {
    console.log("Servidor rodando na url http://localhost:8080")
});