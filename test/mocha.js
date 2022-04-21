const assert = require('assert');
const JZZ = require('jzz');
const version = require('../package.json').version;
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
