var assert = require('chai').assert;
var easyconverter = require('../lib');

var EPSILON = require('./epsilon');

var c = new easyconverter({});

describe('Weight converter', function() {
    // Check slug to gram conversion (conversion with reference unit)
    describe('3 slug to gram', function() {
        it('should return 43781.709', function() {
            assert.closeTo(c.convert(3, 'slug').to('g'), 43781.709, EPSILON);
        });
    });
    // Check gram to slug conversion (reverse conversion with reference unit)
    describe('43781.709 gram to slug', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(43781.709, 'g').to('slug'), 3, EPSILON);
        });
    });
    // Check long ton to short ton conversion (conversion no reference unit)
    describe('28.9 long ton to short ton', function() {
        it('should return 32.368', function() {
            assert.closeTo(c.convert(28.9, 'ltn').to('stn'), 32.368, EPSILON);
        });
    });
    // Check short ton to long ton conversion (reverse conversion no reference unit)
    describe('15 short ton to long ton', function() {
        it('should return 13.392857142857', function() {
            assert.closeTo(c.convert(15, 'stn').to('ltn'), 13.392857142857, EPSILON);
        });
    });
    // Check centimeter to centimeter conversion (same unit conversion)
    describe('7 metric pound to metric pound', function() {
        it('should return 7', function() {
            assert.closeTo(c.convert(7, 'lb').to('lb'), 7, EPSILON);
        });
    });
    // Check meter to meter conversion (same unit is also the reference unit)
    describe('3 gram to gram', function() {
        it('should return 3', function() {
            assert.closeTo(c.convert(3, 'g').to('g'), 3, EPSILON);
        });
    });
    // Check zero value conversion
    describe('0 gram to troy ounce', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'g').to('toz'), 0, EPSILON);
        });
    });
    // Check zero value conversion (same unit)
    describe('0 gram to gram', function() {
        it('should return 0', function() {
            assert.closeTo(c.convert(0, 'g').to('g'), 0, EPSILON);
        });
    });
});
