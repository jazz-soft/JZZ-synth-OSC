# JZZ-synth-OSC
A simple MIDI-Out implementation for the systems with no better option available.  
Mainly, for use as template for your own JZZ-compatible synths.  
For real world applications,
please consider using [JZZ-synth-Tiny](https://www.npmjs.com/package/jzz-synth-tiny) instead.

[![npm](https://img.shields.io/npm/v/jzz-synth-osc.svg)](https://www.npmjs.com/package/jzz-synth-osc)
[![npm](https://img.shields.io/npm/dt/jzz-synth-osc.svg)](https://www.npmjs.com/package/jzz-synth-osc)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/jzz-synth-osc/badge)](https://www.jsdelivr.com/package/npm/jzz-synth-osc)
[![build](https://github.com/jazz-soft/JZZ-synth-OSC/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/JZZ-synth-OSC/actions)
[![Coverage Status](https://coveralls.io/repos/github/jazz-soft/JZZ-synth-OSC/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-synth-OSC?branch=master)

## Install

`npm install jzz-synth-osc`  
or `yarn add jzz-synth-osc`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-synth-OSC)

## Usage

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.synth.OSC.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-synth-osc"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-synth-osc"></script>
//...
```

##### CommonJS

```js
var JZZ = require('jzz');
require('jzz-synth-osc')(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.synth.OSC'], function(JZZ, dummy) {
  // ...
});
```

##### //...

```js
JZZ.synth.OSC().noteOn(0, 'C5', 127)
     .wait(500).noteOn(0, 'E5', 127)
     .wait(500).noteOn(0, 'G5', 127);
     .wait(500).noteOff(0, 'C5').noteOff(0, 'E5').noteOff(0, 'G5');
```

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).
