var fs = require('fs');

module.exports = function getConverters() {

    var converters = {};
    var files = fs.readdirSync('lib/converters/');

    files.forEach(file => {
        var unit = file.replace(/\.js$/, '');
        var json = require('../converters/' + unit);
        converters[unit] = Object.keys(json);
    });

    return converters;

};
