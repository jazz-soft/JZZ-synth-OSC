# JZZ-synth-OSC
Fallback MIDI-Out implementation

## Install

[**npm install jzz-input-kbd**](https://www.npmjs.com/package/jzz-input-kbd)

**bower install jzz-input-kbd**

or get full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-input-Kbd)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.synth.OSC.js"></script>
    //...

##### CommonJS

    var JZZ = require('jzz');
    require('jzz-synth-osc')(JZZ);
    //...

##### AMD

    require(['JZZ', 'JZZ.synth.OSC'], function(JZZ, dummy) {
      // ...
    });



## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.

Your questions and comments are welcome [**here**](https://jazz-soft.org).
