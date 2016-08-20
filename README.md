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

#### Supported Units :

Distance
| Unit          | Abbreviation in easy-converter  |
| --------------|:-------------------------------:|
| mil           | mil                             |
| inch          | in                              |
| foot          | ft                              |
| yard          | yd                              |
| mile          | mi                              |
| capefoot      | cp                              |
| rod           | rd                              |
| angstrom      | A                               |
| nanometer     | n                               |
| micron        | µ                               |
| millimeter    | mm                              |
| centimeter    | cm                              |
| meter         | m                               |
| kilometer     | km                              |
| light-year    | ly                              |
| light-day     | ld                              |
| light-hour    | lh                              |
| light-minute  | lm                              |
| light-second  | ls                              |
