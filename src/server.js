const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const morganBody = require('morgan-body');
const fs = require('fs');
const path = require('path');

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})