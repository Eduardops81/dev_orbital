const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const morganBody = require('morgan-body');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/devorbital', (req, res) => {
    res.send(req.body)
})