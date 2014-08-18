var getKeys = require("./getKeys")
var createCallback = require("./createCallback")
var isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, initialValue, thisValue){
  var length
  var keys
  var key
  var callback = createCallback(fn, thisValue, 4)
  var result
  if(!collection) {
    return null
  }
  if(isArrayLike(collection)) {
    length = collection.length
    result = arguments.length > 2 ? initialValue : collection[--length]
    while(--length > -1) {
      result = callback(result, collection[length], length, collection)
    }
    return result
  }
  keys = getKeys(collection)
  length = keys.length
  result = arguments.length > 2 ? initialValue : collection[keys[--length]]
  while(--length > -1) {
    key = keys[length]
    result = callback(result, collection[key], key, collection)
  }
  return result
}
