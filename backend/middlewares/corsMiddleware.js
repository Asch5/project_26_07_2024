const cors = require('cors');
const config = require('config');

const corsOptions = {
    origin: config.get('corsOrigin'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);
