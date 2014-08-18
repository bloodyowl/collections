var extend = require("./extend")
var each = require("./each")
var ARRAY_CLASS = "[object Array]"
var OBJECT_CLASS = "[object Object]"
var _toString = {}.toString
var nativeConcat = [].concat
var clonable = {}

clonable[ARRAY_CLASS] = 1
clonable[OBJECT_CLASS] = 1

function deepCloneCallback(item, key){
  this[key] = clone(item, true)
}

function deepClone(object, type){
  var cloned = type == ARRAY_CLASS ? [] : {}
  each(object, deepCloneCallback, cloned)
  return cloned
}

function clone(any, deep){
  var type = _toString.call(any)
  if(!clonable[type]) {
    // primitive or function
    return any
  }
  if(!deep) {
    if(type == ARRAY_CLASS) {
      return nativeConcat.call(any)
    }
    return extend({}, any)
  }
  return deepClone(any, type)
}

module.exports = clone
