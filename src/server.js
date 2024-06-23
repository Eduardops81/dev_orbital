const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const morganBody = require('morgan-body');
const fs = require('fs');
const path = require('path');

const User = require('../models/User');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());

const log = fs.createWriteStream(
    path.join(__dirname, './logs', 'express.log'), { flags: 'a'}
);

morganBody(app, {
    noColors: true,
    stream: log
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/devorbital', (req, res) => {
    res.send(req.body)
})

//CRUD

const DATABASE_USER = process.env.DATABASE_USER
const DATABASE_PASS = encodeURIComponent(process.env.DATABASE_PASS)

mongoose.connect(`mongodb+srv://${DATABASE_USER}:${DATABASE_PASS}@cluster0.ghqr5ik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

app.get('/users', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).send(error);
    }
})

app.post('/users', async (req, res) => {
    const {nome, email, mensagem} = req.body;

    if(!nome || !email || !mensagem){
        res.status(422).send('Você deve enviar nome, email e mensagem');
        return;
    }

    const user = {
        nome,
        email,
        mensagem
    };

    try {
        await User.create(user);
        res.status(201).send('Usuario cadastrado!');

    } catch (error) {
        res.status(500).send(error);
    };

});

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
  
    const {nome, email, mensagem} = req.body;
  
    const user = {
        nome,
        email,
        mensagem
    };

    if(!nome || !email || !mensagem){
        res.status(422).send('Você deve enviar nome, email e mensagem');
        return;
    }
  
    try {
        const updatedUser = await User.updateOne({ _id: id }, user);
  
        if (updatedUser.matchedCount === 0) {
            res.status(422).send('O úsuario não foi localizado!');
            return;
        }
  
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
});