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
    var synth = JZZ.synth.OSC();
    var info = synth.info();
    assert.equal(info.type, 'Web Audio');
    assert.equal(info.name, 'JZZ.synth.OSC');
    assert.equal(info.manufacturer, 'virtual');
    assert.equal(info.version, version);
    assert.equal(info.engine, 'none');
    assert.equal(info.sysex, true);
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
    var synth = JZZ().openMidiOut('synth');
    synth = JZZ().openMidiOut('synth');
    synth.plug();
    synth.plug({ context: 'dummy' });
    synth.plug({ context: JZZ.lib.getAudioContext() });
  });
});
