var converter = require('./converter');

var converters = {
    'distance': [
        'mil', 'in', 'ft', 'yd', 'mi', 'cp',
        'rd', 'A', 'n', 'µ', 'mm', 'cm', 'm',
        'km', 'ly', 'ld', 'lh', 'lm', 'ls'
    ],
    'weight': [
        'ct', 'pt', 'adr', 'tdr', 'mgr', 'tgr',
        'g', 'lhwt', 'shwt', 'kg', 'Mg', 'mg', 'aoz',
        'toz', 'dwt', 'alb', 'lb', 'tlb', 'slug',
        'st', 'lAT', 'sAT', 'ltn', 'stn', 't'
    ],
    'area': [
        'in2', 'ft2', 'yd2', 'mi2', 'ac', 'ha',
        'mm2', 'cm2', 'm2', 'km2'
    ],
    'computer_storage': [
        'b', 'kb', 'Mb', 'Gb', 'Tb', 'Pb',
        'Eb', 'Zb', 'Yb', 'nibble', 'kB',
        'MB', 'GB', 'TB', 'PB', 'EB', 'ZB',
        'YB'
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
