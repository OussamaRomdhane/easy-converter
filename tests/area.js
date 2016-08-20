var assert = require('chai').assert;
var easyconverter = require('../lib');

var EPSILON = require('./epsilon');

var c = new easyconverter({});

describe('Area converter', function() {
    // Check inch² to meter² conversion (conversion with reference unit)
    describe('3 inch² to meter²', function() {
        it('should return 0.00193548', function() {
            assert.closeTo(c.convert(3, 'in2').to('m2'), 0.00193548, EPSILON);
        });
    });
    // Check meter² to inch² conversion (reverse conversion with reference unit)
    describe('0.00193548 meter² to inch²', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(0.00193548, 'm2').to('in2'), 3, EPSILON);
        });
    });
    // Check kilometer² to mile² conversion (conversion no reference unit)
    describe('28.9 kilometer² to mile²', function() {
        it('should return 11.158352381877', function() {
            assert.closeTo(c.convert(28.9, 'km2').to('mi2'), 11.158352381877, EPSILON);
        });
    });
    // Check mile² to kilometer² conversion (reverse conversion no reference unit)
    describe('15 mile² to kilometer²', function() {
        it('should return 38.84982165504', function() {
            assert.closeTo(c.convert(15, 'mi2').to('km2'), 38.84982165504, EPSILON);
        });
    });
    // Check centimeter² to centimeter² conversion (same unit conversion)
    describe('7 centimeter² to centimeter²', function() {
        it('should return 7', function() {
            assert.closeTo(c.convert(7, 'cm2').to('cm2'), 7, EPSILON);
        });
    });
    // Check meter² to meter² conversion (same unit is also the reference unit)
    describe('3 meter² to meter²', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(3, 'm2').to('m2'), 3, EPSILON);
        });
    });
    // Check zero value conversion
    describe('0 meter² to centimeter²', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'm2').to('cm2'), 0, EPSILON);
        });
    });
    // Check zero value conversion (same unit)
    describe('0 meter² to meter²', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'm2').to('m2'), 0, EPSILON);
        });
    });
});
