const fs = require('fs');
const controller = require('./controller');

const callArr = {
    '/' : 'home',
    '/about' : 'about',
    '/contacts' : 'contacts',
    '/get' : 'get',
}

const getReq = (request) => {
    request = request.split('&');
    var obj = {};
    request.forEach(element => {
        element = element.split('=');
        obj[element[0]] = element[1];
    });

    return obj;
}

module.exports.getResponse = (url, res) => {
        res.setHeader('Content-type','text/html');
        var params = {};
        if(url.includes('?')){
            params = getReq(url.split('?')[1]);
            url = url.split('?')[0];
        }
        if(url in callArr){
            res.statusCode = 200;
            controller[callArr[url]](res, params);
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