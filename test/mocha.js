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
    synth.noteOn(0, 'C5', 127);
  });
});
