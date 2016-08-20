var assert = require('chai').assert;
var easyconverter = require('../lib');

var c = new easyconverter({});

describe('Distance converter', function() {
    // Check miles to meters convertion (convertion with reference unit)
    describe('3 miles to meters', function() {
        it('should return 4828.032', function() {
            assert.equal(4828.032, c.convert(3, 'mi').to('m'));
        });
    });
    // Check meters to miles convertion (reverse convertion with reference unit)
    describe('4828.032 meters to miles', function() {
        it('should return 3', function() {
            assert.equal(3, c.convert(4828.032, 'm').to('mi'));
        });
    });
    // Check lightyears to lightdays convertion (convertion no reference unit)
    describe('28.9 lightyears to lightdays', function() {
        it('should return 10555.725', function() {
            assert.closeTo(c.convert(28.9, 'ly').to('ld'), 10555.725, 0.000000000000001);
        });
    });
    // Check lightdays to lightyears convertion (reverse convertion no reference unit)
    describe('15 lightdays to lightyears', function() {
        it('should return 0.041067761806982', function() {
            assert.closeTo(c.convert(15, 'ld').to('ly'), 0.041067761806982, 0.000000000000001);
        });
    });
    // Check centimeter to centimeter convertion (same unit convertion)
    describe('7 centimeters to centimeters', function() {
        it('should return 7', function() {
            assert.closeTo(c.convert(7, 'cm').to('cm'), 7, 0.000000000000001);
        });
    });
    // Check meter to meter convertion (same unit is also the reference unit)
    describe('3 meters to meters', function() {
        it('should return 3', function() {
            assert.equal(3, c.convert(3, 'm').to('m'));
        });
    });
});
