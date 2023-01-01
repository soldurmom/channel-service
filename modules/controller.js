const templater = require('./templater');

module.exports = controller = {
    home : (res, params) => {
        res.write(templater.generator('home'));
    },
    about : (res, params) => {
        res.write('wellcome to about-page');
    },
    contacts : (res, params) => {
        res.write('wellcome to contacts-page');
    },
    get : (res, params) => {
        res.write('go to server console');
        console.log(params);
    },
    notFound : (res, params) => {
        res.write('not found');
    }
}