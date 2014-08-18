var getKeys = require("./getKeys")
var createCallback = require("./createCallback")
var isArrayLike = require("./isArrayLike")

module.exports = function(collection, fn, initialValue, thisValue){
  var index = -1
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
    result = arguments.length > 2 ? initialValue : collection[++index]
    while(++index < length) {
      result = callback(result, collection[index], index, collection)
    }
    return result
  }
  keys = getKeys(collection)
  length = keys.length
  result = arguments.length > 2 ? initialValue : collection[keys[++index]]
  while(++index < length) {
    key = keys[index]
    result = callback(result, collection[key], key, collection)
  }
  return result
}
