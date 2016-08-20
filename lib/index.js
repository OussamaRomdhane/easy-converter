var converter = require('./converter');

var converters = {
    'distance': [
        'mil', 'in', 'ft', 'yd', 'mi', 'cp',
        'rd', 'A', 'n', 'µ', 'mm', 'cm', 'm',
        'km', 'ly', 'ld', 'lh', 'lm', 'ls'
    ]
};

module.exports = function(options) {

    /*
     * TODO Support for large numbers using big.js https://github.com/MikeMcl/big.js/
     * when options contains big: true
     */

    this.convert = function(value, unit) {
        var c = null;
        Object.keys(converters).forEach(function(key) {
            if (converters[key].indexOf(unit) != -1) {
                return c = new converter(key, value, unit);
            }
        });
        return c;
    }

};
