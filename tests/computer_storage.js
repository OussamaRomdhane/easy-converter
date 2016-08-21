var assert = require('chai').assert;
var easyconverter = require('../lib');

var EPSILON = require('./epsilon');

var c = new easyconverter({});

describe('Computer storage converter', function() {
    // Check byte to megabit conversion (conversion with reference unit)
    describe('3 byte to megabit', function() {
        it('should return 0.00002288818359375', function() {
            assert.closeTo(c.convert(3, 'B').to('Mb'), 0.00002288818359375, EPSILON);
        });
    });
    // Check megabit to byte conversion (reverse conversion with reference unit)
    describe('0.00002288818359375 megabit to byte', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(0.00002288818359375, 'Mb').to('B'), 3, EPSILON);
        });
    });
    // Check terabit to terabyte conversion (conversion no reference unit)
    describe('28.9 terabit to terabyte', function() {
        it('should return 3.6125', function() {
            assert.closeTo(c.convert(28.9, 'Tb').to('TB'), 3.6125, EPSILON);
        });
    });
    // Check terabyte to terabit conversion (reverse conversion no reference unit)
    describe('15 terabyte to terabit', function() {
        it('should return 120', function() {
            assert.closeTo(c.convert(15, 'TB').to('Tb'), 120, EPSILON);
        });
    });
    // Check nibble to nibble conversion (same unit conversion)
    describe('7 nibble to nibble', function() {
        it('should return 7', function() {
            assert.closeTo(c.convert(7, 'nibble').to('nibble'), 7, EPSILON);
        });
    });
    // Check byte to byte conversion (same unit is also the reference unit)
    describe('3 byte to byte', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(3, 'B').to('B'), 3, EPSILON);
        });
    });
    // Check zero value conversion
    describe('0 bit to byte', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'b').to('B'), 0, EPSILON);
        });
    });
    // Check zero value conversion (same unit)
    describe('0 bit to bit', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'b').to('b'), 0, EPSILON);
        });
    });
});
