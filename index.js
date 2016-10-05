var foregroundLove = null;
var tried = false;

exports.allowSetForegroundWindow = function(pid) {
  if (!tried) {
    tried = true;
    try {
      foregroundLove = require('./build/Release/foreground-love');
    } catch(err) {
      console.error(err);
    }
  }

  if (!foregroundLove) {
    return false;
  }

  var r = 0;
  try {
    r = foregroundLove.allowSetForegroundWindow(pid);
  } catch(err) {
    console.error(err);
  }
  return r;
};
