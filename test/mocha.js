const assert = require('assert');
const JZZ = require('jzz');
const version = require('../package.json').version;
global.window = require('web-audio-test');
require('..')(JZZ);

describe('register', function() {
  it('register', function() {
    JZZ.synth.OSC.register();
    JZZ.synth.OSC.register('synth');
  });
  it('version', function() {
    assert.equal(JZZ.synth.OSC.version(), version);
  });
});

describe('web-audio', function() {
  it('create', function() {
    synth = JZZ.synth.OSC();
    synth.program(0, 1);
    synth.noteOn(0, 'C5', 127);
    synth.noteOff(0, 'C5');
    synth.damper(0);
    synth.noteOn(9, 'C5', 127);
    synth.noteOff(9, 'C5', 127);
    synth.damper(0, false);
    synth.allSoundOff(0);
    synth.portamento(0, 'C5');
  });
  it('plug', function() {
    JZZ.synth.OSC.register('synth');
    synth = JZZ().openMidiOut('synth');
    synth = JZZ().openMidiOut('synth');
    synth.plug();
    synth.plug({ context: JZZ.lib.getAudioContext() });
  });
});
