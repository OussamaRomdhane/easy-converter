var assert = require('chai').assert;
var easyconverter = require('../lib');

var EPSILON = require('./epsilon');

var c = new easyconverter({});

describe('Distance converter', function() {
    // Check mile to meter conversion (conversion with reference unit)
    describe('3 mile to meter', function() {
        it('should return 4828.032', function() {
            assert.closeTo(c.convert(3, 'mi').to('m'), 4828.032, EPSILON);
        });
    });
    // Check meter to mile conversion (reverse conversion with reference unit)
    describe('4828.032 meter to mile', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(4828.032, 'm').to('mi'), 3, EPSILON);
        });
    });
    // Check lightyear to lightday conversion (conversion no reference unit)
    describe('28.9 lightyear to lightday', function() {
        it('should return 10555.725', function() {
            assert.closeTo(c.convert(28.9, 'ly').to('ld'), 10555.725, EPSILON);
        });
    });
    // Check lightday to lightyear conversion (reverse conversion no reference unit)
    describe('15 lightday to lightyear', function() {
        it('should return 0.041067761806982', function() {
            assert.closeTo(c.convert(15, 'ld').to('ly'), 0.041067761806982, EPSILON);
        });
    });
    // Check centimeter to centimeter conversion (same unit conversion)
    describe('7 centimeter to centimeter', function() {
        it('should return 7', function() {
            assert.closeTo(c.convert(7, 'cm').to('cm'), 7, EPSILON);
        });
    });
    // Check meter to meter conversion (same unit is also the reference unit)
    describe('3 meter to meter', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(3, 'm').to('m'), 3, EPSILON);
        });
    });
    // Check zero value conversion
    describe('0 meter to centimeter', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'm').to('cm'), 0, EPSILON);
        });
    });
    // Check zero value conversion (same unit)
    describe('0 meter to meter', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'm').to('m'), 0, EPSILON);
        });
    });
});
