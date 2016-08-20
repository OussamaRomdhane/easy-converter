var assert = require('chai').assert;
var easyconverter = require('../lib');

var EPSILON = require('./epsilon');

var c = new easyconverter({});

describe('Distance converter', function() {
    // Check miles to meters conversion (conversion with reference unit)
    describe('3 miles to meters', function() {
        it('should return 4828.032', function() {
            assert.closeTo(c.convert(3, 'mi').to('m'), 4828.032, EPSILON);
        });
    });
    // Check meters to miles conversion (reverse conversion with reference unit)
    describe('4828.032 meters to miles', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(4828.032, 'm').to('mi'), 3, EPSILON);
        });
    });
    // Check lightyears to lightdays conversion (conversion no reference unit)
    describe('28.9 lightyears to lightdays', function() {
        it('should return 10555.725', function() {
            assert.closeTo(c.convert(28.9, 'ly').to('ld'), 10555.725, EPSILON);
        });
    });
    // Check lightdays to lightyears conversion (reverse conversion no reference unit)
    describe('15 lightdays to lightyears', function() {
        it('should return 0.041067761806982', function() {
            assert.closeTo(c.convert(15, 'ld').to('ly'), 0.041067761806982, EPSILON);
        });
    });
    // Check centimeter to centimeter conversion (same unit conversion)
    describe('7 centimeters to centimeters', function() {
        it('should return 7', function() {
            assert.closeTo(c.convert(7, 'cm').to('cm'), 7, EPSILON);
        });
    });
    // Check meter to meter conversion (same unit is also the reference unit)
    describe('3 meters to meters', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(3, 'm').to('m'), 3, EPSILON);
        });
    });
    // Check zero value conversion
    describe('0 meters to centimeters', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'm').to('cm'), 0, EPSILON);
        });
    });
    // Check zero value conversion (same unit)
    describe('0 meters to meters', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'm').to('m'), 0, EPSILON);
        });
    });
});
