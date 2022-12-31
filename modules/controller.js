const templater = require('./templater');

module.exports = controller = {
    home : (res) => {
        res.write(templater.generator('layout', 'home'));
        //res.write('wellcome to home-page');
    },
    about : (res) => {
        res.write('wellcome to about-page');
    },
    contacts : (res) => {
        res.write('wellcome to contacts-page');
    },
    notFound : (res) => {
        res.write('not found');
    }
}