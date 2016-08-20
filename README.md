# easy-converter

## The ambitious, easy to use unit converter

easy-converter is a unit converter that will handle weight, length, area (..) conversions.

For now it supports:

- Length (distance)
- Mass (weight)

### Installation:

`npm install --save easy-converter`

### Test:

`npm run test` or `npm test`

### Example:

```
var easyconverter = require('easy-converter');
var c = new easyconverter({});

c.convert(1, 'cm').to('m');
```

#### Supported Units :

Distance

Unit         | Abbreviation in easy-converter
------------ | :----------------------------:
mil          |              mil
inch         |               in
foot         |               ft
yard         |               yd
mile         |               mi
capefoot     |               cp
rod          |               rd
angstrom     |               A
nanometer    |               n
micron       |               µ
millimeter   |               mm
centimeter   |               cm
meter        |               m
kilometer    |               km
light-year   |               ly
light-day    |               ld
light-hour   |               lh
light-minute |               lm
light-second |               ls

Weight

Unit                    | Abbreviation in easy-converter
----------------------- | :----------------------------:
carat (metric)          |               ct
point (metric)          |               pt
dram (avdp)             |              adr
dram (troy)             |              tdr
grain (metric)          |              mgr
grain (troy)            |              tgr
gram                    |               g
hundredweight (long)    |              lhwt
hundredweight (short)   |              shwt
kilogram                |               kg
megagram                |               Mg
milligram               |               mg
ounce (avdp)            |              aoz
ounce (troy)            |              toz
pennyweight             |              dwt
pound (avdp)            |              alb
pound (metric)          |               lb
pound (troy)            |              tlb
slug                    |              slug
stone                   |               st
ton-assay (long)        |              lAT
ton-assay (short)       |              sAT
ton (long)              |              ltn
ton (short)             |              stn
ton-metric              |               t
tonne (U.S. metric ton) |               t
