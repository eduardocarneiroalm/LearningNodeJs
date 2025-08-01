import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


// Simulando um "banco de dados"
const livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { id: 2, titulo: "1984", autor: "George Orwell" },
  { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
];

// Página inicial com a lista de livros
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

// Página de detalhes de um livro
app.get('/livro/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(l => l.id === id);

  if (!livro) {
    return res.send(`<h1>Livro não encontrado</h1>`);
  }

  res.send(`
    <h1>${livro.titulo}</h1>
    <p><strong>Autor:</strong> ${livro.autor}</p>
    <a href="/">Voltar</a>
  `);
});

app.listen(8081, () => {
  console.log("servidor funcionando!");
});