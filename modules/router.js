const fs = require('fs');
const controller = require('./controller');
const callArr = {
    '/home' : 'home',
    '/about' : 'about',
    '/contacts' : 'contacts',
}

module.exports.getResponse = (url, res) => {
        res.setHeader('Content-type','text/html');
        if(url in callArr){
            res.statusCode = 200;
            controller[callArr[url]](res);
        }
        else{
            res.statusCode = 404;
            controller['notFound'](res);
        }
        res.end();
}

module.exports.sendFile = (url, res) => {
    var fileType = url.split('.')[1];
    fs.readFile('public/' + fileType + '/' + url,(error,file) => {
        if(error) controller['notFound'](res);

        res.setHeader('Content-type', 'text/' + fileType);
        res.statusCode = 200;
        res.write(file);
        res.end();
    });
}