var fs = require('fs');

module.exports = function getConverters() {

    var converters = {};
    var files = fs.readdirSync(__dirname + '/../converters/');

    files.forEach(function(file) {
        var unit = file.replace(/\.js$/, '');
        var json = require('../converters/' + unit);
        converters[unit] = Object.keys(json);
    });

    return converters;

};
