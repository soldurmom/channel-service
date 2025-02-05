import { generator } from './templater';

export const controller: Record<string, (res: any, params?: string[]) => void> = {
    ['home'] : (res: any, params?: string[]) => {
        res.write(generator('home'));
    },
    ['about'] : (res: any, params?: string[]) => {
        res.write('wellcome to about-page');
    },
    ['contacts'] : (res: any, params?: string[]) => {
        res.write('wellcome to contacts-page');
    },
    ['get'] : (res: any, params?: string[]) => {
        res.write('go to server console');
        console.log(params);
    },
    ['notFound'] : (res: any, params?: string[]) => {
        res.write('not found');
    }
}