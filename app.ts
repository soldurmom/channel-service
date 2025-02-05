import { sendFile, getResponse } from './modules/router';
import { createServer } from 'http';

const server = createServer((req: any, res: any) => {
    if(req.url.includes('.'))
        sendFile(req.url, res);
    else
        getResponse(req.url, res);
});

server.listen(3000, (error?: any) => {
    error ? console.log(error) : console.log('listening on http://localhost:3000');
});
