module.exports = function(type, value, inputUnit) {

    var self = this;
    var ratio = require('./ratios/' + type);

    this.meters = value * ratio[inputUnit];
    this.to = function(outputUnit) {
        return self.meters / ratio[outputUnit];
    }

};
