var index = require('../index');

console.log('Sending foreground love to own process...')
var result = index.allowSetForegroundWindow(process.pid);
console.log(result);

console.log('Sending foreground love to all processes...')
result = index.allowSetForegroundWindow();
console.log(result);
