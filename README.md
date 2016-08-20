# easy-converter

## The ambitious hopefully universal modular unit converter

easy-converter is a unit converter that will hopefully handle weight, length, area (..) convertions.

For now it supports:

- Length (distance)

### Installation:

`npm install --save easy-converter`

### Test:

`npm run test`

### Example:

```
var easyconverter = require('easy-converter');
var c = new easyconverter({});

c.convert(1, 'cm').to('m');
```
