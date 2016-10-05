# API wrapper for [AllowSetForegroundWindow](https://msdn.microsoft.com/en-us/library/windows/desktop/ms632668.aspx)

## Installing

```sh
npm install windows-foreground-love
```

## Using

```javascript
var allowSetForegroundWindow = require('windows-foreground-love').allowSetForegroundWindow
console.log(allowSetForegroundWindow(pid))
console.log(allowSetForegroundWindow()) // all processes will be enabled to set the foreground window
```

## Supported OSes
 * windows

## Developing
 * `npm install -g node-gyp`
 * `node-gyp configure`
 * `node-gyp build`
 * `npm test`

## License
[MIT](LICENSE)
