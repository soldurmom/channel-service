const router = require('./modules/router');
const http = require('http');

const server = http.createServer((req, res) => {
    router.getResponse(req.url, res);
});

server.listen(3000, (error) => {
    error ? console.log(error) : console.log('listening on 3000');
});