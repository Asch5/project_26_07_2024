const express = require('express');
const bodyParser = require('body-parser');
const sampleRoute = require('./routes/sampleRoute');
const corsMiddleware = require('./middlewares/corsMiddleware');

const app = express();

app.use(corsMiddleware);

app.use(bodyParser.json());
app.use('/api', sampleRoute);

module.exports = app;
