const fs = require('fs');

const templates = {
    cart : "cart.html",
    contacts : "contacts.html",
    home : "home.html",
    product : "product.html",
}

module.exports.generator = (template, layout = 'layout') => {
    var result = '';
    try{
        layout = layout == 'layout' ? layout : 'templates/' + layout;
        var temp = fs.readFileSync('public/templates/' + templates[template], "utf8");
        var main = fs.readFileSync('public/' + layout + '.html', "utf8");

        result = main.replace(/\{\{content\}\}/, temp);
    } catch(error){
        console.log('error while build page: ' + error);
        result = fs.readFileSync('public/templates/serverError.html', "utf8");
    }
    return result;
}