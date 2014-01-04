var callbacks = require("./_callbacks")

module.exports = function(fn, thisValue, length){
  if(thisValue === void 0) {
    return fn
  }
  if(length in callbacks) {
    return callbacks[length](fn, thisValue)
  }
  return callbacks[callbacks.length - 1](fn, thisValue)
}
