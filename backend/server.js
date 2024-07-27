const app = require('./app');
const http = require('http');
const config = require('config');

const port = config.get('port') || 5000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
