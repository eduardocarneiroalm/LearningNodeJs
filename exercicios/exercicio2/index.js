import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8082;

const personagens = [
    {id: 1, nome: "Kanao", respiracao: "Flor"},
    {id: 2, nome: "Tanjiro", respiracao: "Sol"},
    {id: 3, nome: "Tomioka", respiracao: "Água"},
    {id: 4, nome: "Rengoku", respiracao: "Chamas"}
]

app.get("/", (req, res) => {
    res.send("Bem-vindo ao universo de Kimetsu!")
})

app.get("/personagens", (req, res) => {
    res.json(personagens)
})

app.get("/personagens/:id", (req, res) => {
    const id =  parseInt(req.params.id)
    const personagemId = personagens.find(p => p.id == id)

    if(!personagemId) {
        return res.status(404).send("Personagem não encontrado.")
    }

    res.json(personagemId)

})

app.listen(port, () => {
    console.log(`O Servidor está rodando na porta ${port}`)
})