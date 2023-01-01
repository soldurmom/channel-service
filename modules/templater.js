const fs = require('fs');

const templates = {
    cart : "cart.html",
    contacts : "contacts.html",
    home : "home.html",
    product : "product.html",
}

module.exports.generator = (template, layout = 'layout') => {
    layout = layout == 'layout' ? layout : 'templates/' + layout;
    var temp = fs.readFileSync('public/templates/' + templates[template], "utf8");
    var main = fs.readFileSync('public/' + layout + '.html', "utf8");

    return main.replace(/\{\{content\}\}/, temp);
}