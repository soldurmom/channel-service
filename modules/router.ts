import fs from 'fs';
import { controller } from './controller';

const getParams: Record<string, string[]> = { }
const pageArr: Record<string, string> = {
    ['/']: 'home',
}

const getReq = (request: any) => {
    request = request.split('&');
    request.forEach((element: any) => {
        element = element.split('=');
        getParams[element[0]] = element[1];
    });
}

export const getResponse = (url: any, res: any) => {
        res.setHeader('Content-type','text/html');

        if(url.includes('?')){
            url = url.split('?');
            getReq(url[1]);
            url = url[0];
        }
        if(url in pageArr){
            res.statusCode = 200;
            controller[pageArr[url]](res, getParams[pageArr[url]]);
        }
        else{
            res.statusCode = 404;
            controller['notFound'](res);
        }
        res.end();
}

export const sendFile = (url: any, res: any) => {
    let fileType = url.split('.')[1];
    
    fs.readFile('public/static/' + url, (error: any, file: any) => {
        if (error) {
            getResponse(url, res);
            return false;
        }
        res.setHeader('Content-type', 'text/' + fileType);
        res.statusCode = 200;
        res.write(file);
        res.end();
    });
}