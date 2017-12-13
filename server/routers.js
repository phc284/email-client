const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.use('/', express.static('client'));

module.exports = app;
