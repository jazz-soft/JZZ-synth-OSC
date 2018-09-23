# JZZ-synth-OSC
A simple MIDI-Out implementation for the systems that don't have better options

[![npm](https://img.shields.io/npm/v/jzz-synth-osc.svg)](https://www.npmjs.com/package/jzz-synth-osc)
[![npm](https://img.shields.io/npm/dt/jzz-synth-osc.svg)](https://www.npmjs.com/package/jzz-synth-osc)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/jzz-synth-osc/badge)](https://www.jsdelivr.com/package/npm/jzz-synth-osc)

## Install

`npm install jzz-synth-osc`  
or `bower install jzz-synth-osc`  
or `yarn add jzz-synth-osc`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-synth-OSC)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.synth.OSC.js"></script>
    //...

##### CDN (always the latest version!)

    <script src="https://cdn.jsdelivr.net/npm/jzz"></script>
    <script src="https://cdn.jsdelivr.net/npm/jzz-synth-osc"></script>
    //...

##### CommonJS

    var JZZ = require('jzz');
    require('jzz-synth-osc')(JZZ);
    //...

##### AMD

    require(['JZZ', 'JZZ.synth.OSC'], function(JZZ, dummy) {
      // ...
    });

##### //...

    JZZ.synth.OSC().noteOn(0, 'C5', 127)
         .wait(500).noteOn(0, 'E5', 127)
         .wait(500).noteOn(0, 'G5', 127);
         .wait(500).noteOff(0, 'C5').noteOff(0, 'E5').noteOff(0, 'G5');

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).
