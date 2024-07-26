const express = require('express');
const bodyParser = require('body-parser');
const sampleRoute = require('./routes/sampleRoute');

const app = express();

app.use(bodyParser.json());
app.use('/api/sample', sampleRoute);

module.exports = app;
