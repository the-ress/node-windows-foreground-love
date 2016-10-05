#include <node.h>
#include <windows.h>
#include <iostream>

namespace foreground_love {

using v8::Boolean;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::Value;

void AllowSetForegroundWindow(const FunctionCallbackInfo<Value>& args) {
  Isolate * isolate = args.GetIsolate();
  uint32_t pid = args[0]->Uint32Value();

  BOOL result;
  if (pid != 0) {
    result = ::AllowSetForegroundWindow(pid);
  } else {
    // Send foreground love to all processes
    result = ::AllowSetForegroundWindow(ASFW_ANY);
  }

  Local<Boolean> resultBool = Boolean::New(isolate, result);
  args.GetReturnValue().Set(resultBool);
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "allowSetForegroundWindow", AllowSetForegroundWindow);
}

NODE_MODULE(foreground_love, init)

} // namespace foreground_love
