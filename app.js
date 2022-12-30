const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-type','text/html');
    if(req.url == '/home'){
        res.write('hello');
    }
    else{
        res.write('not found');
    }
    res.end();
});

server.listen(3000, (error) => {
    error ? console.log(error) : console.log('listening on 3000');
});
