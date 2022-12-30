const router = require('router');
const http = require('http');

const server = http.createServer((req, res) => {
    var respond = new router(req, res);
    respond.getResponse();
});

server.listen(3000, (error) => {
    error ? console.log(error) : console.log('listening on 3000');
});