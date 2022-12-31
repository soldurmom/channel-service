const controller = require('./controller');
const callArr = {
    '/' : 'home',
    '/about' : 'about',
    '/contacts' : 'contacts',
}

module.exports.getResponse = (url, res) => {
        res.setHeader('Content-type','text/html');
        if(url in callArr)
            controller[callArr[url]](res);
        else
            controller['notFound'](res);
        res.end();
}