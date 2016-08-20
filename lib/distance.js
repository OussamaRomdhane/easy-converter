// The ratio of 1 unit in meters
var meterRatio = {
    "mil": 0.0000254,
    "in": 0.0254,
    "ft": 0.3048,
    "yd": 0.9144,
    "mi": 1609.344,
    "cp": 0.314856,
    "rd": 5.0292,
    "A": 1e-10,
    "n": 0.000000001,
    "µ": 0.000001,
    "mm": 0.001,
    "cm": 0.01,
    "m": 1,
    "km": 1000,
    "ly": 9460730472580800,
    "ld": 25902068371200,
    "lh": 1079252848800,
    "lm": 17987547480,
    "ls": 299792458
};

module.exports = function(value, inputUnit) {
    var self = this;
    // Get the ration of value of the input unit (per example 2 cm) in meters
    this.meters = value * meterRatio[inputUnit];
    // Convert the value of the input unit to the output unit
    this.to = function(outputUnit) {
        return self.meters / meterRatio[outputUnit];
    }
};
