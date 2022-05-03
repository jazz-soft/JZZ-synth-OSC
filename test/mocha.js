const assert = require('assert');
const WAT = require('web-audio-test');
const JZZ = require('jzz');
const version = require('../package.json').version;
require('..')(JZZ);

global.window = WAT;

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
    global.AudioContext = WAT.AudioContext;
    global.webkitAudioContext = WAT.AudioContext;
    synth = JZZ().openMidiOut('synth');
    synth = JZZ().openMidiOut('synth');
    synth.plug();
    synth.plug({ context: 'dummy' });
    synth.plug({ context: JZZ.lib.getAudioContext() });
  });
});
