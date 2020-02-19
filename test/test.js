var index = require('../index');
var assert = require('assert');

if (process.platform === 'win32') {
  console.log('Sending foreground love to own process...')
  var result = index.allowSetForegroundWindow(process.pid);
  assert.equal(result, true);

  console.log('Sending foreground love to all processes...')
  result = index.allowSetForegroundWindow();
  assert.equal(result, true);
} else {
  // On non-Windows systems, allowSetForegroundWindow should always return false
  console.log('Calling allowSetForegroundWindow with one argument...')
  var result = index.allowSetForegroundWindow(process.pid);
  assert.equal(result, false);

  console.log('Calling allowSetForegroundWindow without arguments...')
  result = index.allowSetForegroundWindow();
  assert.equal(result, false);
}
console.log('Tests passed.')
