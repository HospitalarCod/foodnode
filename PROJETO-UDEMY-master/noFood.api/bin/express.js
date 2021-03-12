const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //transformar em json
app.use(bodyParser.urlencoded({extended: false}));

module.express = app; // exportar o nosso express