# JZZ-synth-OSC
Fallback MIDI-Out implementation

## Install

[**npm install jzz-synth-osc**](https://www.npmjs.com/package/jzz-synth-osc)  
**bower install jzz-synth-osc**  
or get full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-synth-OSC)

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

##### //...

    JZZ.synth.OSC().noteOn(0, 'C5', 127)
         .wait(500).noteOn(0, 'E5', 127)
         .wait(500).noteOn(0, 'G5', 127);
         .wait(500).noteOff(0, 'C5').noteOff(0, 'E5').noteOff(0, 'G5');

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).
