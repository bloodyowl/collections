var each = require("./each")

module.exports = extend
function extend(source, object){
  each(object, extendCallback, source)
  return source
}

function extendCallback(value, key){
  if(!this) {
    return false
  }
  this[key] = value
}
