const fs = require('fs');
const controller = require('./controller');

const getParams = {};
const pageArr = {
    '/' : 'home',
    '/about' : 'about',
    '/contacts' : 'contacts',
    '/get' : 'get',
}

const getReq = (request) => {
    request = request.split('&');
    request.forEach(element => {
        element = element.split('=');
        getParams[element[0]] = element[1];
    });
}

module.exports.getResponse = (url, res) => {
        res.setHeader('Content-type','text/html');

        if(url.includes('?')){
            url = url.split('?');
            getReq(url[1]);
            url = url[0];
        }
        if(url in pageArr){
            res.statusCode = 200;
            controller[pageArr[url]](res, getParams);
        }
        else{
            res.statusCode = 404;
            controller['notFound'](res);
        }
        res.end();
}

module.exports.sendFile = (url, res) => {
    var fileType = url.split('.')[1];
    
    fs.readFile('public/' + fileType + '/' + url, (error,file) => {
        if(error){
            this.getResponse(url, res);
            return false;
        }
        res.setHeader('Content-type', 'text/' + fileType);
        res.statusCode = 200;
        res.write(file);
        res.end();
    });
}