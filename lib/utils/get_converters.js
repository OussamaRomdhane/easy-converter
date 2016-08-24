var fs = require('fs');

module.exports = function getConverters() {

    var converters = {};
    var files = fs.readdirSync('lib/ratios/');

    files.forEach(file => {
        var unit = file.replace(/\.js$/, '');
        var json = require('../ratios/' + unit);
        converters[unit] = Object.keys(json);
    });

    return converters;

};
