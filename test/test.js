var index = require('../index');
var assert = require('assert');

console.log('Sending foreground love to own process...')
var result = index.allowSetForegroundWindow(process.pid);
assert.equal(result, true);

console.log('Sending foreground love to all processes...')
result = index.allowSetForegroundWindow();
assert.equal(result, true);

console.log('Tests passed.')
