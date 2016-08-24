module.exports = function(type, value, inputUnit) {

    var self = this;
    var converter = require('./converters/' + type);

    this.ratio = value * converter[inputUnit];
    this.to = function(outputUnit) {
        return self.ratio / converter[outputUnit];
    }

};
