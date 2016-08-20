var distance = require('./distance');

module.exports = function(options) {

    /*
     * TODO Support for large numbers using big.js https://github.com/MikeMcl/big.js/
     * when options contains big: true
     */

    this.convert = function(value, unit) {

        /*
         * TODO Support for other types of units
         * (other than distance)
         */

        return new distance(value, unit);
    }

};
