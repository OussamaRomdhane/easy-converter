# easy-converter

[![Build Status](https://travis-ci.org/OussamaRomdhane/easy-converter.svg?branch=master)](https://travis-ci.org/OussamaRomdhane/easy-converter) [![npm version](https://badge.fury.io/js/easy-converter.svg)](https://badge.fury.io/js/easy-converter) [![license](https://img.shields.io/badge/license-ISC-green.svg)](https://github.com/OussamaRomdhane/easy-converter/blob/master/LICENSE)

[![Windows](https://img.shields.io/badge/windows-passing-brightgreen.svg](https://travis-ci.org/OussamaRomdhane/easy-converter) [![Linux](https://img.shields.io/badge/linux-passing-brightgreen.svg)](https://travis-ci.org/OussamaRomdhane/easy-converter) [![OSX](https://img.shields.io/badge/osx-passing-brightgreen.svg)](https://ci.appveyor.com/project/OussamaRomdhane/easy-converter) [![nodejs minimum version](https://img.shields.io/badge/nodejs-0.10-brightgreen.svg)]()

[![NPM](https://nodei.co/npm/easy-converter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easy-converter/)

## The ambitious, easy to use unit converter

- [Introduction](#introduction "Introduction")
- [Installation](#installation "Installation")
- [Test](#test "Test")
- [Example](#example "Example")
- [Supported units](#supported-units- "Supported units")

  - [Distance](#distance "Distance")
  - [Weight](#weight "Weight")
  - [Area](#area "Area")
  - [Computer storage](#computer-storage "Computer storage")

### Introduction

easy-converter is a unit converter that will handle weight, length, area (..) conversions.

For now it supports:

- Length (distance)
- Mass (weight)
- Area
- Computer storage

### Installation:

`npm install --save easy-converter`

### Test:

`npm run test`

or

`npm test`

### Example:

```
var easyconverter = require('easy-converter');
var c = new easyconverter();

c.convert(1, 'cm').to('m');
```

The converter will return `NaN` in case of an unauthorized conversion.

```
c.convert(1, 'cm').to('b');
// => NaN
```

### Supported units :

#### Distance

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

#### Weight

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

#### Area

Unit              | Abbreviation in easy-converter
----------------- | :----------------------------:
square inch       |              in2
square foot       |              ft2
square yard       |              yd2
square mile       |              mi2
acre              |               ac
hectare           |               ha
square millimeter |              mm2
square centimeter |              cm2
square meter      |               m2
square kilometer  |              km2

#### Computer storage

Unit      | Abbreviation in easy-converter
--------- | :----------------------------:
bit       |               b
kilobit   |               kb
megabit   |               Mb
gigabit   |               Gb
terabit   |               Tb
petabit   |               Pb
exabit    |               Eb
zettabit  |               Zb
yottabit  |               Yb
nibble    |             nibble
byte      |               B
kilobyte  |               kB
megabyte  |               MB
gigabyte  |               GB
terabyte  |               TB
petabyte  |               PB
exabyte   |               EB
zettabyte |               ZB
yottabyte |               YB
