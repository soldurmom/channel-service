import fs from 'fs';

const templates: Record<string, string> = {
    ['cart'] :      "cart.html",
    ['contacts'] :  "contacts.html",
    ['home'] :      "home.html",
    ['product'] :   "product.html",
}

export const generator = (template: string, layout: string = 'layout') => {
    let result = '';
    try{
        layout = layout == 'layout' ? layout : 'templates/' + layout;
        let temp = fs.readFileSync('public/templates/' + templates[template], "utf8");
        let main = fs.readFileSync('public/' + layout + '.html', "utf8");

        result = main.replace(/\{\{content\}\}/, temp);
    } catch(error){
        console.log('error while build page: ' + error);
        result = fs.readFileSync('public/templates/serverError.html', "utf8");
    }
    return result;
}