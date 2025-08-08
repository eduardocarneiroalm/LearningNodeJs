const express = require('express');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const Post = require('./models/Post')

const app = express();
const port = 8083;

//config
    //Template Engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.set('views',__dirname + '/views'); 

    //Body parser

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//rotas
app.get('/', (req, res) => {
    Post.findAll().then((posts) => {
        res.render('home', {posts: posts})
    })
    
})

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        res.send('Houve um erro: ' + error)
    })
})

app.listen(port, () => {
    console.log("Servidor está funcionando na porta:", port);
});